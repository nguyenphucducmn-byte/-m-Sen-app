import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, QrCode, Clock, Star } from 'lucide-react';

export function BuyTicket() {
  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50 pb-24">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 pt-12 rounded-b-[2rem] relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl font-extrabold text-slate-900 leading-tight mb-1">
            Mua Vé Tham Quan<br />
            <span className="text-rose-500">Nhanh Chóng</span> & <span className="text-rose-500">Tiện Lợi!</span>
          </h1>
          
          <div className="flex flex-wrap gap-2 mt-4">
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-white">
              <CheckCircle2 size={14} className="text-blue-500 mr-1.5" />
              Nhận vé điện tử
            </div>
            <div className="flex items-center bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 shadow-sm border border-white">
              <QrCode size={14} className="text-slate-600 mr-1.5" />
              Vào cổng bằng QR
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 opacity-20">
          <div className="text-9xl">🎢</div>
        </div>
        <div className="absolute top-10 right-10 w-8 h-8 bg-yellow-400 rounded-full blur-sm opacity-60"></div>
        <div className="absolute top-20 right-32 w-4 h-4 bg-rose-400 rounded-full blur-sm opacity-60"></div>
      </div>

      {/* Main Ticket Types */}
      <div className="px-4 mt-6">
        <div className="flex overflow-x-auto hide-scrollbar space-x-4 pb-4 pt-4 snap-x">
          
          {/* Vé Trọn Gói */}
          <div className="min-w-[160px] w-[160px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-3xl p-1 shadow-lg shadow-blue-500/30 snap-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md whitespace-nowrap z-10">
              Phổ biến
            </div>
            <div className="bg-white/10 rounded-[22px] p-3 h-full flex flex-col relative overflow-hidden">
              <h3 className="text-white font-bold text-lg text-center mb-1">Vé Trọn Gói</h3>
              <div className="flex items-center justify-center text-white/90 text-[10px] mb-2 bg-black/10 w-max mx-auto px-2 py-0.5 rounded-full">
                <Clock size={10} className="mr-1" /> 7:30 - 20:00
              </div>
              <div className="flex-1 flex items-center justify-center py-2">
                <div className="text-6xl drop-shadow-lg">🎢</div>
              </div>
              <div className="mt-auto text-center">
                <p className="text-white/90 text-xs mb-1">Từ <span className="text-lg font-bold text-white">170.000đ</span></p>
                <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold py-2 rounded-xl text-sm shadow-md">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>

          {/* Vé Tham Quan */}
          <div className="min-w-[160px] w-[160px] bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-3xl p-1 shadow-lg shadow-emerald-500/20 snap-center">
            <div className="bg-white/10 rounded-[22px] p-3 h-full flex flex-col relative overflow-hidden">
              <h3 className="text-white font-bold text-lg text-center mb-1">Vé Tham Quan</h3>
              <div className="flex items-center justify-center text-white/90 text-[10px] mb-2 bg-black/10 w-max mx-auto px-2 py-0.5 rounded-full">
                <Clock size={10} className="mr-1" /> 7:30 - 20:00
              </div>
              <div className="flex-1 flex items-center justify-center py-2">
                <div className="text-6xl drop-shadow-lg">🏰</div>
              </div>
              <div className="mt-auto text-center">
                <p className="text-white/90 text-xs mb-1">Từ <span className="text-lg font-bold text-white">60.000đ</span></p>
                <button className="w-full bg-white text-emerald-600 font-bold py-2 rounded-xl text-sm shadow-md">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>

          {/* Vé Trong CV */}
          <div className="min-w-[160px] w-[160px] bg-gradient-to-b from-amber-400 to-orange-500 rounded-3xl p-1 shadow-lg shadow-orange-500/20 snap-center">
            <div className="bg-white/10 rounded-[22px] p-3 h-full flex flex-col relative overflow-hidden">
              <h3 className="text-white font-bold text-lg text-center mb-1">Vé Trong CV</h3>
              <div className="flex items-center justify-center text-orange-900 bg-white/80 text-[10px] font-semibold mb-2 w-max mx-auto px-2 py-0.5 rounded-full">
                Vé trò chơi lẻ
              </div>
              <div className="flex-1 flex items-center justify-center py-2">
                <div className="text-6xl drop-shadow-lg">🎪</div>
              </div>
              <div className="mt-auto text-center">
                <p className="text-white/90 text-xs mb-1">Từ <span className="text-lg font-bold text-white">30.000đ</span></p>
                <button className="w-full bg-white text-orange-600 font-bold py-2 rounded-xl text-sm shadow-md">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>

          {/* Vé Buffet */}
          <div className="min-w-[160px] w-[160px] bg-gradient-to-b from-purple-400 to-purple-600 rounded-3xl p-1 shadow-lg shadow-purple-500/20 snap-center">
            <div className="bg-white/10 rounded-[22px] p-3 h-full flex flex-col relative overflow-hidden">
              <h3 className="text-white font-bold text-lg text-center mb-1">Vé Buffet</h3>
              <div className="flex items-center justify-center text-purple-900 bg-white/80 text-[10px] font-semibold mb-2 w-max mx-auto px-2 py-0.5 rounded-full">
                Ăn uống đa dạng
              </div>
              <div className="flex-1 flex items-center justify-center py-2">
                <div className="text-6xl drop-shadow-lg">🍱</div>
              </div>
              <div className="mt-auto text-center">
                <p className="text-white/90 text-xs mb-1">Từ <span className="text-lg font-bold text-white">199.000đ</span></p>
                <button className="w-full bg-white text-purple-600 font-bold py-2 rounded-xl text-sm shadow-md">
                  Xem chi tiết
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Chọn Nơi Mua Vé */}
      <div className="mt-4 px-4">
        <div className="flex items-center justify-center mb-4 space-x-2">
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <h2 className="text-xl font-bold text-slate-800">Chọn Nơi Mua Vé</h2>
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>

        <div className="flex overflow-x-auto hide-scrollbar space-x-3 pb-4 pt-4 snap-x">
          
          {/* Mua Online */}
          <div className="min-w-[130px] w-[130px] bg-white border-2 border-orange-400 rounded-2xl p-3 shadow-sm snap-center relative flex flex-col items-center text-center">
            <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap z-10">
              Khuyên dùng
            </div>
            <h4 className="font-bold text-orange-500 text-sm mb-2 mt-1">Mua Online</h4>
            <div className="text-4xl mb-2">📱</div>
            <div className="mt-auto text-orange-500 font-bold text-xs flex items-center justify-center">
              <span className="mr-1">✨</span> Nhận vé ngay
            </div>
          </div>

          {/* Từ Cổng */}
          <div className="min-w-[110px] w-[110px] bg-white border border-slate-100 rounded-2xl p-3 shadow-sm snap-center flex flex-col items-center text-center">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Từ Cổng</h4>
            <div className="text-4xl mb-2">🎫</div>
            <p className="mt-auto text-slate-500 text-[10px] font-medium">Quầy vé chính</p>
          </div>

          {/* CV Nước */}
          <div className="min-w-[110px] w-[110px] bg-white border border-slate-100 rounded-2xl p-3 shadow-sm snap-center flex flex-col items-center text-center">
            <h4 className="font-bold text-slate-800 text-sm mb-2">CV Nước</h4>
            <div className="text-4xl mb-2">🌊</div>
            <p className="mt-auto text-slate-500 text-[10px] font-medium">Cổng Thủy Cung</p>
          </div>

          {/* Trong CV */}
          <div className="min-w-[110px] w-[110px] bg-white border border-slate-100 rounded-2xl p-3 shadow-sm snap-center flex flex-col items-center text-center">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Trong CV</h4>
            <div className="text-4xl mb-2">🏪</div>
            <p className="mt-auto text-slate-500 text-[10px] font-medium">Kiosk & Quầy vé</p>
          </div>

          {/* Nhà Hàng */}
          <div className="min-w-[110px] w-[110px] bg-white border border-slate-100 rounded-2xl p-3 shadow-sm snap-center flex flex-col items-center text-center">
            <h4 className="font-bold text-slate-800 text-sm mb-2">Nhà Hàng</h4>
            <div className="text-4xl mb-2">🍽️</div>
            <p className="mt-auto text-slate-500 text-[10px] font-medium">Mua kèm buffet</p>
          </div>

        </div>
      </div>
    </div>
  );
}
