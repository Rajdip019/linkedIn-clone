import React from 'react';
import Navbar from './components/Feed/Navbar';
import Leftbar from './components/Feed/Leftbar';
import Leftbar2 from './components/Feed/Leftbar2';
import Rightbar from './components/Feed/Rightbar';
import CreateArea from './components/Feed/CreateArea';
import Feed from './components/Feed/Feed';
import Documnet from './documemt';

const feed = () => {
  return (
      <>
      <div className='bg-[#F3F3EE] min-h-screen'>
      <Documnet />
      <Navbar />

      </div>
      </>
  );
};

export default feed;
