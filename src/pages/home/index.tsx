import React, { useState } from 'react'
import { hotelService } from '../../services/hotel'
import { Room } from '../../utils/hotel/interface/hotel.interface'
import Chatbot from './components/chatbot'
import { Container, Content, ChatBotWrapper, CardSituation, Situation } from './components/wrappers/wrapper'

const Home: React.FC = () => {
  const [hotel, setHotel] = useState<Room[]>(hotelService.Rooms)
  const onSetHotel = (value: Room[]) => setHotel(value)

  const onEndChat = (props: any) => {
    const selectedRoom = props.values[1]
    const hotel = hotelService.reserve(selectedRoom)
    if (!hotel) {
      return false
    }
    return onSetHotel(hotel.sort((a, b) => a.room - b.room))
  }
  return (
    <Container>
      <Content>
        <ChatBotWrapper>
          <CardSituation>
            {hotel.map((room) => (
              <Situation>
                <div>Quartos: {room.room}</div>
                <div>Situação: {room.busy ? 'Ocupado' : 'Livre'}</div>
              </Situation>
            ))}
          </CardSituation>
          <Chatbot onEndChat={onEndChat} />
        </ChatBotWrapper>
      </Content>
    </Container>
  )
}
export default Home
