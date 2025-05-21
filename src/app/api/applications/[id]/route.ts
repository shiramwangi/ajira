import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/db'

export async function PATCH(
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

    const { status } = await req.json()

    const application = await prisma.application.findUnique({
      where: { id: params.id },
      include: {
        jobListing: true,
      },
    })

    if (!application) {
      return NextResponse.json(
        { error: 'Application not found' },
        { status: 404 }
      )
    }

    if (application.jobListing.employerId !== userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const updatedApplication = await prisma.application.update({
      where: { id: params.id },
      data: { status },
    })

    return NextResponse.json(updatedApplication)
  } catch (error) {
    console.error('Error updating application:', error)
    return NextResponse.json(
      { error: 'Failed to update application' },
      { status: 500 }
    )
  }
} 