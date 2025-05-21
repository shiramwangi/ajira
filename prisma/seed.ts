import { PrismaClient, JobType } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Create the 'system' user if it doesn't exist
  await prisma.user.upsert({
    where: { id: 'system' },
    update: {},
    create: {
      id: 'system',
      name: 'System User',
      email: 'system@example.com',
      // Add other required fields here if your User model requires them
    },
  })

  const jobListings = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovators',
      description: 'Lead the development of cutting-edge web applications.',
      requirements: ['5+ years experience', 'React', 'Node.js', 'TypeScript'],
      location: 'Remote',
      salary: '120000',
      type: JobType.FULL_TIME,
      employerId: 'system',
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Minds',
      description: 'Design and implement beautiful user interfaces.',
      requirements: ['2+ years experience', 'React', 'CSS', 'Figma'],
      location: 'New York, NY',
      salary: '90000',
      type: JobType.FULL_TIME,
      employerId: 'system',
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudOps',
      description: 'Maintain and optimize cloud infrastructure.',
      requirements: ['3+ years experience', 'AWS', 'Docker', 'Kubernetes'],
      location: 'San Francisco, CA',
      salary: '110000',
      type: JobType.FULL_TIME,
      employerId: 'system',
    },
  ]

  for (const job of jobListings) {
    await prisma.jobListing.create({
      data: job,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 