import { motion } from 'framer-motion';
import React from 'react';
import { FADE_DOWN_ANIMATION_VARIANTS } from '../../constant';

const Intro: React.FC = () => {
   return (
      <div className="flex items-center h-screen">
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
               className="w-[1024px] bg-gradient-to-br from-white to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent drop-shadow-sm md:text-7xl md:leading-[5rem]"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               Training
               <br />
               Deploy
               <br />
               <span className="bg-co bg-gradient-to-r from-blue-500 via-green-600 to-indigo-500 bg-clip-text text-transparent">
                  Production
               </span>
            </motion.h1>
            <motion.p
               className="mt-6 text-center text-gray-500 md:text-2xl"
               variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
               Train your own model and deploy on cloud.
            </motion.p>
            <motion.button
               variants={FADE_DOWN_ANIMATION_VARIANTS}
               style={{
                  background:
                     ' linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)',
               }}
               className="flex items-center justify-center py-2 px-9 font-semibold rounded-2xl text-white mt-8"
            >
               Explore
            </motion.button>
         </motion.div>
      </div>
   );
};

export default Intro;
