import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { CalendarIcon, Clock } from "lucide-react"
import Link from "next/link"

export default function RescheduleAppointmentPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the appointment data based on the ID
  const appointment = {
    id: params.id,
    doctor: "Dr. Sarah Johnson",
    department: "General Medicine",
    currentDate: "October 25, 2023",
    currentTime: "10:00 AM",
    status: "confirmed",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/appointments" className="text-sm text-muted-foreground hover:underline mr-4">
          ← Back to Appointments
        </Link>
        <h1 className="text-3xl font-bold">Reschedule Appointment</h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Current Appointment Details</CardTitle>
              <CardDescription>Review your current appointment before rescheduling</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Doctor</Label>
                  <div className="font-medium">{appointment.doctor}</div>
                </div>
                <div className="space-y-2">
                  <Label>Department</Label>
                  <div className="font-medium">{appointment.department}</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Current Date</Label>
                  <div className="font-medium">{appointment.currentDate}</div>
                </div>
                <div className="space-y-2">
                  <Label>Current Time</Label>
                  <div className="font-medium">{appointment.currentTime}</div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Reason for Rescheduling</Label>
                <RadioGroup defaultValue="schedule-conflict">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="schedule-conflict" id="schedule-conflict" />
                    <Label htmlFor="schedule-conflict">Schedule Conflict</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="feeling-better" id="feeling-better" />
                    <Label htmlFor="feeling-better">Feeling Better</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="transportation" id="transportation" />
                    <Label htmlFor="transportation">Transportation Issues</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/appointments">Cancel</Link>
              </Button>
              <Button>Confirm Reschedule</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Select New Date & Time</CardTitle>
              <CardDescription>Choose your preferred new appointment slot</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">New Date</span>
                </div>
                <Calendar mode="single" className="rounded-md border" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">New Time Slot</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                    <Button key={time} variant="outline" className="justify-start">
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
