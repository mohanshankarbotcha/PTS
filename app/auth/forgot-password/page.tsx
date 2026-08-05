"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { FormError } from "@/components/auth/FormError";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { LoadingButton } from "@/components/auth/LoadingButton";
import { Input } from "@/components/ui/input";

const forgotSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
});

type ForgotValues = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [resetToken, setResetToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotValues>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgotValues) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await res.json();

      if (!res.ok) {
        setError(resData.error || "Failed to process request.");
        return;
      }

      setSuccess("Password reset instructions have been generated.");
      if (resData.resetToken) {
        setResetToken(resData.resetToken);
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Reset your password"
      subtitle="Enter your account email to receive a password reset link"
    >
      <AuthCard>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormError message={error || undefined} />
          <FormSuccess message={success || undefined} />

          {/* Dev Helper Token Preview if in Development Mode */}
          {resetToken && (
            <div className="p-3 rounded-xl border bg-accent/10 border-accent/20 text-xs space-y-1">
              <span className="font-semibold text-accent block">Development Reset Link:</span>
              <Link
                href={`/auth/reset-password?token=${resetToken}`}
                className="font-mono text-[11px] underline break-all text-foreground hover:text-accent"
              >
                /auth/reset-password?token={resetToken}
              </Link>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground flex justify-between">
              <span>Account Email Address</span>
              {errors.email && (
                <span className="text-destructive font-normal">{errors.email.message}</span>
              )}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                <Mail className="h-4 w-4" />
              </div>
              <Input
                {...register("email")}
                type="email"
                placeholder="name@example.com"
                className={`pl-10 h-10 rounded-xl ${errors.email ? "border-destructive" : ""}`}
                disabled={isLoading}
              />
            </div>
          </div>

          <LoadingButton
            type="submit"
            variant="accent"
            isLoading={isLoading}
            loadingText="Generating Link..."
            className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-2"
          >
            Send Reset Instructions
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
