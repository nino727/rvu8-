"use client";
import { useState } from "react";
import { Card, Button, Select, SelectItem } from "@/components/ui/shadcn";
import { generateMessage } from "@/lib/huggingface";

const tones = [
  { label: "Polite & Professional", value: "polite" },
  { label: "Firm & Direct", value: "firm" },
  { label: "Legal & Formal", value: "legal" },
];

export default function AIMessagesPage() {
  const [invoice, setInvoice] = useState("");
  const [tone, setTone] = useState(tones[0].value);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleGenerate() {
    setIsLoading(true);
    const result = await generateMessage({ invoice, tone });
    setMessage(result);
    setIsLoading(false);
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">AI Message Generator</h2>
      <Card className="p-4 mb-4">
        <div className="mb-2">
          <label className="block mb-1">Select Invoice</label>
          <input
            className="border rounded px-2 py-1 w-full"
            placeholder="Invoice #"
            value={invoice}
            onChange={e => setInvoice(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Message Tone</label>
          <Select value={tone} onValueChange={setTone}>
            {tones.map(t => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </Select>
        </div>
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? "Generating..." : "Generate Message"}
        </Button>
      </Card>
      <Card className="p-4">
        <div className="font-semibold mb-2">Generated Message</div>
        <div className="min-h-[80px]">{message || "Generated message will appear here..."}</div>
      </Card>
    </div>
  );
} 