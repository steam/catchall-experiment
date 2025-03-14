import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ nextauth: string }> }
) {
  const { nextauth } = await params;
  console.log("nextauth", nextauth);
  return NextResponse.json({
    success: true,
    nextauth,
  });
}
