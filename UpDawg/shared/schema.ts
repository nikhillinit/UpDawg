import { pgTable, text, serial, integer, boolean, decimal, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const funds = pgTable("funds", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  size: decimal("size", { precision: 15, scale: 2 }).notNull(),
  deployedCapital: decimal("deployed_capital", { precision: 15, scale: 2 }).default("0"),
  managementFee: decimal("management_fee", { precision: 5, scale: 4 }).notNull(),
  carryPercentage: decimal("carry_percentage", { precision: 5, scale: 4 }).notNull(),
  vintageYear: integer("vintage_year").notNull(),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const portfolioCompanies = pgTable("portfolio_companies", {
  id: serial("id").primaryKey(),
  fundId: integer("fund_id").references(() => funds.id),
  name: text("name").notNull(),
  sector: text("sector").notNull(),
  stage: text("stage").notNull(),
  investmentAmount: decimal("investment_amount", { precision: 15, scale: 2 }).notNull(),
  currentValuation: decimal("current_valuation", { precision: 15, scale: 2 }),
  foundedYear: integer("founded_year"),
  status: text("status").notNull().default("active"),
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const investments = pgTable("investments", {
  id: serial("id").primaryKey(),
  fundId: integer("fund_id").references(() => funds.id),
  companyId: integer("company_id").references(() => portfolioCompanies.id),
  investmentDate: timestamp("investment_date").notNull(),
  amount: decimal("amount", { precision: 15, scale: 2 }).notNull(),
  round: text("round").notNull(),
  ownershipPercentage: decimal("ownership_percentage", { precision: 5, scale: 4 }),
  valuationAtInvestment: decimal("valuation_at_investment", { precision: 15, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const fundMetrics = pgTable("fund_metrics", {
  id: serial("id").primaryKey(),
  fundId: integer("fund_id").references(() => funds.id),
  metricDate: timestamp("metric_date").notNull(),
  totalValue: decimal("total_value", { precision: 15, scale: 2 }).notNull(),
  irr: decimal("irr", { precision: 5, scale: 4 }),
  multiple: decimal("multiple", { precision: 5, scale: 2 }),
  dpi: decimal("dpi", { precision: 5, scale: 2 }),
  tvpi: decimal("tvpi", { precision: 5, scale: 2 }),
  createdAt: timestamp("created_at").defaultNow(),
});

export const activities = pgTable("activities", {
  id: serial("id").primaryKey(),
  fundId: integer("fund_id").references(() => funds.id),
  companyId: integer("company_id").references(() => portfolioCompanies.id),
  type: text("type").notNull(), // 'investment', 'exit', 'update', 'milestone'
  title: text("title").notNull(),
  description: text("description"),
  amount: decimal("amount", { precision: 15, scale: 2 }),
  activityDate: timestamp("activity_date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Insert schemas
export const insertFundSchema = createInsertSchema(funds).omit({
  id: true,
  createdAt: true,
});

export const insertPortfolioCompanySchema = createInsertSchema(portfolioCompanies).omit({
  id: true,
  createdAt: true,
});

export const insertInvestmentSchema = createInsertSchema(investments).omit({
  id: true,
  createdAt: true,
});

export const insertFundMetricsSchema = createInsertSchema(fundMetrics).omit({
  id: true,
  createdAt: true,
});

export const insertActivitySchema = createInsertSchema(activities).omit({
  id: true,
  createdAt: true,
});

// Types
export type InsertFund = z.infer<typeof insertFundSchema>;
export type Fund = typeof funds.$inferSelect;
export type InsertPortfolioCompany = z.infer<typeof insertPortfolioCompanySchema>;
export type PortfolioCompany = typeof portfolioCompanies.$inferSelect;
export type InsertInvestment = z.infer<typeof insertInvestmentSchema>;
export type Investment = typeof investments.$inferSelect;
export type InsertFundMetrics = z.infer<typeof insertFundMetricsSchema>;
export type FundMetrics = typeof fundMetrics.$inferSelect;
export type InsertActivity = z.infer<typeof insertActivitySchema>;
export type Activity = typeof activities.$inferSelect;

// Users table (keeping the existing one)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
