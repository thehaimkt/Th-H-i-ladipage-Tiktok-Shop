import { motion } from "motion/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tight text-primary"
        >
          MKT Software
        </motion.div>
        
        <div className="hidden md:flex gap-8 items-center">
          {["Giải pháp", "Tính năng", "Bảng giá", "Tài liệu", "Về chúng tôi"].map((item, i) => (
            <motion.a
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              href="#"
              className={`text-sm font-medium transition-colors ${
                i === 0 ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item}
            </motion.a>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.9 }}
          className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold shadow-lg shadow-primary/10"
        >
          Nhận tư vấn
        </motion.button>
      </div>
    </nav>
  );
}
