import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import DashboardLayout from "./components/layout/DashboardLayout";

// Public Pages
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFound from "./pages/NotFound";

// Patient Pages
import PatientDashboard from "./pages/patient/PatientDashboard";
import BookAppointmentPage from "./pages/patient/BookAppointmentPage";
import PatientReportsPage from "./pages/patient/PatientReportsPage";
import PatientPaymentsPage from "./pages/patient/PatientPaymentsPage";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";

// Doctor Pages
import DoctorDashboard from "./pages/doctor/DoctorDashboard";

// Shared Pages
import FeedbackPage from "./pages/shared/FeedbackPage";
import NotificationsPage from "./pages/shared/NotificationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Patient Routes */}
          <Route element={<DashboardLayout userType="patient" />}>
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/patient/book" element={<BookAppointmentPage />} />
            <Route path="/patient/appointments" element={<PatientDashboard />} />
            <Route path="/patient/reports" element={<PatientReportsPage />} />
            <Route path="/patient/payments" element={<PatientPaymentsPage />} />
            <Route path="/patient/notifications" element={<NotificationsPage />} />
            <Route path="/patient/feedback" element={<FeedbackPage />} />
          </Route>

          {/* Admin Routes */}
          <Route element={<DashboardLayout userType="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/appointments" element={<AdminDashboard />} />
            <Route path="/admin/patients" element={<AdminDashboard />} />
            <Route path="/admin/reports" element={<AdminDashboard />} />
            <Route path="/admin/payments" element={<AdminDashboard />} />
            <Route path="/admin/notifications" element={<NotificationsPage />} />
            <Route path="/admin/feedback" element={<FeedbackPage />} />
          </Route>

          {/* Doctor Routes */}
          <Route element={<DashboardLayout userType="doctor" />}>
            <Route path="/doctor" element={<DoctorDashboard />} />
            <Route path="/doctor/patients" element={<DoctorDashboard />} />
            <Route path="/doctor/reports" element={<DoctorDashboard />} />
            <Route path="/doctor/feedback" element={<FeedbackPage />} />
          </Route>

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
