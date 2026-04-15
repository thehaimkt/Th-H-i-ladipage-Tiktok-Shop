import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Phần mềm này có dễ sử dụng cho người mới không?",
    a: "Có, MKT được thiết kế với giao diện tiếng Việt 100% và quy trình tối giản. Chúng tôi cũng có bộ tài liệu video hướng dẫn từ A-Z."
  },
  {
    q: "Sử dụng công cụ reup có bị khóa tài khoản không?",
    a: "MKT Viral tích hợp công nghệ AI lách bản quyền sâu, giúp video đạt độ \"sạch\" cao nhất. Tuy nhiên, chúng tôi luôn khuyên khách hàng kết hợp với nội dung sáng tạo để bền vững hơn."
  },
  {
    q: "Tôi chưa có sản phẩm, MKT có hỗ trợ không?",
    a: "Chúng tôi có bộ công cụ nghiên cứu thị trường giúp bạn tìm ngách sản phẩm hot-trend và kết nối với các kho hàng uy tín."
  },
  {
    q: "Hỗ trợ sau bán hàng như thế nào?",
    a: "Bạn sẽ được thêm vào nhóm hỗ trợ riêng với kỹ thuật viên trực 24/7 để giải đáp mọi thắc mắc trong quá trình sử dụng."
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-primary mb-16 text-center">Câu hỏi thường gặp</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.details 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface-container-lowest rounded-2xl p-6 shadow-sm cursor-pointer"
            >
              <summary className="flex justify-between items-center font-bold text-lg text-primary list-none">
                {faq.q}
                <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-4 text-on-surface-variant leading-relaxed">{faq.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
