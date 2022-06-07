import { Form,Users } from "./components"
import styled from '@emotion/styled'
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getUsersStart } from "./actions/actions"
const Container = styled.div`
display:flex;
align-items:center;
flex-direction:column;
padding:10px;
`
const TextContainer = styled.nav`
display:flex;
align-items:center;
justify-content:center;
width:100%;
background-color: white;

`
const Badge =styled.span`
  color:#000;
  font-weight:900;
  font-size:20px;
  padding:15px;
`

const Center =styled.div`
 display:flex;
 align-items:start;
 justify-content:center;
 width:100%;
padding:20px;
@media screen and (max-width: 620px) {
  align-items:center;
  justify-content:center;
  flex-direction:column-reverse;
  width:100%;
}
`
const Right =styled.div`
width:100%;
flex:6;
padding:10px;
`
const Left =styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
background-color: white;
flex:2;
padding:10px;
border-radius: 5px;
margin:0px 20px;
width:100%;
`
const App = () => {
  const [userId,setUserId] =useState(null)
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(getUsersStart())
  },[dispatch,userId])
   return (
    <>
     <Container>
       <TextContainer>
      <Badge>REACT TEST PROJECT</Badge>
       </TextContainer>
       <Center>
         <Right>
         <Users setUserId={setUserId}/>
         </Right>
        <Left>

       <Form  userId={userId}  setUserId={setUserId}/>
        </Left>
       </Center>
    </Container>
    </>
  )
}

export default App

