import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";
import {
  Bell,
  CheckCircle,
  Calendar,
  FileText,
  CreditCard,
  AlertCircle,
} from "lucide-react";

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      title: "Appointment Confirmed",
      message: "Your MRI scan appointment on Feb 12, 2025 at 9:30 AM has been confirmed.",
      time: "2 hours ago",
      type: "success",
      icon: Calendar,
      read: false,
    },
    {
      id: 2,
      title: "Payment Shortfall Detected",
      message:
        "Your medical aid covers R3,500 of your upcoming scan. A shortfall of R1,000 is due before your appointment.",
      time: "1 day ago",
      type: "warning",
      icon: CreditCard,
      read: false,
    },
    {
      id: 3,
      title: "Report Available",
      message: "Your Chest X-Ray report from Jan 28, 2025 is now ready for download.",
      time: "3 days ago",
      type: "info",
      icon: FileText,
      read: true,
    },
    {
      id: 4,
      title: "Appointment Reminder",
      message: "Reminder: You have an appointment tomorrow at 10:00 AM for CT Scan.",
      time: "5 days ago",
      type: "default",
      icon: Bell,
      read: true,
    },
    {
      id: 5,
      title: "Payment Received",
      message: "Thank you! Your payment of R800 has been received.",
      time: "1 week ago",
      type: "success",
      icon: CheckCircle,
      read: true,
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case "success":
        return "border-l-success bg-success/5";
      case "warning":
        return "border-l-warning bg-warning/5";
      case "info":
        return "border-l-info bg-info/5";
      default:
        return "border-l-primary bg-secondary/30";
    }
  };

  const getIconStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-success/20 text-success";
      case "warning":
        return "bg-warning/20 text-warning";
      case "info":
        return "bg-info/20 text-info";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Notifications"
        description="Stay updated with your appointments and reports"
      >
        <Button variant="outline" size="sm">
          Mark all as read
        </Button>
      </PageHeader>

      <div className="space-y-3">
        {notifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <Card
              key={notification.id}
              className={`border-l-4 transition-all hover:shadow-md ${getTypeStyles(
                notification.type
              )} ${!notification.read ? "ring-2 ring-primary/20" : ""}`}
            >
              <CardContent className="py-4">
                <div className="flex items-start gap-4">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${getIconStyles(
                      notification.type
                    )}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-foreground">
                          {notification.title}
                          {!notification.read && (
                            <Badge variant="secondary" className="ml-2 text-xs">
                              New
                            </Badge>
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {notification.message}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      {notification.time}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default NotificationsPage;
