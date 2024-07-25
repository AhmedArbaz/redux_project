// jitny bhi reducers hain aun ko combine kar kay export karain gay single function may 
import { combineReducers } from "redux";
import amountReducer from "./amountReducer";

const reducers = combineReducers({
    amount: amountReducer
})

export default reducers