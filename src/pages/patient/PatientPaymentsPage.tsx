import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CreditCard,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Info,
} from "lucide-react";

const PatientPaymentsPage = () => {
  const paymentSummary = {
    totalDue: 1500,
    medicalAidPending: 3500,
    paidThisYear: 12500,
  };

  const payments = [
    {
      id: 1,
      date: "Feb 12, 2025",
      description: "MRI - Lumbar Spine",
      total: 4500,
      covered: 3500,
      shortfall: 1000,
      status: "pending",
    },
    {
      id: 2,
      date: "Jan 28, 2025",
      description: "Chest X-Ray",
      total: 800,
      covered: 600,
      shortfall: 200,
      status: "pending",
    },
    {
      id: 3,
      date: "Jan 15, 2025",
      description: "Blood Work Panel",
      total: 1200,
      covered: 1200,
      shortfall: 0,
      status: "paid",
    },
    {
      id: 4,
      date: "Dec 20, 2024",
      description: "CT Scan - Abdomen",
      total: 4000,
      covered: 3200,
      shortfall: 800,
      status: "paid",
    },
  ];

  const getStatusBadge = (status: string, shortfall: number) => {
    if (status === "paid") {
      return (
        <Badge className="bg-success text-success-foreground">
          <CheckCircle className="mr-1 h-3 w-3" />
          Paid
        </Badge>
      );
    }
    if (shortfall > 0) {
      return (
        <Badge className="bg-warning text-warning-foreground">
          <Clock className="mr-1 h-3 w-3" />
          Shortfall Due
        </Badge>
      );
    }
    return (
      <Badge variant="secondary">
        <Clock className="mr-1 h-3 w-3" />
        Processing
      </Badge>
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Payments"
        description="View your payment history and outstanding balances"
      />

      {/* Payment Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card className="border-2 border-warning/30 bg-warning/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Amount Due</p>
                <p className="text-2xl font-bold text-warning">
                  R{paymentSummary.totalDue.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-warning/20 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-warning" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-info/30 bg-info/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Medical Aid Pending</p>
                <p className="text-2xl font-bold text-info">
                  R{paymentSummary.medicalAidPending.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-info/20 flex items-center justify-center">
                <Clock className="h-6 w-6 text-info" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="border-2 border-success/30 bg-success/5">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Paid This Year</p>
                <p className="text-2xl font-bold text-success">
                  R{paymentSummary.paidThisYear.toLocaleString()}
                </p>
              </div>
              <div className="h-12 w-12 rounded-full bg-success/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-success" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payment Info Alert */}
      <Card className="border-2 border-info/30 bg-info/5">
        <CardContent className="py-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-info mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Payment Information</p>
              <p className="text-sm text-muted-foreground mt-1">
                Shortfall payments must be made before your appointment date. You can pay via EFT
                or at our reception desk. Medical aid claims are processed automatically.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment History */}
      <Card className="border-2">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-primary" />
            Payment History
          </CardTitle>
          <CardDescription>Your recent transactions and outstanding payments</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Covered</TableHead>
                  <TableHead className="text-right">Shortfall</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id} className="hover:bg-secondary/30">
                    <TableCell>{payment.date}</TableCell>
                    <TableCell className="font-medium">{payment.description}</TableCell>
                    <TableCell className="text-right">
                      R{payment.total.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right text-success">
                      R{payment.covered.toLocaleString()}
                    </TableCell>
                    <TableCell className="text-right">
                      {payment.shortfall > 0 ? (
                        <span className="text-warning font-medium">
                          R{payment.shortfall.toLocaleString()}
                        </span>
                      ) : (
                        "-"
                      )}
                    </TableCell>
                    <TableCell>
                      {getStatusBadge(payment.status, payment.shortfall)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {payments.map((payment) => (
              <Card key={payment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium">{payment.description}</p>
                      <p className="text-sm text-muted-foreground">{payment.date}</p>
                    </div>
                    {getStatusBadge(payment.status, payment.shortfall)}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Total</p>
                      <p className="font-medium">R{payment.total.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Covered</p>
                      <p className="font-medium text-success">R{payment.covered.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Due</p>
                      <p className="font-medium text-warning">
                        R{payment.shortfall.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  {payment.status === "pending" && payment.shortfall > 0 && (
                    <Button className="w-full mt-3 gradient-primary" size="sm">
                      Pay R{payment.shortfall.toLocaleString()}
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientPaymentsPage;
