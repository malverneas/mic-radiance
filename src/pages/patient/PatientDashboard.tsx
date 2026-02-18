import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import {
  Calendar,
  FileText,
  CreditCard,
  Bell,
  Clock,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Download,
} from "lucide-react";

const PatientDashboard = () => {
  // Mock data
  const upcomingAppointment = {
    date: "Feb 12, 2025",
    time: "09:30 AM",
    type: "MRI Scan - Lumbar Spine",
    status: "confirmed",
  };

  const paymentStatus = {
    totalCost: 4500,
    medicalAidCover: 3500,
    shortfall: 1000,
    status: "pending",
  };

  const notifications = [
    {
      id: 1,
      message: "Your appointment is confirmed for Feb 12, 2025",
      time: "2 hours ago",
      type: "success",
    },
    {
      id: 2,
      message: "Payment shortfall of R1,000 detected",
      time: "1 day ago",
      type: "warning",
    },
    {
      id: 3,
      message: "New report available for download",
      time: "3 days ago",
      type: "info",
    },
  ];

  const recentReports = [
    { id: 1, name: "Chest X-Ray", date: "Jan 28, 2025", status: "ready" },
    { id: 2, name: "Blood Work Panel", date: "Jan 15, 2025", status: "ready" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Welcome back, John"
        description="Here's an overview of your radiology appointments and reports."
      >
        <Button asChild className="gradient-primary">
          <Link to="/patient/book">
            <Calendar className="mr-2 h-4 w-4" />
            Book Appointment
          </Link>
        </Button>
      </PageHeader>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Next Appointment"
          value="Feb 12"
          description="MRI Scan at 9:30 AM"
          icon={Calendar}
          variant="primary"
        />
        <StatCard
          title="Payment Due"
          value={`R${paymentStatus.shortfall.toLocaleString()}`}
          description="Medical aid shortfall"
          icon={CreditCard}
          variant="warning"
        />
        <StatCard
          title="Reports Ready"
          value="2"
          description="Available for download"
          icon={FileText}
          variant="success"
        />
        <StatCard
          title="Notifications"
          value="3"
          description="Unread messages"
          icon={Bell}
          variant="default"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Appointment */}
        <Card className="lg:col-span-2 border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Upcoming Appointment
              </CardTitle>
              <Badge variant="default" className="bg-success text-success-foreground">
                <CheckCircle className="mr-1 h-3 w-3" />
                Confirmed
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="flex-1 space-y-1">
                <p className="text-sm text-muted-foreground">Date & Time</p>
                <p className="font-semibold text-foreground">
                  {upcomingAppointment.date} at {upcomingAppointment.time}
                </p>
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-muted-foreground">Scan Type</p>
                <p className="font-semibold text-foreground">{upcomingAppointment.type}</p>
              </div>
            </div>

            {/* Payment Alert */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-warning/10 border border-warning/20">
              <AlertCircle className="h-5 w-5 text-warning mt-0.5" />
              <div className="flex-1">
                <p className="font-medium text-foreground">Payment Information</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Your medical aid covers R{paymentStatus.medicalAidCover.toLocaleString()}.
                  You have a shortfall of{" "}
                  <span className="font-semibold text-warning">
                    R{paymentStatus.shortfall.toLocaleString()}
                  </span>{" "}
                  to pay before your appointment.
                </p>
                <Button variant="outline" size="sm" className="mt-3" asChild>
                  <Link to="/patient/payments">View Payment Details</Link>
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" asChild>
                <Link to="/patient/appointments">View All Appointments</Link>
              </Button>
              <Button className="flex-1 gradient-primary" asChild>
                <Link to="/patient/book">
                  Book New
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-primary" />
                Notifications
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/patient/notifications">View All</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
              >
                <div
                  className={`h-2 w-2 rounded-full mt-2 ${
                    notification.type === "success"
                      ? "bg-success"
                      : notification.type === "warning"
                      ? "bg-warning"
                      : "bg-info"
                  }`}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground">{notification.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Recent Reports */}
      <Card className="border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Recent Reports
              </CardTitle>
              <CardDescription>Your latest radiology reports</CardDescription>
            </div>
            <Button variant="outline" asChild>
              <Link to="/patient/reports">View All Reports</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:grid-cols-2">
            {recentReports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{report.name}</p>
                    <p className="text-sm text-muted-foreground">{report.date}</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link to="/patient/book">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <Calendar className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Book Appointment</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/patient/reports">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">My Reports</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/patient/payments">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <CreditCard className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Payments</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/patient/feedback">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <Clock className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Give Feedback</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default PatientDashboard;
