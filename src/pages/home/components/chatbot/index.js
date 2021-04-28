import ChatBot from 'react-simple-chatbot'
import { aboutUs, endeed, localization, options, seeMore, welcome } from './utils/otherSteps'
import { reserva } from './utils/reserva'

const Chatbot = ({ onEndChat }) => {
  return (
    <ChatBot
      handleEnd={onEndChat}
      headerTitle="Bem-vindo ao Hotel Guarita"
      steps={[welcome, options, ...reserva, localization, aboutUs, seeMore, endeed]}
    />
  )
}
export default Chatbot
