import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "ما العمر المناسب للمشاركة؟",
    a: "الرحلات مناسبة من عمر 12 عامًا وما فوق مع مراعاة نوع الرحلة.",
  },
  {
    q: "هل هناك رسوم اشتراك؟",
    a: "تختلف بحسب نوع الرحلة والبرنامج، وسيتم الإعلان عنها مع كل رحلة.",
  },
  {
    q: "كيف يتم النقل؟",
    a: "توفّر المؤسسة نقلًا آمنًا بحافلات مرخّصة مع مشرفين.",
  },
  {
    q: "ما إجراءات السلامة؟",
    a: "لدينا سياسات سلامة واضحة، ومشرفون مدرّبون، وإسعافات أولية.",
  },
  {
    q: "كيف يتم التسجيل؟",
    a: "عبر نموذج التواصل في الموقع، وسنتواصل لإتمام الخطوات.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-6 text-3xl font-bold text-center">أسئلة شائعة</h2>
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem
              value={`item-${i}`}
              key={i}
              className="border-b border-emerald-800/40"
            >
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
