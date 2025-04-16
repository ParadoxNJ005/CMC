"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  CreditCard,
  PlusCircle,
  Settings,
  BellRing,
  LogOut,
} from "lucide-react"

const routes = [
  {
    name: "Dashboard",
    href: "/admin",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    name: "Doctors",
    href: "/admin/doctors",
    icon: <Users className="h-5 w-5" />,
  },
  {
    name: "Appointments",
    href: "/admin/appointments",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    name: "Medical Records",
    href: "/admin/records",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "Billing",
    href: "/admin/billing",
    icon: <CreditCard className="h-5 w-5" />,
  },
  {
    name: "Pharmacy",
    href: "/admin/pharmacy",
    icon: <PlusCircle className="h-5 w-5" />,
  },
  {
    name: "Announcements",
    href: "/admin/announcements",
    icon: <BellRing className="h-5 w-5" />,
  },
  {
    name: "Settings",
    href: "/admin/settings",
    icon: <Settings className="h-5 w-5" />,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex flex-col w-64 bg-gray-50 border-r h-screen sticky top-0">
      <div className="p-6">
        <Link href="/admin" className="flex items-center space-x-2">
          <span className="font-bold text-xl">CMC Admin</span>
        </Link>
      </div>
      <div className="flex-1 px-4 space-y-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 rounded-md text-sm transition-colors",
              pathname === route.href ? "bg-gray-100 text-primary" : "text-muted-foreground hover:bg-gray-100",
            )}
          >
            {route.icon}
            <span>{route.name}</span>
          </Link>
        ))}
      </div>
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4" />
            Exit Admin
          </Link>
        </Button>
      </div>
    </div>
  )
}
