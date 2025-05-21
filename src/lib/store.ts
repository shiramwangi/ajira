import { create } from 'zustand'
import { JobListing } from '@prisma/client'

interface JobSwipeState {
  currentJob: JobListing | null
  jobs: JobListing[]
  setJobs: (jobs: JobListing[]) => void
  nextJob: () => void
  swipeRight: () => void
  swipeLeft: () => void
}

export const useJobSwipeStore = create<JobSwipeState>((set) => ({
  currentJob: null,
  jobs: [],
  setJobs: (jobs) => set({ jobs, currentJob: jobs[0] || null }),
  nextJob: () => set((state) => ({
    jobs: state.jobs.slice(1),
    currentJob: state.jobs[1] || null,
  })),
  swipeRight: () => set((state) => {
    // Here we would typically make an API call to apply for the job
    return {
      jobs: state.jobs.slice(1),
      currentJob: state.jobs[1] || null,
    }
  }),
  swipeLeft: () => set((state) => ({
    jobs: state.jobs.slice(1),
    currentJob: state.jobs[1] || null,
  })),
})) 