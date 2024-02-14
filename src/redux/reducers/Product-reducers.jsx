import { ActionTypes } from "../constants/Actions-type"

const initialState={
     product:[]
      
}
export const productReducer=(state=initialState,action)=>{

       switch(action.type){
          case ActionTypes.SET_PRODUCTS:
            return {
               ...state,
               product:action.payload
            }
          default:
            return state
       }

}

export const selectProductReducer=(state={},action)=>{

        switch(action.tpye){
            case ActionTypes.SELECTED_PRODUCT:
               return {...state,...action.payload}
            
            case ActionTypes.REMOVE_SELECTED_PRODUCT:
               return{
               }
            default: return state
        }
}