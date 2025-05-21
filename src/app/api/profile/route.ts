import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const body = await req.json()
    const { title, bio, skills, experience, education } = body

    // Create or update user profile
    const profile = await prisma.profile.upsert({
      where: {
        userId,
      },
      update: {
        title,
        bio,
        skills,
        experience,
        education,
      },
      create: {
        userId,
        title,
        bio,
        skills,
        experience,
        education,
      },
    })

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error updating profile:', error)
    return NextResponse.json(
      { error: 'Failed to update profile' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const profile = await prisma.profile.findUnique({
      where: {
        userId,
      },
    })

    if (!profile) {
      return NextResponse.json(
        { error: 'Profile not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(profile)
  } catch (error) {
    console.error('Error fetching profile:', error)
    return NextResponse.json(
      { error: 'Failed to fetch profile' },
      { status: 500 }
    )
  }
} 