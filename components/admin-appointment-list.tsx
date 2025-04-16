import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminAppointmentList() {
  const appointments = [
    {
      id: "APP12345",
      patient: "Sarah Connor",
      doctor: "Dr. Sarah Johnson",
      department: "General Medicine",
      date: "Oct 25, 2023",
      time: "10:00 AM",
      status: "confirmed",
    },
    {
      id: "APP12346",
      patient: "John Smith",
      doctor: "Dr. Michael Chen",
      department: "Cardiology",
      date: "Oct 25, 2023",
      time: "11:30 AM",
      status: "confirmed",
    },
    {
      id: "APP12347",
      patient: "Emily Davis",
      doctor: "Dr. Emily Rodriguez",
      department: "Psychology",
      date: "Oct 25, 2023",
      time: "1:00 PM",
      status: "pending",
    },
    {
      id: "APP12348",
      patient: "David Wilson",
      doctor: "Dr. James Wilson",
      department: "Orthopedics",
      date: "Oct 25, 2023",
      time: "2:30 PM",
      status: "confirmed",
    },
    {
      id: "APP12349",
      patient: "Jessica Brown",
      doctor: "Dr. Aisha Patel",
      department: "Dermatology",
      date: "Oct 25, 2023",
      time: "3:45 PM",
      status: "pending",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
      case "pending":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Pending</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Cancelled</Badge>
      default:
        return null
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-muted-foreground">Showing {appointments.length} appointments for today</div>
        <Button size="sm">Add Appointment</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Patient</TableHead>
              <TableHead>Doctor</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {appointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell className="font-medium">{appointment.patient}</TableCell>
                <TableCell>{appointment.doctor}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{getStatusBadge(appointment.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
