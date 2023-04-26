import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 92vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
`
const LoginContainer = styled.div`
    width: 20%;
    height: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5px;
    
`
const Title = styled.h2`
    font-weight: 500;
    color: teal;
`
const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0px
    justify-content: left;
    gap: 5px;
`
const Input = styled.input`
    width: 90%;
    padding: 5px;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
`
const Button = styled.button`
    border: 2px solid teal;
    color: black;
    background-color: white;
    border-radius: 5px;
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    width: 40%;

    &:hover {
        background-color: teal;
        border: none;
        color: white;
    }
`
const Login = () => {
    const [user, setUser] = useState({
        id: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }
    
  return (
    <Container>
        <LoginContainer>
        <Title> Login </Title>
        <InputContainer>
            
            <Input placeholder='Enter ID' name='id' value={user.id} onChange={handleChange}></Input>
        </InputContainer>
        <InputContainer>
            
            <Input placeholder='Password' name='password' value={user.password} onChange={handleChange}></Input>
        </InputContainer>
        <Button>Submit</Button>
        
        </LoginContainer>
    </Container>
  )
}

export default Login
