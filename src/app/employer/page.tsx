import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { JobPostingForm } from '@/components/employer/JobPostingForm'
import { JobList } from '@/components/employer/JobList'
import { ApplicationList } from '@/components/employer/ApplicationList'

export default async function EmployerDashboard() {
  const { userId } = auth()
  if (!userId) {
    redirect('/sign-in')
  }

  // Fetch employer's jobs and applications
  const [jobs, applications] = await Promise.all([
    prisma.jobListing.findMany({
      where: { employerId: userId },
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
    }),
    prisma.application.findMany({
      where: {
        jobListing: {
          employerId: userId,
        },
      },
      include: {
        jobListing: true,
        applicant: {
          include: {
            profile: true,
          },
        },
      },
    }),
  ])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Employer Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Post a New Job</h2>
          <JobPostingForm />
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Your Job Listings</h2>
          <JobList jobs={jobs} />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <ApplicationList applications={applications} />
      </div>
    </div>
  )
} 