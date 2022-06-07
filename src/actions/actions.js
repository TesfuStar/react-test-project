import * as types from './actionTypes'

export const getUsersStart=()=>({
    type:types.GET_USERS_START
})
export const getUsersSuccess=(data)=>({
    type:types.GET_USERS_SUCCESS,
    payload:data
})
export const getUsersError=(error)=>({
    type:types.GET_USERS_ERROR,
    payload:error
})


//createing
export const createUsersStart=(user)=>({
    type:types.CREATE_USERS_START,
    payload:user
})

export const createUsersFulfiled=()=>({
    type:types.CREATE_USERS_SUCCESS
    
})
export const createUsersError=(error)=>({
    type:types.CREATE_USERS_ERROR,
    payload:error
})

//delete
export const deleteUsersStart=(id)=>({
    type:types.DELETE_USERS_START,
    payload:id
})

export const deleteUsersFulfiled=(id)=>({
    type:types.DELETE_USERS_SUCCESS,
    payload:id
    
})
export const deleteUsersError=(error)=>({
    type:types.DELETE_USERS_ERROR,
    payload:error
})

//update
export const updateUsersStart=(data)=>({
    type:types.UPDATE_USERS_START,
    payload:data
})

export const updateUsersFulfiled=()=>({
    type:types.UPDATE_USERS_SUCCESS,
    
    
})
export const updateUsersError=(error)=>({
    type:types.UPDATE_USERS_ERROR,
    payload:error
})