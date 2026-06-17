import { motion } from 'motion/react';
import Carousel from './Carousel';

export default function Hero({ isPaused }: { isPaused: boolean }) {
  return (
    <section className="flex flex-col pt-0 pb-4 px-0 gap-6 w-full">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-center bg-white border-8 border-black p-4 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] w-full gap-4 md:gap-0"
      >
        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter uppercase font-sans text-center md:text-left">
          漫畫研究社 <span className="text-[#E91E63] text-xl md:text-2xl align-top inline-block md:ml-2">漫画けんきゅうしゃ</span>
        </h1>
        <div className="flex gap-4 font-bold text-lg font-sans">
          <span className="underline decoration-4 underline-offset-4">HOME</span>
        </div>
      </motion.header>
      <div className="w-full mt-2">
        <Carousel isPaused={isPaused} />
      </div>
    </section>
  )
}
