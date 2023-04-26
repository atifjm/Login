import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    width: 100vw;
    background-color: teal;
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 20px;
`
const Logo = styled.h2`
    color: white;
    font-weight: 500;
    letter-spacing: 0.25px;
`
const Right = styled.div`
    flex: 2;
    display: flex;
    justify-content: flex-end;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    width: 20%;
    color: white;
`
const Login = styled.div`
    cursor: pointer;
    
`
const Bar = styled.span`
`
const Register = styled.div`
    cursor: pointer;
`

const Navbar = () => {
  return (
    <Container>
        <Left>
            <NavLink to="/" style={{"textDecoration":"none", "userSelect":"none"}}><Logo>WEBTECH</Logo></NavLink>
        </Left>
        <Right>
            <Menu>
                <NavLink to="/login" style={{"textDecoration":"none", "userSelect":"none", "color":"inherit"}}><Login>Login</Login></NavLink>
                <Bar>/</Bar>
                <NavLink to="/register" style={{"textDecoration":"none", "userSelect":"none","color":"inherit"}}><Register>Register</Register></NavLink>
            </Menu>
        </Right>
    </Container>
  )
}

export default Navbar
