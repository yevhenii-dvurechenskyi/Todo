import {configureStore} from '@reduxjs/toolkit';
import GrinderLogicAndInventoryReducer from './GrinderLogicAndInventorySlice'

export default configureStore({
    reducer: {
        GrinderLogicAndInventorySlice: GrinderLogicAndInventoryReducer,
    }
});