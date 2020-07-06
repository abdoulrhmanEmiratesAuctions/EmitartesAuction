import { combineReducers } from 'redux';
import SellReducer from "./sell.reducer";

const rootReducer = combineReducers({
    sellCar: SellReducer

})

export default rootReducer