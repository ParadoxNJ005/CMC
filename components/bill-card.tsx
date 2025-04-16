import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, CreditCard, User } from "lucide-react"
import Link from "next/link"

interface BillCardProps {
  billId: string
  doctor: string
  department: string
  date: string
  amount: number
  status: "paid" | "unpaid"
}

export function BillCard({ billId, doctor, department, date, amount, status }: BillCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "paid":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Paid</Badge>
      case "unpaid":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Unpaid</Badge>
      default:
        return null
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">Bill #{billId}</CardTitle>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid gap-2">
          <div className="flex items-center text-sm">
            <User className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>
              {doctor} - {department}
            </span>
          </div>
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <CreditCard className="mr-2 h-4 w-4 text-muted-foreground" />
            <span className="font-medium">${amount.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/bills/${billId}`}>View Details</Link>
        </Button>
        {status === "unpaid" && <Button size="sm">Pay Now</Button>}
      </CardFooter>
    </Card>
  )
}
