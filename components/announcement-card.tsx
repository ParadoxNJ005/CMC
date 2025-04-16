import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { ReactNode } from "react"

interface AnnouncementCardProps {
  title: string
  date: string
  content: string
  icon?: ReactNode
  priority?: boolean
}

export function AnnouncementCard({ title, date, content, icon, priority }: AnnouncementCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {icon && <div>{icon}</div>}
        </div>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
      <CardFooter>{priority && <Badge variant="destructive">Important</Badge>}</CardFooter>
    </Card>
  )
}
