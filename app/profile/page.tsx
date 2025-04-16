"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, FileText, Mail, Phone, Shield, User } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  // Mock user data
  const user = {
    name: "Sarah Connor",
    email: "sarah.connor@college.edu",
    studentId: "S12345678",
    phone: "(555) 123-4567",
    dateOfBirth: "May 12, 1998",
    address: "Campus Residence Hall, Room 302\nUniversity Town, UT 12345",
    emergencyContact: "John Connor\n(555) 987-6543\nRelation: Brother",
    bloodType: "O+",
    allergies: "Penicillin",
    medicalConditions: "Asthma",
    insuranceProvider: "Student Health Insurance",
    insuranceNumber: "SHI-987654321",
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="h-32 w-32 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-sm text-muted-foreground mb-2">{user.email}</p>
                <Badge className="mb-4">Student</Badge>
                <Button variant="outline" size="sm" className="mb-6">
                  Change Photo
                </Button>

                <div className="w-full space-y-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Student ID: {user.studentId}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">DOB: {user.dateOfBirth}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="personal">Personal Information</TabsTrigger>
              <TabsTrigger value="medical">Medical Information</TabsTrigger>
              <TabsTrigger value="insurance">Insurance</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Manage your personal details</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      {isEditing ? (
                        <Input id="fullName" defaultValue={user.name} />
                      ) : (
                        <div className="text-sm font-medium">{user.name}</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      {isEditing ? (
                        <Input id="email" defaultValue={user.email} disabled />
                      ) : (
                        <div className="text-sm font-medium">{user.email}</div>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      {isEditing ? (
                        <Input id="phone" defaultValue={user.phone} />
                      ) : (
                        <div className="text-sm font-medium">{user.phone}</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      {isEditing ? (
                        <Input id="dob" defaultValue={user.dateOfBirth} />
                      ) : (
                        <div className="text-sm font-medium">{user.dateOfBirth}</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    {isEditing ? (
                      <Textarea id="address" defaultValue={user.address} rows={3} />
                    ) : (
                      <div className="text-sm font-medium whitespace-pre-line">{user.address}</div>
                    )}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <Label htmlFor="emergency">Emergency Contact</Label>
                    {isEditing ? (
                      <Textarea id="emergency" defaultValue={user.emergencyContact} rows={3} />
                    ) : (
                      <div className="text-sm font-medium whitespace-pre-line">{user.emergencyContact}</div>
                    )}
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter>
                    <Button className="ml-auto">Save Changes</Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="medical">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Medical Information</CardTitle>
                    <CardDescription>Your health information</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">Blood Type</Label>
                      {isEditing ? (
                        <Input id="bloodType" defaultValue={user.bloodType} />
                      ) : (
                        <div className="text-sm font-medium">{user.bloodType}</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="allergies">Allergies</Label>
                      {isEditing ? (
                        <Input id="allergies" defaultValue={user.allergies} />
                      ) : (
                        <div className="text-sm font-medium">{user.allergies}</div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="conditions">Medical Conditions</Label>
                    {isEditing ? (
                      <Textarea id="conditions" defaultValue={user.medicalConditions} rows={3} />
                    ) : (
                      <div className="text-sm font-medium whitespace-pre-line">{user.medicalConditions}</div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Your medical information is private and protected
                    </span>
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter>
                    <Button className="ml-auto">Save Changes</Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="insurance">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Insurance Information</CardTitle>
                    <CardDescription>Your health insurance details</CardDescription>
                  </div>
                  <Button variant="outline" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? "Cancel" : "Edit"}
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="provider">Insurance Provider</Label>
                      {isEditing ? (
                        <Input id="provider" defaultValue={user.insuranceProvider} />
                      ) : (
                        <div className="text-sm font-medium">{user.insuranceProvider}</div>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="policyNumber">Policy Number</Label>
                      {isEditing ? (
                        <Input id="policyNumber" defaultValue={user.insuranceNumber} />
                      ) : (
                        <div className="text-sm font-medium">{user.insuranceNumber}</div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-md">
                    <FileText className="h-6 w-6 text-blue-500" />
                    <div>
                      <h4 className="font-medium">Insurance Card</h4>
                      <p className="text-sm text-muted-foreground">Upload a copy of your insurance card</p>
                    </div>
                    <Button variant="outline" size="sm" className="ml-auto">
                      Upload
                    </Button>
                  </div>
                </CardContent>
                {isEditing && (
                  <CardFooter>
                    <Button className="ml-auto">Save Changes</Button>
                  </CardFooter>
                )}
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Notifications</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="email-notifications" className="font-medium">
                          Email Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive appointment reminders via email</p>
                      </div>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="sms-notifications" className="font-medium">
                          SMS Notifications
                        </Label>
                        <p className="text-sm text-muted-foreground">Receive appointment reminders via SMS</p>
                      </div>
                      <Switch id="sms-notifications" defaultChecked />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Security</h3>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full sm:w-auto">
                        Change Password
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="two-factor" className="font-medium">
                          Two-Factor Authentication
                        </Label>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                      </div>
                      <Switch id="two-factor" />
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Privacy</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-sharing" className="font-medium">
                          Data Sharing
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Allow sharing of anonymized data for research purposes
                        </p>
                      </div>
                      <Switch id="data-sharing" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="destructive" className="ml-auto">
                    Delete Account
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
