import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/db'

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const job = await prisma.jobListing.findUnique({
      where: { id: params.id },
      include: {
        applications: {
          include: {
            applicant: {
              include: {
                profile: true,
              },
            },
          },
        },
      },
    })

    if (!job) {
      return NextResponse.json(
        { error: 'Job listing not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error fetching job listing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch job listing' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const job = await prisma.jobListing.findUnique({
      where: { id: params.id },
    })

    if (!job) {
      return NextResponse.json(
        { error: 'Job listing not found' },
        { status: 404 }
      )
    }

    if (job.employerId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    await prisma.jobListing.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting job listing:', error)
    return NextResponse.json(
      { error: 'Failed to delete job listing' },
      { status: 500 }
    )
  }
} 