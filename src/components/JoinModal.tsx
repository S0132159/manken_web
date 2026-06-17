import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useState } from 'react';

export default function JoinModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const payload = {
      studentId: formData.get('studentId'),
      name: formData.get('name'),
      contact: formData.get('contact'),
      reason: formData.get('reason'),
    };

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
        }, 3000);
      } else {
        const errData = await response.json();
        alert(`送出失敗: ${errData.error || '未知錯誤'}`);
      }
    } catch (error) {
      console.error('連線錯誤:', error);
      alert('無法連線至伺服器');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-20 bg-black/20 backdrop-blur-[2px]"
        >
          <motion.div
            initial={{ scale: 0.8, y: 50, rotate: -2 }}
            animate={{ scale: 1, y: 0, rotate: -2 }}
            exit={{ scale: 0.8, y: 50, rotate: -2 }}
            className="bg-white border-[8px] md:border-[12px] border-black p-6 md:p-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] md:shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] w-full max-w-2xl relative font-sans"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">入社申請書</h3>
              <button
                onClick={onClose}
                className="bg-black text-white hover:bg-white hover:text-black transition-colors"
              >
                <X size={32} strokeWidth={4} />
              </button>
            </div>

            {/* Body */}
            <div className="overflow-y-auto max-h-[70vh] comic-scroll pr-2">
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="text-6xl mb-6 animate-bounce">🎉</div>
                  <h3 className="font-heading text-3xl md:text-4xl mb-4 font-black">收到你的熱情啦！</h3>
                  <p className="text-xl font-bold border-4 border-black bg-gray-50 p-4 shadow-[4px_4px_0px_#000] rotate-[1deg]">
                    我們會在近期透過聯絡方式通知你！<br />請留意訊息唷～
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 font-bold text-lg">
                  <div className="flex flex-col gap-1">
                    <label className="uppercase font-black tracking-widest">學號</label>
                    <input name="studentId" required type="text" className="w-full bg-gray-50 border-4 border-black p-3 focus:outline-none focus:bg-yellow-50 placeholder-gray-400 transition-colors" placeholder="e.g. B110..." />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="uppercase font-black tracking-widest">姓名 / 筆名</label>
                    <input name="name" required type="text" className="w-full bg-gray-50 border-4 border-black p-3 focus:outline-none focus:bg-yellow-50 placeholder-gray-400 transition-colors" placeholder="請填寫姓名或筆名" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="uppercase font-black tracking-widest">聯絡方式 (手機 / Email)</label>
                    <input name="contact" required type="text" className="w-full bg-gray-50 border-4 border-black p-3 focus:outline-none focus:bg-yellow-50 placeholder-gray-400 transition-colors" placeholder="方便找到你的管道" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="uppercase font-black tracking-widest">入社理由及喜歡的作品</label>
                    <textarea name="reason" required rows={3} className="w-full bg-gray-50 border-4 border-black p-3 focus:outline-none focus:bg-yellow-50 placeholder-gray-400 resize-none transition-colors" placeholder="大聲說出你對作品的熱愛吧！"></textarea>
                  </div>

                  <div className="pt-6">
                    <button type="submit" className="w-full bg-black text-white p-4 text-2xl font-black uppercase hover:bg-white hover:text-black hover:border-black border-4 border-black transition-colors">
                      送出！
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
