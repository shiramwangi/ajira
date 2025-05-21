import { motion } from 'framer-motion'
import { JobListing } from '@prisma/client'
import { useState } from 'react'

interface JobCardProps {
  job: JobListing
  onSwipe: (direction: 'left' | 'right') => void
}

export function JobCard({ job, onSwipe }: JobCardProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleSwipe = async (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setIsGenerating(true)
      try {
        const response = await fetch('/api/cover-letter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ jobId: job.id }),
        })

        if (!response.ok) {
          throw new Error('Failed to generate cover letter')
        }

        onSwipe(direction)
      } catch (error) {
        console.error('Error generating cover letter:', error)
        // You might want to show an error message to the user here
      } finally {
        setIsGenerating(false)
      }
    } else {
      onSwipe(direction)
    }
  }

  return (
    <motion.div
      className="relative w-full max-w-md mx-auto bg-card rounded-xl shadow-lg overflow-hidden"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.95, opacity: 0 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.x > 100) {
          handleSwipe('right')
        } else if (info.offset.x < -100) {
          handleSwipe('left')
        }
      }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-card-foreground">{job.title}</h2>
          <span className="px-3 py-1 text-sm font-medium text-primary-foreground bg-primary rounded-full">
            {job.type}
          </span>
        </div>
        
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-card-foreground">{job.company}</h3>
          {job.location && (
            <p className="text-muted-foreground">{job.location}</p>
          )}
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-card-foreground mb-2">Description</h4>
          <p className="text-muted-foreground line-clamp-3">{job.description}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-card-foreground mb-2">Requirements</h4>
          <ul className="list-disc list-inside text-muted-foreground">
            {job.requirements.map((req: string, index: number) => (
              <li key={index} className="line-clamp-1">{req}</li>
            ))}
          </ul>
        </div>

        {job.salary && (
          <div className="text-lg font-semibold text-primary">
            {job.salary}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
      
      {isGenerating && (
        <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
          <div className="text-lg font-medium">Generating cover letter...</div>
        </div>
      )}
    </motion.div>
  )
} 