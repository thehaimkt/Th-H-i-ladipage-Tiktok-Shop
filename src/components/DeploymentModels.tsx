import { motion } from "motion/react";

const models = [
  {
    title: "Content Creator",
    description: "Xây dựng thương hiệu cá nhân, đầu tư chất lượng video và thu hút fan trung thành.",
    stats: [
      { label: "Độ khó", value: "Cao" },
      { label: "Tính bền vững", value: "Rất cao" },
      { label: "Chi phí ban đầu", value: "Trung bình" }
    ],
    color: "primary"
  },
  {
    title: "Reup + Livestream",
    description: "Tận dụng nguồn video có sẵn, chỉnh sửa và đăng tải hàng loạt để thu hút traffic cực nhanh.",
    stats: [
      { label: "Độ khó", value: "Thấp" },
      { label: "Tốc độ ra đơn", value: "Cực nhanh" },
      { label: "Chi phí ban đầu", value: "Thấp" }
    ],
    color: "secondary"
  }
];

export default function DeploymentModels() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Chọn mô hình triển khai phù hợp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`bg-surface-container-lowest p-10 rounded-2xl border border-outline-variant/20 hover:border-${model.color}/40 transition-colors shadow-sm`}
            >
              <h3 className={`text-3xl font-black text-${model.color} mb-6`}>{model.title}</h3>
              <p className="text-on-surface-variant mb-8">{model.description}</p>
              <div className="space-y-4 mb-10">
                {model.stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-on-surface-variant">{stat.label}</span>
                    <span className="font-bold">{stat.value}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  model.color === 'primary' 
                    ? 'border-2 border-primary text-primary hover:bg-primary hover:text-white' 
                    : 'bg-secondary text-white hover:shadow-lg'
                }`}
              >
                Chọn mô hình này
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
