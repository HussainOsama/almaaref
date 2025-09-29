export default function Footer() {
  return (
    <footer className="border-t border-emerald-800/40 py-8 text-sm">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} مؤسسة المعارف. جميع الحقوق محفوظة.</p>
        <nav className="flex gap-4">
          <a href="#trips" className="hover:underline">
            الرحلات
          </a>
          <a href="#contact" className="hover:underline">
            التواصل
          </a>
        </nav>
      </div>
    </footer>
  );
}
