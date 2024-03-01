import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCase } from '../../store/GrinderLogicAndInventorySlice';


const Case = () => {
    const caseArray = useSelector(state => state.GrinderLogicAndInventorySlice.casesArray);
    const dispatch = useDispatch();
    
    const handleClickToDelete = (id) => {
        dispatch(buyCase({id: id}));
    };


    return (
        <div className='w-[100%] h-[1000px] bg-stone-500 flex flex-wrap justify-start items-start p-[30px]'>
           { caseArray.map((item) => 
            <div className='w-[250px] h-[390px] bg-[#922424] rounded-[25px] border-2 border-[#ffeb7b]  flex flex-col items-center mr-[73px]' key={item.idCase}>
                <div className='flex justify-around relative mb-[10px]'>
                    <span className='mt-[5px] text-[24px] text-[#fffc33] font-bold'>{item.name}</span>
                    <span className='absolute  right-[-39px] text-[30px] font-bold text-[#678ec0]'>{item.amount}</span>
                </div>
                <img alt='CaseImg' src={item.caseImg} className='h-[250px]'></img>
                <span className='text-center text-[20px] font-bold text-[#55ff63] mb-[10px]'>Prise: {item.prise}</span>
                <button onClick={() => handleClickToDelete(item.idCase)} className='w-[80px] h-[40px] bg-[#f7fa47] rounded-[5px] text-[18px] font-bold text-[#1f6166] hover:bg-[#a8aa38] hover:text-[#82f0f8]'>Buy</button>
            </div>
           )}

        </div>
    );
}

export default Case;