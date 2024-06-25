import {configureStore} from '@reduxjs/toolkit';
import TodoStoryReducer from './TodoStorySlice';

export default configureStore({
    reducer: {
        TodoStorySlice: TodoStoryReducer,

    }
});