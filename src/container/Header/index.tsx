import React from 'react';
import githubSrc from '../../imgs/github.svg';

const Header: React.FC = () => {
   return (
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 border-b border-slate-900/10 dark:border-slate-50/[0.06] bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
         <div className="max-w-8xl mx-auto">
            <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
               <div className="relative flex items-center">
                  <a href="/" className="text-2xl">
                     {/* <img src={logoSrc} /> */}
                     <p
                        className="text-white font-mono font-semibold"
                        style={{
                           background:
                              'linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)',
                           WebkitTextFillColor: 'transparent',
                           WebkitBackgroundClip: 'text',
                        }}
                     >
                        PIPE3
                     </p>
                  </a>
                  <div className="relative hidden lg:flex items-center ml-auto">
                     <nav className="text-sm leading-6 font-semibold text-textColor-navItem">
                        <ul className="flex space-x-8">
                           <li
                              className="hover:text-sky-400"
                              style={{
                                 background:
                                    'linear-gradient(93.51deg, #9B51E0 2.84%, #3081ED 99.18%)',
                                 WebkitTextFillColor: 'transparent',
                                 WebkitBackgroundClip: 'text',
                                 borderBottom: '1.5px solid #9B51E0',
                              }}
                           >
                              Home
                           </li>
                           <li className="hover:text-sky-400">Docs</li>
                           <li className="hover:text-sky-400">How it works</li>
                        </ul>
                     </nav>
                     <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                        <a
                           href="https://github.com/Bohan-J/react-landing-page"
                           className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                        >
                           <img src={githubSrc} className="w-5 h-5" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
