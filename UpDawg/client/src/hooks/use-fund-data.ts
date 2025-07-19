import { useQuery } from "@tanstack/react-query";
import type { DashboardSummary } from "@/types/fund";

export function useFundData(fundId: number = 1) {
  return useQuery<DashboardSummary>({
    queryKey: ['/api/dashboard-summary', fundId],
    enabled: !!fundId,
  });
}

export function usePortfolioCompanies(fundId?: number) {
  return useQuery({
    queryKey: fundId ? ['/api/portfolio-companies', { fundId }] : ['/api/portfolio-companies'],
  });
}

export function useActivities(fundId?: number) {
  return useQuery({
    queryKey: fundId ? ['/api/activities', { fundId }] : ['/api/activities'],
  });
}
