import HotelLocalization from '../../hotelLocalization'
import { Steps } from '../interfaces/steps.interface'

export const welcome: Steps = {
  id: 'welcome',
  message: 'Com o que posso lhe ajudar ?',
  trigger: 'options'
}

export const welcomeNameBot: Steps = {
  id: 'welcomeName1',
  message: 'Olá, eu sou o Zeca! Qual o seu nome ?',
  trigger: 'welcomeName2'
}
export const welcomeNameUser: Steps = {
  id: 'welcomeName2',
  user: true,
  trigger: 'welcomeCell1'
}
export const welcomeCellBot: Steps = {
  id: 'welcomeCell1',
  message: 'Qual o seu telefone ?',
  trigger: 'welcomeCell2'
}
export const welcomeCellUser: Steps = {
  id: 'welcomeCell2',
  user: true,
  trigger: 'welcome'
}

export const options: Steps = {
  id: 'options',
  options: [
    { value: 1, label: 'Reservas', trigger: 'reserva-1' },
    { value: 2, label: 'Localização', trigger: 'localization-1' },
    { value: 3, label: 'Sobre o Hotel', trigger: 'aboutUs-1' },
    { value: 4, label: 'Sair', trigger: 'end-conversation' }
  ]
}

export const seeMore: Steps = {
  id: 'seeMore',
  message: 'Gostaria de ver algo a mais ?',
  trigger: 'options'
}
export const endeed: Steps = {
  id: 'end-conversation',
  message: 'Ok, Obrigado pelo seu tempo comigo!',
  end: true
}

export const localization: Steps = {
  id: 'localization-1',
  component: (
    <>
      <HotelLocalization />
    </>
  ),
  trigger: 'seeMore'
}

export const aboutUs: Steps = {
  id: 'aboutUs-1',
  message:
    'Um dos mais procurados em Torres! Localizado a 600 m do centro de Torres, o Hotel Guarita oferece WiFi gratuito, restaurante e serviço de recepção 24 horas. A Praia Grande fica a 800 m, enquanto a Praia da Guarita está a 3 km de distância. Há disponibilidade de WiFi gratuito. Venha se hospedar com a gente!',
  trigger: 'seeMore'
}
