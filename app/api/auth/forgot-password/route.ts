import { NextResponse } from "next/server";
import { z } from "zod";
import crypto from "crypto";
import { db } from "@/lib/db";

const forgotSchema = z.object({
  email: z.string().email("Invalid email address."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = forgotSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: validated.error.errors[0].message },
        { status: 400 }
      );
    }

    const { email } = validated.data;
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    // Always return success message to prevent account enumeration attacks
    if (!user) {
      return NextResponse.json(
        { message: "If an account exists, a password reset link has been created." },
        { status: 200 }
      );
    }

    // Generate secure token
    const resetToken = crypto.randomBytes(32).toString("hex");
    const resetTokenExpires = new Date(Date.now() + 3600000); // 1 hour validity

    await db.user.update({
      where: { id: user.id },
      data: {
        resetToken,
        resetTokenExpires,
      },
    });

    // Email sending abstraction ready (Email service dispatch)
    console.log(`[AUTH EMAIL DISPATCH] Reset link generated for ${email}: /auth/reset-password?token=${resetToken}`);

    return NextResponse.json(
      {
        message: "If an account exists, a password reset link has been created.",
        resetToken: process.env.NODE_ENV === "development" ? resetToken : undefined,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Forgot password error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
