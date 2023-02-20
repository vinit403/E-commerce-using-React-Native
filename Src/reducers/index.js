import { combineReducers } from "redux"
import upDown from "./upDown"
import addCart from "./addCart"
const rootReducer = combineReducers({
    upDown,addCart
})
export default rootReducer