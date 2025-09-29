"use client";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const scrollToTrips = () => {
    const el = document.getElementById("trips");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950">
      <div className="container py-16 text-center">
        <div className="mx-auto mb-4 flex items-center justify-center">
          <Image
            src="/images/logo.png"
            alt="شعار مؤسسة المعارف"
            width={72}
            height={72}
            className="h-16 w-16 rounded-xl object-contain"
          />
        </div>
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">مؤسسة المعارف</h1>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed">
          مؤسسة تربوية وثقافية تهتم ببناء الفرد معرفيًا وروحيًا من خلال برامج
          تعليمية وثقافية وأنشطة ترفيهية.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Button onClick={scrollToTrips} className="gap-2" variant="default">
            استكشاف الرحلات
            <ChevronDown className="h-4 w-4" />
          </Button>
          <a href="#contact">
            <Button variant="outline" className="gap-2">
              تواصل معنا
            </Button>
          </a>
          <a href="/en" className="underline opacity-90 hover:opacity-100">
            English
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
    </section>
  );
}
