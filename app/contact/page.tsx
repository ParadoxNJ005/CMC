import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below to get in touch with our team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@college.edu" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="department">Department</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Inquiries</SelectItem>
                    <SelectItem value="appointments">Appointments</SelectItem>
                    <SelectItem value="billing">Billing & Insurance</SelectItem>
                    <SelectItem value="pharmacy">Pharmacy</SelectItem>
                    <SelectItem value="records">Medical Records</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here..." rows={5} />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Send Message</Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Ways to reach the College Medical Center</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                  Address
                </h3>
                <p className="text-sm">
                  College Medical Center
                  <br />
                  123 College Avenue
                  <br />
                  University Town, UT 12345
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
                  Phone
                </h3>
                <p className="text-sm">
                  Main: (555) 123-4567
                  <br />
                  Emergency: (555) 123-9999
                  <br />
                  Appointments: (555) 123-4568
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                  Email
                </h3>
                <p className="text-sm">
                  General: info@collegemedical.edu
                  <br />
                  Appointments: appointments@collegemedical.edu
                  <br />
                  Records: records@collegemedical.edu
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                  Hours
                </h3>
                <div className="text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Emergency services available 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
