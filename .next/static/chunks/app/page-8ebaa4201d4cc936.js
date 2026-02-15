(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    1326: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => n });
      var a = s(5155),
        l = s(2115),
        r = s(7003),
        i = s(3664);
      function n() {
        let [e, t] = (0, l.useState)(""),
          [s, n] = (0, l.useState)(""),
          [c, d] = (0, l.useState)(""),
          [o, x] = (0, l.useState)(!1);
        return (0, a.jsx)("section", {
          id: "contact",
          className: "bg-emerald-950/60 py-16",
          children: (0, a.jsxs)("div", {
            className: "container text-center",
            children: [
              (0, a.jsx)("h2", {
                className: "mb-4 text-3xl font-bold",
                children: "تواصل معنا",
              }),
              (0, a.jsx)("p", {
                className: "mx-auto mb-8 max-w-2xl leading-relaxed",
                children:
                  "للمزيد من المعلومات عن برامجنا ورحلاتنا القادمة، تواصل معنا عبر البريد الإلكتروني.",
              }),
              (0, a.jsx)("div", {
                className: "mb-8",
                children: (0, a.jsx)("a", {
                  href: "mailto:info@almaaref.org",
                  children: (0, a.jsxs)(r.$, {
                    className: "gap-2",
                    variant: "default",
                    children: [
                      (0, a.jsx)(i.A, { className: "h-4 w-4" }),
                      " info@almaaref.org",
                    ],
                  }),
                }),
              }),
              (0, a.jsxs)("form", {
                onSubmit: (t) => {
                  (t.preventDefault(),
                    console.log({ name: e, phone: s, message: c }),
                    x(!0),
                    setTimeout(() => x(!1), 3e3));
                },
                className: "mx-auto max-w-xl text-right",
                children: [
                  (0, a.jsxs)("div", {
                    className: "grid gap-4",
                    children: [
                      (0, a.jsx)("input", {
                        required: !0,
                        value: e,
                        onChange: (e) => t(e.target.value),
                        placeholder: "الاسم",
                        className:
                          "rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400",
                      }),
                      (0, a.jsx)("input", {
                        required: !0,
                        value: s,
                        onChange: (e) => n(e.target.value),
                        placeholder: "الهاتف",
                        className:
                          "rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400",
                      }),
                      (0, a.jsx)("textarea", {
                        required: !0,
                        value: c,
                        onChange: (e) => d(e.target.value),
                        placeholder: "رسالتك",
                        className:
                          "min-h-[120px] rounded-xl border border-emerald-800/50 bg-emerald-900/30 p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400",
                      }),
                      (0, a.jsx)("div", {
                        className: "text-left",
                        children: (0, a.jsx)(r.$, {
                          type: "submit",
                          children: "إرسال",
                        }),
                      }),
                    ],
                  }),
                  o &&
                    (0, a.jsx)("p", {
                      className: "mt-3 text-sm text-green-300",
                      children: "تم إرسال رسالتك بنجاح!",
                    }),
                ],
              }),
            ],
          }),
        });
      }
    },
    1539: (e, t, s) => {
      "use strict";
      s.d(t, {
        Accordion: () => n,
        AccordionContent: () => o,
        AccordionItem: () => c,
        AccordionTrigger: () => d,
      });
      var a = s(5155);
      s(2115);
      var l = s(4757),
        r = s(4033),
        i = s(5016);
      let n = l.bL,
        c = l.q7;
      function d(e) {
        let { className: t, children: s, ...n } = e;
        return (0, a.jsx)(l.Y9, {
          className: "flex",
          children: (0, a.jsxs)(l.l9, {
            className: (0, i.cn)(
              "flex flex-1 items-center justify-between py-4 text-right text-base font-medium transition-all hover:underline",
              t,
            ),
            ...n,
            children: [
              s,
              (0, a.jsx)(r.A, {
                className:
                  "h-4 w-4 shrink-0 transition-transform duration-200 rtl:rotate-180 data-[state=open]:rotate-180",
              }),
            ],
          }),
        });
      }
      function o(e) {
        let { className: t, children: s, ...r } = e;
        return (0, a.jsx)(l.UC, {
          className: (0, i.cn)(
            "overflow-hidden text-emerald-100/90 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
            t,
          ),
          ...r,
          children: (0, a.jsx)("div", { className: "pb-4 pt-0", children: s }),
        });
      }
    },
    1602: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => n });
      var a = s(5155),
        l = s(7003),
        r = s(4033),
        i = s(5239);
      function n() {
        return (0, a.jsxs)("section", {
          className: "relative overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className: "absolute inset-0",
              children: [
                (0, a.jsx)(i.default, {
                  src: "/images/kuwait-city.jpg",
                  alt: "Kuwait City Skyline",
                  fill: !0,
                  className: "object-cover",
                  priority: !0,
                }),
                (0, a.jsx)("div", {
                  className:
                    "absolute inset-0 bg-gradient-to-b from-emerald-900/85 via-emerald-800/80 to-emerald-950/90",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "container relative z-10 py-16 text-center",
              children: [
                (0, a.jsx)("div", {
                  className: "mx-auto mb-4 flex items-center justify-center",
                  children: (0, a.jsx)(i.default, {
                    src: "/images/logo.png",
                    alt: "شعار مؤسسة المعارف",
                    width: 72,
                    height: 72,
                    className: "h-16 w-16 rounded-xl object-contain",
                  }),
                }),
                (0, a.jsx)("h1", {
                  className: "mb-4 text-4xl font-bold md:text-5xl",
                  children: "مؤسسة المعارف",
                }),
                (0, a.jsx)("p", {
                  className: "mx-auto max-w-3xl text-lg leading-relaxed",
                  children:
                    "شركة المعارف الثقافية لتنظيم الرحلت السياحية والرشاد السياحي الداخلي",
                }),
                (0, a.jsxs)("div", {
                  className: "mt-8 flex items-center justify-center gap-4",
                  children: [
                    (0, a.jsxs)(l.$, {
                      onClick: () => {
                        let e = document.getElementById("trips");
                        e && e.scrollIntoView({ behavior: "smooth" });
                      },
                      className: "gap-2",
                      variant: "default",
                      children: [
                        "استكشاف الرحلات",
                        (0, a.jsx)(r.A, { className: "h-4 w-4" }),
                      ],
                    }),
                    (0, a.jsx)("a", {
                      href: "#contact",
                      children: (0, a.jsx)(l.$, {
                        variant: "outline",
                        className: "gap-2",
                        children: "تواصل معنا",
                      }),
                    }),
                    (0, a.jsx)("a", {
                      href: "/en",
                      className: "underline opacity-90 hover:opacity-100",
                      children: "English",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]",
            }),
          ],
        });
      }
    },
    2904: (e, t, s) => {
      (Promise.resolve().then(s.bind(s, 1326)),
        Promise.resolve().then(s.bind(s, 1602)),
        Promise.resolve().then(s.bind(s, 8767)),
        Promise.resolve().then(s.bind(s, 1539)));
    },
    4679: (e, t, s) => {
      "use strict";
      s.d(t, {
        Dialog: () => n,
        DialogContent: () => o,
        DialogDescription: () => h,
        DialogHeader: () => x,
        DialogTitle: () => m,
        DialogTrigger: () => c,
      });
      var a = s(5155);
      s(2115);
      var l = s(3458),
        r = s(5229),
        i = s(5016);
      let n = l.bL,
        c = l.l9,
        d = l.ZL;
      function o(e) {
        let { className: t, children: s, ...n } = e;
        return (0, a.jsxs)(d, {
          children: [
            (0, a.jsx)(l.hJ, { className: "fixed inset-0 z-50 bg-black/50" }),
            (0, a.jsxs)(l.UC, {
              className: (0, i.cn)(
                "fixed z-50 grid w-full max-w-lg gap-4 rounded-2xl border border-emerald-800/50 bg-emerald-900/95 p-6 shadow-lg backdrop-blur-xl",
                "right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2",
                t,
              ),
              ...n,
              children: [
                s,
                (0, a.jsxs)(l.bm, {
                  className:
                    "absolute left-4 top-4 rounded-md opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none",
                  children: [
                    (0, a.jsx)(r.A, { className: "h-5 w-5" }),
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: "إغلاق",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      function x(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, i.cn)(
            "flex flex-col space-y-1.5 text-center sm:text-right",
            t,
          ),
          ...s,
        });
      }
      function m(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("h3", {
          className: (0, i.cn)(
            "text-lg font-bold leading-none tracking-tight",
            t,
          ),
          ...s,
        });
      }
      function h(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("p", {
          className: (0, i.cn)("text-sm text-emerald-100/80", t),
          ...s,
        });
      }
      l.bm;
    },
    5016: (e, t, s) => {
      "use strict";
      s.d(t, { cn: () => r });
      var a = s(2821),
        l = s(5889);
      function r() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++)
          t[s] = arguments[s];
        return (0, l.QP)((0, a.$)(t));
      }
    },
    7003: (e, t, s) => {
      "use strict";
      s.d(t, { $: () => c });
      var a = s(5155),
        l = s(2115),
        r = s(3101),
        i = s(5016);
      let n = (0, r.F)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2",
          {
            variants: {
              variant: {
                default: "bg-yellow-400 text-emerald-950 hover:bg-yellow-300",
                outline:
                  "border border-emerald-700 text-white hover:bg-emerald-900/40",
                ghost: "hover:bg-emerald-900/40 text-white",
              },
              size: {
                default: "h-10 px-4",
                sm: "h-9 rounded-lg px-3",
                lg: "h-11 rounded-2xl px-8 text-base",
              },
            },
            defaultVariants: { variant: "default", size: "default" },
          },
        ),
        c = l.forwardRef((e, t) => {
          let { className: s, variant: l, size: r, ...c } = e;
          return (0, a.jsx)("button", {
            ref: t,
            className: (0, i.cn)(n({ variant: l, size: r }), s),
            ...c,
          });
        });
      c.displayName = "Button";
    },
    8767: (e, t, s) => {
      "use strict";
      s.d(t, { default: () => p });
      var a = s(5155),
        l = s(5239);
      let r = [
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
          description:
            "لقاءات تعارف وتمارين بناء فريق لتعزيز روح التعاون والانضباط.",
          itinerary: [
            "جلسة افتتاحية",
            "تمارين بناء الفريق",
            "أنشطة تأملية",
            "خاتمة وتقويم",
          ],
        },
      ];
      s(2115);
      var i = s(5016);
      function n(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", {
          className: (0, i.cn)(
            "rounded-2xl border border-emerald-800/40 bg-emerald-900/40 shadow-sm",
            t,
          ),
          ...s,
        });
      }
      function c(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", { className: (0, i.cn)("p-6 pb-0", t), ...s });
      }
      function d(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("h3", {
          className: (0, i.cn)("text-xl font-bold", t),
          ...s,
        });
      }
      function o(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("div", { className: (0, i.cn)("p-6 pt-4", t), ...s });
      }
      function x(e) {
        let { className: t, ...s } = e;
        return (0, a.jsx)("span", {
          className: (0, i.cn)(
            "inline-flex items-center rounded-full bg-emerald-800/70 px-3 py-1 text-xs font-medium text-white",
            t,
          ),
          ...s,
        });
      }
      var m = s(7003),
        h = s(4679),
        u = s(7872);
      function p() {
        return (0, a.jsx)("section", {
          id: "trips",
          className: "py-16",
          children: (0, a.jsxs)("div", {
            className: "container",
            children: [
              (0, a.jsx)("h2", {
                className: "mb-2 text-center text-3xl font-bold",
                children: "الرحلات الداخلية",
              }),
              (0, a.jsx)("p", {
                className:
                  "mx-auto mb-10 max-w-3xl text-center leading-relaxed text-emerald-100/90",
                children:
                  "ننظم رحلات ثقافية وترفيهية وجماعية لتعزيز التعارف والانتماء والقيم التربوية عبر التجربة المباشرة.",
              }),
              (0, a.jsx)("div", {
                className: "grid gap-6 md:grid-cols-3",
                children: r.map((e, t) =>
                  (0, a.jsx)(
                    u.P.div,
                    {
                      initial: { opacity: 0, y: 16 },
                      whileInView: { opacity: 1, y: 0 },
                      viewport: { once: !0, amount: 0.2 },
                      transition: { duration: 0.4, delay: 0.05 * t },
                      children: (0, a.jsxs)(n, {
                        children: [
                          (0, a.jsx)("div", {
                            className: "p-3",
                            children: (0, a.jsx)(l.default, {
                              src: e.image,
                              alt: e.title,
                              width: 600,
                              height: 300,
                              className: "h-48 w-full rounded-xl object-cover",
                            }),
                          }),
                          (0, a.jsx)(c, {
                            children: (0, a.jsxs)("div", {
                              className: "flex items-center justify-between",
                              children: [
                                (0, a.jsx)(d, { children: e.title }),
                                (0, a.jsx)(x, { children: e.type }),
                              ],
                            }),
                          }),
                          (0, a.jsxs)(o, {
                            children: [
                              (0, a.jsx)("p", {
                                className: "mb-4 text-sm text-emerald-100/90",
                                children: e.description,
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex items-center justify-between text-sm",
                                children: [
                                  (0, a.jsxs)("span", {
                                    children: ["التاريخ: ", e.date],
                                  }),
                                  (0, a.jsxs)("span", {
                                    children: ["المكان: ", e.location],
                                  }),
                                  (0, a.jsxs)("span", {
                                    children: ["المقاعد: ", e.seats],
                                  }),
                                ],
                              }),
                              (0, a.jsx)("div", {
                                className: "mt-4 text-left",
                                children: (0, a.jsxs)(h.Dialog, {
                                  children: [
                                    (0, a.jsx)(h.DialogTrigger, {
                                      asChild: !0,
                                      children: (0, a.jsx)(m.$, {
                                        variant: "outline",
                                        children: "تفاصيل",
                                      }),
                                    }),
                                    (0, a.jsx)(h.DialogContent, {
                                      children: (0, a.jsxs)(h.DialogHeader, {
                                        children: [
                                          (0, a.jsx)(h.DialogTitle, {
                                            children: e.title,
                                          }),
                                          (0, a.jsxs)(h.DialogDescription, {
                                            children: [
                                              (0, a.jsx)("p", {
                                                className: "mb-3",
                                                children: e.description,
                                              }),
                                              (0, a.jsx)("ul", {
                                                className:
                                                  "list-disc space-y-1 pr-4 text-right",
                                                children: e.itinerary.map(
                                                  (e, t) =>
                                                    (0, a.jsx)(
                                                      "li",
                                                      { children: e },
                                                      t,
                                                    ),
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
              (0, a.jsx)("div", {
                className:
                  "mt-12 overflow-x-auto rounded-2xl border border-emerald-800/40",
                children: (0, a.jsxs)("table", {
                  className: "w-full min-w-[640px] text-right",
                  children: [
                    (0, a.jsx)("thead", {
                      className: "bg-emerald-900/40",
                      children: (0, a.jsxs)("tr", {
                        children: [
                          (0, a.jsx)("th", {
                            className: "p-3",
                            children: "التاريخ",
                          }),
                          (0, a.jsx)("th", {
                            className: "p-3",
                            children: "الوجهة",
                          }),
                          (0, a.jsx)("th", {
                            className: "p-3",
                            children: "النوع",
                          }),
                          (0, a.jsx)("th", {
                            className: "p-3",
                            children: "المقاعد المتاحة",
                          }),
                          (0, a.jsx)("th", {
                            className: "p-3",
                            children: "إجراء",
                          }),
                        ],
                      }),
                    }),
                    (0, a.jsx)("tbody", {
                      children: r.map((e) =>
                        (0, a.jsxs)(
                          "tr",
                          {
                            className: "odd:bg-emerald-900/20",
                            children: [
                              (0, a.jsx)("td", {
                                className: "p-3",
                                children: e.date,
                              }),
                              (0, a.jsx)("td", {
                                className: "p-3",
                                children: e.location,
                              }),
                              (0, a.jsx)("td", {
                                className: "p-3",
                                children: (0, a.jsx)(x, { children: e.type }),
                              }),
                              (0, a.jsx)("td", {
                                className: "p-3",
                                children: e.seats,
                              }),
                              (0, a.jsx)("td", {
                                className: "p-3",
                                children: (0, a.jsx)("a", {
                                  href: "#contact",
                                  children: (0, a.jsx)(m.$, {
                                    size: "sm",
                                    children: "سجل اهتمام",
                                  }),
                                }),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    (e.O(0, [187, 427, 441, 255, 358], () => e((e.s = 2904))), (_N_E = e.O()));
  },
]);
