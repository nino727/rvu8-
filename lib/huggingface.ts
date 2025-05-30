export async function generateMessage({
  invoice,
  tone,
}: {
  invoice: string;
  tone: string;
}): Promise<string> {
  // Replace with your Hugging Face API call
  // This is a placeholder for demonstration
  return `This is a ${tone} message for invoice ${invoice}.`;
} 