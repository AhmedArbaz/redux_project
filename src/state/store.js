import {applyMiddleware, createStore} from "redux"
import { thunk } from "redux-thunk" //ya ascyncorance functions ko use karny may help karta hay 
import reducers from "./reducer"

const store = createStore(reducers,{},applyMiddleware(thunk))

export default store