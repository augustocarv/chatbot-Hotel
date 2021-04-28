import React, { useState } from 'react'
import { hotelService } from '../../services/hotel'
import { Room } from '../../utils/hotel/interface/hotel.interface'
import Chatbot from './components/chatbot'
import { Container, Content } from './components/wrappers/wrapper'

const Home: React.FC = () => {
  const [endChatbot, setEndChatBot] = useState<boolean>(true)
  const [hotel, setHotel] = useState<Room[]>(hotelService.Rooms)
  const onSetHotel = (value: Room[]) => setHotel(value)

  const onEndChat = (props: any) => {
    const selectedRoom = props.values[1]
    const hotel = hotelService.reserve(selectedRoom)
    if (!hotel) {
      return false
    }
    return onSetHotel(hotel)
  }
  return (
    <Container>
      <Content>
        <button style={{ display: 'flex' }} onClick={() => setEndChatBot(!endChatbot)}>
          Abrir ChatBot
        </button>
        <div style={{ display: 'flex' }}>
          <div style={{ backgroundColor: 'white' }}>
            {hotel.map((room) => (
              <div>
                <div>Quartos: {room.room}</div>
                <div>Situação: {room.busy ? 'Ocupado' : 'Livre'}</div>
              </div>
            ))}
          </div>
          {endChatbot && <Chatbot onEndChat={onEndChat} />}
        </div>
      </Content>
    </Container>
  )
}
export default Home
