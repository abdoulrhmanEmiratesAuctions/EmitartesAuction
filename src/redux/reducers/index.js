import { combineReducers } from 'redux';
import SellReducer from "./sell.reducer";
import Brands from "./brand.reducer";


const rootReducer = combineReducers({
    sellCar: SellReducer,
    brands: Brands

})

export default rootReducer