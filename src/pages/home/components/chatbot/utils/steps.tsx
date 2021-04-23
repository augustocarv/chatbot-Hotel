import { hotelService } from '../../../../../services/hotel'
import HotelLocalization from '../../hotelLocalization'
import { ArgumentsMessage, Steps } from '../interfaces/steps.interface'

export const welcome: Steps = {
  id: 'welcome',
  message: 'Olá, eu sou o Zeca! Com o que posso lhe ajudar ?',
  trigger: 'options'
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

export const reserva: Steps[] = [
  {
    id: 'reserva-1',
    message: 'Essas são nossas opções no momento',
    trigger: 'reserva-2'
  },
  {
    id: 'reserva-2',
    options: hotelService.formatedFreeRooms()
  },
  {
    id: 'reserva-3',
    message: ({ previousValue }: ArgumentsMessage) => `${hotelService.getByRoom(previousValue)?.type}`,
    trigger: 'reserva-4'
  },
  {
    id: 'reserva-4',
    message: 'Deseja selecionar este quarto?',
    trigger: 'reserva-5'
  },
  {
    id: 'reserva-5',
    options: [
      { value: true, label: 'Sim', trigger: 'reserva-6' },
      { value: false, label: 'Não', trigger: 'reserva-1' }
    ]
  },
  {
    id: 'reserva-6',
    message: 'Essas são nossas opções de pagamento',
    // component: <div>image</div>,
    trigger: 'reserva-7'
  },
  {
    id: 'reserva-7',
    message: 'Deseja confirmar sua reserva?',
    trigger: 'reserva-8'
  },
  {
    id: 'reserva-8',
    options: [
      { value: true, label: 'Sim', trigger: 'reserva-9' },
      { value: false, label: 'Não', trigger: 'reserva-1' }
    ]
  },
  {
    id: 'reserva-9',
    message: 'Reserva Confirmada com sucesso!',
    trigger: 'seeMore'
  }
]
