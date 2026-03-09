"use client";
import { useState } from "react";

export default function AdminSettings() {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const seed = async () => {
    if (!confirm("This will replace ALL content in the database. Continue?")) return;
    setLoading(true);
    setMsg("");
    try {
      const res = await fetch("/api/admin/seed", {
        method: "POST",
        headers: { "x-seed-secret": "seedgiti2025" },
      });
      const data = await res.json();
      if (data.success) {
        setMsg(`✓ Seeded: ${data.collections} collections, ${data.research} research entries`);
      } else {
        setMsg("Error: " + JSON.stringify(data));
      }
    } catch {
      setMsg("Error seeding database");
    }
    setLoading(false);
  };

  return (
    <div className="p-8 md:p-12 max-w-2xl">
      <div className="mb-10">
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#af0019] mb-2">Configuration</p>
        <h1 className="text-3xl font-light text-[#f5f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Settings</h1>
      </div>

      <div className="space-y-8">
        <div className="p-6 border border-white/5">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a] mb-2">Database</p>
          <h3 className="text-[#f5f0eb] text-sm mb-3">Seed Database with Default Content</h3>
          <p className="text-[#8a8a8a] text-xs mb-5 leading-relaxed">
            Populates the database with all 7 collections and 4 research entries from Giti's portfolio. 
            Warning: this replaces all existing content.
          </p>
          <button
            onClick={seed}
            disabled={loading}
            className="px-6 py-2.5 bg-[#af0019] text-white text-[9px] tracking-[0.4em] uppercase hover:bg-[#8a0015] transition-colors disabled:opacity-50"
          >
            {loading ? "Seeding..." : "Seed Database"}
          </button>
          {msg && <p className={`text-xs mt-4 tracking-wider ${msg.startsWith("✓") ? "text-green-400" : "text-[#af0019]"}`}>{msg}</p>}
        </div>

        <div className="p-6 border border-white/5">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a] mb-2">Credentials</p>
          <h3 className="text-[#f5f0eb] text-sm mb-3">Admin Password</h3>
          <p className="text-[#8a8a8a] text-xs leading-relaxed">
            Change via <code className="text-[#af0019] bg-white/5 px-1.5 py-0.5">ADMIN_PASSWORD</code> in your <code className="text-[#af0019] bg-white/5 px-1.5 py-0.5">.env.local</code> file.
            Current: <code className="text-[#af0019]">GitiAzizi2025!</code>
          </p>
        </div>

        <div className="p-6 border border-white/5">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a] mb-2">Images</p>
          <h3 className="text-[#f5f0eb] text-sm mb-3">Image Storage</h3>
          <p className="text-[#8a8a8a] text-xs leading-relaxed mb-3">
            All 57 portfolio images are stored in <code className="text-[#af0019] bg-white/5 px-1.5 py-0.5">public/images/</code> organized by collection. 
            Use the paths below when editing collections.
          </p>
          <div className="space-y-1">
            {[
              "/images/princess-irulan/01.jpg → 07.jpg",
              "/images/fallen-garden/01.jpg → 10.jpg",
              "/images/tarchi-vests/01.jpg → 07.jpg",
              "/images/graphiti-tshirts/01.jpg → 07.jpg",
              "/images/tarchi-summer/01.jpg → 11.jpg",
              "/images/love-in-air/01.jpg → 08.jpg",
              "/images/mens-shirt/01.jpg → 05.jpg",
            ].map(p => (
              <p key={p} className="text-[10px] text-[#8a8a8a] font-mono">{p}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
