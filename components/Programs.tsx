import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Programs() {
  return (
    <section className="py-16">
      <div className="container text-center">
        <h2 className="mb-8 text-3xl font-bold">البرامج الأخرى</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "الدورات التعليمية",
              desc: "أصول الدين، الفقه المبسط، وورش معرفية للشباب.",
            },
            {
              title: "البرامج العائلية",
              desc: "أنشطة للعائلات تجمع بين الترفيه والقيم.",
            },
            {
              title: "الأنشطة الموسمية",
              desc: "برامج خاصة لشهر رمضان ومحرم لتعزيز الروح.",
            },
          ].map((p) => (
            <Card key={p.title}>
              <CardHeader>
                <CardTitle>{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-100/90">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
