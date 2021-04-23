import { Room } from './interface/hotel.interface'

const firstFloor: Room[] = [
  {
    room: 101,
    beds: 2,
    type: 'Quarto Duplo Standard',
    minibar: true,
    cabinet: false,
    fan: true,
    airConditioning: false,
    busy: true
  },
  {
    room: 102,
    beds: 2,
    type: 'Quarto Duplo Standard',
    minibar: true,
    cabinet: false,
    fan: true,
    airConditioning: false,
    busy: false
  },
  {
    room: 103,
    beds: 2,
    type: 'Quarto Duplo Standard',
    minibar: true,
    cabinet: false,
    fan: true,
    airConditioning: false,
    busy: true
  },
  {
    room: 104,
    beds: 2,
    type: 'Quarto Duplo Standard',
    minibar: true,
    cabinet: false,
    fan: true,
    airConditioning: false,
    busy: false
  },
  {
    room: 105,
    beds: 2,
    type: 'Quarto Duplo Standard',
    minibar: true,
    cabinet: false,
    fan: true,
    airConditioning: false,
    busy: true
  }
]
const secondFloor: Room[] = [
  {
    room: 201,
    beds: 3,
    type: 'Quarto Triplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: false,
    busy: true
  },
  {
    room: 202,
    beds: 3,
    type: 'Quarto Triplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: false,
    busy: false
  },
  {
    room: 203,
    beds: 3,
    type: 'Quarto Triplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: false,
    busy: true
  },
  {
    room: 204,
    beds: 3,
    type: 'Quarto Triplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: false,
    busy: true
  },
  {
    room: 205,
    beds: 3,
    type: 'Quarto Triplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: false,
    busy: false
  }
]
const thirdFloor: Room[] = [
  {
    room: 301,
    beds: 3,
    type: 'Quarto Quádruplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: true,
    busy: false
  },
  {
    room: 302,
    beds: 3,
    type: 'Quarto Quádruplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: true,
    busy: false
  },
  {
    room: 303,
    beds: 3,
    type: 'Quarto Quádruplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: true,
    busy: true
  },
  {
    room: 304,
    beds: 3,
    type: 'Quarto Quádruplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: true,
    busy: false
  },
  {
    room: 305,
    beds: 3,
    type: 'Quarto Quádruplo Standard',
    minibar: true,
    cabinet: true,
    fan: true,
    airConditioning: true,
    busy: false
  }
]

export const HotelRooms = [...firstFloor, ...secondFloor, ...thirdFloor]
