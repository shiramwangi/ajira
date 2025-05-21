import { useEffect, useRef, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { pusherClient } from '@/lib/pusher'

interface Message {
  id: string
  content: string
  createdAt: string
  sender: {
    id: string
    profile: {
      title: string
    } | null
  }
}

interface ChatWindowProps {
  chatId: string
}

export function ChatWindow({ chatId }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useUser()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await fetch(`/api/chats/${chatId}/messages`)
      if (response.ok) {
        const data = await response.json()
        setMessages(data)
      }
    }

    fetchMessages()

    // Subscribe to new messages
    const channel = pusherClient.subscribe(`chat-${chatId}`)
    channel.bind('new-message', (message: Message) => {
      setMessages((prev) => [...prev, message])
    })

    return () => {
      pusherClient.unsubscribe(`chat-${chatId}`)
    }
  }, [chatId])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || isLoading) return

    setIsLoading(true)
    try {
      const response = await fetch(`/api/chats/${chatId}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: newMessage }),
      })

      if (response.ok) {
        setNewMessage('')
      }
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-[600px]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender.id === user?.id ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender.id === user?.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted'
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <p className="text-xs mt-1 opacity-70">
                {message.sender.profile?.title || 'Unknown'}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            Send
          </Button>
        </div>
      </form>
    </div>
  )
} 