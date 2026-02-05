import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
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
import { FileText, Download, Search, Eye, Filter, Calendar } from "lucide-react";

const PatientReportsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const reports = [
    {
      id: 1,
      name: "MRI - Lumbar Spine",
      date: "Feb 5, 2025",
      doctor: "Dr. Patel",
      status: "ready",
      type: "MRI",
    },
    {
      id: 2,
      name: "Chest X-Ray",
      date: "Jan 28, 2025",
      doctor: "Dr. Smith",
      status: "ready",
      type: "X-Ray",
    },
    {
      id: 3,
      name: "Blood Work Panel",
      date: "Jan 15, 2025",
      doctor: "Dr. Johnson",
      status: "ready",
      type: "Lab",
    },
    {
      id: 4,
      name: "CT Scan - Abdomen",
      date: "Dec 20, 2024",
      doctor: "Dr. Patel",
      status: "ready",
      type: "CT",
    },
    {
      id: 5,
      name: "Ultrasound - Abdomen",
      date: "Nov 10, 2024",
      doctor: "Dr. Williams",
      status: "ready",
      type: "Ultrasound",
    },
  ];

  const filteredReports = reports.filter((report) =>
    report.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    report.doctor.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="My Reports"
        description="View and download your radiology reports"
      />

      <Card className="border-2">
        <CardHeader className="pb-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search reports..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Date Range
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Desktop Table */}
          <div className="hidden md:block rounded-lg border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Report Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Referring Doctor</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.id} className="hover:bg-secondary/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-4 w-4 text-primary" />
                        </div>
                        {report.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{report.type}</Badge>
                    </TableCell>
                    <TableCell>{report.date}</TableCell>
                    <TableCell>{report.doctor}</TableCell>
                    <TableCell>
                      <Badge className="bg-success text-success-foreground">
                        Ready
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {filteredReports.map((report) => (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{report.name}</p>
                        <p className="text-sm text-muted-foreground">{report.date}</p>
                        <p className="text-sm text-muted-foreground">{report.doctor}</p>
                      </div>
                    </div>
                    <Badge className="bg-success text-success-foreground">Ready</Badge>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Button>
                    <Button size="sm" className="flex-1 gradient-primary">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientReportsPage;
