import ChatBot from 'react-simple-chatbot'
import { hotelService } from '../../../../services/hotel'
import { aboutUs, endeed, localization, options, seeMore, welcome } from './utils/otherSteps'
import { reserva } from './utils/reserva'

const Chatbot = () => {
  const onEnd = (props) => {
    console.log(props)
    const selectedRoom = props.values[1]
    const getRoom = hotelService.getByRoom(selectedRoom)
    const getOthersRooms = hotelService.Rooms.filter((room) => room.room !== selectedRoom)
    if (getRoom) {
      getRoom['busy'] = true
      return (hotelService.Rooms = [...getOthersRooms, getRoom])
    }
  }

  return (
    <ChatBot
      handleEnd={(props) => onEnd(props)}
      headerTitle="Bem-vindo ao Hotel Guarita"
      steps={[welcome, options, ...reserva, localization, aboutUs, seeMore, endeed]}
    />
  )
}
export default Chatbot
