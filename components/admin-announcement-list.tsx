import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminAnnouncementList() {
  const announcements = [
    {
      id: "ANN001",
      title: "COVID-19 Booster Shots Available",
      date: "October 15, 2023",
      author: "Dr. Sarah Johnson",
      status: "active",
      priority: true,
    },
    {
      id: "ANN002",
      title: "Flu Vaccination Campaign",
      date: "October 10, 2023",
      author: "Dr. Michael Chen",
      status: "active",
      priority: false,
    },
    {
      id: "ANN003",
      title: "Extended Hours During Finals",
      date: "October 5, 2023",
      author: "Admin Staff",
      status: "active",
      priority: false,
    },
    {
      id: "ANN004",
      title: "Mental Health Awareness Week",
      date: "September 28, 2023",
      author: "Dr. Emily Rodriguez",
      status: "inactive",
      priority: false,
    },
    {
      id: "ANN005",
      title: "New Dermatology Services",
      date: "September 20, 2023",
      author: "Dr. Aisha Patel",
      status: "inactive",
      priority: false,
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
      case "inactive":
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Inactive</Badge>
      default:
        return null
    }
  }

  const getPriorityBadge = (priority: boolean) => {
    return priority ? <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Important</Badge> : null
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-muted-foreground">Showing {announcements.length} announcements</div>
        <Button size="sm">Add Announcement</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {announcements.map((announcement) => (
              <TableRow key={announcement.id}>
                <TableCell className="font-medium">{announcement.title}</TableCell>
                <TableCell>{announcement.date}</TableCell>
                <TableCell>{announcement.author}</TableCell>
                <TableCell>{getStatusBadge(announcement.status)}</TableCell>
                <TableCell>{getPriorityBadge(announcement.priority)}</TableCell>
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
