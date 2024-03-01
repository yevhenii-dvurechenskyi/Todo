import {React} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {deletItem, addCoin} from '../../store/GrinderLogicAndInventorySlice'
 
const InventoryArray = () => {
    const dispatch = useDispatch();
    const inventoryArray = useSelector(state => state.GrinderLogicAndInventorySlice.itemsArray);

    const handleClickToDelete = (itemId, itemPrise) => {
        dispatch(deletItem({id: itemId}));
        dispatch(addCoin({coin: itemPrise}));

        console.log(inventoryArray);
    };
    const scrollStyle = {
        maxHeight: '1300px',
        overflowY: inventoryArray.length > 20 ? 'scroll' : 'auto',
        // Додані стилі для приховання смуги прокрутки
        '&::-webkit-scrollbar': {
            width: 0,
            height: 0,
        },
        scrollbarWidth: 'none', // Для Firefox
    };

    return (
    <>
        <div className='w-[100%] h-[700px] bg-slate-800 flex flex-wrap p-[50px] pl-[100px]' style={scrollStyle}>
            {inventoryArray.map((item) => 
            <div className='w-[200px] h-[550px] flex-col pt-[5px] pb-[5px] bg-neutral-900 items-center flex m-[25px]' key={item.id}>
                <div className='flex items-center flex-col h-[300px]'>
                    <span className='text-[20px] font-bold mb-[5px] text-teal-500'>{item.name}</span>
                    <img src={item.imgUrl} alt="inventoryIMG" className='border border-sky-500 w-[200px] h-[250px]'></img>
                </div>
                <span className='text-[25px] text-[green] mt-[20px]'>Prise: {item.priseInCoper} coper</span>
                <span className='mt-[30px] text-[#c5d438] text-[30px] font-bold' >Grade: {item.grade}</span>
                <button onClick={() => handleClickToDelete(item.id, item.priseInCoper)} className='w-[150px] h-[50px] bg-[#bb2a2a] text-[30px] font-bold text-[#572525] mt-[20px] duration-300 hover:bg-[#ff4343] duration-300 hover:text-[#e9ff88]'>Sell</button>
            </div>
            )}
        </div>
    </>
    );
  };

export default InventoryArray;