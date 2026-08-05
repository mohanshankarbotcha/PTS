"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { KeyRound, ArrowLeft } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { FormError } from "@/components/auth/FormError";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { LoadingButton } from "@/components/auth/LoadingButton";

const resetSchema = z
  .object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Password must contain an uppercase letter.")
      .regex(/[a-z]/, "Password must contain a lowercase letter.")
      .regex(/[0-9]/, "Password must contain a number.")
      .regex(/[^A-Za-z0-9]/, "Password must contain a special character."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

type ResetValues = z.infer<typeof resetSchema>;

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [error, setError] = useState<string | null>(
    !token ? "Missing or invalid password reset token." : null
  );
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetValues>({
    resolver: zodResolver(resetSchema),
    defaultValues: { password: "", confirmPassword: "" },
  });

  const watchPassword = watch("password");

  const onSubmit = async (data: ResetValues) => {
    if (!token) {
      setError("Cannot reset password without a valid token.");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token,
          password: data.password,
        }),
      });

      const resData = await res.json();

      if (!res.ok) {
        setError(resData.error || "Failed to reset password.");
        return;
      }

      setSuccess("Password updated successfully! Redirecting to Sign In...");
      setTimeout(() => {
        router.push("/auth/signin");
      }, 1200);
    } catch (err) {
      setError("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Set new password"
      subtitle="Choose a secure new password for your account"
    >
      <AuthCard>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormError message={error || undefined} />
          <FormSuccess message={success || undefined} />

          {/* New Password */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">New Password</label>
            <PasswordInput
              {...register("password")}
              placeholder="••••••••"
              disabled={isLoading || !token}
              error={errors.password?.message}
            />
            {errors.password && (
              <p className="text-[11px] text-destructive">{errors.password.message}</p>
            )}
            <PasswordStrength password={watchPassword} />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Confirm New Password</label>
            <PasswordInput
              {...register("confirmPassword")}
              placeholder="••••••••"
              disabled={isLoading || !token}
              error={errors.confirmPassword?.message}
            />
            {errors.confirmPassword && (
              <p className="text-[11px] text-destructive">{errors.confirmPassword.message}</p>
            )}
          </div>

          <LoadingButton
            type="submit"
            variant="accent"
            isLoading={isLoading}
            disabled={!token}
            loadingText="Updating Password..."
            className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-2"
          >
            Update Password & Sign In
          </LoadingButton>
        </form>

        <div className="text-center text-xs text-muted-foreground pt-2">
          <Link href="/auth/signin" className="inline-flex items-center gap-1.5 text-accent font-semibold hover:underline">
            <ArrowLeft className="h-3.5 w-3.5" /> Return to Sign In
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
