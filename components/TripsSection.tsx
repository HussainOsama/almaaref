"use client";
import Image from "next/image";
import { trips } from "@/data/trips.data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";

export default function TripsSection() {
  return (
    <section id="trips" className="py-16">
      <div className="container">
        <h2 className="mb-2 text-center text-3xl font-bold">
          الرحلات الداخلية
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-emerald-100/90">
          ننظم رحلات ثقافية وترفيهية وجماعية لتعزيز التعارف والانتماء والقيم
          التربوية عبر التجربة المباشرة.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {trips.map((trip, idx) => (
            <motion.div
              key={trip.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Card>
                <div className="p-3">
                  <Image
                    src={trip.image}
                    alt={trip.title}
                    width={600}
                    height={300}
                    className="h-48 w-full rounded-xl object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{trip.title}</CardTitle>
                    <Badge>{trip.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-emerald-100/90">
                    {trip.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span>التاريخ: {trip.date}</span>
                    <span>المكان: {trip.location}</span>
                    <span>المقاعد: {trip.seats}</span>
                  </div>
                  <div className="mt-4 text-left">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">تفاصيل</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{trip.title}</DialogTitle>
                          <DialogDescription>
                            <p className="mb-3">{trip.description}</p>
                            <ul className="list-disc space-y-1 pr-4 text-right">
                              {trip.itinerary.map((it, idx) => (
                                <li key={idx}>{it}</li>
                              ))}
                            </ul>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-emerald-800/40">
          <table className="w-full min-w-[640px] text-right">
            <thead className="bg-emerald-900/40">
              <tr>
                <th className="p-3">التاريخ</th>
                <th className="p-3">الوجهة</th>
                <th className="p-3">النوع</th>
                <th className="p-3">المقاعد المتاحة</th>
                <th className="p-3">إجراء</th>
              </tr>
            </thead>
            <tbody>
              {trips.map((trip) => (
                <tr key={trip.id} className="odd:bg-emerald-900/20">
                  <td className="p-3">{trip.date}</td>
                  <td className="p-3">{trip.location}</td>
                  <td className="p-3">
                    <Badge>{trip.type}</Badge>
                  </td>
                  <td className="p-3">{trip.seats}</td>
                  <td className="p-3">
                    <a href="#contact">
                      <Button size="sm">سجل اهتمام</Button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
