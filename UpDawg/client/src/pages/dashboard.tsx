import { useFundData } from "@/hooks/use-fund-data";
import MetricCards from "@/components/dashboard/metric-cards";
import PortfolioPerformanceChart from "@/components/charts/portfolio-performance-chart";
import InvestmentBreakdownChart from "@/components/charts/investment-breakdown-chart";
import CohortAnalysisChart from "@/components/charts/cohort-analysis-chart";
import RecentActivity from "@/components/portfolio/recent-activity";
import PortfolioTable from "@/components/portfolio/portfolio-table";
import ChartGallery from "@/components/charts/chart-gallery";

export default function Dashboard() {
  const { data: fundData, isLoading, error } = useFundData();

  if (isLoading) {
    return (
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <div className="animate-pulse space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-xl"></div>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 h-96 bg-gray-200 rounded-xl"></div>
            <div className="h-96 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
        <div className="text-center py-12">
          <p className="text-red-600 font-medium">Failed to load fund data</p>
          <p className="text-gray-500 mt-2">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto p-6 custom-scrollbar">
      {/* Fund Overview Cards */}
      <MetricCards fundData={fundData} />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <PortfolioPerformanceChart />
        <InvestmentBreakdownChart />
      </div>

      {/* Recent Activity & Fund Cohorts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <RecentActivity activities={fundData?.recentActivities} />
        <CohortAnalysisChart />
      </div>

      {/* Advanced Chart Showcase */}
      <ChartGallery />

      {/* Portfolio Companies Table */}
      <PortfolioTable companies={fundData?.portfolioCompanies} />
    </main>
  );
}
