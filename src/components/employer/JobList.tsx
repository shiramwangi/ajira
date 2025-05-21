import { JobListing, Application } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'

interface JobListProps {
  jobs: (JobListing & {
    applications: (Application & {
      applicant: {
        profile: {
          title: string
          bio: string
        } | null
      }
    })[]
  })[]
}

export function JobList({ jobs }: JobListProps) {
  const handleDelete = async (jobId: string) => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Failed to delete job listing')
      }

      toast({
        title: 'Success',
        description: 'Job listing deleted successfully',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to delete job listing',
        variant: 'destructive',
      })
    }
  }

  if (jobs.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No job listings yet. Create your first job posting above!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{job.title}</CardTitle>
              <Badge variant="secondary">{job.type}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{job.company}</p>
              <p className="text-sm">{job.location}</p>
              <p className="text-sm font-medium">{job.salary}</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline">
                  {job.applications.length} Applications
                </Badge>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(job.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 