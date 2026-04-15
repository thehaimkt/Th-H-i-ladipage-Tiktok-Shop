import { motion } from "motion/react";
import { Store, UserPlus, XCircle } from "lucide-react";

export default function PainPoints() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Khó khăn bạn đang đối mặt?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sellers Group */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-low"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-primary text-white p-3 rounded-xl">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Dành cho Nhà bán hàng</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Video đăng lên 0 view, không có tương tác.",
                "Cố gắng livestream hàng giờ nhưng không có đơn hàng.",
                "Vi phạm chính sách TikTok dẫn đến khóa shop, cấm live."
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <span className="text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Affiliates Group */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-outline-variant/30 rounded-2xl bg-surface-container-low"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-secondary text-white p-3 rounded-xl">
                <UserPlus className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Dành cho KOC/Affiliate</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Bí ý tưởng sáng tạo nội dung, sản xuất video chậm chạp.",
                "Khó khăn trong việc tìm nguồn hàng hot-trend để bán.",
                "Mất nhiều thời gian quản lý hàng chục tài khoản vệ tinh."
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-error shrink-0 mt-0.5" />
                  <span className="text-on-surface-variant">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
