import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AdminDoctorList() {
  const doctors = [
    {
      id: "DOC001",
      name: "Dr. Sarah Johnson",
      department: "General Medicine",
      image: "/placeholder.svg?height=300&width=300",
      status: "active",
      appointments: 12,
    },
    {
      id: "DOC002",
      name: "Dr. Michael Chen",
      department: "Cardiology",
      image: "/placeholder.svg?height=300&width=300",
      status: "active",
      appointments: 8,
    },
    {
      id: "DOC003",
      name: "Dr. Emily Rodriguez",
      department: "Psychology",
      image: "/placeholder.svg?height=300&width=300",
      status: "active",
      appointments: 10,
    },
    {
      id: "DOC004",
      name: "Dr. James Wilson",
      department: "Orthopedics",
      image: "/placeholder.svg?height=300&width=300",
      status: "leave",
      appointments: 0,
    },
    {
      id: "DOC005",
      name: "Dr. Aisha Patel",
      department: "Dermatology",
      image: "/placeholder.svg?height=300&width=300",
      status: "active",
      appointments: 6,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "leave":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">On Leave</Badge>
      default:
        return null
    }
  }

  // Extract initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-muted-foreground">Showing {doctors.length} doctors</div>
        <Button size="sm">Add Doctor</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Appointments</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {doctors.map((doctor) => (
              <TableRow key={doctor.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                      <AvatarFallback>{getInitials(doctor.name)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{doctor.name}</span>
                  </div>
                </TableCell>
                <TableCell>{doctor.department}</TableCell>
                <TableCell>{getStatusBadge(doctor.status)}</TableCell>
                <TableCell>{doctor.appointments} today</TableCell>
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
