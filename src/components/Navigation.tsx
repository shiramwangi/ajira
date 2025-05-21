import Link from 'next/link'
import { UserButton, SignInButton, useUser } from '@clerk/nextjs'

export function Navigation() {
  const { isSignedIn } = useUser()

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Ajira
          </Link>
          
          <div className="flex items-center space-x-4">
            {isSignedIn ? (
              <>
                <Link
                  href="/jobs"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Browse Jobs
                </Link>
                <Link
                  href="/dashboard"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Profile
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Sign In
                </button>
              </SignInButton>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
} 