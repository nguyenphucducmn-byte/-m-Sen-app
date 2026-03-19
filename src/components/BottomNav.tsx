import React from 'react';
import { Home, Map, Clock, User, Ticket } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export function BottomNav({ activeTab, onChange }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Trang chủ' },
    { id: 'explore', icon: Map, label: 'Bản đồ' },
    { id: 'buy', icon: Ticket, label: 'Mua vé', isPrimary: true },
    { id: 'queue', icon: Clock, label: 'Xếp hàng' },
    { id: 'account', icon: User, label: 'Tài khoản' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-slate-100 pb-safe z-50">
      <div className="flex justify-around items-end h-20 px-2 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          if (tab.isPrimary) {
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                className="flex flex-col items-center justify-center relative -top-4"
              >
                <div className="w-14 h-14 bg-gradient-to-tr from-rose-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg shadow-rose-500/40 text-white transform transition-transform active:scale-95">
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <span className={`text-[10px] mt-1.5 font-bold ${isActive ? 'text-rose-500' : 'text-slate-500'}`}>
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className="flex flex-col items-center justify-center w-14 h-full relative"
            >
              <div className={`p-1.5 rounded-xl transition-all duration-300 ${isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-400'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] mt-1 font-semibold transition-colors duration-300 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
