import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../state/CounterSlice/CounterSlice";
import TodoReducer from "../state/Todo/TodoSlice"
export default configureStore({
    reducer: {
        counter: CounterReducer,
        todo: TodoReducer,
    }
})