import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface DoctorCardProps {
  name: string
  department: string
  image: string
  bio: string
  availability: string[]
}

export function DoctorCard({ name, department, image, bio, availability }: DoctorCardProps) {
  // Extract initials for avatar fallback
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{department}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-600 mb-4">{bio}</p>
        <div>
          <h4 className="text-sm font-medium mb-2">Weekly Availability</h4>
          <div className="flex flex-wrap gap-2">
            {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
              <Badge
                key={day}
                variant={availability.includes(day) ? "default" : "outline"}
                className={availability.includes(day) ? "bg-teal-100 text-teal-800 hover:bg-teal-100" : "text-gray-400"}
              >
                {day}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/doctors/${name.toLowerCase().replace(/\s+/g, "-")}`}>View Profile</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
