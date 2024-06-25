import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { swichNumb, sortArray, addTodoItem } from "../../store/TodoStorySlice";
import { v4 as uuidv4 } from 'uuid';

const TodoInput = () => {

    const item = useSelector(state => state.TodoStorySlice.editItem);
    const swichNumber = useSelector(state => state.TodoStorySlice.swichNumber);
    const [isOpen, setIsOpen] = useState(false); // Стан для видимості меню
    const [isOpenSort, setIsOpenSort] = useState(false); 
    const [selectedOptions, setSelectedOptions] = useState("C"); // Стан для обраних варіантів
    const [selectedSorts, setSelectedSorts] = useState("date"); 

    const dispatch = useDispatch();
    const [todoHeader, setTodoHeader] = useState("");
    const [todoTask, setTodoTask] = useState("");
    const [todoDate, setTodoDate] = useState("");
    const [todoTime, setTodoTime] = useState("");
    const [todoCreationTime, setTodoCreationTime] = useState("");


    // Функція для відкриття/закриття меню
    const togglePriorityMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleSortMenu = () => {
        setIsOpenSort(!isOpenSort);
    };
    // Функція для обрання варіанту відповіді
    const handleOptionClick = (option) => {
        setSelectedOptions(option);
        setIsOpen(false); // Закриття меню після обрання варіанту
    };
    const handleSortClick = (option) => {
        setSelectedSorts(option);
        setIsOpenSort(false);
        dispatch(sortArray({sort: option})) 
    };


    const handlOnPressHeader = (event) => {
        setTodoHeader(event.target.value);
    };
    const handlOnPressTask = (event) => {
        setTodoTask(event.target.value);
    };
    const handlOnPressDate = (event) => {
        setTodoDate(event.target.value);
    };
    const handlOnPressTime = (event) => {
        setTodoTime(event.target.value);
    };
    if(swichNumber === 1){
        setTodoHeader(item.header);
        setTodoTask(item.task);
        setTodoDate(item.deadline.date);
        setTodoTime(item.deadline.time);
        setSelectedOptions(item.priority);
        setTodoCreationTime(item.creationTime);
        dispatch(swichNumb());
    };

    const handlOnclickButtunAdd = () => {
        const todoItem = {
            header: todoHeader,
            task: todoTask,
            deadline: {
                date: todoDate,
                time: todoTime
            },
            priority: selectedOptions,
            id: uuidv4(),
            checkbox: false,
            creationTime: todoCreationTime === "" ? new Date().toLocaleTimeString() : todoCreationTime,
        };
        dispatch(addTodoItem(todoItem));
        setTodoHeader("");
        setTodoTask("");
        setTodoDate("");
        setTodoTime("");
        setSelectedOptions("C");
        setTodoCreationTime("");

    };

    return (
        <div>
            <div className='w-[100%] h-[400px] flex justify-center items-center flex-row pt-[50px] gap-x-[50px] '>
                <div className='flex pt-[50px] justify-center'>
                    <div className='w-[1300px] h-[250px] border-[1px]'>
                        <div className='border-[1px] border-[red] h-[250px] flex justify-start rounded'>
                            <div className='border-r-[1px] border-[red] w-[1000px] p-[20px]'>
                                <div className="flex">
                                    <span className='mr-[10px] font-bold text-[22px] mt-[5px]'>Header: </span>
                                    <input value={todoHeader} onChange={handlOnPressHeader} name="HeaderInput" className='border-[2px] rounded border-[blue] mr-[40px] w-[800px] h-[40px] pl-[10px] text-[22px] font-bold' />
                                </div>
                                <div className="flex mt-[10px] flex-col">
                                    <span className='mr-[10px] font-bold text-[22px]'>Task: </span>
                                    <textarea value={todoTask} onChange={handlOnPressTask} className="text-[20px] pl-[10px] pr-[10px] border-[1px] rounded border-[blue] resize-none" name="task" rows={4} cols={40} />
                                </div>
                            </div>
                            <div className="h-[248px] ">
                                <div className='flex flex-col w-[320px] h-[158px] justify-start items-start p-[10px]'>
                                    <div className="flex">
                                        <span className='mr-[10px] mb-[10px] font-bold text-[22px]'>Date: </span>
                                        <input value={todoDate} onChange={handlOnPressDate} name="DateInput" type="date" className='border-[1px] border-[black] mr-[20px] w-[150px] h-[30px] pl-[10px] text-[20px]' />
                                    </div>
                                    <div className="flex">
                                        <span className='mr-[10px] mb-[10px] font-bold text-[22px]'>Time: </span>
                                        <input value={todoTime} onChange={handlOnPressTime} name="TimeInput" type="time" className='border-[1px] border-[black] mr-[20px] w-[150px] h-[30px] pl-[10px] text-[20px]' />
                                    </div>
                                    <div className="mt-[5px] flex">
                                        <div className="flex">
                                            <span className='mr-[10px] font-bold text-[22px]'>Priority: </span>
                                        </div>
                                        <div className="z-10">
                                            <button onClick={togglePriorityMenu} className="w-[32px] h-[30px] flex justify-center items-center bg-[#7deb7d] font-bold text-[25px] hover:bg-[#418641]">{selectedOptions}</button>
                                            {isOpen && (
                                                <ul className="border-[1px] border-[gray] w-[32px]">
                                                    <li onClick={() => handleOptionClick('A')} className=" w-[30px] h-[30px] flex justify-center items-center bg-[#fa8365] cursor-pointer hover:bg-[#ad5843]">A</li>
                                                    <li onClick={() => handleOptionClick('B')} className=" w-[30px] h-[30px] border-t-[1px] border-[gray] flex justify-center items-center bg-[#fdfa59] cursor-pointer hover:bg-[#a8a63c]">B</li>
                                                    <li onClick={() => handleOptionClick('C')} className=" w-[30px] h-[30px] border-t-[1px] border-[gray] flex justify-center items-center bg-[#7ff77b] cursor-pointer hover:bg-[#419b3e]">C</li>
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='h-[90px] w-[320px] flex justify-center items-start'>
                                    <button onClick={handlOnclickButtunAdd} className='border-[1px] border-[blue] w-[200px] h-[70px] mt-[8px] hover:bg-[#d8d8d8]'>Add task</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-[200px] flex-row mt-[20px] flex justify-center items-start">
                    <span className="text-[25px] font-bold mr-[10px]">Sort by: </span>
                    <div className="mt-[5px]">
                        <button onClick={toggleSortMenu} className="w-[125px] h-[30px] flex justify-center items-center bg-[#ffffff] font-bold text-[25px] border-[1px] border-[#418641] focus:border-b-[white]">{selectedSorts}</button>
                            {isOpenSort && (
                                <ul className="border-[1px] border-[#ffffff] h-[92px] w-[122px]">
                                    <li onClick={() => handleSortClick('date')} className=" w-[122px]  h-[30px] flex justify-center items-center bg-[#fdfa59] cursor-pointer hover:bg-[#a8a63c]">date</li>
                                    <li onClick={() => handleSortClick('letter')} className=" w-[122px] h-[30px] border-t-[1px] border-[gray] flex justify-center items-center bg-[#fdfa59] cursor-pointer hover:bg-[#a8a63c]">letter</li>
                                    <li onClick={() => handleSortClick('priority')} className=" w-[122px] h-[30px] border-t-[1px] border-[gray] flex justify-center items-center bg-[#fdfa59] cursor-pointer hover:bg-[#a8a63c]">priority</li>
                                </ul>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoInput;