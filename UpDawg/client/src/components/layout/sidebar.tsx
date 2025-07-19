import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Settings, 
  Briefcase, 
  Calculator, 
  BarChart3, 
  FileText,
  ChevronDown,
  ChevronRight
} from "lucide-react";

interface SidebarProps {
  activeModule: string;
  onModuleChange: (module: string) => void;
}

const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'fund-setup', label: 'Fund Setup', icon: Settings },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'financial-modeling', label: 'Financial Modeling', icon: Calculator },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'reports', label: 'Reports', icon: FileText },
];

const chartCategories = [
  { id: 'basic', label: 'Basic Charts' },
  { id: 'statistical', label: 'Statistical' },
  { id: 'hierarchical', label: 'Hierarchical' },
  { id: 'flow', label: 'Flow Charts' },
  { id: 'advanced', label: 'Advanced' },
];

export default function Sidebar({ activeModule, onModuleChange }: SidebarProps) {
  const [isChartsExpanded, setIsChartsExpanded] = useState(false);

  return (
    <aside className="w-64 bg-white shadow-lg border-r border-gray-200 flex-shrink-0 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 povc-bg-primary rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white h-6 w-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">POVC</h1>
            <p className="text-sm text-gray-600">Fund Model</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeModule === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onModuleChange(item.id)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg transition-colors",
                    isActive
                      ? "povc-bg-primary-light text-blue-700 border border-blue-200"
                      : "text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className={cn("font-medium", isActive && "font-semibold")}>
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => setIsChartsExpanded(!isChartsExpanded)}
            className="w-full flex items-center justify-between px-2 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider hover:text-gray-700 transition-colors"
          >
            <span>Chart Types</span>
            {isChartsExpanded ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
          
          {isChartsExpanded && (
            <ul className="mt-3 space-y-1">
              {chartCategories.map((category) => (
                <li key={category.id}>
                  <button className="w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                    {category.label}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </aside>
  );
}
