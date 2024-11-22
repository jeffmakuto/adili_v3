import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs'

const VIDEO = process.env.NEXT_PUBLIC_CS_VIDEO_URL;

export async function GET(request: NextRequest) {
  try {
    /* Use the environment variable to define the video directory */
    if (!VIDEO) {
      return NextResponse.json({ error: 'Video URL not configured' }, { status: 500 });
    }
    const videoPath = path.join(process.cwd(), VIDEO);

    /* Check if the file exists */
    if (!fs.existsSync(videoPath)) {
      return NextResponse.json({ error: 'Video not found' }, { status: 404 });
    }

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = request.headers.get('range');

    let start = 0;
    let end = fileSize - 1;
    let status = 200; /* Default status */
    let chunkSize: number;

    /* Handle range requests */
    if (range) {
      const parts = range.replace(/bytes=/, '').split('-');
      start = parseInt(parts[0], 10);
      end = parts[1] ? parseInt(parts[1], 10) : end;

      /* Check if the range is valid */
      if (start >= fileSize || end >= fileSize || start > end) {
        return NextResponse.json({ error: 'Range Not Satisfiable' }, { status: 416 });
      }

      chunkSize = end - start + 1;
      status = 206; /* Partial content */
    } else {
      chunkSize = fileSize;
    }

    const fileStream = fs.createReadStream(videoPath, { start, end });
    const headers = new Headers({
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunkSize.toString(),
      'Content-Type': 'video/mp4',
    });

    const readableStream = new ReadableStream({
      start(controller) {
        fileStream.on('data', (chunk) => controller.enqueue(chunk));
        fileStream.on('end', () => controller.close());
        fileStream.on('error', (err) => controller.error(err));
      }
    });

    return new NextResponse(readableStream, { status, headers });
  } catch (error) {
    console.error('Error serving video:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
