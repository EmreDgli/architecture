import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6">
      <h1 className="font-serif text-4xl text-heading sm:text-5xl md:text-6xl">
        Proje Bulunamadı
      </h1>
      <p className="mt-4 text-body">
        Aradığınız proje bulunmamaktadır.
      </p>
      <Link
        href="/#portfolio"
        className="mt-8 inline-flex items-center gap-2 border border-border px-8 py-3 text-sm uppercase tracking-widest text-heading transition-colors duration-300 hover:border-warm-accent hover:text-warm-accent"
      >
        <ArrowLeft className="size-4" />
        Portföye Dön
      </Link>
    </div>
  );
}
