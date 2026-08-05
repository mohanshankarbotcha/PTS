import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;
    const body = await req.json();

    const {
      profileData,
      fitnessGoal,
      productivityGoal,
      scheduleData,
      notificationsData,
      theme,
    } = body;

    // 1. Create or Update UserProfile
    await db.userProfile.upsert({
      where: { userId },
      create: {
        userId,
        fullName: profileData?.fullName || session.user.name || "User",
        avatar: profileData?.avatar || session.user.image || null,
        country: profileData?.country || "US",
        timezone: profileData?.timezone || "UTC",
        language: profileData?.language || "en",
      },
      update: {
        fullName: profileData?.fullName || session.user.name || "User",
        avatar: profileData?.avatar || session.user.image || null,
        country: profileData?.country || "US",
        timezone: profileData?.timezone || "UTC",
        language: profileData?.language || "en",
      },
    });

    // 2. Create or Update UserPreferences
    await db.userPreferences.upsert({
      where: { userId },
      create: {
        userId,
        theme: theme || "system",
        notificationsEnabled: notificationsData?.workoutReminders ?? true,
        preferredWorkoutTime: scheduleData?.workoutTime || "07:00",
        preferredWorkHoursStart: scheduleData?.workStart || "09:00",
        preferredWorkHoursEnd: scheduleData?.workEnd || "17:00",
        preferredStudyHoursStart: scheduleData?.studyStart || "18:00",
        preferredStudyHoursEnd: scheduleData?.studyEnd || "20:00",
        weekStartsOn: scheduleData?.weekStartsOn || "monday",
        onboardingCompleted: true,
      },
      update: {
        theme: theme || "system",
        notificationsEnabled: notificationsData?.workoutReminders ?? true,
        preferredWorkoutTime: scheduleData?.workoutTime || "07:00",
        preferredWorkHoursStart: scheduleData?.workStart || "09:00",
        preferredWorkHoursEnd: scheduleData?.workEnd || "17:00",
        preferredStudyHoursStart: scheduleData?.studyStart || "18:00",
        preferredStudyHoursEnd: scheduleData?.studyEnd || "20:00",
        weekStartsOn: scheduleData?.weekStartsOn || "monday",
        onboardingCompleted: true,
      },
    });

    // 3. Create or Update UserGoals
    await db.userGoals.upsert({
      where: { userId },
      create: {
        userId,
        fitnessGoal: fitnessGoal || "Stay Active",
        productivityGoal: productivityGoal || "Personal Growth",
      },
      update: {
        fitnessGoal: fitnessGoal || "Stay Active",
        productivityGoal: productivityGoal || "Personal Growth",
      },
    });

    // 4. Mark onboardingCompleted = true on User model
    await db.user.update({
      where: { id: userId },
      data: {
        onboardingCompleted: true,
        name: profileData?.fullName || session.user.name,
        image: profileData?.avatar || session.user.image,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Onboarding completed successfully.",
    });
  } catch (error) {
    console.error("POST Complete Onboarding Error:", error);
    return NextResponse.json({ error: "Failed to finalize onboarding." }, { status: 500 });
  }
}
