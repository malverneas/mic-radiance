import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calendar,
  Users,
  FileText,
  CreditCard,
  AlertCircle,
  Clock,
  CheckCircle,
  TrendingUp,
  Upload,
  Bell,
} from "lucide-react";

const AdminDashboard = () => {
  const todayAppointments = [
    { id: 1, patient: "John Doe", time: "09:00", type: "MRI - Brain", status: "confirmed" },
    { id: 2, patient: "Jane Smith", time: "10:30", type: "CT Scan", status: "in-progress" },
    { id: 3, patient: "Mike Johnson", time: "11:00", type: "Ultrasound", status: "waiting" },
    { id: 4, patient: "Sarah Williams", time: "14:00", type: "X-Ray", status: "confirmed" },
    { id: 5, patient: "Robert Brown", time: "15:30", type: "MRI - Spine", status: "pending" },
  ];

  const alerts = [
    { id: 1, message: "3 reports pending upload", type: "warning" },
    { id: 2, message: "5 patients with payment shortfalls", type: "warning" },
    { id: 3, message: "2 appointment cancellations today", type: "info" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-success text-success-foreground">Confirmed</Badge>;
      case "in-progress":
        return <Badge className="bg-info text-info-foreground">In Progress</Badge>;
      case "waiting":
        return <Badge className="bg-warning text-warning-foreground">Waiting</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Admin Dashboard"
        description="Overview of today's operations and system status"
      >
        <Button asChild className="gradient-primary">
          <Link to="/admin/appointments">
            <Calendar className="mr-2 h-4 w-4" />
            Manage Appointments
          </Link>
        </Button>
      </PageHeader>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Today's Appointments"
          value="12"
          description="3 completed, 9 remaining"
          icon={Calendar}
          variant="primary"
        />
        <StatCard
          title="Pending Reports"
          value="7"
          description="Need to be uploaded"
          icon={FileText}
          variant="warning"
        />
        <StatCard
          title="Payment Issues"
          value="5"
          description="Shortfalls to resolve"
          icon={CreditCard}
          variant="destructive"
        />
        <StatCard
          title="Total Patients"
          value="1,234"
          description="+15 this week"
          icon={Users}
          trend={{ value: 8, isPositive: true }}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Schedule */}
        <Card className="lg:col-span-2 border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Today's Schedule
                </CardTitle>
                <CardDescription>Upcoming appointments for today</CardDescription>
              </div>
              <Button variant="outline" asChild>
                <Link to="/admin/appointments">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead>Time</TableHead>
                    <TableHead>Patient</TableHead>
                    <TableHead>Scan Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {todayAppointments.map((apt) => (
                    <TableRow key={apt.id}>
                      <TableCell className="font-medium">{apt.time}</TableCell>
                      <TableCell>{apt.patient}</TableCell>
                      <TableCell>{apt.type}</TableCell>
                      <TableCell>{getStatusBadge(apt.status)}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Alerts & Actions */}
        <Card className="border-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-warning" />
              Alerts & Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`flex items-start gap-3 p-3 rounded-lg ${
                  alert.type === "warning" ? "bg-warning/10" : "bg-info/10"
                }`}
              >
                <AlertCircle
                  className={`h-4 w-4 mt-0.5 ${
                    alert.type === "warning" ? "text-warning" : "text-info"
                  }`}
                />
                <p className="text-sm text-foreground">{alert.message}</p>
              </div>
            ))}
            <div className="pt-4 space-y-2">
              <Button className="w-full" variant="outline" asChild>
                <Link to="/admin/reports">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Reports
                </Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/admin/payments">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Review Payments
                </Link>
              </Button>
              <Button className="w-full" variant="outline" asChild>
                <Link to="/admin/notifications">
                  <Bell className="mr-2 h-4 w-4" />
                  Send Reminders
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/admin/appointments">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Appointments</p>
              <p className="text-sm text-muted-foreground">Manage bookings</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/patients">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Patients</p>
              <p className="text-sm text-muted-foreground">View records</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/reports">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Upload Reports</p>
              <p className="text-sm text-muted-foreground">Add results</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/admin/feedback">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Feedback</p>
              <p className="text-sm text-muted-foreground">Patient reviews</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
