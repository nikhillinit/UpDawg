import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState } from "react";

// Layout components
import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

// Page components
import Dashboard from "@/pages/dashboard";
import FundSetup from "@/pages/fund-setup";
import Portfolio from "@/pages/portfolio";
import FinancialModeling from "@/pages/financial-modeling";
import Analytics from "@/pages/analytics";
import Reports from "@/pages/reports";
import NotFound from "@/pages/not-found";

const moduleConfig = {
  dashboard: {
    title: "Fund Dashboard",
    description: "Comprehensive overview of fund performance and metrics"
  },
  'fund-setup': {
    title: "Fund Setup",
    description: "Configure fund parameters and investment strategy"
  },
  portfolio: {
    title: "Portfolio Management", 
    description: "Manage portfolio companies and track performance"
  },
  'financial-modeling': {
    title: "Financial Modeling",
    description: "Cohort analysis and financial projections"
  },
  analytics: {
    title: "Analytics & Insights",
    description: "Advanced analytics and performance insights"
  },
  reports: {
    title: "Reports & Documentation", 
    description: "Generate comprehensive fund reports"
  }
};

function AppLayout({ children }: { children: React.ReactNode }) {
  const [activeModule, setActiveModule] = useState('dashboard');

  const currentModule = moduleConfig[activeModule as keyof typeof moduleConfig] || moduleConfig.dashboard;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        activeModule={activeModule} 
        onModuleChange={setActiveModule}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header currentModule={currentModule} />
        {children}
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/fund-setup" component={FundSetup} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/financial-modeling" component={FinancialModeling} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/reports" component={Reports} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <AppLayout>
          <Router />
        </AppLayout>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
