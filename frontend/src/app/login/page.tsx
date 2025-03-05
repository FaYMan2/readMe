"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react"; // Provides a nice spinner icon

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      setError("Both email and password are required.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Reset errors and start loading
    setError("");
    setIsLoading(true);

    // Simulate an async login (replace with your API call)
    setTimeout(() => {
      console.log("Login submitted", { email, password });
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md p-8 bg-[#070707] border-[1px] border-opacity-20 border-white shadow rounded animate-in fade-in-0 text-slate-200">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-1">
            <Label htmlFor="login-email" className="text-white">
              Email
            </Label>
            <Input
              id="login-email"
              type="email"
              placeholder="acme@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-black border-[2px] border-white border-opacity-100 text-white"
            />
          </div>
          <div className="grid gap-1">
            <Label htmlFor="login-password" className="text-white">
              Password
            </Label>
            <Input
              id="login-password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-black border-[2px] border-white border-opacity-100 text-white"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" disabled={isLoading} className="w-full">
            {/* Spinner shown during loading */}
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Continue
          </Button>
        </form>

        {/* Footer links */}
        <p className="text-center mt-4 text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline text-slate-200">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
