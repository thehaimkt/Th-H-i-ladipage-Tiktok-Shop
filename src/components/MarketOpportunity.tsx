import { motion } from "motion/react";
import { ShoppingCart, TrendingUp, Users } from "lucide-react";

const opportunities = [
  {
    icon: ShoppingCart,
    title: "Mua sắm trực tiếp",
    description: "Rút ngắn hành trình khách hàng từ lúc thấy video đến khi thanh toán chỉ trong vài giây."
  },
  {
    icon: TrendingUp,
    title: "Tỷ lệ chuyển đổi cao",
    description: "Thuật toán phân phối chính xác tệp khách hàng tiềm năng dựa trên sở thích thực tế."
  },
  {
    icon: Users,
    title: "Hệ sinh thái Affiliate",
    description: "Tận dụng hàng triệu nhà sáng tạo nội dung để quảng bá sản phẩm mà không tốn chi phí cố định."
  }
];

export default function MarketOpportunity() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <h2 className="text-4xl font-extrabold text-primary mb-4">Cơ hội vàng tại TikTok Shop</h2>
            <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Không chỉ là nền tảng giải trí, TikTok Shop đang thay đổi hoàn toàn thói quen mua sắm. Khám phá tại sao doanh nghiệp của bạn không thể đứng ngoài cuộc đua này.
            </p>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-8xl font-black text-primary/5 select-none">DATA 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {opportunities.map((opt, i) => (
            <motion.div
              key={opt.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface-container-lowest p-10 rounded-2xl transition-all hover:bg-surface-bright group shadow-sm"
            >
              <opt.icon className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-2xl font-bold text-primary mb-4">{opt.title}</h3>
              <p className="text-on-surface-variant">{opt.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
