import { useState } from 'react'
import { JobType } from '@prisma/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { toast } from '@/components/ui/use-toast'

export function JobPostingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    requirements: '',
    location: '',
    salary: '',
    type: JobType.FULL_TIME,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          requirements: formData.requirements.split(',').map(req => req.trim()),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to create job listing')
      }

      toast({
        title: 'Success',
        description: 'Job listing created successfully',
      })

      // Reset form
      setFormData({
        title: '',
        company: '',
        description: '',
        requirements: '',
        location: '',
        salary: '',
        type: JobType.FULL_TIME,
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to create job listing',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium mb-1">
          Job Title
        </label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-1">
          Company
        </label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium mb-1">
          Description
        </label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium mb-1">
          Requirements (comma-separated)
        </label>
        <Textarea
          id="requirements"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium mb-1">
          Location
        </label>
        <Input
          id="location"
          value={formData.location}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          required
        />
      </div>

      <div>
        <label htmlFor="salary" className="block text-sm font-medium mb-1">
          Salary Range
        </label>
        <Input
          id="salary"
          value={formData.salary}
          onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
          placeholder="e.g., $80,000 - $100,000"
          required
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium mb-1">
          Job Type
        </label>
        <Select
          value={formData.type}
          onValueChange={(value: JobType) => setFormData({ ...formData, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select job type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={JobType.FULL_TIME}>Full Time</SelectItem>
            <SelectItem value={JobType.PART_TIME}>Part Time</SelectItem>
            <SelectItem value={JobType.CONTRACT}>Contract</SelectItem>
            <SelectItem value={JobType.INTERNSHIP}>Internship</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating...' : 'Create Job Listing'}
      </Button>
    </form>
  )
} 