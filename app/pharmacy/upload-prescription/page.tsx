import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileUp } from "lucide-react"
import Link from "next/link"

export default function UploadPrescriptionPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-6">
        <Link href="/pharmacy" className="text-sm text-muted-foreground hover:underline mr-4">
          ← Back to Pharmacy
        </Link>
        <h1 className="text-3xl font-bold">Upload Prescription</h1>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Prescription Upload</CardTitle>
            <CardDescription>Upload your prescription to order medication</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="prescription">Prescription Image</Label>
              <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                <FileUp className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drag and drop your prescription image here, or click to browse
                </p>
                <Input id="prescription" type="file" className="max-w-sm" />
              </div>
              <p className="text-xs text-muted-foreground">Accepted formats: JPG, PNG, PDF. Max size: 5MB</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="doctor">Prescribing Doctor</Label>
              <Input id="doctor" placeholder="Dr. Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes</Label>
              <Textarea id="notes" placeholder="Any special instructions or notes for the pharmacist" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="delivery">Delivery Address</Label>
              <Textarea
                id="delivery"
                placeholder="Enter your delivery address"
                defaultValue="Campus Residence Hall, Room 302
University Town, UT 12345"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" asChild>
              <Link href="/pharmacy">Cancel</Link>
            </Button>
            <Button>Submit Prescription</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
