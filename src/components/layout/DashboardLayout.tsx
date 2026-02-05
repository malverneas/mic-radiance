import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  LayoutDashboard,
  Calendar,
  FileText,
  CreditCard,
  Bell,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  Upload,
  Stethoscope,
  ChevronDown,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface DashboardLayoutProps {
  userType: "patient" | "admin" | "doctor";
}

const patientNavItems: NavItem[] = [
  { href: "/patient", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/patient/appointments", label: "My Appointments", icon: <Calendar className="h-4 w-4" /> },
  { href: "/patient/book", label: "Book Appointment", icon: <Calendar className="h-4 w-4" /> },
  { href: "/patient/reports", label: "My Reports", icon: <FileText className="h-4 w-4" /> },
  { href: "/patient/payments", label: "Payments", icon: <CreditCard className="h-4 w-4" /> },
  { href: "/patient/notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  { href: "/patient/feedback", label: "Feedback", icon: <MessageSquare className="h-4 w-4" /> },
];

const adminNavItems: NavItem[] = [
  { href: "/admin", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/admin/appointments", label: "Appointments", icon: <Calendar className="h-4 w-4" /> },
  { href: "/admin/patients", label: "Patients", icon: <Users className="h-4 w-4" /> },
  { href: "/admin/reports", label: "Upload Reports", icon: <Upload className="h-4 w-4" /> },
  { href: "/admin/payments", label: "Payments", icon: <CreditCard className="h-4 w-4" /> },
  { href: "/admin/notifications", label: "Notifications", icon: <Bell className="h-4 w-4" /> },
  { href: "/admin/feedback", label: "Feedback", icon: <MessageSquare className="h-4 w-4" /> },
];

const doctorNavItems: NavItem[] = [
  { href: "/doctor", label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
  { href: "/doctor/patients", label: "My Patients", icon: <Users className="h-4 w-4" /> },
  { href: "/doctor/reports", label: "View Reports", icon: <FileText className="h-4 w-4" /> },
  { href: "/doctor/feedback", label: "Feedback", icon: <MessageSquare className="h-4 w-4" /> },
];

const DashboardLayout = ({ userType }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems =
    userType === "patient"
      ? patientNavItems
      : userType === "admin"
      ? adminNavItems
      : doctorNavItems;

  const userInfo = {
    patient: { name: "John Doe", email: "john@example.com", role: "Patient" },
    admin: { name: "Admin User", email: "admin@micradiology.co.za", role: "Administrator" },
    doctor: { name: "Dr. Smith", email: "dr.smith@hospital.co.za", role: "Referring Doctor" },
  }[userType];

  const handleLogout = () => {
    navigate("/");
  };

  const Sidebar = ({ isMobile = false }: { isMobile?: boolean }) => (
    <div className={`flex h-full flex-col ${isMobile ? "" : "border-r border-border"}`}>
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <span className="text-lg font-bold text-primary-foreground">M</span>
          </div>
          <span className="font-bold text-foreground">MIC Radiology</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => isMobile && setSidebarOpen(false)}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User section */}
      <div className="border-t border-border p-3">
        <Link
          to={`/${userType}/settings`}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-card">
        <Sidebar />
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col lg:pl-64">
        {/* Top header */}
        <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b border-border bg-card/95 backdrop-blur px-4 lg:px-6">
          {/* Mobile menu */}
          <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-0">
              <Sidebar isMobile />
            </SheetContent>
          </Sheet>

          <div className="flex-1" />

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-xs text-destructive-foreground">
              3
            </span>
          </Button>

          {/* User dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                    {userInfo.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="hidden md:flex flex-col items-start">
                  <span className="text-sm font-medium">{userInfo.name}</span>
                  <span className="text-xs text-muted-foreground">{userInfo.role}</span>
                </div>
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span>{userInfo.name}</span>
                  <span className="text-xs font-normal text-muted-foreground">{userInfo.email}</span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to={`/${userType}/settings`} className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
