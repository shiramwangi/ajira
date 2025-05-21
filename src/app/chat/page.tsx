import { auth } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { ChatList } from '@/components/chat/ChatList'

export default async function ChatPage() {
  const { userId } = auth()
  if (!userId) {
    redirect('/sign-in')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">Messages</h1>
      <ChatList />
    </div>
  )
} 