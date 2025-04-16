import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function AdminMedicineList() {
  const medicines = [
    {
      id: "MED001",
      name: "Acetaminophen",
      category: "Pain Relief",
      stock: 120,
      price: 8.99,
      status: "in-stock",
    },
    {
      id: "MED002",
      name: "Ibuprofen",
      category: "Pain Relief",
      stock: 85,
      price: 7.49,
      status: "in-stock",
    },
    {
      id: "MED003",
      name: "Loratadine",
      category: "Allergy",
      stock: 65,
      price: 12.99,
      status: "in-stock",
    },
    {
      id: "MED004",
      name: "Amoxicillin",
      category: "Antibiotic",
      stock: 10,
      price: 15.99,
      status: "low-stock",
    },
    {
      id: "MED005",
      name: "Cetirizine",
      category: "Allergy",
      stock: 0,
      price: 9.99,
      status: "out-of-stock",
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "in-stock":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Stock</Badge>
      case "low-stock":
        return <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Low Stock</Badge>
      case "out-of-stock":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Out of Stock</Badge>
      default:
        return null
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-muted-foreground">Showing {medicines.length} medicines</div>
        <Button size="sm">Add Medicine</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicines.map((medicine) => (
              <TableRow key={medicine.id}>
                <TableCell className="font-medium">{medicine.name}</TableCell>
                <TableCell>{medicine.category}</TableCell>
                <TableCell>${medicine.price.toFixed(2)}</TableCell>
                <TableCell>{medicine.stock} units</TableCell>
                <TableCell>{getStatusBadge(medicine.status)}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
