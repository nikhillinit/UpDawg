import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useFundData } from "@/hooks/use-fund-data";
import { exportToExcel } from "@/utils/export-excel";
import { 
  Download, FileText, Calendar, Filter, Send, Eye,
  BarChart3, PieChart, TrendingUp, Target, Clock,
  Users, Building, DollarSign
} from "lucide-react";

const reportTemplates = [
  {
    id: 'quarterly',
    name: 'Quarterly LP Report',
    description: 'Comprehensive quarterly performance report for Limited Partners',
    frequency: 'Quarterly',
    lastGenerated: '2024-03-31',
    status: 'active'
  },
  {
    id: 'annual',
    name: 'Annual Fund Report',
    description: 'Detailed annual fund performance and portfolio analysis',
    frequency: 'Annually',
    lastGenerated: '2023-12-31',
    status: 'active'
  },
  {
    id: 'monthly',
    name: 'Monthly Dashboard',
    description: 'Monthly fund metrics and portfolio company updates',
    frequency: 'Monthly',
    lastGenerated: '2024-04-30',
    status: 'active'
  },
  {
    id: 'portfolio',
    name: 'Portfolio Company Report',
    description: 'Individual company performance and milestone tracking',
    frequency: 'On-demand',
    lastGenerated: '2024-04-15',
    status: 'active'
  },
  {
    id: 'compliance',
    name: 'Regulatory Compliance Report',
    description: 'SEC and regulatory compliance documentation',
    frequency: 'As needed',
    lastGenerated: '2024-01-15',
    status: 'pending'
  },
];

const scheduledReports = [
  {
    id: 1,
    name: 'Q1 2024 LP Report',
    type: 'Quarterly LP Report',
    dueDate: '2024-04-15',
    status: 'completed',
    recipients: ['lp@pressonvc.com', 'board@pressonvc.com']
  },
  {
    id: 2,
    name: 'April Monthly Dashboard',
    type: 'Monthly Dashboard',
    dueDate: '2024-05-05',
    status: 'in_progress',
    recipients: ['team@pressonvc.com']
  },
  {
    id: 3,
    name: 'Portfolio Review - TechCorp',
    type: 'Portfolio Company Report',
    dueDate: '2024-05-10',
    status: 'scheduled',
    recipients: ['founders@techcorp.com']
  },
];

export default function Reports() {
  const [activeTab, setActiveTab] = useState('generate');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [reportPeriod, setReportPeriod] = useState('q1-2024');
  const { data: fundData } = useFundData();

  const handleGenerateReport = () => {
    console.log('Generating report:', { selectedTemplate, reportPeriod });
    // Here you would call the report generation API
    if (fundData) {
      exportToExcel(fundData, `${selectedTemplate}-${reportPeriod}`);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-50 text-green-700';
      case 'in_progress': return 'bg-blue-50 text-blue-700';
      case 'scheduled': return 'bg-orange-50 text-orange-700';
      case 'overdue': return 'bg-red-50 text-red-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
      {/* Report Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Reports</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">47</p>
                <p className="text-green-600 text-sm mt-1">This year</p>
              </div>
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Active Templates</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">5</p>
                <p className="text-blue-600 text-sm mt-1">Ready to use</p>
              </div>
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-cyan-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Scheduled</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">3</p>
                <p className="text-orange-600 text-sm mt-1">Upcoming</p>
              </div>
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-orange-500" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Recipients</p>
                <p className="text-2xl font-bold text-gray-800 mt-1">28</p>
                <p className="text-gray-600 text-sm mt-1">Active subscribers</p>
              </div>
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reports Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="flex items-center justify-between mb-6">
          <TabsList className="grid w-full max-w-lg grid-cols-4">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>

          <Button className="povc-bg-primary">
            <Download className="h-4 w-4 mr-2" />
            Quick Export
          </Button>
        </div>

        <TabsContent value="generate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Generate New Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="template">Report Template</Label>
                  <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select report template" />
                    </SelectTrigger>
                    <SelectContent>
                      {reportTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="period">Reporting Period</Label>
                  <Select value={reportPeriod} onValueChange={setReportPeriod}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reporting period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="q1-2024">Q1 2024</SelectItem>
                      <SelectItem value="q4-2023">Q4 2023</SelectItem>
                      <SelectItem value="q3-2023">Q3 2023</SelectItem>
                      <SelectItem value="ytd-2024">YTD 2024</SelectItem>
                      <SelectItem value="fy-2023">FY 2023</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recipients">Recipients</Label>
                  <Input 
                    id="recipients"
                    placeholder="Enter email addresses (comma separated)"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Report Notes</Label>
                  <Textarea 
                    id="notes"
                    placeholder="Add any specific notes or context for this report"
                    rows={3}
                  />
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button onClick={handleGenerateReport} className="flex-1 povc-bg-primary">
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                  <Button variant="outline">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Report Preview
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedTemplate ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {reportTemplates.find(t => t.id === selectedTemplate)?.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        {reportTemplates.find(t => t.id === selectedTemplate)?.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-medium text-gray-700">Fund Size:</p>
                          <p className="text-gray-600">$100M</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Deployed:</p>
                          <p className="text-gray-600">$67.5M</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Portfolio:</p>
                          <p className="text-gray-600">24 companies</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Current IRR:</p>
                          <p className="text-green-600 font-medium">28.4%</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="font-medium text-gray-800">Included Sections:</h5>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Executive Summary</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Performance Metrics</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Portfolio Updates</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Financial Analysis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Select a template to preview</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTemplates.map((template) => (
              <Card key={template.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base font-semibold text-gray-800">
                        {template.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600 mt-1">
                        {template.description}
                      </p>
                    </div>
                    <Badge className={template.status === 'active' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'}>
                      {template.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Frequency:</span>
                      <span className="font-medium">{template.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Last Generated:</span>
                      <span className="font-medium">{template.lastGenerated}</span>
                    </div>
                    <div className="flex space-x-2 pt-3">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-1" />
                        Preview
                      </Button>
                      <Button size="sm" className="flex-1 povc-bg-primary">
                        <Download className="h-4 w-4 mr-1" />
                        Generate
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="scheduled" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Scheduled Reports
                </CardTitle>
                <Button size="sm" className="povc-bg-primary">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule New
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h4 className="font-medium text-gray-800">{report.name}</h4>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status.replace('_', ' ')}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{report.type}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          Due: {report.dueDate}
                        </span>
                        <span className="flex items-center">
                          <Send className="h-3 w-3 mr-1" />
                          {report.recipients.length} recipients
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Send className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-800">
                  Report History
                </CardTitle>
                <div className="flex space-x-3">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="quarterly">Quarterly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="annual">Annual</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: 'Q1 2024 LP Report', type: 'Quarterly', date: '2024-04-15', size: '2.4 MB', downloads: 12 },
                  { name: 'March Monthly Dashboard', type: 'Monthly', date: '2024-04-05', size: '1.8 MB', downloads: 8 },
                  { name: 'Portfolio Review - DataFlow', type: 'Company', date: '2024-03-28', size: '1.2 MB', downloads: 5 },
                  { name: 'Q4 2023 LP Report', type: 'Quarterly', date: '2024-01-15', size: '2.6 MB', downloads: 15 },
                  { name: '2023 Annual Fund Report', type: 'Annual', date: '2024-01-31', size: '4.2 MB', downloads: 28 },
                ].map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FileText className="h-5 w-5 text-blue-500" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{report.name}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{report.type}</span>
                          <span>•</span>
                          <span>{report.date}</span>
                          <span>•</span>
                          <span>{report.size}</span>
                          <span>•</span>
                          <span>{report.downloads} downloads</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
