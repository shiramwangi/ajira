import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs'
import { prisma } from '@/lib/db'
import { generateCoverLetter } from '@/lib/ai'

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    if (!userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { jobId } = await req.json()

    // Fetch job and profile data
    const [job, profile] = await Promise.all([
      prisma.jobListing.findUnique({
        where: { id: jobId },
      }),
      prisma.profile.findUnique({
        where: { userId },
      }),
    ])

    if (!job || !profile) {
      return NextResponse.json(
        { error: 'Job or profile not found' },
        { status: 404 }
      )
    }

    // Generate cover letter
    const coverLetter = await generateCoverLetter({
      job,
      profile: {
        title: profile.title || '',
        bio: profile.bio || '',
        skills: profile.skills,
        experience: profile.experience as any[],
        education: profile.education as any[],
      },
    })

    // Create application with generated cover letter
    const application = await prisma.application.create({
      data: {
        jobListingId: jobId,
        applicantId: userId,
        coverLetter,
        status: 'PENDING',
      },
    })

    return NextResponse.json(application)
  } catch (error) {
    console.error('Error generating cover letter:', error)
    return NextResponse.json(
      { error: 'Failed to generate cover letter' },
      { status: 500 }
    )
  }
} 