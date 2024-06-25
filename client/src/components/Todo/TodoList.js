import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeChekbox, deleteItem, editItem, fetchTodoItems, updatechecBoxAndDelete} from '../../store/TodoStorySlice'

const TodoList = () => {

    const dispatch = useDispatch();
    const item = useSelector(state => state.TodoStorySlice.todoArray);
    const [todoItemsArray, setTodoItemsArray] = useState(item);
    
    const sortStatus = useSelector(state => state.TodoStorySlice.sortStatus);
    const handleClickTocheked = (itemId) => {
        dispatch(changeChekbox({id: itemId}));
        dispatch(updatechecBoxAndDelete());
        console.log("Cheked");

    };
    const handleClickToDeletes = (itemId) => {
        dispatch(deleteItem({id: itemId}));
        dispatch(updatechecBoxAndDelete());
    };
    const handleClickToEdit = (itemId) => {
        dispatch(editItem({id: itemId}));
    };
    
    useEffect(()=> {
        dispatch(fetchTodoItems());
    },[]);
    


    useEffect(() => {
        if(sortStatus.sort === "date"){
            setTodoItemsArray(item.toSorted((a, b) => a.creationTime - b.creationTime).reverse());
        }
        else if(sortStatus.sort === "letter"){
            setTodoItemsArray(item.toSorted((a, b) => {
                return a.header.localeCompare(b.header);
            }));
        }
        else if(sortStatus.sort === "priority"){
            setTodoItemsArray(item.toSorted((a, b) => {
                return a.priority.localeCompare(b.priority);
            }));
        }
        else{
            setTodoItemsArray(item);
        };

    }, [item, sortStatus]);


    return (
        <div className='w-[100%] h-auto flex justify-start items-center flex-col pt-[50px]'>
            <span className='text-[35px] font-bold mt-[50px] mb-[100px]'>Todo List</span>
            {todoItemsArray.map((item) => 
            <div className='flex-row pt-[50px] justify-center' key={item.id}>
                <div className='w-[1300px] h-[250px]'>
                    <div className='border-[1px] border-[red] h-[160px] flex justify-start rounded'>
                        <div className='border-[1px] w-[1000px] pt-[10px] p-[20px]'>
                            <span className='text-[24px] font-bold'>{item.header}</span>
                            <div className='mb-[15px]'></div>
                            <span className='text-[20px]'>{item.task}</span>
                        </div>
                        <div className='border-[1px] border-l-[red] flex flex-col w-[300px] justify-center items-start pl-[40px] p-[10px]'>
                            <span className='mr-[5px] mb-[10px] text-[18px]'>Deadline: <span className='ml-[10px]'>{item.deadline.date} - {item.deadline.time}</span></span>
                            <span className='mr-[5px] mb-[10px] text-[18px]'>Priority:<span className='font-bold ml-[10px] text-[20px]'>{item.priority}</span> </span>
                            <div>
                                <span className='mr-[5px] text-[18px]'>Done: </span>
                                <input className='h-[20px] w-[20px]' type="checkbox" checked={item.checkbox}  onChange={() => handleClickTocheked(item.id)} />
                            </div>
                        </div>
                    </div>
                    <div className='border-[1px] border-[red] border-t-[white] h-[90px] flex justify-around'>
                        <button className='border-[1px] border-[blue] w-[200px] h-[70px] mt-[8px] hover:bg-[#d8d8d8]' onClick={() => handleClickToEdit(item.id)}>Edit</button>
                        <button className='border-[1px] border-[blue] w-[200px] h-[70px] mt-[8px] hover:bg-[#d8d8d8]' onClick={() => handleClickToDeletes(item.id)}>Delete</button>
                    </div>
                </div>
                <hr className='border-[1px] border-[gray] mt-[50px] rounded-[5px]'></hr>
            </div>
            )};

        </div>
    );
}

export default TodoList;