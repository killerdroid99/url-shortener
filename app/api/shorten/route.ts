import redis from "@/redis";
import { NextRequest, NextResponse } from "next/server";
import { nanoid } from "nanoid";
import { z } from "zod";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url } = body;
    const parsedUrl = z.url().trim().parse(url);
    const uid = nanoid(8);
    await redis.set(uid, parsedUrl, "EX", 60 * 60);

    return NextResponse.json(
      { uid, url: `${request.nextUrl.origin}/${uid}` },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to shorten URL" },
      { status: 500 }
    );
  }
}
