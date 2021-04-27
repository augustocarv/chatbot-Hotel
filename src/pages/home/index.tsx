import React from 'react'
import { hotelService } from '../../services/hotel'
import Chatbot from './components/chatbot'
import { Container, Content } from './components/wrappers/wrapper'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <div style={{ display: 'flex' }}>
          <div style={{ backgroundColor: 'white' }}>
            {hotelService.Rooms.map((room) => (
              <div>
                <div>Quartos: {room.room}</div>
                <div>Situação: {room.busy ? 'Ocupado' : 'Livre'}</div>
              </div>
            ))}
          </div>
          <Chatbot />
        </div>
      </Content>
    </Container>
  )
}
export default Home
