import { motion } from "motion/react";
import { Video, Share2 } from "lucide-react";

const tools = [
  {
    icon: Video,
    name: "MKT Viral",
    description: "Tải video hàng loạt theo từ khóa, tự động edit lách bản quyền, chèn logo và nhạc nền thông minh.",
    tags: ["Download Bulk", "Auto-Edit", "Multi-Platform"],
    color: "bg-primary"
  },
  {
    icon: Share2,
    name: "MKT TikPro",
    description: "Quản lý hàng ngàn tài khoản TikTok, tự động đăng video, seeding livestream và quản lý giỏ hàng affiliate.",
    tags: ["Auto-Post", "Live-Seeding", "Mass Manager"],
    color: "bg-secondary"
  }
];

export default function ImplementationTools() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Hệ sinh thái công cụ hỗ trợ</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col md:flex-row gap-8 items-center bg-surface-container-high p-8 rounded-3xl"
            >
              <div className={`w-32 h-32 flex-shrink-0 ${tool.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                <tool.icon className="text-white w-12 h-12" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">{tool.name}</h3>
                <p className="text-on-surface-variant mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/50 text-primary rounded-full text-xs font-bold uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
