import React from 'react';
import { useSelector } from 'react-redux';

const Interface = () => {
    const coins = useSelector(state => state.GrinderLogicAndInventorySlice.coin);

    return (
        <div className='sticky bottom-0'>
            <div className='w-[100%] h-[100px] bg-[#55eb34] border-[3px] border-[#2f40fa] flex justify-center items-center'>
                <span className='text-[30px] font-bold'>Your balans: {coins}</span>
            </div>
        </div>
    );
}

export default Interface;