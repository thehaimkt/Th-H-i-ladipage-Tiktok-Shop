import { motion } from "motion/react";
import { PhoneCall, Mail } from "lucide-react";

export default function LeadForm() {
  return (
    <section className="py-24 bg-surface" id="contact-form">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-[2rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="p-12 lg:w-1/2 signature-gradient text-white flex flex-col justify-center">
            <h2 className="text-4xl font-black mb-6">Bắt đầu hành trình triệu đơn ngay hôm nay</h2>
            <p className="text-lg opacity-80 mb-8">Để lại thông tin, chuyên gia của MKT sẽ liên hệ tư vấn lộ trình xây dựng TikTok Shop phù hợp nhất với nguồn lực của bạn.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PhoneCall className="w-6 h-6" />
                <span>Hotline: 09xx xxx xxx</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <span>Email: support@mktsoftware.net</span>
              </div>
            </div>
          </div>
          
          <div className="p-12 lg:w-1/2">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Họ và tên</label>
                <input 
                  className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all" 
                  placeholder="Nguyễn Văn A" 
                  type="text"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Số điện thoại</label>
                <input 
                  className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all" 
                  placeholder="09xxxxxxxx" 
                  type="tel"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-primary mb-2 uppercase tracking-wide">Bạn là ai?</label>
                <select className="w-full p-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary/40 focus:bg-surface-container-lowest transition-all">
                  <option>Nhà bán hàng (Seller)</option>
                  <option>Nhà sáng tạo nội dung (Affiliate)</option>
                  <option>Doanh nghiệp (Brand)</option>
                </select>
              </div>
              <motion.button 
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-5 bg-secondary text-white rounded-xl font-black text-xl shadow-lg shadow-secondary/20 transition-transform" 
                type="submit"
              >
                NHẬN TƯ VẤN MIỄN PHÍ
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
