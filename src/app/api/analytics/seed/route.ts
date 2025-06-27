import { connectDB } from "@lib/db";
import { Analytics } from "@lib/models/Analytics";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    await connectDB();
    await Analytics.deleteMany({});

    const doc = new Analytics({
      followers: [1200, 1250, 1280, 1295, 1330, 1360, 1400],
      engagement: [
        { post: 1, likes: 320, comments: 25 },
        { post: 2, likes: 400, comments: 40 },
        { post: 3, likes: 290, comments: 10 },
        { post: 4, likes: 350, comments: 18 },
        { post: 5, likes: 370, comments: 22 }
      ],
      bestPostTime: "Wednesday 7 PM"
    });

    await doc.save();
    return NextResponse.json({ message: "✅ Seeded successfully" });
  } catch (err) {
    console.error("❌ Seed error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}

export async function GET() {
  return POST(); 
}
