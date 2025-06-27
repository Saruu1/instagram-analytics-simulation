import { connectDB } from "@lib/db";
import { Analytics } from "@lib/models/Analytics";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();

    const { followers, engagement, bestPostTime } = body;

    if (!followers || !engagement || !bestPostTime) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    await Analytics.deleteMany({});
    const doc = new Analytics({ followers, engagement, bestPostTime });
    await doc.save();

    return NextResponse.json({ message: "✅ Uploaded and saved successfully" });
  } catch (err) {
    console.error("❌ Upload error:", err);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
