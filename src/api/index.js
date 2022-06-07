import axios from "axios"
const BaseUrl = "http://localhost:5000/users"

export const getUserApi=async()=>await axios.get(BaseUrl)

export const createUserApi=async(data)=>await axios.post(BaseUrl,data)

export const deleteUserApi=async(id)=>await axios.delete(`http://localhost:5000/users/${id}`)

export const updateUserApi=async(id,formData)=>await axios.put(`http://localhost:5000/users/${id}`,formData)