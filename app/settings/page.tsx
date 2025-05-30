import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4">
        <div className="font-semibold mb-2">Color Theme</div>
        <ThemeSwitcher />
      </div>
      {/* Add more settings here */}
    </div>
  );
} 