"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { Mail } from "lucide-react";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { AuthCard } from "@/components/auth/AuthCard";
import { PasswordInput } from "@/components/auth/PasswordInput";
import { OAuthButton } from "@/components/auth/OAuthButton";
import { Divider } from "@/components/auth/Divider";
import { FormError } from "@/components/auth/FormError";
import { FormSuccess } from "@/components/auth/FormSuccess";
import { LoadingButton } from "@/components/auth/LoadingButton";
import { Input } from "@/components/ui/input";

const signinSchema = z.object({
  email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
  password: z.string().min(1, "Password is required."),
});

type SigninValues = z.infer<typeof signinSchema>;

export default function SigninPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninValues>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: SigninValues) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(null);

      const res = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (res?.error) {
        setError(res.error || "Invalid email or password.");
        return;
      }

      setSuccess("Authentication successful! Redirecting to workspace...");
      setTimeout(() => {
        router.push("/dashboard");
        router.refresh();
      }, 800);
    } catch (err: any) {
      setError("An unexpected authentication error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to access your personal operating system"
    >
      <AuthCard>
        <OAuthButton provider="google" label="Continue with Google" />

        <Divider text="OR SIGN IN WITH EMAIL" />

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormError message={error || undefined} />
          <FormSuccess message={success || undefined} />

          {/* Email Field */}
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

          {/* Password Field */}
          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <label className="font-semibold text-foreground">Password</label>
              <Link
                href="/auth/forgot-password"
                className="text-accent hover:underline font-medium text-[11px]"
              >
                Forgot Password?
              </Link>
            </div>
            <PasswordInput
              {...register("password")}
              placeholder="••••••••"
              disabled={isLoading}
              error={errors.password?.message}
            />
            {errors.password && (
              <p className="text-[11px] text-destructive">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <LoadingButton
            type="submit"
            variant="accent"
            isLoading={isLoading}
            loadingText="Authenticating..."
            className="w-full h-10 rounded-xl font-semibold shadow-md text-sm mt-2"
          >
            Sign In to PTS
          </LoadingButton>
        </form>

        {/* Footer Link */}
        <div className="text-center text-xs text-muted-foreground pt-2">
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-accent font-semibold hover:underline">
            Create Account
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
