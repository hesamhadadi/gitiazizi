"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Collection {
  _id: string;
  slug: string;
  title: string;
  season: string;
  year: string;
  description: string;
  story: string;
  materials: string[];
  palette: string[];
  images: string[];
  coverImage: string;
  featured: boolean;
  published: boolean;
  order: number;
}

const EMPTY: Omit<Collection, "_id"> = {
  slug: "", title: "", season: "", year: "", description: "", story: "",
  materials: [], palette: [], images: [], coverImage: "",
  featured: false, published: true, order: 0,
};

export default function AdminCollections() {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [selected, setSelected] = useState<Collection | null>(null);
  const [form, setForm] = useState<Omit<Collection, "_id">>(EMPTY);
  const [creating, setCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const load = async () => {
    const res = await fetch("/api/admin/collections");
    const data = await res.json();
    setCollections(data);
  };

  useEffect(() => { load(); }, []);

  const selectCollection = (col: Collection) => {
    setSelected(col);
    setCreating(false);
    setForm({
      slug: col.slug, title: col.title, season: col.season, year: col.year,
      description: col.description, story: col.story,
      materials: col.materials || [], palette: col.palette || [],
      images: col.images || [], coverImage: col.coverImage || "",
      featured: col.featured, published: col.published, order: col.order,
    });
  };

  const startCreate = () => {
    setSelected(null);
    setCreating(true);
    setForm(EMPTY);
  };

  const save = async () => {
    setLoading(true);
    setMsg("");
    try {
      if (creating) {
        await fetch("/api/admin/collections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setMsg("Created!");
        setCreating(false);
      } else if (selected) {
        await fetch(`/api/admin/collections/${selected._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setMsg("Saved!");
      }
      await load();
    } catch {
      setMsg("Error saving");
    }
    setLoading(false);
  };

  const del = async (id: string) => {
    if (!confirm("Delete this collection?")) return;
    await fetch(`/api/admin/collections/${id}`, { method: "DELETE" });
    setSelected(null);
    setForm(EMPTY);
    await load();
  };

  const F = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }));

  const FArr = (key: "materials" | "palette" | "images") => (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value.split("\n").filter(Boolean) }));

  return (
    <div className="flex h-screen overflow-hidden">
      {/* List */}
      <div className="w-64 border-r border-white/5 flex flex-col overflow-hidden bg-[#0c0c0c]">
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
          <p className="text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a]">Collections</p>
          <button onClick={startCreate} className="text-[#af0019] text-lg leading-none hover:text-[#f5f0eb] transition-colors" title="New">+</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {collections.map(col => (
            <button
              key={col._id}
              onClick={() => selectCollection(col)}
              className={`w-full text-left px-4 py-3 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors ${selected?._id === col._id ? "bg-white/[0.05] border-l-2 border-l-[#af0019]" : ""}`}
            >
              <p className="text-xs text-[#f5f0eb] truncate">{col.title}</p>
              <p className="text-[9px] text-[#8a8a8a] mt-0.5">{col.season} {col.year}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 overflow-y-auto p-8">
        {!selected && !creating ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <p className="text-[#8a8a8a] text-sm mb-4">Select a collection to edit</p>
              <button onClick={startCreate} className="px-6 py-3 bg-[#af0019] text-white text-[9px] tracking-[0.4em] uppercase hover:bg-[#8a0015] transition-colors">
                New Collection
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light text-[#f5f0eb]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {creating ? "New Collection" : form.title || "Edit Collection"}
              </h2>
              <div className="flex gap-3">
                {!creating && selected && (
                  <button onClick={() => del(selected._id)} className="px-4 py-2 border border-[#af0019]/30 text-[#af0019] text-[9px] tracking-[0.3em] uppercase hover:bg-[#af0019]/10 transition-colors">
                    Delete
                  </button>
                )}
                <button onClick={save} disabled={loading} className="px-6 py-2 bg-[#af0019] text-white text-[9px] tracking-[0.4em] uppercase hover:bg-[#8a0015] transition-colors disabled:opacity-50">
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>

            {msg && <p className="text-xs text-green-400 mb-6 tracking-wider">{msg}</p>}

            <div className="grid grid-cols-2 gap-6 max-w-4xl">
              <Field label="Title">
                <input className="admin-input" value={form.title} onChange={F("title")} />
              </Field>
              <Field label="Slug">
                <input className="admin-input" value={form.slug} onChange={F("slug")} placeholder="princess-irulan" />
              </Field>
              <Field label="Season">
                <input className="admin-input" value={form.season} onChange={F("season")} placeholder="Winter" />
              </Field>
              <Field label="Year">
                <input className="admin-input" value={form.year} onChange={F("year")} placeholder="2025" />
              </Field>
              <Field label="Description" className="col-span-2">
                <textarea className="admin-input" value={form.description} onChange={F("description")} rows={2} />
              </Field>
              <Field label="Story" className="col-span-2">
                <textarea className="admin-input" value={form.story} onChange={F("story")} rows={5} />
              </Field>
              <Field label="Cover Image Path">
                <input className="admin-input" value={form.coverImage} onChange={F("coverImage")} placeholder="/images/princess-irulan/06.jpg" />
              </Field>
              <Field label="Order">
                <input className="admin-input" type="number" value={form.order} onChange={F("order")} />
              </Field>
              <Field label="Materials (one per line)">
                <textarea className="admin-input" value={form.materials.join("\n")} onChange={FArr("materials")} rows={5} />
              </Field>
              <Field label="Palette hex codes (one per line)">
                <textarea className="admin-input" value={form.palette.join("\n")} onChange={FArr("palette")} rows={5} />
                <div className="flex gap-2 mt-2">
                  {form.palette.map(c => (
                    <div key={c} className="w-6 h-6 border border-white/10" style={{ background: c }} title={c} />
                  ))}
                </div>
              </Field>
              <Field label="Images (one path per line)" className="col-span-2">
                <textarea className="admin-input" value={form.images.join("\n")} onChange={FArr("images")} rows={8} />
              </Field>
              <div className="col-span-2 flex gap-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.featured} onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))} className="accent-[#af0019] w-4 h-4" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#8a8a8a]">Featured on homepage</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={form.published} onChange={e => setForm(f => ({ ...f, published: e.target.checked }))} className="accent-[#af0019] w-4 h-4" />
                  <span className="text-[10px] tracking-[0.35em] uppercase text-[#8a8a8a]">Published</span>
                </label>
              </div>

              {/* Image preview */}
              {form.coverImage && (
                <div className="col-span-2">
                  <p className="text-[9px] tracking-[0.4em] uppercase text-[#8a8a8a] mb-3">Cover Preview</p>
                  <div className="relative h-40 w-64 overflow-hidden border border-white/10">
                    <Image src={form.coverImage} alt="Cover" fill className="object-cover" />
                  </div>
                </div>
              )}
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
