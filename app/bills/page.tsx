import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BillCard } from "@/components/bill-card"

export default function BillsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">My Bills</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unpaid">Unpaid</TabsTrigger>
          <TabsTrigger value="paid">Paid</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <BillCard
            billId="BILL12345"
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="October 15, 2023"
            amount={75.0}
            status="unpaid"
          />
          <BillCard
            billId="BILL12344"
            doctor="Dr. Michael Chen"
            department="Cardiology"
            date="September 28, 2023"
            amount={125.0}
            status="paid"
          />
          <BillCard
            billId="BILL12343"
            doctor="Dr. Emily Rodriguez"
            department="Psychology"
            date="September 15, 2023"
            amount={100.0}
            status="paid"
          />
          <BillCard
            billId="BILL12342"
            doctor="Dr. James Wilson"
            department="Orthopedics"
            date="August 22, 2023"
            amount={150.0}
            status="paid"
          />
        </TabsContent>

        <TabsContent value="unpaid" className="space-y-6">
          <BillCard
            billId="BILL12345"
            doctor="Dr. Sarah Johnson"
            department="General Medicine"
            date="October 15, 2023"
            amount={75.0}
            status="unpaid"
          />
        </TabsContent>

        <TabsContent value="paid" className="space-y-6">
          <BillCard
            billId="BILL12344"
            doctor="Dr. Michael Chen"
            department="Cardiology"
            date="September 28, 2023"
            amount={125.0}
            status="paid"
          />
          <BillCard
            billId="BILL12343"
            doctor="Dr. Emily Rodriguez"
            department="Psychology"
            date="September 15, 2023"
            amount={100.0}
            status="paid"
          />
          <BillCard
            billId="BILL12342"
            doctor="Dr. James Wilson"
            department="Orthopedics"
            date="August 22, 2023"
            amount={150.0}
            status="paid"
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}
