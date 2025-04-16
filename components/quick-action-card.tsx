import Link from "next/link"
import type { ReactNode } from "react"

interface QuickActionCardProps {
  title: string
  icon: ReactNode
  href: string
  color: string
}

export function QuickActionCard({ title, icon, href, color }: QuickActionCardProps) {
  return (
    <Link href={href} className="block group">
      <div className={`rounded-lg p-6 transition-all duration-200 ${color} hover:shadow-md`}>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{icon}</div>
          <h3 className="font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  )
}
