"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { User, Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { PasswordStrength } from "@/components/auth/PasswordStrength";
import { OAuthButton } from "@/components/auth/OAuthButton";
import { Divider } from "@/components/auth/Divider";
import { FormError } from "@/components/auth/FormError";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { LoadingButton } from "@/components/auth/LoadingButton";
import { Input } from "@/components/ui/input";

const signupSchema = z
  .object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
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

type SignupValues = z.infer<typeof signupSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const watchPassword = watch("password");

  const onSubmit = async (data: SignupValues) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const resData = await response.json();

      if (!response.ok) {
        setError(resData.error || "Failed to create account.");
        return;
      }

      setSuccess("Account created successfully! Logging you in...");

      // Automatically authenticate user
      const authRes = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (authRes?.error) {
        router.push("/auth/signin");
        return;
      }

      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 800);
    } catch (err: any) {
      setError("An unexpected error occurred during account creation.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join PTS and unify your tasks, workouts, and knowledge"
    >
      <AuthCard>
        <OAuthButton provider="google" label="Continue with Google" />

        <Divider text="OR REGISTER WITH EMAIL" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormError message={error || undefined} />
          <FormSuccess message={success || undefined} />

          {/* Full Name */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground flex justify-between">
              <span>Full Name</span>
              {errors.name && (
                <span className="text-destructive font-normal">{errors.name.message}</span>
              )}
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                <User className="h-4 w-4" />
              </div>
              <Input
                {...register("name")}
                type="text"
                placeholder="Alex Morgan"
                className={`pl-10 h-10 rounded-xl ${errors.name ? "border-destructive" : ""}`}
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground flex justify-between">
              <span>Email Address</span>
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

          {/* Password */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Password</label>
            <PasswordInput
              {...register("password")}
              placeholder="••••••••"
              disabled={isLoading}
              error={errors.password?.message}
            />
            {errors.password && (
              <p className="text-[11px] text-destructive">{errors.password.message}</p>
            )}
            <PasswordStrength password={watchPassword} />
          </div>

          {/* Confirm Password */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Confirm Password</label>
            <PasswordInput
              {...register("confirmPassword")}
              placeholder="••••••••"
              disabled={isLoading}
              error={errors.confirmPassword?.message}
            />
            {errors.confirmPassword && (
              <p className="text-[11px] text-destructive">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Submit */}
          <LoadingButton
            type="submit"
            variant="accent"
            isLoading={isLoading}
            loadingText="Creating Account..."
            className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-2"
          >
            Create Free PTS Account
          </LoadingButton>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-muted-foreground pt-2">
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-accent font-semibold hover:underline">
            Sign In
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
