export async function generateMessage({
  invoice,
  tone,
}: {
  invoice: string;
  tone: string;
}): Promise<string> {
  try {
    const API_KEY = process.env.HUGGINGFACE_API_KEY;
    if (!API_KEY) {
      throw new Error('Hugging Face API key is not configured');
    }

    // Prepare the prompt based on tone
    let prompt = '';
    
    switch (tone) {
      case 'polite':
        prompt = `Write a polite and professional message requesting payment for invoice ${invoice}. Be courteous and maintain a positive business relationship.`;
        break;
      case 'firm':
        prompt = `Write a firm and direct message requesting immediate payment for invoice ${invoice}. Be clear about expectations while maintaining professionalism.`;
        break;
      case 'legal':
        prompt = `Write a formal legal-style message regarding the overdue invoice ${invoice}. Include appropriate legal terminology and potential consequences of non-payment.`;
        break;
      default:
        prompt = `Write a message requesting payment for invoice ${invoice}.`;
    }

    // Make API call to Hugging Face
    const response = await fetch('https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.2', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: {
          max_new_tokens: 250,
          temperature: 0.7,
          top_p: 0.95,
          do_sample: true,
        }
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Hugging Face API error: ${error}`);
    }

    const result = await response.json();
    
    // Extract the generated text from the response
    // The exact structure depends on the model being used
    const generatedText = result[0]?.generated_text || '';
    
    // Clean up the response if needed
    return generatedText.replace(prompt, '').trim();
  } catch (error) {
    console.error('Error generating message:', error);
    return `Error generating message. Please try again later. ${error instanceof Error ? error.message : ''}`;
  }
}