import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <span className="text-xs tracking-widest uppercase text-on-surface-variant mb-4 block font-black">
            Tiktok Shop Automation
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-primary tracking-tight leading-[1.1] mb-6">
            Xây hệ thống TikTok Shop bài bản từ chọn sản phẩm, làm nội dung đến ra đơn
          </h1>
          <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
            Tự động hóa toàn bộ quy trình vận hành TikTok Shop. Giải pháp giúp bạn tối ưu chi phí, nhân sự và bùng nổ doanh số một cách bền vững.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="signature-gradient text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-primary/20"
            >
              Nhận tư vấn ngay
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-surface-container-high text-primary px-8 py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all"
            >
              Xem demo giải pháp
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary-container blur-[120px] opacity-20 -z-10"></div>
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-outline-variant/20 bg-surface-container-lowest p-2">
            <img 
              className="rounded-xl w-full h-auto" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF3eAqumKW3jWVujrK4ReMkQs1EQYb7t2gSWQQgsd9CawlU2aWT_xun8CPbf-MlprLENHMbJJteA44wKX8Dl46gi-GMh2BYDvfgTgOPybi6eOHzmxAlhAUFjtJACHz01ohi7cD8LbSq4k0vFz-JcN3ypS2RpwGwue-Xe2G5wNcsvLW3Rj3TPiiKABpb0ymxzt_5Wp9O9fnLe-6L7R_8mDVBA9_Qg4eQ3l60kRfHKGDd83x4ueXT28d-_T9M7F2jXJfY0XXL9dxU1bk"
              alt="TikTok Shop Dashboard"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-secondary text-white p-6 rounded-2xl shadow-xl hidden lg:block"
          >
            <div className="text-3xl font-black">250%</div>
            <div className="text-sm font-medium opacity-90 uppercase tracking-widest">Tăng trưởng trung bình</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
