import Link from "next/link";
import Image from "next/image";
import { tripsEn } from "@/data/trips.en.data";
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

export default function EnPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950">
        <div className="container py-16 text-center">
          <div className="mx-auto mb-4 flex items-center justify-center">
            <Image
              src="/images/logo.png"
              alt="Al-Maaref Logo"
              width={72}
              height={72}
              className="h-16 w-16 rounded-xl object-contain"
            />
          </div>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Al-Maaref Foundation
          </h1>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed">
            An educational and cultural institution nurturing individuals
            spiritually and intellectually through enriching programs and
            activities.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#trips">
              <Button className="gap-2">Explore Trips</Button>
            </a>
            <a href="#contact">
              <Button variant="outline">Contact Us</Button>
            </a>
            <Link href="/">العربية</Link>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
      </section>

      <section id="trips" className="py-16">
        <div className="container">
          <h2 className="mb-2 text-center text-3xl font-bold">
            Internal Trips
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-center leading-relaxed text-emerald-100/90">
            We organize cultural, recreational, and group trips to foster values
            of collaboration, identity, and positive discipline.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {tripsEn.map((trip) => (
              <Card key={trip.id}>
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
                    <span>Date: {trip.date}</span>
                    <span>Location: {trip.location}</span>
                    <span>Seats: {trip.seats}</span>
                  </div>
                  <div className="mt-4 text-left">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline">Details</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{trip.title}</DialogTitle>
                          <DialogDescription>
                            <p className="mb-3">{trip.description}</p>
                            <ul className="list-disc space-y-1 pl-4 text-left">
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
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-emerald-950/60 py-16">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">Contact Us</h2>
          <p className="mx-auto mb-8 max-w-2xl leading-relaxed">
            For more information about our programs and upcoming trips, reach us
            via email.
          </p>
          <div className="mb-8">
            <a href="mailto:info@almaaref.org">
              <Button className="gap-2">info@almaaref.org</Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
