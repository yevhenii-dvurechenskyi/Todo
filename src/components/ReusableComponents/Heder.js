import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import GameIntarface from './GameIntarfaceCoin'



const Heder = () => {
    return (
      <div className=''>
        <div className="h-[125px] w-[100%] bg-[#FFA205] items-center justify-between flex">
          <div>
            <span className="text-[#fff] drop-shadow-[0_4px_4px_rgba(0,0,0,0.60)] text-[64px] font-extrabold ml-[20px]">Ant CaS2ino</span>
          </div>
          <div className='flex'>
            <Link to='/inventory' className="flex w-[191px] h-[87px] items-center bg-[#1B2838] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-center text-[#fff] text-[30px] font-normal drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] duration-300 hover:bg-[#2c496e]">Inventory</Link>
            <Link to='/grinder' className="flex ml-[20px] w-[191px] h-[87px] items-center bg-[#A3C3E8] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-center text-[#fff] text-[30px] font-normal drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] duration-300 hover:bg-[#b2cceb]">Grinder</Link>
            <Link to='/case' className="flex mx-[20px] w-[191px] h-[87px] items-center bg-[#D47901] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] justify-center text-[#fff] text-[30px] font-normal drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] duration-300 hover:bg-[#e3860b]">Case</Link>
          </div>
      </div>
        <Outlet />
        <GameIntarface />
        <footer>
          <div className='w-[100%] h-[300px] bg-[#15122c] flex flex-row items-center'>
            <div className='flex flex-col ml-[5%]'>
              <span className=' text-[25px] text-[#c24242] mb-[20px] font-bold'>Contact us(me :D)</span>
              <div className='mb-[10px]'><a href='https://t.me/ZheniaDvur' className='text-[25px] text-[white] duration-300 hover:text-[#c24242]'>Telegram</a></div>
              <div className='mb-[10px]'><a href='https://github.com/yevhenii-dvurechenskyi' className='text-[25px] text-[white] duration-300 hover:text-[#c24242]'>Git Hub</a></div>
              <div><a href='https://www.linkedin.com/in/yevhenii-dvurechenskyi' className='text-[25px] text-[white] duration-300 hover:text-[#c24242]'>linkedin</a></div>
            </div>
          </div>
        </footer>
    </div>
    );
  };

export default Heder;