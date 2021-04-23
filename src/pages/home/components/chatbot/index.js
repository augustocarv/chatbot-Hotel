import ChatBot from 'react-simple-chatbot'
import { aboutUs, endeed, localization, options, reserva, seeMore, welcome } from './utils/steps'

const Chatbot = () => {
  return (
    <ChatBot
      headerTitle="Bem-vindo ao Hotel Guarita"
      steps={[welcome, options, ...reserva, localization, aboutUs, seeMore, endeed]}
    />
  )
}
export default Chatbot
