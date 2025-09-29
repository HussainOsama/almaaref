export default function AlMaarefPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 via-emerald-800 to-emerald-950 text-white font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">مؤسسة المعارف</h1>
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          مؤسسة تربوية وثقافية تهتم ببناء الفرد معرفيًا وروحيًا من خلال برامج تعليمية،
          ثقافية، وأنشطة ترفيهية. نؤمن أن التربية الحقيقية تجمع بين العلم، الأخلاق،
          والمتعة الهادفة.
        </p>
      </section>

      {/* Internal Trips Section */}
      <section className="bg-emerald-950/40 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">🚍 الرحلات الداخلية</h2>
          <p className="text-center text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
            من أبرز ما يميز مؤسسة المعارف تنظيم الرحلات الداخلية، حيث ننطلق مع المشاركين
            في جولات ثقافية وترفيهية داخل الكويت، لنعزز روح الجماعة، التعارف، والتعلم
            من التجربة المباشرة. الرحلات ليست مجرد ترفيه بل وسيلة لبناء قيم التعاون،
            الانضباط، والروح الإيجابية.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-lg bg-emerald-800/40">
              <img src="/images/trip1.jpg" alt="رحلة ثقافية" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">رحلات ثقافية</h3>
                <p>زيارة المتاحف والمعالم الوطنية لتعزيز الهوية والانتماء.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-emerald-800/40">
              <img src="/images/trip2.jpg" alt="رحلة ترفيهية" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">رحلات ترفيهية</h3>
                <p>أنشطة ممتعة في المنتزهات والمراكز الترفيهية لتجديد الطاقة.</p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-emerald-800/40">
              <img src="/images/trip3.jpg" alt="رحلة جماعية" className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">رحلات جماعية</h3>
                <p>تعزيز روح الفريق من خلال أنشطة جماعية ومسابقات تفاعلية.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Programs Section */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">📚 البرامج الأخرى</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-emerald-800/40 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">الدورات التعليمية</h3>
              <p>أصول الدين، الفقه المبسط، وورش معرفية تعزز وعي الجيل الجديد.</p>
            </div>
            <div className="bg-emerald-800/40 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">البرامج العائلية</h3>
              <p>أنشطة خاصة بالعائلات مثل منتزه المعارف، تجمع بين الترفيه والإيمان.</p>
            </div>
            <div className="bg-emerald-800/40 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-3">الأنشطة الموسمية</h3>
              <p>برامج خاصة لشهر رمضان ومحرم لتربية روحية واجتماعية متكاملة.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-emerald-950/60 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">📞 تواصل معنا</h2>
        <p className="max-w-2xl mx-auto mb-6 leading-relaxed">
          للمزيد من المعلومات عن برامجنا ورحلاتنا القادمة، يمكنكم التواصل معنا عبر البريد
          الإلكتروني أو وسائل التواصل الاجتماعي.
        </p>
        <a
          href="mailto:info@almaaref.org"
          className="inline-block bg-yellow-400 text-emerald-950 font-bold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
        >
          info@almaaref.org
        </a>
      </section>
    </div>
  );
}
