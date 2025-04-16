import Link from "next/link"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-teal-600" />
          <span className="font-bold text-xl">CMC</span>
        </Link>
        <div className="ml-auto flex items-center space-x-4">
          <MainNav />
          <div className="hidden md:block">
            <Button asChild variant="default" size="sm">
              <Link href="/appointments/book">Book Appointment</Link>
            </Button>
          </div>
          <UserNav />
        </div>
      </div>
    </header>
  )
}
