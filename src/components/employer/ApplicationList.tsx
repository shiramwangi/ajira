import { Application, JobListing } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from '@/components/ui/use-toast'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ApplicationListProps {
  applications: (Application & {
    jobListing: JobListing
    applicant: {
      profile: {
        title: string
        bio: string
      } | null
    }
  })[]
}

export function ApplicationList({ applications }: ApplicationListProps) {
  const handleStatusUpdate = async (applicationId: string, status: string) => {
    try {
      const response = await fetch(`/api/applications/${applicationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      })

      if (!response.ok) {
        throw new Error('Failed to update application status')
      }

      toast({
        title: 'Success',
        description: 'Application status updated successfully',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update application status',
        variant: 'destructive',
      })
    }
  }

  if (applications.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No applications yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {applications.map((application) => (
        <Card key={application.id}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{application.jobListing.title}</CardTitle>
              <Badge variant="secondary">{application.status}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Applicant</h4>
                <p className="text-sm text-muted-foreground">
                  {application.applicant.profile?.title || 'No title provided'}
                </p>
              </div>

              <div>
                <h4 className="font-medium">Cover Letter</h4>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm">
                      View Cover Letter
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Cover Letter</DialogTitle>
                    </DialogHeader>
                    <div className="whitespace-pre-wrap">
                      {application.coverLetter}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStatusUpdate(application.id, 'ACCEPTED')}
                  disabled={application.status === 'ACCEPTED'}
                >
                  Accept
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStatusUpdate(application.id, 'REJECTED')}
                  disabled={application.status === 'REJECTED'}
                >
                  Reject
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 