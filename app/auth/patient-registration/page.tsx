import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart } from "lucide-react"

export default function PatientRegistrationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-center mb-8">
        <Heart className="h-8 w-8 text-teal-600 mr-2" />
        <h1 className="text-3xl font-bold">Patient Registration</h1>
      </div>

      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="personal">Personal Info</TabsTrigger>
            <TabsTrigger value="medical">Medical History</TabsTrigger>
            <TabsTrigger value="insurance">Insurance</TabsTrigger>
            <TabsTrigger value="consent">Consent</TabsTrigger>
          </TabsList>

          <TabsContent value="personal">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Please provide your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="middleName">Middle Name</Label>
                    <Input id="middleName" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input id="dob" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select required>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="non-binary">Non-binary</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="name@college.edu" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Textarea id="address" required />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">ZIP Code *</Label>
                    <Input id="zip" required />
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label>Student Status *</Label>
                  <RadioGroup defaultValue="full-time">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full-time" id="full-time" />
                      <Label htmlFor="full-time">Full-time Student</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="part-time" id="part-time" />
                      <Label htmlFor="part-time">Part-time Student</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="faculty" id="faculty" />
                      <Label htmlFor="faculty">Faculty/Staff</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="studentId">Student/Employee ID *</Label>
                  <Input id="studentId" required />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link href="/">Cancel</Link>
                </Button>
                <Button>Next: Medical History</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="medical">
            <Card>
              <CardHeader>
                <CardTitle>Medical History</CardTitle>
                <CardDescription>Please provide your medical history information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="primaryCare">Primary Care Physician</Label>
                    <Input id="primaryCare" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Select>
                      <SelectTrigger id="bloodType">
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a-positive">A+</SelectItem>
                        <SelectItem value="a-negative">A-</SelectItem>
                        <SelectItem value="b-positive">B+</SelectItem>
                        <SelectItem value="b-negative">B-</SelectItem>
                        <SelectItem value="ab-positive">AB+</SelectItem>
                        <SelectItem value="ab-negative">AB-</SelectItem>
                        <SelectItem value="o-positive">O+</SelectItem>
                        <SelectItem value="o-negative">O-</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="allergies">Allergies</Label>
                  <Textarea id="allergies" placeholder="List any allergies to medications, food, or other substances" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea
                    id="medications"
                    placeholder="List any medications you are currently taking, including dosage"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="conditions">Medical Conditions</Label>
                  <Textarea
                    id="conditions"
                    placeholder="List any chronic medical conditions or significant past medical history"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="surgeries">Previous Surgeries</Label>
                  <Textarea id="surgeries" placeholder="List any previous surgeries with approximate dates" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="familyHistory">Family Medical History</Label>
                  <Textarea
                    id="familyHistory"
                    placeholder="List any significant family medical history (e.g., heart disease, cancer, diabetes)"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Do you smoke?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="smoke-yes" />
                      <Label htmlFor="smoke-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="smoke-no" />
                      <Label htmlFor="smoke-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="former" id="smoke-former" />
                      <Label htmlFor="smoke-former">Former smoker</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Do you consume alcohol?</Label>
                  <RadioGroup defaultValue="no">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="alcohol-yes" />
                      <Label htmlFor="alcohol-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="alcohol-no" />
                      <Label htmlFor="alcohol-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="occasional" id="alcohol-occasional" />
                      <Label htmlFor="alcohol-occasional">Occasionally</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: Personal Info</Button>
                <Button>Next: Insurance</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="insurance">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Information</CardTitle>
                <CardDescription>Please provide your health insurance details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>Insurance Type</Label>
                  <RadioGroup defaultValue="student">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="student" id="student-insurance" />
                      <Label htmlFor="student-insurance">Student Health Insurance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="private" id="private-insurance" />
                      <Label htmlFor="private-insurance">Private Insurance</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="government" id="government-insurance" />
                      <Label htmlFor="government-insurance">Government Insurance (Medicare/Medicaid)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="no-insurance" />
                      <Label htmlFor="no-insurance">No Insurance</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="insuranceProvider">Insurance Provider</Label>
                    <Input id="insuranceProvider" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policyNumber">Policy Number</Label>
                    <Input id="policyNumber" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="groupNumber">Group Number</Label>
                    <Input id="groupNumber" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="policyHolder">Policy Holder Name (if not self)</Label>
                    <Input id="policyHolder" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="insuranceUpload">Upload Insurance Card (Front and Back)</Label>
                  <Input id="insuranceUpload" type="file" multiple />
                  <p className="text-xs text-muted-foreground">
                    Please upload clear images of the front and back of your insurance card
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: Medical History</Button>
                <Button>Next: Consent</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="consent">
            <Card>
              <CardHeader>
                <CardTitle>Consent and Agreements</CardTitle>
                <CardDescription>Please review and agree to the following terms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border rounded-md p-4 bg-gray-50">
                    <h3 className="font-medium mb-2">Consent for Treatment</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I voluntarily consent to medical treatment and diagnostic procedures provided by the College
                      Medical Center and its associated physicians, clinicians, and other personnel. I authorize the
                      healthcare providers to perform and administer care and treatment as they deem necessary.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="consent-treatment" required />
                      <Label htmlFor="consent-treatment" className="text-sm font-normal">
                        I agree to the Consent for Treatment
                      </Label>
                    </div>
                  </div>

                  <div className="border rounded-md p-4 bg-gray-50">
                    <h3 className="font-medium mb-2">Privacy Practices Acknowledgment</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I acknowledge that I have received or have been offered a copy of the College Medical Center's
                      Notice of Privacy Practices, which provides information about how my health information may be
                      used and disclosed.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="privacy-acknowledgment" required />
                      <Label htmlFor="privacy-acknowledgment" className="text-sm font-normal">
                        I acknowledge the Privacy Practices
                      </Label>
                    </div>
                  </div>

                  <div className="border rounded-md p-4 bg-gray-50">
                    <h3 className="font-medium mb-2">Financial Agreement</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I understand that I am financially responsible for any charges not covered by my insurance and
                      agree to pay any co-payments, deductibles, or fees for services not covered by my insurance.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="financial-agreement" required />
                      <Label htmlFor="financial-agreement" className="text-sm font-normal">
                        I agree to the Financial Agreement
                      </Label>
                    </div>
                  </div>

                  <div className="border rounded-md p-4 bg-gray-50">
                    <h3 className="font-medium mb-2">Emergency Contact Authorization</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      I authorize the College Medical Center to contact my designated emergency contact in case of an
                      emergency.
                    </p>
                    <div className="space-y-2 mt-2">
                      <Label htmlFor="emergencyName">Emergency Contact Name</Label>
                      <Input id="emergencyName" required />
                    </div>
                    <div className="space-y-2 mt-2">
                      <Label htmlFor="emergencyRelation">Relationship</Label>
                      <Input id="emergencyRelation" required />
                    </div>
                    <div className="space-y-2 mt-2">
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                      <Input id="emergencyPhone" type="tel" required />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="information-accurate" required />
                  <Label htmlFor="information-accurate" className="text-sm font-normal">
                    I certify that the information provided is accurate and complete to the best of my knowledge
                  </Label>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Previous: Insurance</Button>
                <Button>Submit Registration</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
