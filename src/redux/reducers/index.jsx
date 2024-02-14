import { combineReducers } from "redux";
import { productReducer } from "./Product-reducers";
import { selectProductReducer } from "./Product-reducers";

const reducers=combineReducers({
      allProduct:productReducer,
      select:selectProductReducer,
})
export default reducers