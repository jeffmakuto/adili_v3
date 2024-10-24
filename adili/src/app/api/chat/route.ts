import { NextResponse } from 'next/server'
import { BotResponse, IncomingRequest } from '@/types/api'

const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number) => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout)
    ),
  ]);
};

const BOT_API = process.env.NEXT_PUBLIC_BOT_API_URL;
const FETCH_TIMEOUT = parseInt(process.env.FETCH_TIMEOUT || '5000', 10); 

/* Ensure FETCH_TIMEOUT is a positive integer */
if (isNaN(FETCH_TIMEOUT) || FETCH_TIMEOUT <= 0) {
  throw new Error('FETCH_TIMEOUT must be a positive integer');
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { message }: IncomingRequest = await request.json();
    console.log('Incoming message:', message);

    if (!message) {
      console.error('No message provided');
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    if (!BOT_API) {
      console.error('BOT_API is not defined in environment variables');
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    const response = await fetchWithTimeout(BOT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: message }),
    }, FETCH_TIMEOUT);

    console.log('External API response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Error from external API:', { status: response.status, errorData, user_input: message });
      const errorMessage = errorData.message || 'External API error';
      return NextResponse.json({ error: errorMessage, status: response.status }, { status: response.status });
    }

    const data: BotResponse = await response.json();
    console.log('Data from external API:', data);

    if (!data || !data.bot_response) {
      console.error('No bot response received');
      return NextResponse.json({ error: 'No valid response from bot' }, { status: 500 });
    }

    return NextResponse.json({ reply: data.bot_response });

  } catch (error) {
    console.error('Error connecting to the bot:', error);
    return NextResponse.json({ error: 'Failed to connect to the bot' }, { status: 500 });
  }
}
