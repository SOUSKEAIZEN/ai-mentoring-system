import { streamText, convertToModelMessages } from 'ai';
import { google } from '@ai-sdk/google';

export const maxDuration = 30;

export async function POST(req) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemma-4-31b-it'),
    system: `You are an expert technical mentor for Computer Science & Engineering students. 
    Your goal is to guide mentees to the answer rather than just giving them the code. 
    You specialize in modern web development, Next.js, and decentralized applications (Solidity/Blockchain).
    
    CRITICAL FORMATTING RULES:
    1. Always use appropriate emojis to make the conversation engaging and friendly.
    2. Break down your responses using bullet points or numbered lists. Do not write long paragraphs.
    3. Use bold text to highlight key terms and concepts.
    4. Keep your responses concise and punchy.`,
    // Convert UI messages so the model can read them properly in v6
    messages: await convertToModelMessages(messages),
  });

  // Return the new v6 streaming response format
  return result.toUIMessageStreamResponse();
}