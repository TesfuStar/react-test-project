import React from 'react'
import styled from '@emotion/styled'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsersStart } from '../actions/actions'


const Container =styled.div`
height:100%;
width:100%;
`
const Grid =styled.div`

display: grid;
grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
gap:10px;
`
const Card =styled.div`
background-color:white;
border-radius:5px;
display:flex;
flex-direction:column;

padding:10px;
`
const TextBox =styled.div`
display:flex;
align-items:center;


`
const First =styled.span`
font-size:16px;
font-weight:700;
color:#4b5563;
`
const Text =styled.h1`
font-size:18px;
font-weight:700;
color:#1f2937
`
const Box=styled.div`
display:flex;
align-items:center;
width:100%;
color:#1f2937

`

const ButtonTwo = styled.button`
background-color:#dc2626;
padding:10px 0;
font-size: 14px;
border-radius: 4px;
color: white;
font-weight: 500;
cursor:pointer;
border:none;
margin-left:5px;
width:100%
`
const Button = styled.button`
background-color:blue;
padding:10px 0;
font-size: 14px;
border-radius: 4px;
color: white;
font-weight: 500;
cursor:pointer;
border:none;
margin-right:5px;
width:100%
`
const Users = ({setUserId}) => {
  const {users} = useSelector((state)=>state.users)
  const dispatch = useDispatch()
 const handleDelete=(id)=>{
   dispatch(deleteUsersStart(id))
 }
  return (
    <Container>
    <Grid>

      {users?.map((user)=>(
        <Card key={user.id}>
          <TextBox>
          <First>FirstName:</First>
          <Text>{user.firstName}</Text>
          </TextBox>
          <TextBox>
          <First>LastName:</First>
          <Text>{user.lastName}</Text>
          </TextBox>
          <TextBox>
          <First>Gender:</First>
          <Text>{user.gender}</Text>
          </TextBox>
          <Box>
            <Button onClick={()=>setUserId(user.id)}>Edit</Button>
            <ButtonTwo onClick={()=>handleDelete(user.id)}>Delete</ButtonTwo>
            </Box>

        </Card>
      ))}
          </Grid>
    </Container>
  )
}

export default Users