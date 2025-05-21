import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const data = await req.json()
    const job = await prisma.jobListing.create({
      data: {
        ...data,
        employerId: userId,
      },
    })

    return NextResponse.json(job)
  } catch (error) {
    console.error('Error creating job listing:', error)
    return NextResponse.json(
      { error: 'Failed to create job listing' },
      { status: 500 }
    )
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const employerId = searchParams.get('employerId')

    const jobs = await prisma.jobListing.findMany({
      where: employerId ? { employerId } : undefined,
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

    return NextResponse.json(jobs)
  } catch (error) {
    console.error('Error fetching job listings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch job listings' },
      { status: 500 }
    )
  }
} 