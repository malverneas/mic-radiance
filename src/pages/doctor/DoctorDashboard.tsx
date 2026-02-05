import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/ui/page-header";
import { StatCard } from "@/components/ui/stat-card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Users,
  FileText,
  Search,
  Download,
  Eye,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const DoctorDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const referredPatients = [
    {
      id: 1,
      name: "John Doe",
      scan: "MRI - Lumbar Spine",
      date: "Feb 5, 2025",
      status: "ready",
    },
    {
      id: 2,
      name: "Jane Smith",
      scan: "CT Scan - Chest",
      date: "Feb 3, 2025",
      status: "pending",
    },
    {
      id: 3,
      name: "Mike Johnson",
      scan: "Ultrasound - Abdomen",
      date: "Feb 1, 2025",
      status: "ready",
    },
    {
      id: 4,
      name: "Sarah Williams",
      scan: "X-Ray - Chest",
      date: "Jan 28, 2025",
      status: "ready",
    },
    {
      id: 5,
      name: "Robert Brown",
      scan: "MRI - Brain",
      date: "Jan 25, 2025",
      status: "ready",
    },
  ];

  const filteredPatients = referredPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.scan.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Doctor Dashboard"
        description="View your referred patients and their reports"
      >
        <Button asChild className="gradient-primary">
          <Link to="/doctor/reports">
            <FileText className="mr-2 h-4 w-4" />
            View All Reports
          </Link>
        </Button>
      </PageHeader>

      {/* Stats Overview */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Referrals"
          value="28"
          description="This month"
          icon={Users}
          variant="primary"
        />
        <StatCard
          title="Reports Ready"
          value="15"
          description="Available for download"
          icon={FileText}
          variant="success"
        />
        <StatCard
          title="Pending Scans"
          value="5"
          description="Awaiting completion"
          icon={Clock}
          variant="warning"
        />
        <StatCard
          title="Avg. Turnaround"
          value="18h"
          description="Report delivery"
          icon={CheckCircle}
        />
      </div>

      {/* Referred Patients */}
      <Card className="border-2">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Your Referred Patients
              </CardTitle>
              <CardDescription>
                Track the status of patients you've referred
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search patients..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Patient Name</TableHead>
                  <TableHead>Scan Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Report Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredPatients.map((patient) => (
                  <TableRow key={patient.id} className="hover:bg-secondary/30">
                    <TableCell className="font-medium">{patient.name}</TableCell>
                    <TableCell>{patient.scan}</TableCell>
                    <TableCell>{patient.date}</TableCell>
                    <TableCell>
                      {patient.status === "ready" ? (
                        <Badge className="bg-success text-success-foreground">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Ready
                        </Badge>
                      ) : (
                        <Badge variant="secondary">
                          <Clock className="mr-1 h-3 w-3" />
                          Pending
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {patient.status === "ready" && (
                          <>
                            <Button variant="ghost" size="sm">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {filteredPatients.map((patient) => (
              <Card key={patient.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium">{patient.name}</p>
                      <p className="text-sm text-muted-foreground">{patient.scan}</p>
                      <p className="text-sm text-muted-foreground">{patient.date}</p>
                    </div>
                    {patient.status === "ready" ? (
                      <Badge className="bg-success text-success-foreground">Ready</Badge>
                    ) : (
                      <Badge variant="secondary">Pending</Badge>
                    )}
                  </div>
                  {patient.status === "ready" && (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                      <Button size="sm" className="flex-1 gradient-primary">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Link to="/doctor/patients">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">All Patients</p>
              <p className="text-sm text-muted-foreground">View full list</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/doctor/reports">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">View Reports</p>
              <p className="text-sm text-muted-foreground">Download results</p>
            </CardContent>
          </Card>
        </Link>
        <Link to="/doctor/feedback">
          <Card className="hover:shadow-md transition-all hover:border-primary cursor-pointer h-full">
            <CardContent className="pt-6 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-3 text-primary" />
              <p className="font-medium">Give Feedback</p>
              <p className="text-sm text-muted-foreground">Share your experience</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default DoctorDashboard;
