"use client";
import { useState, useEffect } from "react";

interface Research {
  _id: string;
  slug: string;
  title: string;
  collection: string;
  description: string;
  content: string;
  images: string[];
  published: boolean;
}

const EMPTY: Omit<Research, "_id"> = {
  slug: "", title: "", collection: "", description: "", content: "", images: [], published: true,
};

export default function AdminResearch() {
  const [items, setItems] = useState<Research[]>([]);
  const [selected, setSelected] = useState<Research | null>(null);
  const [form, setForm] = useState<Omit<Research, "_id">>(EMPTY);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const load = async () => {
    const res = await fetch("/api/admin/research");
    setItems(await res.json());
  };

  useEffect(() => { load(); }, []);

  const select = (item: Research) => {
    setSelected(item);
    setCreating(false);
    setForm({ slug: item.slug, title: item.title, collection: item.collection, description: item.description, content: item.content, images: item.images || [], published: item.published });
  };

  const save = async () => {
    setLoading(true); setMsg("");
    try {
      if (creating) {
        await fetch("/api/admin/research", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        setMsg("Created!"); setCreating(false);
      } else if (selected) {
        await fetch(`/api/admin/research/${selected._id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        setMsg("Saved!");
      }
      await load();
    } catch { setMsg("Error"); }
    setLoading(false);
  };

  const del = async (id: string) => {
    if (!confirm("Delete?")) return;
    await fetch(`/api/admin/research/${id}`, { method: "DELETE" });
    setSelected(null); setForm(EMPTY); await load();
  };

  const F = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 border-r border-white/5 flex flex-col overflow-hidden bg-[#0c0c0c]">
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a]">Research</p>
          <button onClick={() => { setSelected(null); setCreating(true); setForm(EMPTY); }} className="text-[#af0019] text-lg leading-none hover:text-[#f5f0eb] transition-colors">+</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {items.map(item => (
            <button key={item._id} onClick={() => select(item)}
              className={`w-full text-left px-4 py-3 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors ${selected?._id === item._id ? "bg-white/[0.05] border-l-2 border-l-[#af0019]" : ""}`}>
              <p className="text-xs text-[#f5f0eb] truncate">{item.title}</p>
              <p className="text-[9px] text-[#8a8a8a] mt-0.5 truncate">{item.collection}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-8">
        {!selected && !creating ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-[#8a8a8a] text-sm mb-4">Select a research entry to edit</p>
              <button onClick={() => { setCreating(true); setForm(EMPTY); }} className="px-6 py-3 bg-[#af0019] text-white text-[9px] tracking-[0.4em] uppercase">New Entry</button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-[#f5f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {creating ? "New Research Entry" : form.title}
              </h2>
              <div className="flex gap-3">
                {!creating && selected && (
                  <button onClick={() => del(selected._id)} className="px-4 py-2 border border-[#af0019]/30 text-[#af0019] text-[9px] tracking-[0.3em] uppercase hover:bg-[#af0019]/10 transition-colors">Delete</button>
                )}
                <button onClick={save} disabled={loading} className="px-6 py-2 bg-[#af0019] text-white text-[9px] tracking-[0.4em] uppercase disabled:opacity-50 hover:bg-[#8a0015] transition-colors">
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>

            {msg && <p className="text-xs text-green-400 mb-6 tracking-wider">{msg}</p>}

            <div className="grid grid-cols-2 gap-6 max-w-4xl">
              <Field label="Title"><input className="admin-input" value={form.title} onChange={F("title")} /></Field>
              <Field label="Slug"><input className="admin-input" value={form.slug} onChange={F("slug")} /></Field>
              <Field label="Collection" className="col-span-2"><input className="admin-input" value={form.collection} onChange={F("collection")} placeholder="Princess Irulan Redesign" /></Field>
              <Field label="Description" className="col-span-2"><textarea className="admin-input" value={form.description} onChange={F("description")} rows={2} /></Field>
              <Field label="Content" className="col-span-2"><textarea className="admin-input" value={form.content} onChange={F("content")} rows={10} /></Field>
              <Field label="Images (one path per line)" className="col-span-2">
                <textarea className="admin-input" rows={5}
                  value={form.images.join("\n")}
                  onChange={e => setForm(f => ({ ...f, images: e.target.value.split("\n").filter(Boolean) }))} />
              </Field>
              <label className="col-span-2 flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} className="accent-[#af0019] w-4 h-4" />
                <span className="text-[10px] tracking-[0.35em] uppercase text-[#8a8a8a]">Published</span>
              </label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="block text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a] mb-2">{label}</label>
      {children}
    </div>
  );
}
