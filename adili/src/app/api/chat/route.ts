/**
 * API Route: POST /api/bot
 * 
 * This handler processes incoming POST requests, sending the user's message to an external bot API
 * and returning the bot's response.
 * It also includes a timeout mechanism for the fetch request to avoid indefinite blocking.
 * 
 * The bot API URL is fetched from an environment variable `NEXT_PUBLIC_BOT_API_URL`.
 * 
 * If the bot API or the environment variables are misconfigured, or if there's an error in the
 * communication with the bot API, appropriate error responses are returned.
 *
 * @param {Request} request - The incoming HTTP request object that contains the user message.
 * @returns {Response} - The response object containing the bot's reply or an error message.
 *
 * @example
 * // Sample payload:
 * {
 *   "message": "Hello, bot!"
 * }
 * 
 * @throws {Error} If the `FETCH_TIMEOUT` is not set correctly or the bot API URL is missing.
 */

import { NextResponse } from 'next/server'
import { BotResponse, IncomingRequest } from '@/types/api'

// Helper function to perform a fetch request with a timeout
/**
 * Helper function to perform a fetch request with a timeout.
 * 
 * This function ensures that if the fetch request takes longer than the specified timeout, 
 * it will reject with an error.
 *
 * @param {string} url - The URL to fetch from.
 * @param {RequestInit} options - The options for the fetch request (e.g., method, headers, body).
 * @param {number} timeout - The timeout duration in milliseconds.
 * @returns {Promise<Response>} - Resolves to the fetch response, or rejects if the timeout is exceeded.
 */
const fetchWithTimeout = async (url: string, options: RequestInit, timeout: number) => {
  return Promise.race([
    fetch(url, options), /* Make the fetch request */
    new Promise<Response>((_, reject) =>
      setTimeout(() => reject(new Error('Request timed out')), timeout) /* Timeout rejection */
    ),
  ]);
};

/* Fetch environment variables for API URL and timeout duration */
const BOT_API = process.env.NEXT_PUBLIC_BOT_API_URL;
const FETCH_TIMEOUT = parseInt(process.env.FETCH_TIMEOUT || '5000', 10); /* Default timeout 5000ms */

/* Ensure the FETCH_TIMEOUT is a valid positive integer */
if (isNaN(FETCH_TIMEOUT) || FETCH_TIMEOUT <= 0) {
  throw new Error('FETCH_TIMEOUT must be a positive integer');
}

/**
 * Handles POST requests to the /api/bot route.
 * 
 * This function receives a message from the client, forwards it to the bot API,
 * and returns the response from the bot. It handles error cases such as missing messages,
 * missing environment variables, and failed communication with the bot API.
 *
 * @param {Request} request - The incoming HTTP request containing the message to send to the bot.
 * @returns {NextResponse} - The response object containing either the bot's reply or an error message.
 */
export async function POST(request: Request): Promise<Response> {
  try {
    /* Extract message from the incoming request body */
    const { message }: IncomingRequest = await request.json();
    console.log('Incoming message:', message);

    /* Return error if message is not provided */
    if (!message) {
      console.error('No message provided');
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    /* Return error if the bot API URL is not set in the environment variables */
    if (!BOT_API) {
      console.error('BOT_API is not defined in environment variables');
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }

    /* Send the user message to the bot API with a timeout */
    const response = await fetchWithTimeout(BOT_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: message }), /* The message to be sent to the bot */
    }, FETCH_TIMEOUT);

    console.log('External API response status:', response.status);

    /* If the bot API responds with an error, handle it */
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({})); /* Parse error message */
      console.error('Error from external API:', { status: response.status, errorData, user_input: message });
      const errorMessage = errorData.message || 'External API error';
      return NextResponse.json({ error: errorMessage, status: response.status }, { status: response.status });
    }

    /* Parse the response from the bot API */
    const data: BotResponse = await response.json();
    console.log('Data from external API:', data);

    /* If the bot response is invalid, return an error */
    if (!data || !data.bot_response) {
      console.error('No bot response received');
      return NextResponse.json({ error: 'No valid response from bot' }, { status: 500 });
    }

    /* Return the bot's response */
    return NextResponse.json({ reply: data.bot_response });

  } catch (error) {
    /* Catch any errors and log them */
    console.error('Error connecting to the bot:', error);
    return NextResponse.json({ error: 'Failed to connect to the bot' }, { status: 500 });
  }
}
