import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PurchaseModal } from './components/PurchaseModal';
import { 
  CheckCircle2, 
  BarChart3, 
  Layers, 
  Target, 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail,
  ArrowRight,
  Info,
  AtSign,
  X,
  Copy,
  QrCode,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const LogoSignature = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, delay: 0.2 }}
    className="text-2xl md:text-3xl text-brand-text"
    style={{ fontFamily: '"Great Vibes", cursive' }}
  >
    Dai Hoang
  </motion.div>
);

const Hero = ({ onPurchase }: { onPurchase: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full">
        {/* Text Col 60% (7/12 roughly) */}
        <div className="md:col-span-7 z-10 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl md:text-[3.5rem] font-light leading-[1.2] md:leading-[1.1] tracking-tight mb-6 text-brand-text">
              Bắt đầu <br />
              <span className="italic text-brand-purple/80">hành trình</span> <br />
              <span className="text-brand-purple/80">kỷ luật</span> <br />
              <span className="italic opacity-90">của riêng bạn.</span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-xl opacity-70"
          >
            Mình là <span className="text-2xl" style={{ fontFamily: '"Great Vibes", cursive' }}>Dai Hoang</span>. Mình đồng hành cùng bạn trên hành trình biến những thói quen nhỏ thành sức mạnh thay đổi cuộc đời qua <strong className="font-medium text-brand-purple opacity-100">Strategic Habit Tracker</strong>.
          </motion.p>
          
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onPurchase}
            className="mt-4 bg-brand-purple text-white px-8 py-4 rounded-full text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-3 group transition-all tracker-glow hover:shadow-[0_0_40px_rgba(123,97,255,0.4)]"
          >
            Khám phá phương pháp
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
        
        {/* Image Col 40% (5/12 roughly) */}
        <div className="md:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >
            {/* Subtle glow / shadow Behind */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-indigo-300 rounded-full opacity-30 blur-3xl"></div>
            
            {/* Circular Mask placeholder frame */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative w-full h-full rounded-full border border-brand-text/10 overflow-hidden shadow-xl flex items-center justify-center bg-brand-text/5"
            >
              <img 
                src="https://www.image2url.com/r2/default/images/1776946245152-73982b9d-b9df-4b5e-9bb1-8649e8052fd6.png" 
                alt="Productivity Setup" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustAnchor = () => {
  const items = [
    { icon: <CheckCircle2 className="text-brand-purple" size={24} />, text: "Khoa học hành vi" },
    { icon: <BarChart3 className="text-brand-purple" size={24} />, text: "Theo dõi trực quan" },
    { icon: <Layers className="text-brand-purple" size={24} />, text: "Thiết kế tối giản" },
    { icon: <Target className="text-brand-purple" size={24} />, text: "Định hướng chiến lược" },
  ];

  return (
    <div className="px-6 relative z-20 -mt-10 mb-24 max-w-6xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="glass-panel rounded-3xl py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl"
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 group">
            <div className="p-3 rounded-full bg-brand-text/5 group-hover:bg-brand-text/10 border border-brand-text/5 transition-colors">
              {item.icon}
            </div>
            <span className="font-semibold text-xs text-brand-text tracking-widest uppercase opacity-80">{item.text}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Philosophy = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const columns = [
    {
      id: "benefit_1",
      title: "Tối ưu hóa thời gian",
      body: "Không chỉ là ghi chép, mà là cách bạn làm chủ 24 giờ mỗi ngày.",
      // Ảnh 1: Tối ưu hóa thời gian
      img: "https://www.image2url.com/r2/default/images/1776944937152-948e7ade-4b34-4ac1-ac23-b79b543d7c1c.png"
    },
    {
      id: "mission",
      title: "Sứ mệnh kỷ luật",
      body: "Xây dựng một cộng đồng sống có mục đích và bền bỉ hơn mỗi ngày.",
      // Ảnh 2: Sứ mệnh kỷ luật
      img: "https://www.image2url.com/r2/default/images/1776945054096-646899a0-6a9e-4660-827a-c9b240472c7e.png"
    },
    {
      id: "value",
      title: "Dữ liệu cá nhân",
      body: "Biến nỗ lực vô hình thành con số hữu hình để bạn luôn thấy sự tiến bộ.",
      // Ảnh 3: Dữ liệu cá nhân
      img: "https://www.image2url.com/r2/default/images/1776944832266-6e80266e-f1d2-4daf-be1c-e12f03bcac74.png"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 border-t border-brand-text/10 pt-16">
        <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 text-brand-text">Triết lý cốt lõi</h2>
        <p className="text-brand-text/50 font-bold tracking-widest uppercase text-xs">Nền tảng của sự bứt phá</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[500px]">
        {columns.map((col, idx) => {
          const isHovered = hoveredIdx === idx;
          const isOtherHovered = hoveredIdx !== null && hoveredIdx !== idx;
          
          return (
            <motion.div
              key={col.id}
              onHoverStart={() => setHoveredIdx(idx)}
              onHoverEnd={() => setHoveredIdx(null)}
              animate={{
                flex: hoveredIdx === null ? 1 : (isHovered ? 1.5 : 0.8),
                opacity: hoveredIdx === null ? 0.9 : (isHovered ? 1 : 0.4),
                filter: isOtherHovered ? "blur(4px)" : "blur(0px)",
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative rounded-3xl overflow-hidden cursor-pointer h-80 md:h-full group border border-brand-text/10"
            >
              <div className="absolute inset-0 bg-brand-text/5 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                <img 
                  src={col.img} 
                  alt={col.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7]/95 via-[#fdfbf7]/70 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="text-brand-text text-2xl font-serif italic mb-3 leading-tight">{col.title}</h3>
                <motion.p 
                  animate={{ 
                    opacity: hoveredIdx === null ? 1 : (isHovered ? 1 : 0),
                    y: hoveredIdx === null ? 0 : (isHovered ? 0 : 10)
                  }}
                  className="text-brand-text/60 font-bold text-[10px] uppercase tracking-[0.2em] leading-relaxed"
                >
                  {col.body}
                </motion.p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

const ProductSpotlight = () => {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const hotspots = [
    { x: '30%', y: '40%', title: 'Mục tiêu chiến lược', desc: 'Thiết lập và phân rã mục tiêu dài hạn.' },
    { x: '70%', y: '60%', title: 'Hệ thống Tracker', desc: 'Theo dõi tiến độ hàng ngày với màu sắc trực quan.' },
    { x: '45%', y: '80%', title: 'Review & Reflect', desc: 'Đánh giá lại để điều chỉnh hành động mỗi tuần.' },
  ];

  return (
    <section className="py-32 relative bg-brand-bg-dark text-brand-text rounded-t-[3rem] md:rounded-t-[5rem] overflow-hidden border-t border-brand-text/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-6">Strategic Habit Tracker</h2>
          <p className="text-brand-text/70 font-light leading-relaxed">
            Hệ thống quản lý thói quen được thiết kế đặc biệt giúp bạn không chỉ duy trì sự kiên định mà còn thấy rõ bứt phá của bản thân.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-5xl aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl border border-brand-text/10 shadow-2xl overflow-hidden glass-panel-dark bg-white"
        >
          {/* Slider Content */}
          <AnimatePresence mode="wait">
            {activeSlide === 1 ? (
              <motion.div 
                key="slide-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-brand-text/5 flex items-center justify-center"
              >
                <img 
                  src="https://www.image2url.com/r2/default/images/1776945263131-64605fe1-cc10-4648-bcfd-59b12f4c6c16.png" 
                  alt="Strategic Habit Tracker Interface" 
                  className="w-full h-full object-cover object-center"
                />
                {/* Hotspots only for image */}
                {hotspots.map((spot, idx) => (
                  <div 
                    key={idx}
                    className="absolute z-20"
                    style={{ left: spot.x, top: spot.y }}
                    onMouseEnter={() => setActiveHotspot(idx)}
                    onMouseLeave={() => setActiveHotspot(null)}
                  >
                    <div className="relative -translate-x-1/2 -translate-y-1/2 cursor-pointer group">
                      <div className="w-8 h-8 rounded-full bg-brand-purple/30 animate-ping absolute inset-0"></div>
                      <div className="w-8 h-8 rounded-full bg-brand-purple border border-brand-purple/50 flex items-center justify-center relative z-10">
                        <Info size={14} className="text-white" />
                      </div>
                      
                      {/* Tooltip */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ 
                          opacity: activeHotspot === idx ? 1 : 0, 
                          y: activeHotspot === idx ? 0 : 10,
                          scale: activeHotspot === idx ? 1 : 0.95,
                          pointerEvents: activeHotspot === idx ? 'auto' : 'none'
                        }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 glass-panel-dark text-brand-text p-4 rounded-xl shadow-2xl origin-bottom whitespace-normal border border-brand-text/10"
                      >
                        <h4 className="font-semibold tracking-wide text-sm mb-1 text-brand-text">{spot.title}</h4>
                        <p className="text-xs text-brand-text/70 leading-relaxed font-light">{spot.desc}</p>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-brand-text/10"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="slide-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-black flex items-center justify-center"
              >
                <iframe 
                  src="https://player.vimeo.com/video/1186205215?autoplay=1&loop=1&autopause=0&muted=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen 
                  className="w-full h-full"
                ></iframe>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Slider Controls */}
          <button 
            onClick={() => setActiveSlide(0)}
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full backdrop-blur-md border border-white/20 transition-all ${
              activeSlide === 0 ? 'bg-white/50 text-brand-text opacity-50 cursor-not-allowed' : 'bg-white/20 text-white hover:bg-white/40 shadow-lg'
            }`}
            disabled={activeSlide === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={() => setActiveSlide(1)}
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 md:p-4 rounded-full backdrop-blur-md transition-all ${
              activeSlide === 1 ? 'bg-white/50 text-brand-text opacity-50 cursor-not-allowed border border-white/20' : 'bg-brand-purple text-white shadow-[0_0_30px_rgba(123,97,255,0.8)] border border-white/40 animate-pulse hover:bg-brand-purple/90 scale-110'
            }`}
            disabled={activeSlide === 1}
          >
            <ChevronRight size={28} />
          </button>
          
          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            <button 
              onClick={() => setActiveSlide(0)}
              className={`w-2 h-2 rounded-full transition-all ${activeSlide === 0 ? 'w-6 bg-white' : 'bg-white/40 hover:bg-white/60'}`}
            />
            <button 
              onClick={() => setActiveSlide(1)}
              className={`w-2 h-2 rounded-full transition-all ${activeSlide === 1 ? 'w-6 bg-white' : 'bg-white/40 hover:bg-white/60'}`}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const EmotionalClosing = ({ onPurchase }: { onPurchase: () => void }) => {
  return (
    <section className="py-20 md:py-24 bg-brand-bg relative overflow-hidden border-t border-brand-text/10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          {/* Circular Image Placeholder */}
          <div className="relative mb-10 group cursor-pointer">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-brand-text/10 flex items-center justify-center relative z-10 overflow-hidden shadow-lg bg-[#fdfbf7]">
              <img 
                src="https://www.image2url.com/r2/default/images/1776947686856-382d29e3-6f8f-49e5-8072-1277aa0ffc41.png" 
                alt="Portrait" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-[-12px] rounded-full border border-brand-text/5 pointer-events-none z-0 transition-all duration-500 group-hover:scale-[1.05] group-hover:border-brand-text/10"></div>
          </div>

          <h2 className="text-4xl md:text-[3.5rem] font-serif font-light mb-8 text-[#4a413d] leading-tight">
            Bắt đầu hành trình của bạn
          </h2>
          
          <p className="text-xl md:text-2xl font-sans italic font-light text-[#8e8a86] leading-relaxed mb-16 max-w-2xl px-4">
            "Sản phẩm này không chỉ là một bảng tính, đó là cam kết của bạn với chính mình. Hãy để mỗi dấu tick trở thành niềm động lực mỗi sáng thức dậy."
          </p>
          
          <motion.button
            onClick={onPurchase}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-12 py-5 rounded-full bg-brand-purple text-white text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center mx-auto transition-all shadow-xl hover:shadow-[0_0_40px_rgba(123,97,255,0.4)] tracker-glow"
          >
            Sở hữu bảng theo dõi ngay
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const socials = [
    { url: "https://www.facebook.com/h.daiee", label: "Facebook", icon: <Facebook size={14} /> },
    { url: "https://www.instagram.com/h.daiee", label: "Instagram", icon: <Instagram size={14} /> },
    { url: "https://www.threads.com/@h.daiee", label: "Threads", icon: <AtSign size={14} /> },
    { url: "https://www.youtube.com/@aihoang5189", label: "YouTube", icon: <Youtube size={14} /> },
  ];

  return (
    <footer className="bg-brand-bg relative pt-16 pb-8 px-6 border-t border-brand-text/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 p-32 md:p-64 w-[600px] h-[600px] bg-brand-purple/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-12 pb-6">
          
          {/* Left: Bio/Contact */}
          <div className="flex flex-col gap-6">
            <div className="font-signature text-4xl text-brand-text">Dai Hoang</div>
            <div className="text-[10px] leading-relaxed tracking-widest uppercase text-brand-text/50 mt-4 space-y-2">
              <p className="font-bold text-brand-text/80">Strategic Productivity Designer</p>
              <a href="mailto:daihoang.forwork@gmail.com" className="hover:text-brand-purple transition-colors block font-mono">
                 daihoang.forwork@gmail.com
              </a>
            </div>
          </div>

          {/* Right: Social Grid */}
          <div className="flex flex-col md:items-end justify-center w-full mt-8 md:mt-0">
            <div className="flex items-center justify-start md:justify-end gap-4 md:gap-6 lg:gap-8 overflow-x-auto w-full md:w-auto pb-4 md:pb-0">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -2 }}
                  className="flex items-center gap-1.5 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#4a413d]/60 hover:text-[#4a413d] transition-all group whitespace-nowrap"
                  aria-label={social.label}
                >
                  <span className="opacity-70 group-hover:opacity-100 transition-opacity">
                    {social.icon}
                  </span>
                  {social.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Final Touch */}
        <div className="flex flex-col items-center justify-center border-t border-brand-text/10 pt-8 gap-4">
          <div className="text-brand-text/60 font-serif italic text-center whitespace-nowrap md:text-base text-sm">
            "Hành trình vạn dặm bắt đầu từ một thói quen."
          </div>
          <div className="text-[10px] text-brand-text/30 tracking-widest uppercase font-sans">
            © 2026 Dai Hoang
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  return (
    <div className="antialiased selection:bg-brand-purple/30 selection:text-brand-text min-h-screen">
      <header className="absolute top-0 left-0 w-full p-6 md:p-12 z-50 flex justify-between items-center max-w-7xl mx-auto right-0">
        <LogoSignature />
        <nav className="hidden md:flex gap-8 text-[11px] uppercase tracking-[0.2em] font-medium opacity-60">
          <span className="cursor-pointer hover:text-brand-purple transition-colors">Trang chủ</span>
          <span className="cursor-pointer hover:text-brand-purple transition-colors">Sản phẩm</span>
          <span className="cursor-pointer hover:text-brand-purple transition-colors">Về mình</span>
          <span className="cursor-pointer hover:text-brand-purple transition-colors">Liên hệ</span>
        </nav>
      </header>
      
      <main>
        <Hero onPurchase={() => setIsPurchaseModalOpen(true)} />
        <TrustAnchor />
        <Philosophy />
        <ProductSpotlight />
        <EmotionalClosing onPurchase={() => setIsPurchaseModalOpen(true)} />
      </main>
      
      <Footer />

      <PurchaseModal 
        isOpen={isPurchaseModalOpen} 
        onClose={() => setIsPurchaseModalOpen(false)} 
      />
    </div>
  );
}

