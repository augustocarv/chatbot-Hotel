import { HotelRooms } from '../utils/hotel/hotel'

class Hotel {
  public Rooms = HotelRooms

  getFreeRoom() {
    return this.Rooms.filter((room) => room.busy)
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
}
export const hotelService = new Hotel()
