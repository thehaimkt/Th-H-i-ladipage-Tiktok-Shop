import { motion } from "motion/react";
import { Clock, Rocket, Sparkles, GraduationCap } from "lucide-react";

export default function Benefits() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Lợi ích vượt trội từ giải pháp</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm md:col-span-2"
          >
            <div className="flex gap-6 items-start">
              <div className="bg-tertiary-container text-on-primary-container p-4 rounded-full">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Tiết kiệm 80% thời gian</h3>
                <p className="text-on-surface-variant">Tự động hóa các tác vụ lặp đi lặp lại như đăng bài, seeding và tìm kiếm sản phẩm hot-trend.</p>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm"
          >
            <Rocket className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Bùng nổ doanh số</h3>
            <p className="text-on-surface-variant">Tăng tỷ lệ tiếp cận khách hàng tự nhiên thông qua hệ thống nội dung dày đặc.</p>
          </motion.div>

          {/* Bento Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm"
          >
            <Sparkles className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Tự động nội dung</h3>
            <p className="text-on-surface-variant">Sản xuất video hàng loạt với công nghệ chỉnh sửa không trùng lặp.</p>
          </motion.div>

          {/* Bento Card 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm md:col-span-2"
          >
            <div className="flex gap-6 items-start">
              <div className="bg-secondary-container text-white p-4 rounded-full">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Dễ dàng cho người mới</h3>
                <p className="text-on-surface-variant">Giao diện tiếng Việt thân thiện, tài liệu hướng dẫn chi tiết và đội ngũ hỗ trợ 24/7 đồng hành cùng bạn.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
