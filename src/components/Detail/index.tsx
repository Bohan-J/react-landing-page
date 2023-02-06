import { motion } from 'framer-motion';
import React from 'react';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../../constant';
import './index.css';

const Detail: React.FC = () => {
   return (
      <div className="h-screen flex flex-col">
         <motion.div
            className="flex w-full flex-col items-center justify-center"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
               hidden: {},
               show: {
                  transition: {
                     staggerChildren: 0.15,
                  },
               },
            }}
         >
            <motion.h1
               className="w-[1024px] text-white text-center font-display text-6xl font-semibold"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               Getting Start
            </motion.h1>
         </motion.div>
         <motion.div
            className="started-items grid px-20 py-16 gap-x-5 gap-y-5 justify-between relative"
            initial="hidden"
            whileInView="show"
            animate="show"
            viewport={{ once: true }}
            variants={{
               hidden: {},
               show: {
                  transition: {
                     staggerChildren: 0.15,
                  },
               },
            }}
         >
            <motion.div
               className="w-24"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               <motion.div
                  className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white bg-transparent"
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  style={{
                     boxShadow:
                        'inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)',
                     backdropFilter: 'blur(74.4293px)',
                  }}
               ></motion.div>
               <motion.p className="w-24 mt-2.5 text-center text-white text-xs font-bold">
                  Feed in data
               </motion.p>
            </motion.div>
            <motion.div
               className="w-24"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               <motion.div
                  className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white bg-transparent"
                  style={{
                     boxShadow:
                        'inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)',
                     backdropFilter: 'blur(74.4293px)',
                  }}
               ></motion.div>
               <motion.p className="w-24 mt-2.5 text-center text-white text-xs font-bold">
                  Fine tune
               </motion.p>
            </motion.div>
            <motion.div
               className="w-24"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               <div
                  className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white bg-transparent"
                  style={{
                     boxShadow:
                        'inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)',
                     backdropFilter: 'blur(74.4293px)',
                  }}
               ></div>
               <p className="w-24 mt-2.5 text-center text-white text-xs font-bold">
                  Deploy
               </p>
            </motion.div>
            <motion.div
               className="w-24"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               <div
                  className="flex items-center justify-center w-24 h-24 rounded-2xl bg-white bg-transparent"
                  style={{
                     boxShadow:
                        'inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)',
                     backdropFilter: 'blur(74.4293px)',
                  }}
               ></div>
               <p className="w-24 mt-2.5 text-center text-white text-xs font-bold">
                  Integration
               </p>
            </motion.div>
         </motion.div>
      </div>
   );
};

export default Detail;
