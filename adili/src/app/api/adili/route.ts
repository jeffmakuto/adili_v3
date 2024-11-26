/**
 * API Route: GET /api/video
 *
 * This handler serves a video file in response to GET requests. It supports HTTP range requests
 * to allow partial loading (useful for streaming). If the `range` header is provided, it returns
 * a partial video response based on the requested byte range. Otherwise, it returns the entire file.
 *
 * The video file's path is determined by the environment variable `NEXT_PUBLIC_ADILI_VIDEO_URL`.
 * 
 * @param {NextRequest} request - The incoming Next.js request object.
 * @returns {NextResponse} - A response containing the video stream or error message.
 *
 * @example
 * // When a GET request is made to /api/video
 * return NextResponse with the video content or an error.
 */

import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

const VIDEO = process.env.NEXT_PUBLIC_ADILI_VIDEO_URL;

export async function GET(request: NextRequest) {
  try {
    /* Ensure that the video URL is configured in the environment variables */
    if (!VIDEO) {
      return NextResponse.json({ error: 'Video URL not configured' }, { status: 500 });
    }

    /* Construct the full path to the video file using the environment variable */
    const videoPath = path.join(process.cwd(), VIDEO);

    /* Check if the video file exists on the server */
    if (!fs.existsSync(videoPath)) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const stat = fs.statSync(videoPath); /* Get file statistics */
    const fileSize = stat.size; /* File size in bytes */
    const range = request.headers.get('range'); /* Get the 'range' header from the request */

    let start = 0; /* Default starting byte */
    let end = fileSize - 1; /* Default ending byte (last byte of the file) */
    let status = 200; /* Default status code for a full response */
    let chunkSize: number; /* Size of the chunk to serve */

    /* Handle range requests for partial content (streaming) */
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-'); /* Parse the 'range' header */
      start = parseInt(parts[0], 10); /* Parse the starting byte */
      end = parts[1] ? parseInt(parts[1], 10) : end; /* Parse the ending byte */

      /* Validate the range */
      if (start >= fileSize || end >= fileSize || start > end) {
        return NextResponse.json({ error: 'Range Not Satisfiable' }, { status: 416 });
      }

      chunkSize = end - start + 1; /* Calculate the size of the chunk to serve */
      status = 206; /* Status for partial content (206) */
    } else {
      chunkSize = fileSize; /* No range requested, serve the whole file */
    }

    /* Create a readable stream to serve the video content */
    const fileStream = fs.createReadStream(videoPath, { start, end });

    /* Set the headers for the response, including content range and type */
    const headers = new Headers({
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize.toString(),
      'Content-Type': 'video/mp4',
    });

    /* Create a ReadableStream to send the video data in chunks */
    const readableStream = new ReadableStream({
      start(controller) {
        fileStream.on('data', (chunk) => controller.enqueue(chunk)); /* Push chunks of video data */
        fileStream.on('end', () => controller.close()); /* Close the stream when done */
        fileStream.on('error', (err) => controller.error(err)); /* Handle any errors during streaming */
      }
    });

    /* Return the video stream as the response with the appropriate status and headers */
    return new NextResponse(readableStream, { status, headers });
  } catch (error) {
    /* Log and return a generic error response in case of failure */
    console.error('Error serving video:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
