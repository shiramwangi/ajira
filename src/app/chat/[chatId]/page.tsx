import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { ChatWindow } from '@/components/chat/ChatWindow'

interface ChatPageProps {
  params: {
    chatId: string
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const { userId } = auth()
  if (!userId) {
    redirect('/sign-in')
  }

  const chat = await prisma.chat.findUnique({
    where: { id: params.chatId },
    include: {
      jobListing: true,
      employer: {
        include: {
          profile: true,
        },
      },
      applicant: {
        include: {
          profile: true,
        },
      },
    },
  })

  if (!chat) {
    redirect('/chat')
  }

  if (chat.employerId !== userId && chat.applicantId !== userId) {
    redirect('/chat')
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{chat.jobListing.title}</h1>
        <p className="text-muted-foreground mb-8">
          Chat with{' '}
          {chat.employerId === userId
            ? chat.applicant.profile?.title || 'Applicant'
            : chat.employer.profile?.title || 'Employer'}
        </p>
        <ChatWindow chatId={params.chatId} />
      </div>
    </div>
  )
} 