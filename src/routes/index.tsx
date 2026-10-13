import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import {
  ArrowUp, BedDouble, Bike, ChefHat, ChevronLeft, ChevronRight, Droplets, Images,
  KeyRound, MapPin, Menu, MessageCircle, ShowerHead, ShieldCheck, Store, UserCheck, Wifi, X,
} from "lucide-react";
import g1 from "@/assets/photos/1791701693388.jpg";
import g2 from "@/assets/photos/IMG-20261010-WA0037.jpg";
import g3 from "@/assets/photos/IMG-20261010-WA0029.jpg";
import g4 from "@/assets/photos/IMG-20261010-WA0040.jpg";
import g5 from "@/assets/photos/IMG-20261010-WA0044.jpg";
import g6 from "@/assets/photos/IMG-20261010-WA0047.jpg";
import g7 from "@/assets/photos/IMG-20261010-WA0038.jpg";
import g8 from "@/assets/photos/IMG-20261010-WA0036.jpg";
import g9 from "@/assets/photos/IMG-20261010-WA0035.jpg";
import g10 from "@/assets/photos/IMG-20261010-WA0046.jpg";
import g11 from "@/assets/photos/IMG-20261010-WA0043.jpg";

const TITLE = "Kost Pondok Ashoka — Hunian Nyaman Dekat Kampus";
const DESC = "Kost Pondok Ashoka di Cipadung, Cibiru, Bandung. Hunian nyaman, aman, dan strategis, 15 menit dari gerbang utama kampus. Rp8.500.000 per tahun.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WA = "https://wa.me/6285147618624?text=Halo%20Pengelola%20Kost,%20saya%20tertarik%20dengan%20kamar%20kosan%20dari%20website";
const ADDRESS = "Pondok Ashoka, jl. Pd. Hijau, No. 40, Jl. Permai V No.Atas, Cipadung, Cibiru, Bandung City, West Java 40614";

const NAV = [
  { id: "beranda", label: "Beranda" },
  { id: "fasilitas", label: "Fasilitas" },
  { id: "galeri", label: "Galeri" },
  { id: "lokasi", label: "Lokasi" },
  { id: "kontak", label: "Kontak" },
];

const FACILITIES = [
  { icon: BedDouble, title: "Kamar Isian", desc: "Kamar sudah dilengkapi kasur & rak buku." },
  { icon: Wifi, title: "WiFi 24 Jam", desc: "Koneksi internet tersedia sepanjang hari." },
  { icon: ShowerHead, title: "Kamar Mandi Dalam", desc: "Kamar mandi pribadi di dalam kamar." },
  { icon: Bike, title: "Parkiran Motor Luas", desc: "Area parkir motor yang lapang." },
  { icon: ChefHat, title: "Dapur Bersama", desc: "Dapur yang dapat digunakan bersama penghuni." },
  { icon: KeyRound, title: "Akses Gerbang sampai jam 9", desc: "Gerbang kos dapat diakses hingga pukul 9." },
];

const PHOTOS: { src: string; alt: string; caption: string }[] = [
  { src: g1, alt: "Bangunan Kost Tampak Atas Drone", caption: "Tampak Atas Bangunan Kost" },
  { src: g2, alt: "Tampak Depan Kost", caption: "Depan Kost & Gerbang Utama" },
  { src: g3, alt: "Parkiran Motor", caption: "Parkiran Motor Luas" },
  { src: g4, alt: "Kamar Tidur", caption: "Kamar Tidur (Isian Kasur)" },
  { src: g5, alt: "Interior Kamar & Rak", caption: "Interior Kamar & Rak Dinding" },
  { src: g6, alt: "Kamar Mandi Dalam", caption: "Kamar Mandi Dalam & Shower" },
  { src: g7, alt: "Dapur Bersama", caption: "Dapur Bersama" },
  { src: g8, alt: "Lantai 2 & Selasar", caption: "Area Selasar Lantai 2" },
  { src: g9, alt: "Tangga Lantai 2", caption: "Akses Tangga Lantai 2" },
  { src: g10, alt: "Area Jemuran", caption: "Area Jemuran Pakaian" },
  { src: g11, alt: "Area Jemuran luar", caption: "Area Jemuran Pakaian luar" },
];

const HERO = PHOTOS[0]!;

const ADVANTAGES = [
  { icon: Store, text: "Dekat dengan warung makan murah & minimarket." },
  { icon: ShieldCheck, text: "Lingkungan tenang, aman, dan cocok untuk fokus belajar." },
  { icon: UserCheck, text: "Pengelola responsif." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("is-visible"), io.unobserve(e.target))),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="reveal mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lb, setLb] = useState<number | null>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const next = useCallback(() => setLb((i) => (i === null ? i : (i + 1) % PHOTOS.length)), []);
  const prev = useCallback(() => setLb((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)), []);

  useEffect(() => {
    if (lb === null) return;
    const k = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", k);
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [lb, next, prev]);

  const btnPrimary = "inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const btnWa = "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className={`fixed inset-x-0 top-0 z-40 transition-all ${scrolled || open ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"}`}>
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4" aria-label="Navigasi utama">
          <a href="#beranda" className={`font-display text-xl font-semibold ${scrolled || open ? "text-primary" : "text-primary-foreground"}`}>
            Kost Pondok Ashoka
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className={`text-sm font-medium transition hover:opacity-70 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>{n.label}</a>
              </li>
            ))}
          </ul>
          <button
            className={`rounded-full p-2 md:hidden ${scrolled || open ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setOpen((o) => !o)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {open && (
          <ul className="border-t border-border bg-background px-5 pb-5 md:hidden">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-foreground">{n.label}</a>
              </li>
            ))}
          </ul>
        )}
      </header>

      {/* Hero */}
      <section id="beranda" className="relative flex min-h-[92vh] items-end overflow-hidden">
        <img src={HERO.src} alt={HERO.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/60 to-emerald-deep/30" />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/80">Cipadung · Cibiru · Bandung</p>
          <h1 className="reveal mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-primary-foreground md:text-6xl">
            Hunian Nyaman, Aman, dan Strategis
          </h1>
          <p className="reveal mt-5 max-w-xl text-lg text-primary-foreground/85">
            Kost Pondok Ashoka — hanya 15 menit dari gerbang utama kampus. Tempat tinggal tenang untuk fokus belajar.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-4">
            <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 backdrop-blur">
              <span className="text-xs text-primary-foreground/75">Harga sewa</span>
              <p className="font-display text-2xl font-semibold text-primary-foreground">Rp8.500.000 <span className="font-sans text-sm font-normal">/ tahun</span></p>
            </div>
            <a href="#galeri" className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5">
              <Images className="h-4 w-4" /> Lihat Galeri
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer" className={btnWa}>
              <MessageCircle className="h-4 w-4" /> Hubungi Pengelola
            </a>
          </div>
        </div>
      </section>

      {/* Project info */}
      <div className="mx-auto -mt-8 max-w-4xl px-5">
        <div className="reveal relative rounded-2xl border border-border bg-card p-5 text-center text-sm text-muted-foreground shadow-soft">
          Social Project yang dibuat oleh kelompok <strong className="text-foreground">C++</strong> · Mentor: <strong className="text-foreground">Hiro Faletehan</strong>
          <br />Anggota: Icad, Alpi, Ashifa, Cepti, Ihsan, Putri, Reyhan, Nabil, Rayyan, dan Yoga
        </div>
      </div>

      {/* Harga */}
      <section className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Harga Sewa" title="Satu harga, tanpa repot" />
        <div className="reveal mx-auto max-w-md rounded-3xl border border-border bg-card p-10 text-center shadow-lift">
          <p className="text-sm font-medium text-muted-foreground">Sewa per tahun</p>
          <p className="mt-3 font-display text-5xl font-semibold text-primary">Rp8.500.000</p>
          <p className="mt-1 text-muted-foreground">/ tahun</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm text-accent-foreground">
            <Droplets className="h-4 w-4" /> Sudah termasuk air dan listrik standar
          </div>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={`${btnPrimary} mt-8 w-full`}>
            Tanyakan Ketersediaan Kamar
          </a>
        </div>
      </section>

      {/* Fasilitas */}
      <section id="fasilitas" className="bg-cream py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHead eyebrow="Fasilitas Kosan" title="Semua yang kamu butuhkan" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FACILITIES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="reveal group rounded-2xl border border-border bg-card p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="mx-auto max-w-6xl px-5 py-24">
        <SectionHead eyebrow="Galeri Foto Kost" title="Lihat langsung suasananya" sub="Klik foto untuk melihat ukuran besar." />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {PHOTOS.map((p, i) => (
            <button
              key={p.src} onClick={() => setLb(i)}
              className={`reveal group overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${i === 0 ? "col-span-2 row-span-2" : ""}`}
              aria-label={`Buka foto: ${p.caption}`}
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-square md:aspect-auto md:h-[calc(100%-2.75rem)]" : "aspect-[4/3]"}`}>
                <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <p className="px-3 py-3 text-sm font-medium">{p.caption}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Lokasi */}
      <section id="lokasi" className="bg-cream py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
          <div>
            <div className="reveal">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Lokasi & Keunggulan</p>
              <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Strategis untuk mahasiswa</h2>
            </div>
            <div className="reveal mt-8 flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
              <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold">Alamat</p>
                <address className="mt-1 not-italic text-muted-foreground">{ADDRESS}</address>
              </div>
            </div>
            <ul className="mt-5 space-y-3">
              {ADVANTAGES.map(({ icon: Icon, text }) => (
                <li key={text} className="reveal flex items-center gap-4 rounded-2xl bg-card/70 p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary"><Icon className="h-5 w-5" /></span>
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal overflow-hidden rounded-3xl border border-border shadow-lift">
            <iframe
              title="Peta lokasi Kost Pondok Ashoka"
              src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
              className="h-full min-h-[380px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="px-5 py-24">
        <div className="reveal mx-auto max-w-4xl rounded-3xl bg-emerald-deep px-8 py-16 text-center shadow-lift">
          <h2 className="font-display text-3xl font-semibold text-primary-foreground md:text-4xl">Tertarik atau Ingin Survey?</h2>
          <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
            Hubungi pengelola kosan langsung via WhatsApp untuk ketersediaan kamar.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className={`${btnWa} mt-8 px-8 py-4 text-base`}>
            <MessageCircle className="h-5 w-5" /> Chat Pengelola via WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-10 text-center text-sm text-muted-foreground">
          <p className="font-display text-lg font-semibold text-primary">Kost Pondok Ashoka</p>
          <p className="mt-3">Social Project kelompok C++ · Mentor: Hiro Faletehan</p>
          <p>Anggota: Icad, Alpi, Ashifa, Cepti, Ihsan, Putri, Reyhan, Nabil, Rayyan, dan Yoga</p>
          <p className="mt-4">Proyek Sosial Pemberdayaan Ekonomi Masyarakat Sekitar Kampus © 2026</p>
        </div>
      </footer>

      {/* Back to top */}
      {scrolled && (
        <button onClick={() => window.scrollTo({ top: 0 })} aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition hover:-translate-y-1">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}

      {/* Lightbox */}
      {lb !== null && (
        <div role="dialog" aria-modal="true" aria-label={PHOTOS[lb]!.caption}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-emerald-deep/95 p-4" onClick={() => setLb(null)}>
          <button onClick={() => setLb(null)} aria-label="Tutup" className="absolute right-4 top-4 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground hover:bg-primary-foreground/20"><X className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Foto sebelumnya" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground hover:bg-primary-foreground/20"><ChevronLeft className="h-6 w-6" /></button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Foto berikutnya" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-primary-foreground/10 p-3 text-primary-foreground hover:bg-primary-foreground/20"><ChevronRight className="h-6 w-6" /></button>
          <img src={PHOTOS[lb]!.src} alt={PHOTOS[lb]!.alt} onClick={(e) => e.stopPropagation()} className="max-h-[80vh] max-w-[88vw] rounded-xl object-contain" />
          <p className="mt-4 text-center text-primary-foreground">{PHOTOS[lb]!.caption} <span className="text-primary-foreground/60">· {lb + 1}/{PHOTOS.length}</span></p>
        </div>
      )}
    </div>
  );
}
