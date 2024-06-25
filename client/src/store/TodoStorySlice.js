import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Створення асинхронної функції для отримання todoItems з сервера
export const fetchTodoItems = createAsyncThunk(
  'todoStory/fetchTodoItems',
  async () => {
    const response = await axios.get('http://localhost:3000/api/TodoArray');
    console.log(response.data);
    return response.data;
  }
);

// Створення асинхронної функції для додавання todoItem на сервер
export const addTodoItem = createAsyncThunk(
  'todoStory/addTodoItem',
  async (newTodoItem, { getState }) => {
    const state = getState();
    const todoArray = [...state.TodoStorySlice.todoArray, newTodoItem];
    await axios.post('http://localhost:3000/api/TodoArray', todoArray); // Оновіть URL на '/api/TodoArray'
    return todoArray;
  }
);

export const updatechecBoxAndDelete = createAsyncThunk(
  'todoStory/addTodoItem',
  async (_, { getState }) => {
    console.log("Work");
    const state = getState();
    const todoArray = [...state.TodoStorySlice.todoArray];
    await axios.post('http://localhost:3000/api/TodoArray', todoArray); // Оновіть URL на '/api/TodoArray'
    return todoArray;
  }
);

const TodoStorySlice = createSlice({
    name: 'TodoStorySlice',
    initialState: {
      text: 'Task list',
      todoArray: [],
      editItem: {
        header: '',
        task: '',
        deadline: {
          date: '',
          time: '',
        },
        priority: 'C',
        creationTime: '',
      },
      swichNumber: 0,
      sortStatus: 'date',
      creationTime: '',
      status: 'idle', // Статус для відстеження стану взаємодії з сервером
    },
    reducers: {

      changeChekbox(state, action){
        let id = state.todoArray.findIndex((item) => action.payload.id === item.id);
        state.todoArray[id].checkbox = !state.todoArray[id].checkbox;
      },
      deleteItem(state, action){
        state.todoArray = state.todoArray.filter((item) => action.payload.id !== item.id);
      },
      editItem(state, action){
        let id = state.todoArray.findIndex((item) => action.payload.id === item.id);
  
        state.editItem = {
          header: state.todoArray[id].header,
          task: state.todoArray[id].task,
          deadline: {
            date:  state.todoArray[id].deadline.date,
            time:  state.todoArray[id].deadline.time
          },
          priority: state.todoArray[id].priority,
          creationTime: state.todoArray[id].creationTime,
  
        }
        state.todoArray = state.todoArray.filter((item) => action.payload.id !== item.id);
        state.swichNumber++;
      },
      swichNumb(state){
        state.editItem = {
          header: "",
          task: "",
          deadline: {
            date: "",
            time: ""
          },
          priority: "C",
          creationTime: "",
  
        };
        state.swichNumber--;
      },
      sortArray(state, action){
        state.sortStatus = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTodoItems.pending, (state, action) => {
          state.status = 'loading';
        })
        .addCase(fetchTodoItems.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.todoArray = action.payload;
        })
        .addCase(fetchTodoItems.rejected, (state, action) => {
          state.status = 'failed';
        })
        .addCase(addTodoItem.fulfilled, (state, action) => {
          state.status = 'succeeded';
          // Оновлюємо стан залежно від того, як ви оновлюєте масив на клієнті
          state.todoArray = action.payload;
        });
    },
  });
  
  export const {addItem, changeChekbox, deleteItem, editItem, swichNumb, sortArray} = TodoStorySlice.actions;
  
  export default TodoStorySlice.reducer;