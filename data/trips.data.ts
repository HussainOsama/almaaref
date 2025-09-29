export type TripType = "ثقافية" | "ترفيهية" | "جماعية";

export type Trip = {
  id: string;
  title: string;
  type: TripType;
  date: string;
  location: string;
  seats: number;
  image: string;
  description: string;
  itinerary: string[];
};

export const trips: Trip[] = [
  {
    id: "t1",
    title: "رحلة ثقافية إلى المتحف الوطني",
    type: "ثقافية",
    date: "2025-10-10",
    location: "مدينة الكويت",
    seats: 24,
    image: "/images/trip1.svg",
    description:
      "زيارة تعليمية للمتحف الوطني للتعرف على التراث والتاريخ الكويتي.",
    itinerary: [
      "التجمع والانطلاق الساعة 9 صباحًا",
      "جولة في المعرض التاريخي",
      "ورشة قصيرة حول الهوية الوطنية",
      "العودة الساعة 1 ظهرًا",
    ],
  },
  {
    id: "t2",
    title: "رحلة ترفيهية إلى المنتزه",
    type: "ترفيهية",
    date: "2025-10-18",
    location: "الأحمدي",
    seats: 30,
    image: "/images/trip2.svg",
    description: "أنشطة حركية وألعاب جماعية في أجواء ممتعة وآمنة.",
    itinerary: [
      "الانطلاق 8 صباحًا",
      "ألعاب ومسابقات",
      "استراحة غذاء",
      "العودة 2 ظهرًا",
    ],
  },
  {
    id: "t3",
    title: "رحلة جماعية للتعارف وبناء الفريق",
    type: "جماعية",
    date: "2025-10-25",
    location: "الجهراء",
    seats: 18,
    image: "/images/trip3.svg",
    description: "لقاءات تعارف وتمارين بناء فريق لتعزيز روح التعاون والانضباط.",
    itinerary: [
      "جلسة افتتاحية",
      "تمارين بناء الفريق",
      "أنشطة تأملية",
      "خاتمة وتقويم",
    ],
  },
];
