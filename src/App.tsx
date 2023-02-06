import React from 'react';
import Content from './container/Content';
import Footer from './container/Footer';
import Header from './container/Header';
import './app.css';

const App: React.FC = () => {
   return (
      <div
         className="antialiased text-slate-400 cursor-default landingpage"
         style={{ background: '#1F1D2B' }}
      >
         <Header />
         <Content />
         <Footer />
      </div>
   );
};

export default App;
