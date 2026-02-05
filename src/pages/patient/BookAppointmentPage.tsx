import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  Clock,
  Upload,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  Info,
} from "lucide-react";

const BookAppointmentPage = () => {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedScan, setSelectedScan] = useState("");

  const scanTypes = [
    { value: "mri-brain", label: "MRI - Brain", price: 5500 },
    { value: "mri-spine", label: "MRI - Spine", price: 4500 },
    { value: "ct-chest", label: "CT Scan - Chest", price: 3500 },
    { value: "ct-abdomen", label: "CT Scan - Abdomen", price: 4000 },
    { value: "ultrasound", label: "Ultrasound", price: 1200 },
    { value: "xray", label: "X-Ray", price: 800 },
    { value: "mammogram", label: "Mammography", price: 1500 },
  ];

  const availableTimes = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "11:00", "11:30", "14:00", "14:30", "15:00", "15:30",
  ];

  const steps = [
    { number: 1, title: "Scan Type" },
    { number: 2, title: "Date & Time" },
    { number: 3, title: "Details" },
    { number: 4, title: "Confirm" },
  ];

  const selectedScanInfo = scanTypes.find((s) => s.value === selectedScan);

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Book Appointment"
        description="Schedule your radiology scan in a few simple steps"
      >
        <Button variant="ghost" asChild>
          <Link to="/patient">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </PageHeader>

      {/* Progress Steps */}
      <div className="flex items-center justify-between max-w-2xl mx-auto mb-8">
        {steps.map((s, index) => (
          <div key={s.number} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  step > s.number
                    ? "bg-success text-success-foreground"
                    : step === s.number
                    ? "gradient-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground"
                }`}
              >
                {step > s.number ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  s.number
                )}
              </div>
              <span
                className={`text-xs mt-1 hidden sm:block ${
                  step >= s.number ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {s.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-8 sm:w-16 mx-2 rounded ${
                  step > s.number ? "bg-success" : "bg-secondary"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <Card className="max-w-2xl mx-auto border-2">
        {/* Step 1: Scan Type */}
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle>Select Scan Type</CardTitle>
              <CardDescription>
                Choose the type of radiology scan you need
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-3">
                {scanTypes.map((scan) => (
                  <div
                    key={scan.value}
                    className={`flex items-center justify-between p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedScan === scan.value
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => setSelectedScan(scan.value)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-4 w-4 rounded-full border-2 ${
                          selectedScan === scan.value
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {selectedScan === scan.value && (
                          <div className="h-full w-full rounded-full bg-primary-foreground scale-50" />
                        )}
                      </div>
                      <span className="font-medium">{scan.label}</span>
                    </div>
                    <span className="text-muted-foreground">
                      R{scan.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex justify-end pt-4">
                <Button
                  onClick={() => setStep(2)}
                  disabled={!selectedScan}
                  className="gradient-primary"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {/* Step 2: Date & Time */}
        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>
                Choose your preferred appointment date and time slot
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-2 block">Select Date</Label>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-lg border"
                    disabled={(date) =>
                      date < new Date() || date.getDay() === 0
                    }
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Select Time</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={selectedTime === time ? "gradient-primary" : ""}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(1)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button
                  onClick={() => setStep(3)}
                  disabled={!date || !selectedTime}
                  className="gradient-primary"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {/* Step 3: Details */}
        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle>Additional Details</CardTitle>
              <CardDescription>
                Upload your referral letter and add any notes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Referral Letter (if applicable)</Label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-3 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PDF, JPG, PNG up to 10MB
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Any specific concerns or medical history we should know about..."
                  rows={4}
                />
              </div>
              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(2)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button onClick={() => setStep(4)} className="gradient-primary">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </>
        )}

        {/* Step 4: Confirm */}
        {step === 4 && (
          <>
            <CardHeader>
              <CardTitle>Confirm Booking</CardTitle>
              <CardDescription>
                Review your appointment details before confirming
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-secondary/50 space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Scan Type</span>
                  <span className="font-medium">{selectedScanInfo?.label}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date</span>
                  <span className="font-medium">
                    {date?.toLocaleDateString("en-ZA", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time</span>
                  <span className="font-medium">{selectedTime}</span>
                </div>
                <div className="border-t pt-3 flex justify-between">
                  <span className="text-muted-foreground">Estimated Cost</span>
                  <span className="font-bold text-lg">
                    R{selectedScanInfo?.price.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-info/10 border border-info/20">
                <Info className="h-5 w-5 text-info mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">What happens next?</p>
                  <p className="text-muted-foreground mt-1">
                    We'll verify your medical aid coverage and notify you of any
                    shortfall before your appointment. You'll receive SMS and email
                    confirmations.
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <Button variant="outline" onClick={() => setStep(3)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button className="gradient-primary" asChild>
                  <Link to="/patient">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Confirm Booking
                  </Link>
                </Button>
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};

export default BookAppointmentPage;
