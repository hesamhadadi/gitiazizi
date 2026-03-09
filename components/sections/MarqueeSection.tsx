export default function MarqueeSection() {
  const items = [
    "Princess Irulan",
    "گرافیتی",
    "Fallen Garden",
    "تارچی",
    "Love in the Air",
    "Recycled Vests",
    "عشق در هوا",
    "Men's Shirt",
    "Moevir Paris 2025",
    "باغ افتاده",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="border-y border-white/5 py-4 overflow-hidden bg-ink">
      <div className="flex whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-ash font-body px-8">{item}</span>
            <span className="text-crimson text-xs">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
