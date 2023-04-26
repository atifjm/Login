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
const Title = styled.h1`
    font-weight: 600;
    color: teal;
`


const Home = () => {
  return (
    <Container>
        <Title>
            Home Page
        </Title>
    </Container>
  )
}

export default Home
