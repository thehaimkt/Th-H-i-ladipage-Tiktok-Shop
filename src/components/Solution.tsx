import { motion } from "motion/react";

export default function Solution() {
  return (
    <section className="py-24 signature-gradient text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-black mb-8"
        >
          MKT Software: Cầu nối dẫn tới thành công
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl opacity-90 max-w-3xl mb-12"
        >
          Chúng tôi không chỉ cung cấp công cụ. MKT mang tới sự kết hợp hoàn hảo giữa <strong>Chiến lược bài bản</strong> và <strong>Công cụ tự động hóa</strong> mạnh mẽ.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20"
          >
            <h4 className="text-2xl font-bold mb-4">Chiến lược thực chiến</h4>
            <p className="opacity-80">Hướng dẫn lộ trình xây dựng shop từ con số 0, cách chọn ngách sản phẩm và tối ưu vận hành.</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md p-10 rounded-2xl border border-white/20"
          >
            <h4 className="text-2xl font-bold mb-4">Công nghệ đỉnh cao</h4>
            <p className="opacity-80">Phần mềm hỗ trợ quét dữ liệu, reup video sạch và nuôi tài khoản hàng loạt không lo vi phạm.</p>
          </motion.div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container blur-[150px] opacity-30"></div>
    </section>
  );
}
