import { motion } from "motion/react";

const stats = [
  { value: "5000+", label: "Khách hàng tin dùng" },
  { value: "10M+", label: "Đơn hàng đã xử lý" },
  { value: "24/7", label: "Hỗ trợ kỹ thuật" }
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Con số không biết nói dối</h2>
          <p className="opacity-80">Hàng ngàn khách hàng đã thay đổi hoàn toàn cục diện kinh doanh.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-6xl font-black mb-2">{stat.value}</div>
              <div className="text-lg opacity-70 uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            className="w-full opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP81cNYE4Xr3ysW0NxU2EpzJc1vx_oI__dAtHna0cMXt4HqoMFriebcABJrzaUE1QqlABA-QNmrGyGNH6KtpfSHmeNtSGJiDsQk8x4ZL275sV3dN9sOhB1IQ3vCu0q6pziJwTPzXJo_zsvnA20bs5TT-K3AjTYckDHXjgWI-InVU55KOdeO-oUM5Prmk_3G-gEyKi71y2gF4lJ5BJrHUz09BKZTkyd7-j6aCYl7g-8NIvFsulzzqpME0jl7vTy6sb4XKvVU5I_1emC"
            alt="Sales Growth Dashboard"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
