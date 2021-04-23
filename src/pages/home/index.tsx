import React from 'react'
import Chatbot from './components/chatbot'
import { Container, Content } from './components/wrappers/wrapper'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <Chatbot />
      </Content>
    </Container>
  )
}
export default Home
