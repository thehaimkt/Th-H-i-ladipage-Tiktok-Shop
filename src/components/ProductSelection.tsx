import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function ProductSelection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-primary mb-8">Tìm sản phẩm "Win" bằng dữ liệu</h2>
          <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
            Đừng bán những gì bạn thích, hãy bán những gì thị trường đang cần. MKT cung cấp bộ lọc thông minh giúp bạn xác định sản phẩm tiềm năng.
          </p>
          <div className="space-y-6">
            {[
              "Dựa trên dữ liệu bán chạy thực tế 30 ngày gần nhất.",
              "Tập trung ngách sản phẩm có biên lợi nhuận cao.",
              "Chỉ chọn sản phẩm có đánh giá 4+ sao và uy tín."
            ].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-surface-container-low p-5 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden bg-primary p-1"
        >
          <img 
            className="rounded-3xl w-full h-[500px] object-cover opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBG310xvy-uj2-kRqA7nKDTE2xe8Q7f5efjUMHjqwNjf9oOKNK-8HLd6d2z4JpGnslqO-4q0k6HsIG0zDsU-RV8ECOoJ5U5t6ejd26yXE4H1ovCCoh0ktpIhiUk2ZAIRQ_1P7aM3kqGnhz1kLhfu947kFyYxJoLmj2p3jrQD30PQZI_QfOm4PKVSf1W-2OqAunoRPK1hsOqbB1IFXUctzsAdOnAuNhDb3xOqntquS3tQz_zdYSVxTrvHEAWzkjsOfWFGjCz-6oVvQJ5"
            alt="Product Photography"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
