import { StatsCard } from "@/components/dashboard/StatsCard";

const stats = [
  { label: "Total Outstanding", value: "$48,500" },
  { label: "Overdue Amount", value: "$23,500" },
  { label: "Collection Rate", value: "52%" },
  { label: "Avg Response Time", value: "2.4h" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 grid gap-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
      {/* Chart placeholder */}
      <div className="mt-8">[Charts will appear here]</div>
    </div>
  );
} 