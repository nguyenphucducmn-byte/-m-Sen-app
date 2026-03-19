import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Search, SlidersHorizontal, MapPin, Info } from 'lucide-react';

const QUEUE_DATA = [
  {
    id: '1',
    name: 'Tàu lượn siêu tốc',
    status: 'Đang mở - Ít đông',
    statusColor: 'text-emerald-700',
    statusBg: 'bg-emerald-100',
    peopleCount: 7,
    waitTime: 8,
    image: 'https://i.ibb.co/KxC643CK/image.png'
  },
  {
    id: '2',
    name: 'Xe điện đụng',
    status: 'Ít đông',
    statusColor: 'text-teal-700',
    statusBg: 'bg-teal-100',
    peopleCount: 4,
    waitTime: 5,
    image: 'https://i.ibb.co/5hP4tHh9/image.png'
  },
  {
    id: '3',
    name: 'Vòng quay thần tốc',
    status: 'Đang trống',
    statusColor: 'text-green-700',
    statusBg: 'bg-green-100',
    peopleCount: 0,
    waitTime: 0,
    image: 'https://i.ibb.co/FLcwj1Ng/image.png'
  },
  {
    id: '4',
    name: 'Rồng lượn',
    status: 'Ít đông',
    statusColor: 'text-teal-700',
    statusBg: 'bg-teal-100',
    peopleCount: 6,
    waitTime: 7,
    image: 'https://i.ibb.co/s9mjvBFX/image.png'
  },
  {
    id: '5',
    name: 'Tàu vượt thác',
    status: 'Ít đông',
    statusColor: 'text-teal-700',
    statusBg: 'bg-teal-100',
    peopleCount: 8,
    waitTime: 9,
    image: 'https://i.ibb.co/d0tnmZyf/image.png'
  }
];

export function Queue() {
  return (
    <div className="h-full w-full overflow-y-auto bg-slate-50 pb-24">
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4 py-4 flex items-center justify-between">
        <button className="p-2 -ml-2 text-slate-700">
          <ChevronLeft size={24} />
        </button>
        <h1 className="text-lg font-bold text-slate-900">Xếp hàng</h1>
        <button className="p-2 -mr-2 text-slate-700">
          <Search size={22} />
        </button>
      </div>

      <div className="p-4 space-y-5">
        {/* Banner */}
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center gap-3 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 text-xl">
            🎡
          </div>
          <p className="text-amber-800 text-sm font-medium leading-snug">
            Hiện tại <span className="font-bold">Vòng Xoay Tuổi Thơ</span> gần bạn đang ít đông, hãy thử đến ngay!
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={18} className="text-slate-400" />
              </div>
              <input 
                type="text" 
                placeholder="Tìm trò chơi..." 
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
            <button className="px-4 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 shadow-sm">
              <SlidersHorizontal size={18} />
            </button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <button className="px-4 py-1.5 bg-slate-900 text-white text-sm font-medium rounded-full whitespace-nowrap">
              Tất cả
            </button>
            <button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full whitespace-nowrap flex items-center gap-1">
              Sắp xếp: Thời gian chờ
            </button>
          </div>
        </div>

        {/* Queue Cards */}
        <div className="space-y-4">
          {QUEUE_DATA.map((item) => (
            <motion.div 
              key={item.id}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-4"
            >
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{item.name}</h3>
                  <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-semibold mb-3 ${item.statusBg} ${item.statusColor}`}>
                    {item.status}
                  </span>
                  
                  <div className="space-y-1.5">
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="w-5 flex justify-center mr-1.5">👥</span>
                      <span className="font-medium">
                        {item.peopleCount === 0 ? '0 người - Vào ngay' : `${item.peopleCount} người đang chờ`}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <span className="w-5 flex justify-center mr-1.5">⏳</span>
                      <span className="font-medium text-slate-900">Chờ {item.waitTime} phút</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-500 mt-1">
                      <MapPin size={14} className="mr-2 ml-0.5 text-slate-400" />
                      <span>Khu vực trò chơi</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-28 flex flex-col gap-2">
                <div className="w-full h-24 rounded-xl overflow-hidden bg-slate-100">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <button className="w-full py-1.5 bg-slate-100 text-slate-700 text-xs font-bold rounded-lg hover:bg-slate-200 transition-colors">
                  Chi tiết
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
