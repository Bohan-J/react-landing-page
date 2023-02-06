import React from 'react';
import Detail from '../../components/Detail';
import Intro from '../../components/Intro';
import Subscribe from '../../components/Subscribe';

export const Content: React.FC = () => {
   return (
      <div className="w-screen overflow-auto px-20">
         <Intro />
         <Detail />
         {/* <Subscribe /> */}
      </div>
   );
};

export default Content;
