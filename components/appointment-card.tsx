import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"
import Link from "next/link"

interface AppointmentCardProps {
  doctor: string
  department: string
  date: string
  time: string
  status: "confirmed" | "completed" | "cancelled"
  appointmentId: string
}

export function AppointmentCard({ doctor, department, date, time, status, appointmentId }: AppointmentCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
      case "completed":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Completed</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{doctor}</CardTitle>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2">
          <div className="flex items-center text-sm">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{department}</span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="text-xs text-muted-foreground mt-1">Appointment ID: {appointmentId}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {status === "confirmed" && (
          <>
            <Button variant="outline" size="sm" asChild>
              <Link href={`/appointments/reschedule/${appointmentId}`}>Reschedule</Link>
            </Button>
            <Button variant="destructive" size="sm">
              Cancel
            </Button>
          </>
        )}
        {status === "completed" && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href={`/records/${appointmentId}`}>View Records</Link>
          </Button>
        )}
        {status === "cancelled" && (
          <Button variant="outline" size="sm" className="w-full" asChild>
            <Link href="/appointments/book">Book Again</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
