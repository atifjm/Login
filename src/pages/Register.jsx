import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    width: 100vw;
    height: 92vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e7e7e7;
`
const LoginContainer = styled.form`
    width: 20%;
    height: 60%;
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
    width: 50%;

    &:hover {
        background-color: teal;
        border: none;
        color: white;
    }
`
const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        id: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser({...user, [name]:value})
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/register", user)
        .then( res => console.log(res))
        window.alert("User created successfully")
    }

       
  return (
    <Container>
        <LoginContainer>
        <Title> Register </Title>
        
        <InputContainer>
            <Input placeholder='Enter Name' type='text' name='name' value={user.name} onChange={handleChange}></Input>
        </InputContainer>
        <InputContainer>
            <Input placeholder='Enter Email' type='email' name='email' value={user.email} onChange={handleChange}></Input>
        </InputContainer>
        <InputContainer>
           <Input placeholder='Enter ID' type='text' name='id' value={user.id} onChange={handleChange}></Input>
        </InputContainer>
        <InputContainer>
           <Input placeholder='Enter Password' type='password' name='password' value={user.password} onChange={handleChange}></Input>
        </InputContainer>
        <Button onClick={handleRegister}>Register</Button>
        
    
        </LoginContainer>
    </Container>
  )
}

export default Register
