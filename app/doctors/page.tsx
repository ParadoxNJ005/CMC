import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DoctorCard } from "@/components/doctor-card"
import { Search } from "lucide-react"

export default function DoctorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Doctors</h1>

      {/* Search and Filter */}
      <div className="mb-8 grid gap-4 md:flex md:items-end md:space-x-4">
        <div className="flex-1 space-y-2">
          <label htmlFor="search" className="text-sm font-medium">
            Search
          </label>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input id="search" placeholder="Search by name or specialty..." className="pl-8" />
          </div>
        </div>
        <div className="w-full md:w-[200px] space-y-2">
          <label htmlFor="department" className="text-sm font-medium">
            Department
          </label>
          <Select>
            <SelectTrigger id="department">
              <SelectValue placeholder="All Departments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="general">General Medicine</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="dermatology">Dermatology</SelectItem>
              <SelectItem value="psychology">Psychology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full md:w-auto">Apply Filters</Button>
      </div>

      {/* Doctors Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DoctorCard
          name="Dr. Sarah Johnson"
          department="General Medicine"
          image="/placeholder.svg?height=300&width=300"
          bio="Dr. Johnson specializes in general medicine with over 10 years of experience in college healthcare."
          availability={["Mon", "Tue", "Wed", "Fri"]}
        />
        <DoctorCard
          name="Dr. Michael Chen"
          department="Cardiology"
          image="/placeholder.svg?height=300&width=300"
          bio="Dr. Chen is a cardiologist with expertise in sports medicine and cardiac health for young adults."
          availability={["Mon", "Wed", "Thu"]}
        />
        <DoctorCard
          name="Dr. Emily Rodriguez"
          department="Psychology"
          image="/placeholder.svg?height=300&width=300"
          bio="Dr. Rodriguez specializes in student mental health, stress management, and anxiety disorders."
          availability={["Tue", "Thu", "Fri"]}
        />
        <DoctorCard
          name="Dr. James Wilson"
          department="Orthopedics"
          image="/placeholder.svg?height=300&width=300"
          bio="Dr. Wilson focuses on sports injuries and rehabilitation for student athletes."
          availability={["Mon", "Tue", "Thu"]}
        />
        <DoctorCard
          name="Dr. Aisha Patel"
          department="Dermatology"
          image="/placeholder.svg?height=300&width=300"
          bio="Dr. Patel specializes in dermatological conditions common among college-age patients."
          availability={["Wed", "Thu", "Fri"]}
        />
        <DoctorCard
          name="Dr. Robert Kim"
          department="General Medicine"
          image="/placeholder.svg?height=300&width=300"
          bio="Dr. Kim provides comprehensive primary care with a focus on preventive medicine."
          availability={["Mon", "Wed", "Fri"]}
        />
      </div>
    </div>
  )
}
