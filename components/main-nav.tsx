"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Calendar, User, FileText, CreditCard, PlusCircle, MessageSquare, Menu, X } from "lucide-react"
import { useState } from "react"

const routes = [
  {
    name: "Home",
    href: "/",
    icon: <LayoutDashboard className="h-4 w-4 mr-2" />,
  },
  {
    name: "Doctors",
    href: "/doctors",
    icon: <User className="h-4 w-4 mr-2" />,
  },
  {
    name: "Appointments",
    href: "/appointments",
    icon: <Calendar className="h-4 w-4 mr-2" />,
  },
  {
    name: "Medical Records",
    href: "/records",
    icon: <FileText className="h-4 w-4 mr-2" />,
  },
  {
    name: "Bills",
    href: "/bills",
    icon: <CreditCard className="h-4 w-4 mr-2" />,
  },
  {
    name: "Pharmacy",
    href: "/pharmacy",
    icon: <PlusCircle className="h-4 w-4 mr-2" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <MessageSquare className="h-4 w-4 mr-2" />,
  },
]

export function MainNav() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center text-sm font-medium transition-colors hover:text-primary",
              pathname === route.href ? "text-primary" : "text-muted-foreground",
            )}
          >
            {route.icon}
            {route.name}
          </Link>
        ))}
      </div>

      <div className="md:hidden">
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex flex-col p-4">
            <div className="flex justify-end">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col space-y-4 mt-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "flex items-center text-sm font-medium transition-colors hover:text-primary p-2",
                    pathname === route.href ? "text-primary bg-gray-100 rounded-md" : "text-muted-foreground",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {route.icon}
                  {route.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
