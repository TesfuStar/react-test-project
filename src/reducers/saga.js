import * as types from '../actions/actionTypes'
import {call,put,takeLatest,takeEvery,all,fork,take} from 'redux-saga/effects'
import {createUsersError, createUsersFulfiled, deleteUsersError, deleteUsersFulfiled, getUsersError,getUsersSuccess, updateUsersError, updateUsersFulfiled} from '../actions/actions'
import { createUserApi, deleteUserApi, getUserApi, updateUserApi } from '../api'

export function* getFunction(){
    try {
          const response = yield call(getUserApi)
              if(response.status ===200){
               
                  yield put(getUsersSuccess(response.data))
              }
    } catch (error) {
     yield put(getUsersError(error.response.data))
        console.log(error)
    }
 }
 
 //create
 export function* createFunction({payload}){
    try {
          const response = yield call(createUserApi,payload)
              if(response.status ===200){
               
                  yield put(createUsersFulfiled(response.data))
              }
    } catch (error) {
     yield put(createUsersError(error.response.data))
        console.log(error)
    }
 }

//delete
export function* onDeleteFunction(id){
    try {
          const response = yield call(deleteUserApi,id)
              if(response.status ===200){
               
                  yield put(deleteUsersFulfiled(id))
              }
    } catch (error) {
     yield put(deleteUsersError(error.response.data))
        console.log(error)
    }
 }

  //update
 
export function* onUpdateUsersAync({payload:{userId,formData}}){
    try {
          const response = yield call(updateUserApi,userId,formData)
              if(response.status ===200){
                  yield put(updateUsersFulfiled())
              }
    } catch (error) {
     yield put(updateUsersError(error.response.data))
        console.log(error)
    }
 }


export function* onGetUsers(){
    yield takeEvery(types.GET_USERS_START,getFunction)
}

export function* onCreateUsers(){
    yield takeEvery(types.CREATE_USERS_START,createFunction)
}


export function* onDeleteUser(){
    const {payload:id}= yield take(types.DELETE_USERS_START)
    yield call(onDeleteFunction,id)
    
}

export function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USERS_START,onUpdateUsersAync)
    }
const userSagas=[
    fork(onGetUsers),fork(onCreateUsers),fork(onDeleteUser),fork(onUpdateUser)
]

export default function* rootSaga(){
  yield all([...userSagas])
}