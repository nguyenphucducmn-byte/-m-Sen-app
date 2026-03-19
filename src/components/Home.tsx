import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, MapPin, ChevronRight } from 'lucide-react';

const BANNER_IMAGES = [
  "https://i.ibb.co/mrcyd1mg/image.png",
  "https://i.ibb.co/fVS921qf/image.png",
  "https://i.ibb.co/TBznjYnY/image.png",
  "https://i.ibb.co/1GtwN5NP/image.png",
  "https://i.ibb.co/YBysKCfg/image.png"
];

export function Home() {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50 pb-24">
      {/* Header with Image */}
      <div className="w-full h-64 relative rounded-b-[2rem] overflow-hidden shadow-sm bg-white">
        <img 
          src="https://i.ibb.co/fWPg7dM/image.png" 
          alt="Dam Sen Park Header" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-slate-900/40" />
        <div className="absolute bottom-6 left-6 right-6 text-white z-20">
          <h1 className="text-3xl font-bold mb-1">Chào mừng đến với Đầm Sen Khô</h1>
          <p className="text-white/90 text-sm font-medium">Chuyến phiêu lưu đang chờ đón bạn!</p>
        </div>
      </div>
      
      {/* Quick Info */}
      <div className="px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex justify-between items-center border border-slate-100">
          <div className="flex flex-col items-center flex-1 border-r border-slate-100">
            <Clock size={20} className="text-rose-500 mb-1" />
            <span className="text-xs text-slate-500 font-medium">Mở cửa</span>
            <span className="text-sm font-bold text-slate-900">08:00 - 18:00</span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <Calendar size={20} className="text-blue-500 mb-1" />
            <span className="text-xs text-slate-500 font-medium">Hôm nay</span>
            <span className="text-sm font-bold text-slate-900">Nắng, 32°C</span>
          </div>
        </div>
      </div>

      {/* Banner Carousel */}
      <div className="px-6 mt-6">
        <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-md bg-white border border-slate-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentBanner}
              src={BANNER_IMAGES[currentBanner]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-fill"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-1.5">
            {BANNER_IMAGES.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentBanner ? 'w-4 bg-white' : 'w-1.5 bg-white/50'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-6 mt-2 space-y-4">
        {/* Food */}
        <motion.div whileTap={{ scale: 0.98 }} className="w-full h-32 bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-6 flex justify-between items-center shadow-md relative overflow-hidden cursor-pointer">
          <div className="relative z-10">
            <p className="text-white/90 text-sm font-medium mb-1">Thơm ngon</p>
            <h2 className="text-white text-3xl font-bold">Ẩm thực</h2>
          </div>
          <div className="text-6xl drop-shadow-2xl relative z-10">🍔</div>
          <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Rides */}
        <motion.div whileTap={{ scale: 0.98 }} className="w-full h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 flex justify-between items-center shadow-md relative overflow-hidden cursor-pointer">
          <div className="relative z-10">
            <p className="text-white/90 text-sm font-medium mb-1">Mạo hiểm</p>
            <h2 className="text-white text-3xl font-bold">Trò chơi</h2>
          </div>
          <div className="text-6xl drop-shadow-2xl relative z-10">🎠</div>
          <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Places */}
        <motion.div whileTap={{ scale: 0.98 }} className="w-full h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl p-6 flex justify-between items-center shadow-md relative overflow-hidden cursor-pointer">
          <div className="relative z-10">
            <p className="text-white/90 text-sm font-medium mb-1">Khám phá thú vị</p>
            <h2 className="text-white text-3xl font-bold">Địa điểm</h2>
          </div>
          <div className="text-6xl drop-shadow-2xl relative z-10">📍</div>
          <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Events */}
        <motion.div whileTap={{ scale: 0.98 }} className="w-full h-32 bg-gradient-to-br from-purple-400 to-purple-600 rounded-3xl p-6 flex justify-between items-center shadow-md relative overflow-hidden cursor-pointer">
          <div className="relative z-10">
            <p className="text-white/90 text-sm font-medium mb-1">Gói bất ngờ</p>
            <h2 className="text-white text-3xl font-bold">Sự kiện</h2>
          </div>
          <div className="text-6xl drop-shadow-2xl relative z-10">🎁</div>
          <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>

        {/* Eco-Mission */}
        <motion.div whileTap={{ scale: 0.98 }} className="w-full h-32 bg-gradient-to-br from-lime-400 to-green-500 rounded-3xl p-6 flex justify-between items-center shadow-md relative overflow-hidden cursor-pointer">
          <div className="relative z-10">
            <p className="text-white/90 text-sm font-medium mb-1">Làm nhiệm vụ nhận quà</p>
            <h2 className="text-white text-3xl font-bold">Eco-Mission</h2>
          </div>
          <div className="text-6xl drop-shadow-2xl relative z-10">🌱</div>
          <div className="absolute right-[-10%] top-[-20%] w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </div>
  );
}
