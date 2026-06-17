import { motion } from 'motion/react';

export default function About() {
  const items = [
    { text: '專研漫畫分鏡、上色與劇本創作。你能在這裡學到骨架、透視、打光、構圖等必備技巧。' },
    { text: '漫研社辦各種題材的漫畫、輕小說、同人本甚至畫冊,這裡一定能找到有共同興趣的夥伴！' },
    { text: '本學期目標：完成一部社團原創短篇動畫，並於期末成果發表會亮相！' }
  ];

  return (
    <section className="flex flex-col w-full h-full">
      <div className="bg-white border-8 border-black p-6 md:p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg] flex-1 flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl font-black mb-6 border-b-4 border-black inline-block font-sans max-w-max">關於我們</h2>
        <div className="space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-start"
              whileHover={{ x: 4 }}
            >
              <div className="w-10 h-10 bg-black text-white flex items-center justify-center shrink-0 font-bold text-xl">{`0${i + 1}`}</div>
              <p className="text-lg md:text-xl font-bold leading-tight mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
