'use client'

import { useEffect } from 'react'
import { JobCard } from '@/components/JobCard'
import { useJobSwipeStore } from '@/lib/store'

export default function JobsPage() {
  const { currentJob, jobs, setJobs, swipeLeft, swipeRight } = useJobSwipeStore()

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('/api/jobs')
        const data = await response.json()
        setJobs(data)
      } catch (error) {
        console.error('Error fetching jobs:', error)
      }
    }

    fetchJobs()
  }, [setJobs])

  if (!currentJob) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-muted-foreground">No more jobs to show</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-md mx-auto">
        <JobCard
          job={currentJob}
          onSwipe={(direction) => {
            if (direction === 'right') {
              swipeRight()
            } else {
              swipeLeft()
            }
          }}
        />
      </div>
    </div>
  )
} 