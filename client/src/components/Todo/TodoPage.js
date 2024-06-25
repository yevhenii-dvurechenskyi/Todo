import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";



const TodoPage = () => {
    

    return(
        <div className="border-[3px] border-[red]">
            <div className="h-auto w-[100%]">
                <TodoInput />
            </div>
            <TodoList />
        </div>
    )
}

export default TodoPage;