import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { AppointmentCard } from "@/components/appointment-card"
import Link from "next/link"

export default function AppointmentsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">My Appointments</h1>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/appointments/book">Book New Appointment</Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <AppointmentCard
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="October 25, 2023"
            time="10:00 AM"
            status="confirmed"
            appointmentId="APP12345"
          />
          <AppointmentCard
            doctor="Dr. Michael Chen"
            department="Cardiology"
            date="November 3, 2023"
            time="2:30 PM"
            status="confirmed"
            appointmentId="APP12346"
          />
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <AppointmentCard
            doctor="Dr. Emily Rodriguez"
            department="Psychology"
            date="September 15, 2023"
            time="11:00 AM"
            status="completed"
            appointmentId="APP12340"
          />
          <AppointmentCard
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="August 22, 2023"
            time="9:30 AM"
            status="completed"
            appointmentId="APP12338"
          />
          <AppointmentCard
            doctor="Dr. James Wilson"
            department="Orthopedics"
            date="July 10, 2023"
            time="3:00 PM"
            status="completed"
            appointmentId="APP12335"
          />
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-6">
          <AppointmentCard
            doctor="Dr. Aisha Patel"
            department="Dermatology"
            date="October 5, 2023"
            time="1:00 PM"
            status="cancelled"
            appointmentId="APP12344"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
