import redis from "@/redis";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ uid: string }> }
) {
  const { uid } = await params;
  const url = await redis.get(uid);
  if (!url) {
    return Response.redirect(new URL("/not-found", request.url));
  }
  return Response.redirect(url);
}
