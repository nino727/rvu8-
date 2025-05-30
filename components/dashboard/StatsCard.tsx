import { Card } from "@/components/ui/shadcn";

interface StatsCardProps {
  label: string;
  value: string | number;
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <Card className="p-4 bg-background text-text border">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </Card>
  );
} 