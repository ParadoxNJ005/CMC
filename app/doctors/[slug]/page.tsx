import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarIcon, Clock, MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function DoctorProfilePage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch the doctor data based on the slug
  const doctor = {
    name: "Dr. Sarah Johnson",
    department: "General Medicine",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Johnson specializes in general medicine with over 10 years of experience in college healthcare. She completed her medical degree at Harvard Medical School and residency at Massachusetts General Hospital. Her approach focuses on preventive care and holistic treatment methods.",
    education: [
      "MD, Harvard Medical School",
      "Residency, Massachusetts General Hospital",
      "Board Certified in Internal Medicine",
    ],
    specialties: ["Preventive Medicine", "Student Health", "Chronic Disease Management"],
    availability: ["Mon", "Tue", "Wed", "Fri"],
    contact: {
      email: "sarah.johnson@college.edu",
      phone: "(555) 123-4567",
      office: "Medical Center, Room 205",
    },
  }

  // Extract initials for avatar fallback
  const initials = doctor.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/doctors" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to Doctors
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Doctor Info */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <Avatar className="h-16 w-16">
                <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                <AvatarFallback>{initials}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-2xl">{doctor.name}</CardTitle>
                <CardDescription>{doctor.department}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="about">
                <TabsList className="mb-4">
                  <TabsTrigger value="about">About</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="specialties">Specialties</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                <TabsContent value="about" className="space-y-4">
                  <p>{doctor.bio}</p>
                  <div>
                    <h3 className="font-medium mb-2">Weekly Availability</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day) => (
                        <Badge
                          key={day}
                          variant={doctor.availability.includes(day) ? "default" : "outline"}
                          className={
                            doctor.availability.includes(day)
                              ? "bg-teal-100 text-teal-800 hover:bg-teal-100"
                              : "text-gray-400"
                          }
                        >
                          {day}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="education">
                  <ul className="space-y-2">
                    {doctor.education.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="specialties">
                  <div className="flex flex-wrap gap-2">
                    {doctor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="contact">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{doctor.contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{doctor.contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{doctor.contact.office}</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Appointment Booking */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Book an Appointment</CardTitle>
              <CardDescription>Select a date and time to schedule your appointment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Select Date</span>
                </div>
                <Calendar mode="single" className="rounded-md border" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  <span className="text-sm font-medium">Available Time Slots</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"].map((time) => (
                    <Button key={time} variant="outline" className="justify-start">
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <Button className="w-full">Book Appointment</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
