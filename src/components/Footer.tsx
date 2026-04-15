export default function Footer() {
  return (
    <footer className="bg-primary w-full border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto">
        <div className="text-2xl font-black text-white mb-8 md:mb-0">MKT Software</div>
        <div className="flex flex-wrap justify-center gap-8 mb-8 md:mb-0">
          {["Chính sách bảo mật", "Điều khoản sử dụng", "Liên hệ hỗ trợ", "Hệ sinh thái MKT"].map((link) => (
            <a 
              key={link}
              className="text-xs tracking-wider uppercase text-slate-300 hover:text-white transition-colors opacity-80 hover:opacity-100" 
              href="#"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="text-slate-400 text-sm">
          © 2024 MKT Software. Tất cả quyền được bảo lưu.
        </div>
      </div>
    </footer>
  );
}
