import React, { useState } from 'react';
import { motion } from 'motion/react';
import { QrCode, Info } from 'lucide-react';
import { MOCK_TICKETS } from '../mockData';

export function Tickets() {
  const [activeTab, setActiveTab] = useState('Vé vào cổng');
  const tabs = ['Vé vào cổng', 'Vé trò chơi', 'Phiếu ăn uống'];

  return (
    <div className="flex flex-col h-full bg-slate-50 pt-12">
      <div className="px-6 pb-4">
        <h1 className="text-3xl font-bold text-slate-900">Vé của tôi</h1>
      </div>

      {/* Tabs */}
      <div className="px-6 mb-6">
        <div className="flex p-1 bg-slate-200/60 rounded-xl">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                activeTab === tab 
                  ? 'bg-white text-slate-900 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Ticket List */}
      <div className="flex-1 px-6 overflow-y-auto pb-24 space-y-6">
        {MOCK_TICKETS.filter(t => t.type === activeTab || (activeTab === 'Vé vào cổng' && t.type === 'Vé vào cổng') || (activeTab === 'Vé trò chơi' && t.type === 'Vé trò chơi')).map((ticket) => (
          <motion.div 
            key={ticket.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100"
          >
            {/* Ticket Header */}
            <div className="bg-slate-900 p-6 text-white relative overflow-hidden">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">{ticket.type}</span>
                  <h3 className="text-xl font-bold mt-1">{ticket.name}</h3>
                </div>
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <QrCode size={24} className="text-white" />
                </div>
              </div>
            </div>

            {/* Ticket Body */}
            <div className="p-6 relative">
              {/* Dashed Separator Simulation */}
              <div className="absolute top-0 left-0 right-0 h-px border-t-2 border-dashed border-slate-200 -mt-px"></div>
              <div className="absolute -top-3 -left-3 w-6 h-6 bg-slate-50 rounded-full"></div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-slate-50 rounded-full"></div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Tên khách</p>
                  <p className="font-bold text-slate-900">{ticket.userName}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Số người</p>
                  <p className="font-bold text-slate-900">{ticket.members} Người</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Mã vé</p>
                  <p className="font-bold text-slate-900">{ticket.id}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium mb-1">Hiệu lực</p>
                  <p className="font-bold text-emerald-600">{ticket.expiry}</p>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-xl flex items-start">
                <Info size={18} className="text-slate-400 mr-3 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-slate-700 mb-1">Quyền lợi bao gồm</p>
                  <ul className="text-xs text-slate-500 space-y-1 list-disc pl-4">
                    {ticket.benefits.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              </div>

              <button className="w-full mt-6 bg-slate-100 text-slate-900 py-3.5 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors">
                Hiển thị mã QR
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
