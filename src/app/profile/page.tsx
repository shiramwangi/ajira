'use client'

import { useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
  const { user } = useUser()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    bio: '',
    skills: '',
    experience: '',
    education: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          skills: formData.skills.split(',').map(skill => skill.trim()),
          experience: JSON.parse(formData.experience || '[]'),
          education: JSON.parse(formData.education || '[]'),
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to update profile')
      }

      router.refresh()
    } catch (error) {
      console.error('Error updating profile:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return null
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Complete Your Profile</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Professional Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., Senior Software Engineer"
            />
          </div>

          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-2">
              Bio
            </label>
            <textarea
              id="bio"
              value={formData.bio}
              onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
              className="w-full p-2 border rounded-md"
              rows={4}
              placeholder="Tell us about yourself..."
            />
          </div>

          <div>
            <label htmlFor="skills" className="block text-sm font-medium mb-2">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              id="skills"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              className="w-full p-2 border rounded-md"
              placeholder="e.g., JavaScript, React, Node.js"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium mb-2">
              Experience (JSON format)
            </label>
            <textarea
              id="experience"
              value={formData.experience}
              onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              className="w-full p-2 border rounded-md font-mono"
              rows={4}
              placeholder='[{"title": "Software Engineer", "company": "Tech Corp", "duration": "2020-2023"}]'
            />
          </div>

          <div>
            <label htmlFor="education" className="block text-sm font-medium mb-2">
              Education (JSON format)
            </label>
            <textarea
              id="education"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="w-full p-2 border rounded-md font-mono"
              rows={4}
              placeholder='[{"degree": "B.S. Computer Science", "school": "University", "year": "2020"}]'
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/90 disabled:opacity-50"
          >
            {isLoading ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      </div>
    </div>
  )
} 