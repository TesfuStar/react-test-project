import * as types from '../actions/actionTypes'


const initialState={
     users:[],
     isLoading:false,
     isError:null
}

const userReducer =(state=initialState,action)=>{
     switch (action.type) {
         case types.GET_USERS_START:
         case types.CREATE_USERS_START:
         case types.DELETE_USERS_START:
         case types.UPDATE_USERS_START:
             return{...state,isLoading:true}
        
          case types.GET_USERS_SUCCESS:
            return{...state, isLoading:false,users:action.payload}
         case types.CREATE_USERS_SUCCESS:
         case types.UPDATE_USERS_SUCCESS:
                return{
                    ...state, 
                   isLoading:false
                }
                case types.DELETE_USERS_SUCCESS:
                    return{
                        ...state,
                         isLoading:false,
                         users:state.users.filter((u)=>u.id !== action.payload)
                    }
                case types.GET_USERS_ERROR:
                case types.CREATE_USERS_ERROR:
                case types.DELETE_USERS_ERROR:
                case types.UPDATE_USERS_ERROR:
            return{...state,isError:action.payload, isLoading:false}
         default:
            return state;
     }
}

export default userReducer