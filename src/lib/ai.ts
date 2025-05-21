import OpenAI from 'openai'
import { JobListing } from '@prisma/client'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface GenerateCoverLetterParams {
  job: JobListing
  profile: {
    title: string
    bio: string
    skills: string[]
    experience: any[]
    education: any[]
  }
}

export async function generateCoverLetter({ job, profile }: GenerateCoverLetterParams) {
  const prompt = `Write a compelling cover letter for the following job:

Job Title: ${job.title}
Company: ${job.company}
Description: ${job.description}
Requirements: ${job.requirements.join(', ')}

Candidate Profile:
Title: ${profile.title}
Bio: ${profile.bio}
Skills: ${profile.skills.join(', ')}
Experience: ${JSON.stringify(profile.experience)}
Education: ${JSON.stringify(profile.education)}

Write a professional cover letter that:
1. Highlights relevant experience and skills
2. Shows enthusiasm for the role and company
3. Demonstrates understanding of the job requirements
4. Is concise and well-structured
5. Ends with a call to action

Format the cover letter in a professional business letter format.`

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4",
      temperature: 0.7,
      max_tokens: 1000,
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error generating cover letter:', error)
    throw new Error('Failed to generate cover letter')
  }
} 