import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { pusherServer } from '@/lib/pusher'

export async function POST(
  req: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { content } = await req.json()

    const chat = await prisma.chat.findUnique({
      where: { id: params.chatId },
    })

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      )
    }

    if (chat.employerId !== userId && chat.applicantId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const message = await prisma.message.create({
      data: {
        content,
        chatId: params.chatId,
        senderId: userId,
      },
      include: {
        sender: {
          include: {
            profile: true,
          },
        },
      },
    })

    // Update chat's updatedAt
    await prisma.chat.update({
      where: { id: params.chatId },
      data: { updatedAt: new Date() },
    })

    // Trigger Pusher event
    await pusherServer.trigger(`chat-${params.chatId}`, 'new-message', message)

    return NextResponse.json(message)
  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}

export async function GET(
  req: Request,
  { params }: { params: { chatId: string } }
) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const chat = await prisma.chat.findUnique({
      where: { id: params.chatId },
    })

    if (!chat) {
      return NextResponse.json(
        { error: 'Chat not found' },
        { status: 404 }
      )
    }

    if (chat.employerId !== userId && chat.applicantId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const messages = await prisma.message.findMany({
      where: { chatId: params.chatId },
      include: {
        sender: {
          include: {
            profile: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    })

    // Mark unread messages as read
    await prisma.message.updateMany({
      where: {
        chatId: params.chatId,
        senderId: { not: userId },
        read: false,
      },
      data: { read: true },
    })

    return NextResponse.json(messages)
  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    )
  }
} 