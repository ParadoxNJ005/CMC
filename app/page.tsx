import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  AlertCircle,
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  PlusCircle,
  ShieldCheck,
  Users,
} from "lucide-react"
import { AnnouncementCard } from "@/components/announcement-card"
import { QuickActionCard } from "@/components/quick-action-card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-600 py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-2">
                Your Health, Our Priority
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to College Medical Center
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-lg">
                Providing comprehensive healthcare services tailored for students, faculty, and staff.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90">
                  <Link href="/appointments/book">Book an Appointment</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/doctors">Our Doctors</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Medical professionals"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl transform rotate-2"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 -mt-16 relative z-10">
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-10 w-10 text-teal-500 mb-3" />
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-sm text-muted-foreground">Specialist Doctors</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Calendar className="h-10 w-10 text-teal-500 mb-3" />
                <h3 className="text-3xl font-bold">24/7</h3>
                <p className="text-sm text-muted-foreground">Emergency Care</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <ShieldCheck className="h-10 w-10 text-teal-500 mb-3" />
                <h3 className="text-3xl font-bold">10k+</h3>
                <p className="text-sm text-muted-foreground">Students Served</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg border-none">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <FileText className="h-10 w-10 text-teal-500 mb-3" />
                <h3 className="text-3xl font-bold">100%</h3>
                <p className="text-sm text-muted-foreground">Digital Records</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-lg z-0"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-cyan-100 rounded-lg z-0"></div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Medical staff"
                width={600}
                height={500}
                className="rounded-lg shadow-lg relative z-10"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dedicated to Student Health & Wellness</h2>
              <p className="text-gray-600 mb-6 text-lg">
                The College Medical Center is committed to providing high-quality, accessible healthcare services to
                students, faculty, and staff. We strive to promote wellness, prevent illness, and ensure the overall
                health of our college community.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Our team of dedicated healthcare professionals works tirelessly to deliver personalized care and support
                to help you maintain optimal health throughout your academic journey.
              </p>
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Stay Informed
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Recent Announcements</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <AnnouncementCard
              title="COVID-19 Booster Shots Available"
              date="October 15, 2023"
              content="COVID-19 booster shots are now available at the medical center. Schedule your appointment today to ensure continued protection against new variants."
              icon={<AlertCircle className="h-5 w-5 text-red-500" />}
              priority
            />
            <AnnouncementCard
              title="Flu Vaccination Campaign"
              date="October 10, 2023"
              content="Our annual flu vaccination campaign starts next week. Free for all students with valid ID. Protect yourself and others during the upcoming flu season."
              icon={<AlertCircle className="h-5 w-5 text-amber-500" />}
            />
            <AnnouncementCard
              title="Extended Hours During Finals"
              date="October 5, 2023"
              content="The medical center will have extended hours during finals week to better serve students. We understand this can be a stressful time and we're here to support you."
              icon={<Calendar className="h-5 w-5 text-blue-500" />}
            />
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/announcements">View All Announcements</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-teal-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Quick Access
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What Can We Help You With?</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <QuickActionCard
              title="Book Appointment"
              icon={<Calendar className="h-10 w-10" />}
              href="/appointments/book"
              color="bg-blue-50 text-blue-600 hover:bg-blue-100"
            />
            <QuickActionCard
              title="Order Medicine"
              icon={<PlusCircle className="h-10 w-10" />}
              href="/pharmacy"
              color="bg-green-50 text-green-600 hover:bg-green-100"
            />
            <QuickActionCard
              title="View Bills"
              icon={<CreditCard className="h-10 w-10" />}
              href="/bills"
              color="bg-purple-50 text-purple-600 hover:bg-purple-100"
            />
            <QuickActionCard
              title="Contact Us"
              icon={<MessageSquare className="h-10 w-10" />}
              href="/contact"
              color="bg-amber-50 text-amber-600 hover:bg-amber-100"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">What Students Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "The medical center has been a lifesaver during my college years. The staff is always friendly and professional.",
                name: "Alex Johnson",
                role: "Senior, Computer Science",
              },
              {
                quote:
                  "I appreciate how easy it is to book appointments online and the quick response times for urgent care needs.",
                name: "Maria Garcia",
                role: "Junior, Biology",
              },
              {
                quote:
                  "The mental health services provided have been instrumental in helping me manage stress during exam periods.",
                name: "David Kim",
                role: "Graduate Student, Psychology",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    <div className="text-4xl text-teal-300 mb-4">"</div>
                    <p className="text-gray-600 flex-grow">{testimonial.quote}</p>
                    <div className="mt-6">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to prioritize your health?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Schedule an appointment today and take the first step towards better health and wellness.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-white/90">
              <Link href="/appointments/book">Book an Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
