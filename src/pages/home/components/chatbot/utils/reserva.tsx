import Pagamento from '../../../../../assets/images/pagamento.jpg'
import { hotelService } from '../../../../../services/hotel'
import { Steps } from '../interfaces/steps.interface'
import { StyledImage, StyledContentFull } from '../../../styles/styles'
import TableRoom from '../components/tableRoom'


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
    // message: ({ previousValue }: ArgumentsMessage) => `Tipo do Quarto: ${hotelService.getByRoom(previousValue)?.type}`,
    component: <TableRoom />,
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
      { value: 'true', label: 'Sim', trigger: 'reserva-6' },
      { value: 'false', label: 'Não', trigger: 'reserva-1' }
    ]
  },
  {
    id: 'reserva-6',
    component: (
      <StyledContentFull>
        <p>Nossas Opções de Pagamento:</p>
        <StyledImage src={Pagamento} alt="Pagamento" />
      </StyledContentFull>
    ),
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
      { value: 'true', label: 'Sim', trigger: 'reserva-9' },
      { value: 'false', label: 'Não', trigger: 'reserva-1' }
    ]
  },
  {
    id: 'reserva-9',
    message: 'Reserva Confirmada com sucesso!',
    end: true
  }
]
