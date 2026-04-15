import { motion } from "motion/react";
import { PlayCircle, Store, Tv, MousePointerClick } from "lucide-react";

const touchpoints = [
  { icon: PlayCircle, label: "Video ngắn" },
  { icon: Store, label: "Shopping Center" },
  { icon: Tv, label: "Livestream" },
  { icon: MousePointerClick, label: "TikTok Ads" }
];

export default function Touchpoints() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-16">Phủ sóng mọi điểm chạm trên TikTok</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {touchpoints.map((tp, i) => (
            <motion.div
              key={tp.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="aspect-square bg-surface-container-low rounded-3xl flex items-center justify-center border border-outline-variant/30 hover:border-primary/50 transition-colors group">
                <tp.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <p className="font-bold">{tp.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
