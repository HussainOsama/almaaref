"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, message });
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-emerald-950/60 py-16">
      <div className="container text-center">
        <h2 className="mb-4 text-3xl font-bold">تواصل معنا</h2>
        <p className="mx-auto mb-8 max-w-2xl leading-relaxed">
          للمزيد من المعلومات عن برامجنا ورحلاتنا القادمة، تواصل معنا عبر البريد
          الإلكتروني.
        </p>
        <div className="mb-8">
          <a href="mailto:info@almaaref.org">
            <Button className="gap-2" variant="default">
              <Mail className="h-4 w-4" /> info@almaaref.org
            </Button>
          </a>
        </div>

        <form onSubmit={onSubmit} className="mx-auto max-w-xl text-right">
          <div className="grid gap-4">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="الاسم"
              className="rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="الهاتف"
              className="rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="رسالتك"
              className="min-h-[120px] rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <div className="text-left">
              <Button type="submit">إرسال</Button>
            </div>
          </div>
          {sent && (
            <p className="mt-3 text-sm text-green-300">
              تم إرسال رسالتك بنجاح!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
