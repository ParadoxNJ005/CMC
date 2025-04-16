import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Download, FileText, User } from "lucide-react"
import Link from "next/link"

interface RecordCardProps {
  title: string
  doctor: string
  department: string
  date: string
  type: "consultation" | "prescription" | "lab-report" | "document"
  description: string
}

export function RecordCard({ title, doctor, department, date, type, description }: RecordCardProps) {
  const getTypeBadge = () => {
    switch (type) {
      case "consultation":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Consultation</Badge>
      case "prescription":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Prescription</Badge>
      case "lab-report":
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Lab Report</Badge>
      case "document":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Document</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{title}</CardTitle>
          {getTypeBadge()}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2">
          <div className="flex items-center text-sm">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>
              {doctor} - {department}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-start text-sm">
            <FileText className="mr-2 h-4 w-4 text-muted-foreground mt-0.5" />
            <span>{description}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/records/${type}/${title.toLowerCase().replace(/\s+/g, "-")}`}>View Details</Link>
        </Button>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  )
}
