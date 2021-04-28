import { HotelRooms } from '../utils/hotel/hotel'

class Hotel {
  Rooms = HotelRooms

  getFreeRoom() {
    return this.Rooms.filter((room) => !room.busy)
  }
  formatedFreeRooms() {
    const freeRoms = this.getFreeRoom()
    return freeRoms.map((room, index) => ({
      value: room.room,
      label: `${room.room}`,
      trigger: 'reserva-3'
    }))
  }
  getByRoom(roomNumber: number) {
    return this.Rooms.find((room) => room.room === roomNumber)
  }
  reserve(roomNumber: number) {
    const getRoom = hotelService.getByRoom(roomNumber)
    const getOthersRooms = hotelService.Rooms.filter((room) => room.room !== roomNumber)
    console.log(this.Rooms)
    if (getRoom) {
      getRoom['busy'] = true
      const newHotelState = [...getOthersRooms, getRoom]
      this.Rooms = newHotelState
      return newHotelState
    }
  }
}
export const hotelService = new Hotel()
