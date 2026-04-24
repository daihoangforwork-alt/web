import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, CheckCircle, QrCode } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PurchaseModal: React.FC<PurchaseModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [copied, setCopied] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleCopy = () => {
    navigator.clipboard.writeText("DHoang_Habit_[EMAILCUABAN]");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  // Reset step when modal is closed
  React.useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({ name: '', email: '', phone: '' });
      }, 300);
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#4a413d]/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#F9F6F2] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border border-[#4a413d]/10"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full text-[#4a413d]/50 hover:bg-[#4a413d]/5 hover:text-[#4a413d] z-10 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto p-8 md:p-10 flex-1">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div 
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-8">
                      <h2 className="text-3xl font-serif font-light mb-3 text-[#4a413d]">
                        Bắt đầu hành trình <span className="italic text-[#7B61FF]">kỷ luật</span>
                      </h2>
                      <p className="text-[#8e8a86] font-sans text-sm outline-none font-light leading-relaxed">
                        Vui lòng để lại thông tin chính xác để nhận quyền truy cập vào <strong className="font-medium text-[#7B61FF]">Strategic Habit Tracker</strong>.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-[10px] font-bold tracking-widest text-[#4a413d] mb-2">HỌ VÀ TÊN *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          placeholder="Ví dụ: Nguyễn Văn A"
                          className="w-full bg-white border border-[#4a413d]/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B61FF]/50 focus:ring-2 focus:ring-[#7B61FF]/10 transition-all font-sans text-sm text-[#4a413d]"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold tracking-widest text-[#4a413d] mb-2">ĐỊA CHỈ EMAIL *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          placeholder="Ví dụ: email@gmail.com"
                          className="w-full bg-white border border-[#4a413d]/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B61FF]/50 focus:ring-2 focus:ring-[#7B61FF]/10 transition-all font-sans text-sm text-[#4a413d]"
                        />
                        <p className="mt-2 text-[11px] italic text-[#8e8a86]">Lưu ý: Email này sẽ được dùng để cấp quyền truy cập trực tiếp vào sản phẩm.</p>
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold tracking-widest text-[#4a413d] mb-2">SỐ ĐIỆN THOẠI (ZALO) *</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={e => setFormData({...formData, phone: e.target.value})}
                          placeholder="Ví dụ: 090xxxxxxx"
                          className="w-full bg-white border border-[#4a413d]/10 rounded-xl px-4 py-3 outline-none focus:border-[#7B61FF]/50 focus:ring-2 focus:ring-[#7B61FF]/10 transition-all font-sans text-sm text-[#4a413d]"
                        />
                      </div>

                      <div className="pt-4">
                        <button 
                          type="submit"
                          className="w-full bg-[#7B61FF] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-[0.1em] hover:shadow-[0_0_20px_rgba(123,97,255,0.4)] transition-all flex items-center justify-center gap-2"
                        >
                          Tiếp tục đến Thanh toán
                        </button>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col"
                  >
                    <div className="text-center mb-8">
                      <p className="text-[10px] font-bold tracking-[0.2em] text-[#8e8a86] mb-3">STEP 2 OF 2: XÁC NHẬN THANH TOÁN</p>
                      <h2 className="text-3xl font-serif font-light text-[#4a413d]">Quét mã để thanh toán</h2>
                    </div>

                    {/* QR Code Section */}
                    <div className="bg-white rounded-2xl p-6 border border-[#4a413d]/10 shadow-sm mb-6 flex flex-col items-center justify-center text-center">
                      <div className="w-48 h-48 bg-[#fdfbf7] rounded-xl border border-[#4a413d]/20 mb-4 flex items-center justify-center relative shadow-sm overflow-hidden">
                        <img 
                          src="https://www.image2url.com/r2/default/images/1777027701210-1286b7fd-fcc1-4c15-858f-48c1ec38a616.png" 
                          alt="QR Code" 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-2 border border-[#4a413d]/5 rounded-lg pointer-events-none"></div>
                      </div>
                      <div className="flex gap-3 text-xs font-medium text-[#4a413d]/60 uppercase tracking-widest">
                        <span>VCB</span>
                        <span>•</span>
                        <span>TCB</span>
                        <span>•</span>
                        <span>MB</span>
                      </div>
                    </div>

                    {/* Payment Details */}
                    <div className="bg-white rounded-2xl border border-[#4a413d]/10 overflow-hidden text-sm font-sans mb-6">
                      <div className="flex justify-between items-center p-4 border-b border-[#4a413d]/5">
                        <span className="text-[#8e8a86]">Số tiền</span>
                        <div className="flex flex-col items-end">
                          <span className="text-xs text-[#8e8a86] line-through mb-0.5">299.000 VNĐ</span>
                          <span className="font-bold text-[#4a413d] text-base">99.000 VNĐ</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center p-4 border-b border-[#4a413d]/5 bg-[#fdfbf7]/50">
                        <span className="text-[#8e8a86]">Chủ tài khoản</span>
                        <span className="font-medium text-[#4a413d]">HOANG THI DAI</span>
                      </div>
                      <div className="p-4 bg-[#7B61FF]/5">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#8e8a86]">Nội dung chuyển khoản</span>
                          <button 
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#7B61FF] bg-[#7B61FF]/10 px-2 py-1 rounded-md hover:bg-[#7B61FF]/20 transition-colors"
                          >
                            {copied ? <CheckCircle size={12} className="text-emerald-500" /> : <Copy size={12} />}
                            {copied ? <span className="text-emerald-600">Đã sao chép</span> : "Sao chép"}
                          </button>
                        </div>
                        <div className="font-mono bg-white border border-[#4a413d]/10 p-3 rounded-lg text-[#4a413d] text-center font-medium tracking-wide">
                          DHoang_Habit_[EMAILCUABAN]
                        </div>
                      </div>
                    </div>

                    {/* Footer Instruction */}
                    <p className="text-xs text-center text-[#8e8a86] leading-relaxed px-2 italic">
                      Hệ thống sẽ tự động gửi email kích hoạt tài khoản để đăng nhập vào sản phẩm trong vòng 5-10 phút sau khi giao dịch thành công. Nếu có thắc mắc, vui lòng liên hệ <a href="mailto:daihoang.forwork@gmail.com" className="text-[#7B61FF] hover:underline">daihoang.forwork@gmail.com</a>.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
