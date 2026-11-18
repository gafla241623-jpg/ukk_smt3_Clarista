"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MenuLandingPage } from "./components/navigation-menu/page";
import { Button } from "@/components/ui/button";
import { LandingPageHero } from "./components/landing-page-hero/page";
import { SearchIcon, X } from "lucide-react"
import { useState, type FormEvent } from "react";

import {
  Field,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
export default function Home() {
  const router = useRouter();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setLoginError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error ?? "Login gagal.");

      setIsLoginOpen(false);
      setPassword("");
      router.push("/admin");
      router.refresh();
    } catch (error) {
      setLoginError(error instanceof Error ? error.message : "Login gagal.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative relative w-full bg-white dark:bg-black">
      <div className="relative z-0 -mt-[96px]"> 
        <LandingPageHero /> 
      </div>
      <div className="absolute top-0 left-0 z-10 w-full flex justify-center">
        <div className="w-[95%] h-[80px] bg-blue-800 dark:bg-blue-800 rounded-[70px] flex mt-4 mx-8 p-4">
          {/* logo */}
          <div className="relative w-[200px] h-[50px] rounded-[70px] items-center justify-start">
            <Image className="p-[7px]" src="/img/smk_mvp_ars_logo_white.png" alt="logo" fill />
          </div>
          {/* menu */}
          <div className="flex flex-1 items-center justify-center">
            <MenuLandingPage />
          </div>
          {/* login */}
          <div className="flex items-center justify-end p-4">
            <Button
              onClick={() => {
                setLoginError("");
                setIsLoginOpen(true);
              }}
              className="
              bg-white 
              border border-gray-300 
              text-orange-500 
              hover:bg-gray-100 
              dark:bg-gray-800 
              dark:border-gray-700 
              dark:text-orange-400
              text-[16px]
              font-semibold
              rounded-full
              p-[20px]"
              size="lg"
            >
              Login
            </Button>
          </div>
        </div>
      </div>

      {isLoginOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-[500px] rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-900">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              aria-label="Tutup form login"
              onClick={() => setIsLoginOpen(false)}
              disabled={isSubmitting}
              className="absolute right-3 top-3"
            >
              <X/>
            </Button>
            <form onSubmit={handleLogin}>
              <Field className="w-full space-y-4 pt-2">
                <FieldLabel htmlFor="email-input">Email</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="email-input"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
                <FieldLabel htmlFor="password-input">Password</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id="password-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    disabled={isSubmitting}
                  />
                  <InputGroupAddon align="inline-start">
                    <SearchIcon className="text-muted-foreground" />
                  </InputGroupAddon>
                </InputGroup>
                {loginError && (
                  <p role="alert" className="text-sm text-red-600">
                    {loginError}
                  </p>
                )}
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Memverifikasi..." : "Submit"}
                </Button>
              </Field>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}