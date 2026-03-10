import { Suspense } from "react";
import AdminLoginForm from "@/components/admin/AdminLoginForm";

export default function AdminAuthPage() {
  return (
    <Suspense>
      <AdminLoginForm />
    </Suspense>
  );
}
