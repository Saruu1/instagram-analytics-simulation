import { NextResponse } from "next/server";
import { Analytics } from "@models/Analytics";
import { connectDB } from "@lib/db";

export async function GET() {
  await connectDB();
  const data = await Analytics.findOne();
  return NextResponse.json(data);
}


