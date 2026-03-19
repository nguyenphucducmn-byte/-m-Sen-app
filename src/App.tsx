import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AuthWelcome, AuthLogin, AuthRegister } from './components/Auth';
import { ExploreMap } from './components/ExploreMap';
import { Tickets } from './components/Tickets';
import { BottomNav } from './components/BottomNav';
import { Home } from './components/Home';
import { Queue } from './components/Queue';
import { BuyTicket } from './components/BuyTicket';

export default function App() {
  const [screen, setScreen] = useState('welcome'); // welcome, login, register, main
  const [activeTab, setActiveTab] = useState('explore'); // home, explore, queue, account

  const handleLogin = () => {
    setScreen('main');
  };

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-4 sm:p-8">
      {/* Mobile Device Mockup Container */}
      <div className="w-full max-w-[400px] h-[850px] max-h-full bg-white rounded-[2.5rem] shadow-2xl overflow-hidden relative ring-8 ring-slate-900">
        
        <AnimatePresence mode="wait">
          {screen === 'welcome' && <AuthWelcome key="welcome" onNavigate={setScreen} />}
          {screen === 'login' && <AuthLogin key="login" onNavigate={setScreen} onLogin={handleLogin} />}
          {screen === 'register' && <AuthRegister key="register" onNavigate={setScreen} onLogin={handleLogin} />}
          
          {screen === 'main' && (
            <motion.div 
              key="main" 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.3 }}
              className="h-full w-full relative"
            >
              {/* Tab Content */}
              <div className="h-full w-full pb-20">
                {activeTab === 'home' && <Home />}
                {activeTab === 'explore' && <ExploreMap />}
                {activeTab === 'buy' && <BuyTicket />}
                {activeTab === 'queue' && <Queue />}
                {activeTab === 'account' && <Tickets />}
              </div>
              
              {/* Bottom Navigation */}
              <BottomNav activeTab={activeTab} onChange={setActiveTab} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* iOS Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-slate-900/20 rounded-full z-50 pointer-events-none"></div>
      </div>
    </div>
  );
}
