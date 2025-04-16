import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Download, User } from "lucide-react"
import Link from "next/link"

export default function BillDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you would fetch the bill data based on the ID
  const bill = {
    id: params.id,
    doctor: "Dr. Sarah Johnson",
    department: "General Medicine",
    date: "October 15, 2023",
    dueDate: "November 15, 2023",
    status: "unpaid",
    items: [
      { description: "Consultation Fee", amount: 50.0 },
      { description: "Lab Tests", amount: 25.0 },
    ],
    subtotal: 75.0,
    tax: 0.0,
    total: 75.0,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/bills" className="text-sm text-muted-foreground hover:underline mb-4 inline-block">
        ← Back to Bills
      </Link>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl">Bill #{bill.id}</CardTitle>
                  <CardDescription>Issued on {bill.date}</CardDescription>
                </div>
                <Badge
                  className={
                    bill.status === "paid"
                      ? "bg-green-100 text-green-800 hover:bg-green-100"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-100"
                  }
                >
                  {bill.status === "paid" ? "Paid" : "Unpaid"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Bill From</h3>
                  <p className="text-sm">College Medical Center</p>
                  <p className="text-sm">123 College Avenue</p>
                  <p className="text-sm">University Town, UT 12345</p>
                  <p className="text-sm">billing@college.edu</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Bill To</h3>
                  <p className="text-sm">Sarah Connor</p>
                  <p className="text-sm">Student ID: S12345678</p>
                  <p className="text-sm">sarah.connor@college.edu</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <User className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>
                    {bill.doctor} - {bill.department}
                  </span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Service Date: {bill.date}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                  <span>Due Date: {bill.dueDate}</span>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium mb-4">Bill Details</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 text-sm font-medium">
                    <div>Description</div>
                    <div className="text-right">Amount</div>
                    <div></div>
                  </div>

                  {bill.items.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 text-sm">
                      <div>{item.description}</div>
                      <div className="text-right">${item.amount.toFixed(2)}</div>
                      <div></div>
                    </div>
                  ))}

                  <Separator />

                  <div className="grid grid-cols-3 text-sm">
                    <div className="col-span-2 text-right font-medium">Subtotal</div>
                    <div className="text-right">${bill.subtotal.toFixed(2)}</div>
                  </div>

                  <div className="grid grid-cols-3 text-sm">
                    <div className="col-span-2 text-right font-medium">Tax</div>
                    <div className="text-right">${bill.tax.toFixed(2)}</div>
                  </div>

                  <div className="grid grid-cols-3 text-sm font-bold">
                    <div className="col-span-2 text-right">Total</div>
                    <div className="text-right">${bill.total.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
              {bill.status === "unpaid" && <Button size="sm">Pay Now</Button>}
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Choose how you want to pay</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="credit-card" name="payment-method" className="h-4 w-4" />
                  <label htmlFor="credit-card" className="text-sm font-medium">
                    Credit Card
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="debit-card" name="payment-method" className="h-4 w-4" />
                  <label htmlFor="debit-card" className="text-sm font-medium">
                    Debit Card
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="student-account" name="payment-method" className="h-4 w-4" checked />
                  <label htmlFor="student-account" className="text-sm font-medium">
                    Student Account
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="insurance" name="payment-method" className="h-4 w-4" />
                  <label htmlFor="insurance" className="text-sm font-medium">
                    Insurance
                  </label>
                </div>
              </div>

              <Button className="w-full">Proceed to Payment</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
