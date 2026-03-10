"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function getLoginError(message?: string | null) {
  if (!message) return "Login failed. Please try again.";
  if (message === "CredentialsSignin") return "Incorrect password.";
  if (message === "Configuration") return "Auth configuration is incomplete. Check NEXTAUTH_SECRET and NEXTAUTH_URL.";
  return "Login failed. Please check your setup and try again.";
}

export default function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.ok) {
      router.replace("/admin");
      router.refresh();
      return;
    }

    setError(getLoginError(result?.error));
  };

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-6" style={{ fontFamily: "'Jost', sans-serif" }}>
      <div className="w-full max-w-sm">
        <div className="mb-12 text-center">
          <p className="text-[9px] tracking-[0.6em] uppercase text-[#af0019] mb-4">Admin Access</p>
          <h1 className="text-3xl font-light text-[#f5f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Giti Azizi
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a] mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full bg-white/[0.03] border border-white/10 text-[#f5f0eb] px-4 py-3 text-sm focus:outline-none focus:border-[#af0019] transition-colors"
              placeholder="Enter password"
              autoFocus
            />
          </div>
          {error && <p className="text-[#af0019] text-xs tracking-wider">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#af0019] text-white py-3 text-[10px] tracking-[0.4em] uppercase hover:bg-[#8a0015] transition-colors disabled:opacity-50"
          >
            {loading ? "..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
