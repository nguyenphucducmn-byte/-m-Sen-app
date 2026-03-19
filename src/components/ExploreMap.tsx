import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, Layers, Navigation, ChevronLeft, MapPin, User, X, Send } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { MOCK_ATTRACTIONS, MOCK_CATEGORIES } from '../mockData';

const CricketIcon = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Antennae */}
    <path d="M 35 40 Q 20 15 10 10" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round"/>
    <path d="M 40 35 Q 45 10 65 5" fill="none" stroke="#795548" strokeWidth="2" strokeLinecap="round"/>
    {/* Back Legs */}
    <path d="M 60 55 L 85 35 L 90 85" fill="none" stroke="#8BC34A" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 50 60 L 75 40 L 80 90" fill="none" stroke="#689F38" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Body */}
    <ellipse cx="55" cy="60" rx="25" ry="14" fill="#8BC34A" transform="rotate(-25 55 60)" />
    {/* Wing detail */}
    <path d="M 40 50 Q 60 40 75 65" fill="none" stroke="#689F38" strokeWidth="2" />
    {/* Head */}
    <circle cx="35" cy="45" r="12" fill="#689F38" />
    {/* Eye */}
    <circle cx="30" cy="42" r="2.5" fill="#212121" />
    {/* Front Legs */}
    <path d="M 35 55 L 25 75 L 15 75" fill="none" stroke="#689F38" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M 45 60 L 40 80 L 30 80" fill="none" stroke="#8BC34A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function ExploreMap() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null);
  const [isDirectionsMode, setIsDirectionsMode] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Chào bạn! Mình là Dế Mèn. Bạn muốn mình gợi ý lộ trình tham quan Đầm Sen hôm nay không? 🌿' }
  ]);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "Bạn là AI Dế Mèn, trợ lý ảo tại công viên văn hóa Đầm Sen. Bạn thân thiện, vui vẻ, nhiệt tình và luôn sẵn sàng gợi ý lộ trình tham quan, giải đáp thắc mắc của du khách về các trò chơi, ẩm thực, sự kiện tại Đầm Sen. Trả lời ngắn gọn, súc tích và dùng emoji phù hợp. Không dùng markdown quá phức tạp, chỉ dùng text thuần và emoji."
        }
      });
    } catch (e) {
      console.error("Failed to initialize Gemini AI:", e);
    }
  }, []);

  const handleSendMessage = async () => {
    if (!chatMessage.trim() || isLoading) return;
    
    const userText = chatMessage;
    const newUserMsg = { id: Date.now(), sender: 'user', text: userText };
    setMessages(prev => [...prev, newUserMsg]);
    setChatMessage('');
    setIsLoading(true);
    
    try {
      if (!chatRef.current) throw new Error("Chat not initialized");
      const response = await chatRef.current.sendMessage({ message: userText });
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        sender: 'bot', 
        text: response.text 
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        sender: 'bot', 
        text: 'Xin lỗi, Dế Mèn đang gặp chút sự cố kết nối. Bạn thử lại sau nhé! 🦗' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkerClick = (attraction: any) => {
    setSelectedAttraction(attraction);
    setIsDirectionsMode(true);
  };

  return (
    <div className="relative w-full h-full bg-[#dcedc8] overflow-hidden">
      {/* Simulated Map Background - Custom SVG matching the reference image style */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 800">
          {/* Base Grass is handled by container bg */}
          
          {/* Pink Paths */}
          <path d="M -50,200 Q 150,150 200,300 T 450,400 L 450,450 T 200,350 Q 100,200 -50,250 Z" fill="#f48fb1" opacity="0.8" />
          <path d="M 200,300 Q 250,100 400,50 L 450,80 Q 280,150 250,350 Z" fill="#f48fb1" opacity="0.8" />
          <path d="M 150,800 Q 200,600 350,500 L 400,550 Q 250,650 200,800 Z" fill="#f48fb1" opacity="0.8" />
          <path d="M 250,350 L 350,500 L 380,480 L 280,330 Z" fill="#f48fb1" opacity="0.8" />
          
          {/* Plazas / Buildings (Yellow/Pink) */}
          <rect x="40" y="520" width="180" height="140" rx="8" fill="#ffe082" stroke="#ffb300" strokeWidth="2" transform="rotate(-15 40 520)" />
          <rect x="40" y="520" width="180" height="30" rx="8" fill="#ec407a" transform="rotate(-15 40 520)" />
          
          <circle cx="280" cy="380" r="45" fill="#ec407a" stroke="#d81b60" strokeWidth="3" />
          <circle cx="280" cy="380" r="30" fill="#aed581" />
          
          <rect x="280" y="450" width="70" height="90" rx="4" fill="#ffe082" stroke="#ffb300" strokeWidth="2" transform="rotate(10 280 450)" />
          <rect x="280" y="450" width="70" height="20" rx="4" fill="#ec407a" transform="rotate(10 280 450)" />
          
          {/* Roller Coaster Tracks (Bright Green) */}
          <path d="M -20,450 Q 100,400 150,500 T 250,650 T 450,750" fill="none" stroke="#64dd17" strokeWidth="14" strokeLinecap="round" opacity="0.9" />
          <path d="M -20,450 Q 100,400 150,500 T 250,650 T 450,750" fill="none" stroke="#33691e" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
          
          <path d="M 150,200 Q 250,150 300,250 T 200,400 T 100,350 Z" fill="none" stroke="#64dd17" strokeWidth="10" strokeLinecap="round" opacity="0.9" />
          <path d="M 150,200 Q 250,150 300,250 T 200,400 T 100,350 Z" fill="none" stroke="#33691e" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
          
          {/* Trees (Dark Green Circles) */}
          <circle cx="80" cy="100" r="25" fill="#4caf50" />
          <circle cx="120" cy="80" r="35" fill="#388e3c" />
          <circle cx="50" cy="150" r="20" fill="#4caf50" />
          <circle cx="350" cy="200" r="30" fill="#388e3c" />
          <circle cx="380" cy="250" r="20" fill="#4caf50" />
          <circle cx="200" cy="450" r="25" fill="#388e3c" />
          <circle cx="150" cy="480" r="15" fill="#4caf50" />
          <circle cx="300" cy="600" r="35" fill="#388e3c" />
          <circle cx="350" cy="650" r="25" fill="#4caf50" />
          <circle cx="100" cy="750" r="40" fill="#388e3c" />
          <circle cx="50" cy="700" r="25" fill="#4caf50" />
          <circle cx="250" cy="280" r="22" fill="#4caf50" />
          <circle cx="180" cy="320" r="18" fill="#388e3c" />
        </svg>
      </div>

      {/* Map Markers */}
      {MOCK_ATTRACTIONS.map((attr) => {
        const Icon = attr.icon;
        const isSelected = selectedAttraction?.id === attr.id;
        return (
          <div 
            key={attr.id}
            className="absolute z-10"
            style={{ left: `${attr.x}%`, top: `${attr.y}%` }}
          >
            <motion.button
              initial={{ scale: 0, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              onClick={() => handleMarkerClick(attr)}
              className="flex flex-col items-center transform -translate-x-1/2 -translate-y-full drop-shadow-xl hover:drop-shadow-2xl relative"
            >
              <div className={`w-14 h-14 rounded-full border-[4px] border-white flex items-center justify-center z-10 transition-transform ${isSelected ? 'scale-110 bg-[#C2185B]' : 'bg-[#D81B60]'}`}>
                <Icon size={26} className="text-white" strokeWidth={2.5} />
              </div>
              {/* White Pin Triangle */}
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[14px] border-l-transparent border-r-transparent border-t-white -mt-1 z-0"></div>
            </motion.button>
          </div>
        );
      })}

      {/* Route SVG (Only in Directions Mode) */}
      <AnimatePresence>
        {isDirectionsMode && selectedAttraction && (
          <motion.svg 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none z-0"
          >
            <path 
              d={`M 50,900 Q 100,500 ${selectedAttraction.x * 4},${selectedAttraction.y * 8}`} 
              fill="none" stroke="#F43F5E" strokeWidth="6" strokeDasharray="10 10" 
              className="animate-[dash_1s_linear_infinite]"
            />
          </motion.svg>
        )}
      </AnimatePresence>

      {/* Top UI Overlay */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="bg-gradient-to-b from-white/90 via-white/60 to-transparent pt-12 pb-6 px-4 pointer-events-auto">
          {!isDirectionsMode ? (
            <>
              {/* Search Bar */}
              <div className="flex items-center bg-white rounded-full shadow-md px-4 py-3 mb-4">
                <Search size={20} className="text-slate-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Tìm trò chơi, thời gian chờ..." 
                  className="flex-1 bg-transparent outline-none text-slate-700 text-sm font-medium"
                />
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center ml-2">
                  <User size={16} className="text-slate-600" />
                </div>
              </div>

              {/* Categories */}
              <div className="flex overflow-x-auto hide-scrollbar space-x-2 pb-2">
                {MOCK_CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm ${
                      activeCategory === cat.id 
                        ? 'bg-slate-900 text-white' 
                        : 'bg-white text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Directions Header */
            <div className="flex items-center mb-4">
              <button 
                onClick={() => setIsDirectionsMode(false)}
                className="p-2 bg-white rounded-full shadow-md text-slate-700 mr-3"
              >
                <ChevronLeft size={24} />
              </button>
              <h2 className="text-xl font-bold text-slate-900">Chỉ đường</h2>
            </div>
          )}
        </div>
      </div>

      {/* Floating Buttons */}
      {!isDirectionsMode && (
        <>
          <button className="absolute left-4 top-48 z-20 p-3 bg-white rounded-full shadow-lg text-slate-700">
            <Layers size={24} />
          </button>
          <button className="absolute right-4 top-48 z-20 p-3 bg-slate-900 rounded-full shadow-lg text-white flex items-center space-x-2">
            <Filter size={20} />
            <span className="text-sm font-bold pr-1">Bộ lọc (2)</span>
          </button>
        </>
      )}

      {/* Directions Bottom Card */}
      <AnimatePresence>
        {isDirectionsMode && selectedAttraction && (
          <motion.div 
            initial={{ y: 200, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            exit={{ y: 200, opacity: 0 }}
            className="absolute bottom-24 left-4 right-4 z-30 bg-white rounded-3xl shadow-2xl p-5"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{selectedAttraction.name}</h3>
                <div className="flex items-center text-emerald-600 font-semibold text-sm">
                  <Navigation size={14} className="mr-1" />
                  Đi bộ 4 phút (350m)
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-16 h-16 bg-slate-200 rounded-xl overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1505993597083-3bd19fd75e77?w=150&h=150&fit=crop`} alt="thumbnail" className="w-full h-full object-cover" />
                </div>
                <button
                  onClick={() => {
                    setSelectedAttraction(null);
                    setIsDirectionsMode(false);
                  }}
                  className="p-1.5 bg-slate-100 text-slate-500 rounded-full hover:bg-slate-200 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <button className="flex-1 bg-rose-500 text-white py-3.5 rounded-xl font-bold text-sm flex justify-center items-center shadow-lg shadow-rose-500/30">
                Bắt đầu đi
              </button>
              <button className="px-5 bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold text-sm">
                Tùy chọn
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Assistant FAB */}
      <div className={`absolute left-4 z-40 flex items-end space-x-2 transition-all duration-300 ${isDirectionsMode ? 'bottom-64' : 'bottom-28'}`}>
        <button 
          onClick={() => setIsChatOpen(true)}
          className="p-3 bg-white rounded-full shadow-xl border border-lime-100 flex items-center justify-center group relative"
        >
          <div className="absolute inset-0 bg-lime-50 rounded-full scale-0 group-hover:scale-100 transition-transform origin-center"></div>
          <div className="relative flex items-center justify-center">
            <CricketIcon className="w-8 h-8 drop-shadow-sm" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500 border-2 border-white"></span>
            </span>
          </div>
        </button>
        
        {/* Chat Bubble Tip */}
        {!isChatOpen && (
          <div className="bg-white px-3 py-2 rounded-2xl rounded-bl-none shadow-lg border border-slate-100 mb-2 max-w-[140px] animate-bounce-slow">
            <p className="text-[10px] font-medium text-slate-700 leading-tight">
              <span className="text-lime-600 font-bold">AI Dế Mèn</span> gợi ý lộ trình dành riêng cho bạn! ✨
            </p>
          </div>
        )}
      </div>

      {/* Chat Window Overlay */}
      <AnimatePresence>
        {isChatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, transformOrigin: 'bottom left' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="absolute bottom-20 left-4 right-4 z-50 bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-slate-100"
            style={{ height: '400px', maxHeight: '60vh' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-lime-500 to-green-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <CricketIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm">AI Dế Mèn</h3>
              </div>
              <button onClick={() => setIsChatOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                <X size={20} />
              </button>
            </div>
            
            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-3">
              {messages.map(msg => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-green-500 text-white rounded-tr-sm' 
                      : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3 rounded-2xl text-sm bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-3 bg-white border-t border-slate-100 flex items-center space-x-2">
              <input 
                type="text" 
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                placeholder="Nhập tin nhắn..." 
                disabled={isLoading}
                className="flex-1 bg-slate-100 rounded-full px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-green-500/50 transition-all disabled:opacity-50"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />
              <button 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-md transition-colors flex-shrink-0 ${
                  isLoading ? 'bg-slate-300 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
                }`}
                onClick={handleSendMessage}
                disabled={isLoading}
              >
                <Send size={18} className={isLoading ? '' : 'ml-0.5'} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Current Location FAB */}
      <button className={`absolute right-4 z-20 p-3 bg-white rounded-full shadow-lg text-blue-500 transition-all duration-300 ${isDirectionsMode ? 'bottom-64' : 'bottom-28'}`}>
        <Navigation size={24} className="transform rotate-45" />
      </button>
    </div>
  );
}
