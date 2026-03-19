import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Eye, EyeOff, ChevronLeft } from 'lucide-react';

export function AuthWelcome({ onNavigate, key }: { onNavigate: (screen: string) => void, key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col h-full bg-slate-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50 bg-[url('https://i.ibb.co/NPMDfNJ/image.png')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
      
      <div className="relative z-10 flex flex-col justify-end h-full p-6 pb-12">
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-4xl font-bold mb-3 leading-tight">Hành Trình Khám Phá<br/>Bắt Đầu Từ Đây</h1>
          <p className="text-slate-300 mb-8 text-lg">Khám phá trò chơi, lên lịch trình và bỏ qua hàng chờ.</p>
          
          <div className="space-y-4">
            <button 
              onClick={() => onNavigate('login')}
              className="w-full bg-rose-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-rose-600 transition-colors shadow-lg shadow-rose-500/30"
            >
              Đăng nhập
            </button>
            <button 
              onClick={() => onNavigate('register')}
              className="w-full bg-white text-slate-900 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition-colors"
            >
              Đăng ký
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function AuthLogin({ onNavigate, onLogin, key }: { onNavigate: (screen: string) => void, onLogin: () => void, key?: string }) {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginSubmit = () => {
    if (username === 'toiyeuvietnam' && password === '123456') {
      setError('');
      onLogin();
    } else {
      setError('Tài khoản hoặc mật khẩu không đúng.');
    }
  };

  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="flex flex-col h-full bg-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://i.ibb.co/NPMDfNJ/image.png')] bg-cover bg-center" />
      
      <div className="relative z-10 p-4 pt-12 flex items-center">
        <button onClick={() => onNavigate('welcome')} className="p-2 bg-white rounded-full shadow-sm text-slate-700">
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="relative z-10 flex-1 px-6 pt-6">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Chào mừng trở lại</h2>
          <p className="text-slate-500 mb-8">Nhập thông tin để truy cập vé của bạn.</p>
          
          <div className="space-y-5">
            {error && (
              <div className="p-3 bg-rose-50 text-rose-600 text-sm rounded-xl border border-rose-100">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Tài khoản</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="toiyeuvietnam" 
                className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mật khẩu</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition-all" 
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
            
            <div className="flex justify-end">
              <button className="text-rose-500 font-medium text-sm">Quên mật khẩu?</button>
            </div>
            
            <button onClick={handleLoginSubmit} className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-colors mt-4 shadow-lg shadow-slate-900/20">
              Đăng nhập
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-sm">
            <span className="text-slate-500">Chưa có tài khoản?</span>
            <button onClick={() => onNavigate('register')} className="text-rose-500 font-semibold">Đăng ký</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function AuthRegister({ onNavigate, onLogin, key }: { onNavigate: (screen: string) => void, onLogin: () => void, key?: string }) {
  return (
    <motion.div 
      initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="flex flex-col h-full bg-slate-50 relative overflow-y-auto overflow-x-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[url('https://i.ibb.co/NPMDfNJ/image.png')] bg-cover bg-center fixed" />
      
      <div className="relative z-10 p-4 pt-12 flex items-center sticky top-0">
        <button onClick={() => onNavigate('welcome')} className="p-2 bg-white rounded-full shadow-sm text-slate-700">
          <ChevronLeft size={24} />
        </button>
      </div>
      
      <div className="relative z-10 px-6 pb-8">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50">
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Tạo tài khoản</h2>
          <p className="text-slate-500 mb-8">Tham gia chuyến phiêu lưu ngay hôm nay.</p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Họ và tên</label>
              <input type="text" placeholder="Nguyễn Văn A" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
              <input type="email" placeholder="xinchoa@example.com" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mật khẩu</label>
              <input type="password" placeholder="••••••••" className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-rose-500 outline-none" />
            </div>
            
            <div className="flex items-start mt-4">
              <input type="checkbox" id="terms" className="mt-1 mr-3 rounded border-slate-300 text-rose-500 focus:ring-rose-500" />
              <label htmlFor="terms" className="text-sm text-slate-600">
                Tôi đồng ý với Điều khoản dịch vụ và Chính sách bảo mật.
              </label>
            </div>
            
            <button onClick={onLogin} className="w-full bg-slate-900 text-white py-4 rounded-xl font-semibold text-lg hover:bg-slate-800 transition-colors mt-6 shadow-lg shadow-slate-900/20">
              Tạo tài khoản
            </button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-2 text-sm">
            <span className="text-slate-500">Đã có tài khoản?</span>
            <button onClick={() => onNavigate('login')} className="text-rose-500 font-semibold">Đăng nhập</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
