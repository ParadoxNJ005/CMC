import Link from "next/link"
import { Heart } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between py-10 md:h-24">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Heart className="h-5 w-5 text-teal-600" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} College Medical Center. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link href="/privacy" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="/contact" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
