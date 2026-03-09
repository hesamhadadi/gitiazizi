import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/admin-auth");
  }

  return (
    <div className="flex min-h-screen bg-[#080808]" style={{ fontFamily: "'Jost', sans-serif" }}>
      <AdminSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}

