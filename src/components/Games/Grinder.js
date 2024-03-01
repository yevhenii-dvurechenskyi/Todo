import React from 'react';
import {useEffect, useState, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addItem, CaseNumberUp, CaseNumberDown} from '../../store/GrinderLogicAndInventorySlice';
import cases from '../../assets/ImageImports/cases';


const Area = () => {
    const itemNow = useSelector(state => state.GrinderLogicAndInventorySlice.itemNow);
    const caseNow = useSelector(state => state.GrinderLogicAndInventorySlice.casesArray);
    const caseNumber = useSelector(state => state.GrinderLogicAndInventorySlice.arrayNumber);

    console.log(caseNow);

    const dispatch = useDispatch();
    const isFirstRender = useRef(true);

    const [swicher, setSwitcher] = useState(true);
    const [item, setIteem] = useState({
        id: "",
        name: "???",
        prise: '???',
        priseInCoper: 0,
        imgUrl: cases.Swords_case,
        grade: '?'
    });

    const handleClick = () => {
        setSwitcher(!swicher);
        dispatch(addItem());
    };

    const handleClickUp = () => {
        dispatch(CaseNumberUp());
    };

    const handleClickDown = () => {
        dispatch(CaseNumberDown());
    };

    useEffect(() =>{
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        setIteem(itemNow);

    }, [swicher]);

    return (
        <div>
            <div className='w-[100%] h-[800px] bg-[#ffdd44] border-[3px] border-[#2f40fa] flex justify-start items-center flex-col'>
                    <div className='flex items-center'>
                        <button onClick={handleClickDown} className='mr-[20px] text-[25px] font-bold text-[#be51fd] h-[40px]'>Previous case</button>
                        <div className='mt-[50px] mb-[50px]'>
                            <span className='font-bold text-[30px] text-[#ff5c5c] mr-[20px]'>Case: {caseNow[caseNumber].name}</span>
                            <span className='font-bold text-[30px] text-[#6298fc]'>{caseNow[caseNumber].amount}</span>
                        </div>
                        <button onClick={handleClickUp} className='ml-[20px] text-[25px] font-bold text-[#be51fd] h-[40px]'>Next case</button>
                    </div>
                    <div className='w-[200px] h-[400px] bg-slate-800 flex items-center justify-start flex-col mb-[20px] relative' key={item.id}>            
                        <span className='text-[20px] font-bold mb-[5px] text-[#84f7ff]'>{item.name}</span>
                        <img src={item.imgUrl} alt={"..."} className='border border-sky-500 mb-[15px] w-[200px] h-[250px]'></img>
                        <span className='text-[#6dff50] text-[18px] text-center'>Prise: {item.prise}</span>
                        <span className='mt-[30px] text-[#f1ff76] text-[30px] font-bold absolute bottom-[10px]'>Grade - {item.grade}</span>
                    </div>
                <button onClick={handleClick} className='text-[30px] w-[100px] font-bold flex justify-center items-center border-[2px] border-[#8a92e9] bg-[#ffffff] duration-300 hover:bg-[#6ce6a9]'>Start</button>
            </div>
        </div>
    );
}

export default Area;