import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities';
import JoinModal from './components/JoinModal';
import { motion } from 'motion/react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-black overflow-x-hidden selection:bg-[#E91E63] selection:text-white bg-[#FFDE00] p-4 md:p-8 flex flex-col relative w-full border-[12px] border-black">
      <main className="relative z-10 max-w-5xl mx-auto w-full flex-1 flex flex-col gap-6 md:gap-8">
        <Hero isPaused={isModalOpen} />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
          <div className="col-span-1 md:col-span-7 flex flex-col">
            <About />
          </div>
          <div className="col-span-1 md:col-span-5 flex flex-col gap-6">
            <Activities />
          </div>
        </div>

        {/* Bottom CTA Area */}
        <footer className="h-auto md:h-40 flex flex-col md:flex-row gap-6 mt-4 w-full">
          <div className="flex-1 bg-white border-8 border-black p-4 md:p-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] relative h-full flex flex-col justify-center gap-2">
            <p className="text-2xl md:text-3xl font-black font-sans uppercase tracking-tight">準備好開啟你的創作生涯了嗎？</p>
            <p className="text-base md:text-xl italic font-bold">不要讓你的靈感死在腦袋裡，加入我們！</p>
            {/* Speech Bubble Tail */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border-r-8 border-b-8 border-black rotate-[-45deg] z-[-1] hidden md:block"></div>
          </div>
          <div className="md:w-64 h-full flex flex-col items-center justify-center pt-2 md:pt-0">
            <motion.button
              whileHover={{ scale: 1.05, x: 4, y: 4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-[#E91E63] text-white border-8 border-black p-4 md:p-6 font-black text-3xl md:text-4xl shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all w-full"
            >
              我要入社！
            </motion.button>
          </div>
        </footer>
      </main>

      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
