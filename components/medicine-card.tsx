import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface MedicineCardProps {
  name: string
  description: string
  price: number
  image: string
  prescriptionRequired?: boolean
}

export function MedicineCard({ name, description, price, image, prescriptionRequired }: MedicineCardProps) {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-4 pb-0">
        <div className="aspect-square relative rounded-md overflow-hidden mb-2">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2 flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium">{name}</h3>
          {prescriptionRequired && (
            <Badge variant="outline" className="text-xs">
              Rx
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="font-medium">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" disabled={prescriptionRequired}>
          {prescriptionRequired ? "Prescription Required" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
