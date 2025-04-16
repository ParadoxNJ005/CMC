import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { MedicineCard } from "@/components/medicine-card"
import { OrderCard } from "@/components/order-card"
import { FileUp, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function PharmacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pharmacy</h1>

      <Tabs defaultValue="medicines" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="medicines">Medicines</TabsTrigger>
          <TabsTrigger value="prescriptions">My Prescriptions</TabsTrigger>
          <TabsTrigger value="orders">My Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="medicines">
          <div className="mb-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search medicines..." className="pl-8" />
              </div>
              <Button asChild>
                <Link href="/pharmacy/upload-prescription">
                  <FileUp className="mr-2 h-4 w-4" />
                  Upload Prescription
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/pharmacy/cart">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cart (3)
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <MedicineCard
                name="Acetaminophen"
                description="Pain reliever and fever reducer"
                price={8.99}
                image="/placeholder.svg?height=200&width=200"
              />
              <MedicineCard
                name="Ibuprofen"
                description="Anti-inflammatory pain reliever"
                price={7.49}
                image="/placeholder.svg?height=200&width=200"
              />
              <MedicineCard
                name="Loratadine"
                description="Antihistamine for allergy relief"
                price={12.99}
                image="/placeholder.svg?height=200&width=200"
              />
              <MedicineCard
                name="Amoxicillin"
                description="Antibiotic (Prescription required)"
                price={15.99}
                image="/placeholder.svg?height=200&width=200"
                prescriptionRequired
              />
              <MedicineCard
                name="Cetirizine"
                description="24-hour allergy relief"
                price={9.99}
                image="/placeholder.svg?height=200&width=200"
              />
              <MedicineCard
                name="Multivitamin"
                description="Daily nutritional supplement"
                price={14.99}
                image="/placeholder.svg?height=200&width=200"
              />
              <MedicineCard
                name="Omeprazole"
                description="Acid reducer for heartburn"
                price={11.49}
                image="/placeholder.svg?height=200&width=200"
              />
              <MedicineCard
                name="Vitamin C"
                description="Immune system support"
                price={6.99}
                image="/placeholder.svg?height=200&width=200"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="prescriptions">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Prescription #RX12345</CardTitle>
                    <CardDescription>Issued on October 10, 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Doctor:</span>
                    <span className="text-sm">Dr. Sarah Johnson</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Medication:</span>
                    <span className="text-sm">Amoxicillin 500mg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Dosage:</span>
                    <span className="text-sm">1 capsule 3 times daily for 10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Refills:</span>
                    <span className="text-sm">0</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Order Medication</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Prescription #RX12344</CardTitle>
                    <CardDescription>Issued on September 15, 2023</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Doctor:</span>
                    <span className="text-sm">Dr. Emily Rodriguez</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Medication:</span>
                    <span className="text-sm">Sertraline 50mg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Dosage:</span>
                    <span className="text-sm">1 tablet daily</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Refills:</span>
                    <span className="text-sm">3</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Order Medication</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="orders">
          <div className="space-y-6">
            <OrderCard
              orderId="ORD12345"
              date="October 15, 2023"
              items={[
                { name: "Acetaminophen", quantity: 1, price: 8.99 },
                { name: "Multivitamin", quantity: 1, price: 14.99 },
              ]}
              status="processing"
              total={23.98}
            />
            <OrderCard
              orderId="ORD12344"
              date="September 28, 2023"
              items={[{ name: "Amoxicillin", quantity: 1, price: 15.99 }]}
              status="delivered"
              total={15.99}
            />
            <OrderCard
              orderId="ORD12343"
              date="September 10, 2023"
              items={[
                { name: "Ibuprofen", quantity: 1, price: 7.49 },
                { name: "Vitamin C", quantity: 1, price: 6.99 },
              ]}
              status="delivered"
              total={14.48}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
