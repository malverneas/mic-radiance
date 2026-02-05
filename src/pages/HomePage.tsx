import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  FileText,
  CreditCard,
  Bell,
  Shield,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Stethoscope,
  Scan,
  Activity,
  Phone,
} from "lucide-react";
import heroImage from "@/assets/hero-radiology.jpg";

const HomePage = () => {
  const services = [
    {
      icon: Scan,
      title: "MRI Scans",
      description: "Advanced magnetic resonance imaging for detailed internal body images.",
    },
    {
      icon: Activity,
      title: "CT Scans",
      description: "Computed tomography for cross-sectional imaging of bones and tissues.",
    },
    {
      icon: Stethoscope,
      title: "Ultrasound",
      description: "Safe, non-invasive imaging using sound waves for real-time results.",
    },
  ];

  const features = [
    {
      icon: Calendar,
      title: "Easy Online Booking",
      description: "Book your radiology appointment online in just a few clicks.",
    },
    {
      icon: CreditCard,
      title: "Upfront Cost Information",
      description: "Know your medical aid coverage and any shortfalls before your visit.",
    },
    {
      icon: Bell,
      title: "SMS & Email Reminders",
      description: "Never miss an appointment with automatic notifications.",
    },
    {
      icon: FileText,
      title: "Digital Reports",
      description: "Access and download your radiology reports securely online.",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your medical data is protected with enterprise-grade security.",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Get your results quickly with our efficient reporting system.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50K+", label: "Patients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24h", label: "Report Turnaround" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="MIC Radiology Center"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        <div className="container relative py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <CheckCircle className="h-4 w-4" />
              Trusted Diagnostic Imaging
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Advanced Radiology{" "}
              <span className="text-primary">Care for You</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience seamless diagnostic imaging with online booking, instant
              payment information, automated reminders, and secure digital reports.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild className="gradient-primary shadow-lg hover:shadow-xl transition-shadow">
                <Link to="/register">
                  Book Appointment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">Patient Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container py-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Imaging Services
            </h2>
            <p className="text-muted-foreground">
              State-of-the-art diagnostic imaging technology operated by experienced
              radiologists for accurate results.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group hover:shadow-lg transition-all border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Why Choose MIC Radiology?
            </h2>
            <p className="text-muted-foreground">
              We've designed every step of your journey to be simple, transparent,
              and stress-free.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Access Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Access Your Portal
            </h2>
            <p className="text-muted-foreground">
              Secure login for patients, doctors, and staff.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all border-2 hover:border-primary group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Users className="h-8 w-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <CardTitle>Patient Portal</CardTitle>
                <CardDescription>
                  Book appointments, view reports, and manage payments
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild className="w-full gradient-primary">
                  <Link to="/login?role=patient">Patient Login</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-2 hover:border-info group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-info/10 flex items-center justify-center group-hover:bg-info group-hover:text-info-foreground transition-colors">
                  <Stethoscope className="h-8 w-8 text-info group-hover:text-info-foreground" />
                </div>
                <CardTitle>Doctor Portal</CardTitle>
                <CardDescription>
                  Access patient reports and referral management
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" className="w-full border-info text-info hover:bg-info hover:text-info-foreground">
                  <Link to="/login?role=doctor">Doctor Login</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all border-2 hover:border-warning group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-warning/10 flex items-center justify-center group-hover:bg-warning group-hover:text-warning-foreground transition-colors">
                  <Shield className="h-8 w-8 text-warning group-hover:text-warning-foreground" />
                </div>
                <CardTitle>Admin Portal</CardTitle>
                <CardDescription>
                  Manage appointments, reports, and system settings
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <Button asChild variant="outline" className="w-full border-warning text-warning hover:bg-warning hover:text-warning-foreground">
                  <Link to="/login?role=admin">Admin Login</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero text-primary-foreground">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">
              Ready to Book Your Appointment?
            </h2>
            <p className="text-primary-foreground/80 text-lg">
              Join thousands of patients who trust MIC Radiology for their
              diagnostic imaging needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                asChild
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link to="/register">
                  Create Account
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="tel:+27123456789">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
