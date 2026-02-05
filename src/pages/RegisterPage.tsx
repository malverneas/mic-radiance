import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, CheckCircle } from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const benefits = [
    "Book appointments online 24/7",
    "Get payment info before your visit",
    "Receive SMS & email reminders",
    "Download reports securely",
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Benefits */}
          <div className="hidden lg:block space-y-6 pr-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Join MIC Radiology
              </h1>
              <p className="text-muted-foreground text-lg">
                Create your account to access our full range of services.
              </p>
            </div>
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="text-center mb-6 lg:hidden">
              <Link to="/" className="inline-flex items-center gap-2 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-lg">
                  <span className="text-2xl font-bold text-primary-foreground">M</span>
                </div>
              </Link>
              <h1 className="text-2xl font-bold text-foreground">Create Account</h1>
              <p className="text-muted-foreground">Join MIC Radiology today</p>
            </div>

            <Card className="border-2">
              <CardHeader className="hidden lg:block">
                <CardTitle>Patient Registration</CardTitle>
                <CardDescription>
                  Fill in your details to create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-6 lg:pt-0">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    Phone Number <span className="text-destructive">*</span>
                  </Label>
                  <Input id="phone" type="tel" placeholder="+27 82 123 4567" />
                  <p className="text-xs text-muted-foreground">
                    Required for SMS notifications
                  </p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="idNumber">ID Number (Optional)</Label>
                  <Input id="idNumber" placeholder="Enter your ID number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a secure password"
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
                  <p className="text-xs text-muted-foreground">
                    Must be at least 8 characters with a number and special character
                  </p>
                </div>
                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button
                  className="w-full gradient-primary"
                  size="lg"
                  disabled={!agreed}
                  asChild
                >
                  <Link to="/patient">Create Account</Link>
                </Button>
                <p className="text-sm text-center text-muted-foreground lg:hidden">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
