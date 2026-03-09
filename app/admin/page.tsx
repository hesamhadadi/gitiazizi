import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import Collection from "@/models/Collection";
import Research from "@/models/Research";
import Link from "next/link";

export default async function AdminDashboard() {
  await connectDB();
  const [collCount, resCount] = await Promise.all([
    Collection.countDocuments(),
    Research.countDocuments(),
  ]);

  const recentCollections = await Collection.find({}).sort({ updatedAt: -1 }).limit(5);

  const stats = [
    { label: "Collections", value: collCount, href: "/admin/collections", color: "#af0019" },
    { label: "Research Entries", value: resCount, href: "/admin/research", color: "#4a7c59" },
  ];

  return (
    <div className="p-8 md:p-12">
      <div className="mb-10">
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#af0019] mb-2">Overview</p>
        <h1 className="text-3xl font-light text-[#f5f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          Dashboard
        </h1>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-12">
        {stats.map(s => (
          <Link key={s.label} href={s.href} className="block p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <p className="text-4xl font-light text-[#f5f0eb] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              {s.value}
            </p>
            <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: s.color }}>{s.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="mb-10">
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#8a8a8a] mb-4">Quick Actions</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/collections" className="px-5 py-2.5 bg-[#af0019] text-white text-[9px] tracking-[0.35em] uppercase hover:bg-[#8a0015] transition-colors">
            Edit Collections
          </Link>
          <Link href="/admin/research" className="px-5 py-2.5 border border-white/10 text-[#f5f0eb] text-[9px] tracking-[0.35em] uppercase hover:border-white/30 transition-colors">
            Edit Research
          </Link>
        </div>
      </div>

      {/* Recent collections */}
      <div>
        <p className="text-[9px] tracking-[0.5em] uppercase text-[#8a8a8a] mb-4">Recent Collections</p>
        <div className="divide-y divide-white/5 border border-white/5">
          {recentCollections.map(col => (
            <Link key={col._id.toString()} href={`/admin/collections`} className="flex items-center justify-between px-5 py-3 hover:bg-white/[0.02] transition-colors">
              <div>
                <p className="text-sm text-[#f5f0eb]">{col.title}</p>
                <p className="text-[9px] tracking-wider text-[#8a8a8a]">{col.season} {col.year}</p>
              </div>
              <span className="text-[8px] tracking-wider text-[#af0019] uppercase">{col.featured ? "Featured" : "—"}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
