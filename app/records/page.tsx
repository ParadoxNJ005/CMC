import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecordCard } from "@/components/record-card"
import { Upload } from "lucide-react"
import Link from "next/link"

export default function MedicalRecordsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h1 className="text-3xl font-bold">Medical Records</h1>
        <Button asChild className="mt-4 md:mt-0">
          <Link href="/records/upload">
            <Upload className="mr-2 h-4 w-4" />
            Upload Document
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="consultations" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="consultations">Consultations</TabsTrigger>
          <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          <TabsTrigger value="lab-reports">Lab Reports</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="consultations" className="space-y-6">
          <RecordCard
            title="General Check-up"
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="October 15, 2023"
            type="consultation"
            description="Routine health check-up and wellness assessment"
          />
          <RecordCard
            title="Cardiology Consultation"
            doctor="Dr. Michael Chen"
            department="Cardiology"
            date="September 28, 2023"
            type="consultation"
            description="Evaluation of heart health and cardiovascular system"
          />
          <RecordCard
            title="Therapy Session"
            doctor="Dr. Emily Rodriguez"
            department="Psychology"
            date="September 15, 2023"
            type="consultation"
            description="Mental health counseling and stress management"
          />
          <RecordCard
            title="Sports Injury Assessment"
            doctor="Dr. James Wilson"
            department="Orthopedics"
            date="August 22, 2023"
            type="consultation"
            description="Evaluation and treatment plan for ankle sprain"
          />
        </TabsContent>

        <TabsContent value="prescriptions" className="space-y-6">
          <RecordCard
            title="Amoxicillin 500mg"
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="October 10, 2023"
            type="prescription"
            description="1 capsule 3 times daily for 10 days"
          />
          <RecordCard
            title="Sertraline 50mg"
            doctor="Dr. Emily Rodriguez"
            department="Psychology"
            date="September 15, 2023"
            type="prescription"
            description="1 tablet daily"
          />
        </TabsContent>

        <TabsContent value="lab-reports" className="space-y-6">
          <RecordCard
            title="Complete Blood Count (CBC)"
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="October 15, 2023"
            type="lab-report"
            description="Routine blood work to check overall health"
          />
          <RecordCard
            title="Lipid Panel"
            doctor="Dr. Michael Chen"
            department="Cardiology"
            date="September 28, 2023"
            type="lab-report"
            description="Cholesterol and triglycerides assessment"
          />
        </TabsContent>

        <TabsContent value="documents" className="space-y-6">
          <RecordCard
            title="Immunization Records"
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="August 10, 2023"
            type="document"
            description="Complete vaccination history"
          />
          <RecordCard
            title="Medical Clearance Form"
            doctor="Dr. James Wilson"
            department="Orthopedics"
            date="July 15, 2023"
            type="document"
            description="Sports participation clearance"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
