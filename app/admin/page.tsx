import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminAppointmentList } from "@/components/admin-appointment-list"
import { AdminDoctorList } from "@/components/admin-doctor-list"
import { AdminMedicineList } from "@/components/admin-medicine-list"
import { AdminAnnouncementList } from "@/components/admin-announcement-list"
import { Activity, CalendarIcon, CreditCard, DollarSign, Users } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,853</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <p className="text-xs text-muted-foreground">6 more than yesterday</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,234</div>
              <p className="text-xs text-muted-foreground">+8% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Doctors</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">2 on leave today</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="appointments" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="doctors">Doctors</TabsTrigger>
                <TabsTrigger value="medicines">Medicines</TabsTrigger>
                <TabsTrigger value="announcements">Announcements</TabsTrigger>
              </TabsList>

              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Manage and view all scheduled appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminAppointmentList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="doctors">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Doctors</CardTitle>
                    <CardDescription>Add, edit, or remove doctor profiles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminDoctorList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="medicines">
                <Card>
                  <CardHeader>
                    <CardTitle>Medicine Inventory</CardTitle>
                    <CardDescription>Manage pharmacy inventory and stock levels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminMedicineList />
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="announcements">
                <Card>
                  <CardHeader>
                    <CardTitle>Manage Announcements</CardTitle>
                    <CardDescription>Create and edit announcements for the medical center</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <AdminAnnouncementList />
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>View and manage appointments</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar mode="single" className="rounded-md border" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
                <CardDescription>Latest payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { id: "PAY12345", patient: "Sarah Connor", amount: 75.0, date: "Oct 15" },
                    { id: "PAY12344", patient: "John Smith", amount: 125.0, date: "Oct 14" },
                    { id: "PAY12343", patient: "Emily Davis", amount: 100.0, date: "Oct 12" },
                  ].map((payment) => (
                    <div key={payment.id} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{payment.patient}</p>
                          <p className="text-xs text-muted-foreground">{payment.date}</p>
                        </div>
                      </div>
                      <div className="text-sm font-medium">${payment.amount.toFixed(2)}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
