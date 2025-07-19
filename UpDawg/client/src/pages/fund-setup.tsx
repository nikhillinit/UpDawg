import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function FundSetup() {
  const [fundData, setFundData] = useState({
    name: "Press On Ventures Fund II",
    size: "150000000",
    managementFee: "2.5",
    carryPercentage: "20",
    vintageYear: "2024",
    investmentStrategy: "",
    targetSectors: "",
    ticketSize: "",
    geographicFocus: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFundData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log("Saving fund data:", fundData);
    // Here you would typically save to the API
  };

  return (
    <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Fund Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Fund Basic Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fundName">Fund Name</Label>
                <Input
                  id="fundName"
                  value={fundData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter fund name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fundSize">Fund Size (USD)</Label>
                <Input
                  id="fundSize"
                  type="number"
                  value={fundData.size}
                  onChange={(e) => handleInputChange('size', e.target.value)}
                  placeholder="150000000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="managementFee">Management Fee (%)</Label>
                <Input
                  id="managementFee"
                  type="number"
                  step="0.1"
                  value={fundData.managementFee}
                  onChange={(e) => handleInputChange('managementFee', e.target.value)}
                  placeholder="2.5"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="carryPercentage">Carry Percentage (%)</Label>
                <Input
                  id="carryPercentage"
                  type="number"
                  step="0.1"
                  value={fundData.carryPercentage}
                  onChange={(e) => handleInputChange('carryPercentage', e.target.value)}
                  placeholder="20"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="vintageYear">Vintage Year</Label>
                <Select value={fundData.vintageYear} onValueChange={(value) => handleInputChange('vintageYear', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select vintage year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="geographicFocus">Geographic Focus</Label>
                <Select value={fundData.geographicFocus} onValueChange={(value) => handleInputChange('geographicFocus', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select geographic focus" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="north-america">North America</SelectItem>
                    <SelectItem value="europe">Europe</SelectItem>
                    <SelectItem value="asia-pacific">Asia Pacific</SelectItem>
                    <SelectItem value="global">Global</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Strategy */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Investment Strategy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="investmentStrategy">Investment Thesis</Label>
              <Textarea
                id="investmentStrategy"
                value={fundData.investmentStrategy}
                onChange={(e) => handleInputChange('investmentStrategy', e.target.value)}
                placeholder="Describe your investment strategy and thesis"
                rows={4}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="targetSectors">Target Sectors</Label>
                <Textarea
                  id="targetSectors"
                  value={fundData.targetSectors}
                  onChange={(e) => handleInputChange('targetSectors', e.target.value)}
                  placeholder="e.g., Fintech, Healthcare, SaaS"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ticketSize">Typical Ticket Size</Label>
                <Input
                  id="ticketSize"
                  value={fundData.ticketSize}
                  onChange={(e) => handleInputChange('ticketSize', e.target.value)}
                  placeholder="e.g., $1M - $10M"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Fund Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800">
              Fund Structure & Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">Fund Life</h4>
                <p className="text-2xl font-bold text-blue-600 mt-2">10 Years</p>
                <p className="text-sm text-gray-600 mt-1">+ 2 year extensions</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">Investment Period</h4>
                <p className="text-2xl font-bold text-green-600 mt-2">5 Years</p>
                <p className="text-sm text-gray-600 mt-1">Active investment</p>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg text-center">
                <h4 className="font-medium text-gray-800">Hurdle Rate</h4>
                <p className="text-2xl font-bold text-orange-600 mt-2">8%</p>
                <p className="text-sm text-gray-600 mt-1">Preferred return</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4">
          <Button variant="outline">
            Cancel
          </Button>
          <Button onClick={handleSave} className="povc-bg-primary">
            Save Fund Setup
          </Button>
        </div>
      </div>
    </main>
  );
}
