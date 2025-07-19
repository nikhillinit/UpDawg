import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const sectorData = [
  { name: 'Fintech', value: 35, color: '#3b82f6' },
  { name: 'Healthcare', value: 28, color: '#06b6d4' },
  { name: 'SaaS', value: 22, color: '#10b981' },
  { name: 'Other', value: 15, color: '#f59e0b' },
];

export default function InvestmentBreakdownChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Investment Allocation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sectorData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={({ value }) => `${value}%`}
                labelLine={false}
              >
                {sectorData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-2">
          {sectorData.map((sector, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: sector.color }}
                ></div>
                <span className="text-gray-700">{sector.name}</span>
              </div>
              <span className="font-medium text-gray-800">{sector.value}%</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
