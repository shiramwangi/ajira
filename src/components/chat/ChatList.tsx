import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { pusherClient } from '@/lib/pusher'

interface Chat {
  id: string
  jobListing: {
    title: string
  }
  employer: {
    profile: {
      title: string
    } | null
  }
  applicant: {
    profile: {
      title: string
    } | null
  }
  messages: {
    content: string
    createdAt: string
  }[]
}

export function ChatList() {
  const [chats, setChats] = useState<Chat[]>([])
  const router = useRouter()

  useEffect(() => {
    const fetchChats = async () => {
      const response = await fetch('/api/chats')
      if (response.ok) {
        const data = await response.json()
        setChats(data)
      }
    }

    fetchChats()

    // Subscribe to new messages
    const channel = pusherClient.subscribe('chat-*')
    channel.bind('new-message', () => {
      fetchChats()
    })

    return () => {
      pusherClient.unsubscribe('chat-*')
    }
  }, [])

  if (chats.length === 0) {
    return (
      <div className="text-center text-muted-foreground">
        No conversations yet.
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {chats.map((chat) => (
        <Card
          key={chat.id}
          className="cursor-pointer hover:bg-accent"
          onClick={() => router.push(`/chat/${chat.id}`)}
        >
          <CardHeader>
            <CardTitle className="text-lg">{chat.jobListing.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {chat.messages[0]?.content || 'No messages yet'}
              </p>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">
                  {chat.employer.profile?.title || 'Employer'}
                </Badge>
                <Badge variant="secondary">
                  {chat.applicant.profile?.title || 'Applicant'}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
} 