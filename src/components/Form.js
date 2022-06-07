import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { createUsersStart, updateUsersStart } from '../actions/actions'



const Container =styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:0px 10px;
width:100%;
`
const Input =styled.input`
background-color:transparent;
padding:10px;
font-size:14px;
width:100%;
font-weight: 500;
border:1px solid lightgray;
margin-bottom:5px;
border-radius: 4px;
&:focus {
  border:1px solid lightgray;
    outline:none;
  }

`
const InputSelect=styled.select`
background-color:transparent;
padding:10px;
font-size:14px;
width:100%;
font-weight: 500;
border:1px solid lightgray;
margin-bottom:5px;
border-radius: 4px;
&:focus {
  border:1px solid lightgray;
    outline:none;
  }
  flex:1;
`
const InputOption=styled.option`
width:100%;
`
const FormContent =styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
`
const Button = styled.button`
width:100%;
padding: 10px 0;
background-color:#1d4ed8;
font-size: 14px;
border-radius: 4px;
color: white;
font-weight: 500;
cursor:pointer;
border:none;
margin-top:5px;
`
const Header =styled.h1`
  color:black;
  font-weight: 900;
  font-size:20px;
  padding:15px;
`
const Form = ({userId}) => {
 const [formData,setFormData]=useState({firstName:'',lastName:'',gender:''})
const user=useSelector((state)=>userId ? state.users.users.find((u)=>u.id === userId) : null)
const dispatch=useDispatch()
useEffect(()=>{
    setFormData(user)
},[userId])

const handleSubmit=()=>{

  if(userId){
   dispatch(updateUsersStart({userId,formData}))
  }else{
    dispatch(createUsersStart(formData))
  }
  
}
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  return (
    <Container>
        <Header>{ userId? "update" : "Create"}</Header>
        <FormContent>
        
        <Input value={formData?.firstName}  placeholder="first name"  name="firstName" onChange={handleChange}/>  
        <Input value={formData?.lastName}   placeholder="lastname" name="lastName" onChange={handleChange}/>  
        <Input value={formData?.gender}    placeholder="gender" name="gender" onChange={handleChange}/>  
        {/* <InputSelect onChange={(e)=>setGender(e.target.value)}>
        <InputOption value="male">male</InputOption>
        <InputOption value="female">female</InputOption>
        </InputSelect> */}
        <Button onClick={handleSubmit}>{ userId? "update" : "Create"}</Button>
        </FormContent>
    </Container>
  )
}

export default Form