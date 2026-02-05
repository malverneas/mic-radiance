import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, EyeOff, Users, Stethoscope, Shield } from "lucide-react";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get("role") || "patient";
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultRole);

  const roleInfo = {
    patient: {
      icon: Users,
      title: "Patient Login",
      description: "Access your appointments, reports, and payments",
      color: "primary",
    },
    doctor: {
      icon: Stethoscope,
      title: "Doctor Login",
      description: "View patient reports and manage referrals",
      color: "info",
    },
    admin: {
      icon: Shield,
      title: "Admin Login",
      description: "Manage system operations and users",
      color: "warning",
    },
  };

  const currentRole = roleInfo[activeTab as keyof typeof roleInfo];
  const Icon = currentRole.icon;

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg">
              <span className="text-2xl font-bold text-primary-foreground">M</span>
            </div>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your MIC Radiology account</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="patient" className="flex items-center gap-1.5">
              <Users className="h-4 w-4" />
              <span className="hidden sm:inline">Patient</span>
            </TabsTrigger>
            <TabsTrigger value="doctor" className="flex items-center gap-1.5">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden sm:inline">Doctor</span>
            </TabsTrigger>
            <TabsTrigger value="admin" className="flex items-center gap-1.5">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Admin</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab}>
            <Card className="border-2">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle>{currentRole.title}</CardTitle>
                <CardDescription>{currentRole.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email or Phone</Label>
                  <Input
                    id="email"
                    type="text"
                    placeholder="Enter your email or phone number"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <Eye className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button 
                  className="w-full gradient-primary" 
                  size="lg"
                  asChild
                >
                  <Link to={`/${activeTab}`}>
                    Sign In
                  </Link>
                </Button>
                {activeTab === "patient" && (
                  <p className="text-sm text-center text-muted-foreground">
                    Don't have an account?{" "}
                    <Link to="/register" className="text-primary font-medium hover:underline">
                      Register now
                    </Link>
                  </p>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LoginPage;
