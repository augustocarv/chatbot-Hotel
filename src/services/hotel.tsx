import { HotelRooms } from '../utils/hotel/hotel'

class Hotel {
  Rooms = HotelRooms

  getFreeRoom() {
    return this.Rooms.filter((room) => !room.busy)
  }
  formatedFreeRooms() {
    const freeRoms = this.getFreeRoom().map((room) => ({
      value: room.room,
      label: `${room.room}`,
      trigger: 'reserva-3'
    }))
    return [...freeRoms, { value: 0, label: 'Sair', trigger: 'welcome' }]
  }
  getByRoom(roomNumber: number) {
    return this.Rooms.find((room) => room.room === roomNumber)
  }
  reserve(roomNumber: number) {
    const getRoom = hotelService.getByRoom(roomNumber)
    const getOthersRooms = hotelService.Rooms.filter((room) => room.room !== roomNumber)
    if (getRoom) {
      getRoom['busy'] = true
      const newHotelState = [...getOthersRooms, getRoom]
      this.Rooms = newHotelState
      return newHotelState
    }
  }
}
export const hotelService = new Hotel()
