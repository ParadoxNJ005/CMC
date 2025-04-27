"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart } from "lucide-react"
import { toast } from "sonner"

export default function RegisterPage() {
  const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentId: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }

    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          // Optional: add name or studentId to backend if needed
        }),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success("Registration successful! Please login.")
        router.push("/auth/login")
      } else {
        toast.error(data.message || "Registration failed")
      }
    } catch (err) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="hidden md:block md:w-1/2 bg-teal-600 relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=800')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <Heart className="h-16 w-16 mb-6" />
          <h1 className="text-4xl font-bold mb-4 text-center">College Medical Center</h1>
          <p className="text-xl text-center max-w-md">
            Join our healthcare community and get access to quality medical services on campus.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-white">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="flex flex-col space-y-2 text-center mb-8">
            <div className="flex justify-center md:hidden">
              <Heart className="h-10 w-10 text-teal-600" />
            </div>
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">Enter your details to register for an account</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>Use your college email to register</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@college.edu" value={formData.email} onChange={handleChange} />
                <p className="text-xs text-muted-foreground">Must be a valid college email address</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID</Label>
                <Input id="studentId" placeholder="e.g. S12345678" value={formData.studentId} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={formData.password} onChange={handleChange} />
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters with a number and a special character
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="agreeTerms" checked={formData.agreeTerms} onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeTerms: !!checked }))} />
                <Label htmlFor="agreeTerms" className="text-sm font-normal">
                  I agree to the{" "}
                  <Link href="/terms" className="text-teal-600 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-teal-600 hover:underline">
                    Privacy Policy
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link href="/auth/login" className="text-teal-600 hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline">
                <Image src="/placeholder.svg?text=G" width={20} height={20} alt="Google" className="mr-2" />
                Google
              </Button>
              <Button variant="outline">
                <Image src="/placeholder.svg?text=M" width={20} height={20} alt="Microsoft" className="mr-2" />
                Microsoft
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}