import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Fetch existing progress or fallback to step 1
    const progress = await db.onboardingProgress.findUnique({
      where: { userId },
    });

    const user = await db.user.findUnique({
      where: { id: userId },
      select: { name: true, email: true, image: true, onboardingCompleted: true },
    });

    return NextResponse.json({
      currentStep: progress?.currentStep || 1,
      stepData: progress?.stepData ? JSON.parse(progress.stepData) : {},
      user,
    });
  } catch (error) {
    console.error("GET Onboarding Progress Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();
    const { currentStep, stepData } = body;

    const progress = await db.onboardingProgress.upsert({
      where: { userId },
      create: {
        userId,
        currentStep: currentStep || 1,
        stepData: JSON.stringify(stepData || {}),
      },
      update: {
        currentStep: currentStep || 1,
        stepData: JSON.stringify(stepData || {}),
      },
    });

    return NextResponse.json({ success: true, progress });
  } catch (error) {
    console.error("POST Onboarding Progress Autosave Error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
