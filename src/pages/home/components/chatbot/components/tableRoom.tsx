import React from 'react'
import { hotelService } from '../../../../../services/hotel'

const TableRoom = ({ previousStep }: any) => {
  const toNumber = parseInt(previousStep.message)
  const room = hotelService.getByRoom(toNumber)
  const booleanType = (value: boolean | undefined) => (value ? 'Sim' : 'Não')
  return (
    <div style={{ width: '100%' }}>
      <h3>Quarto</h3>
      <table>
        <tbody>
          <tr>
            <td>Tipo do Quarto:</td>
            <td>{room?.type}</td>
          </tr>
          <tr>
            <td>Possui Ar ?</td>
            <td>{booleanType(room?.airConditioning)}</td>
          </tr>
          <tr>
            <td>Possui Ventilador ?</td>
            <td>{booleanType(room?.fan)}</td>
          </tr>
          <tr>
            <td>Possui Frigobar ?</td>
            <td>{booleanType(room?.minibar)}</td>
          </tr>
          <tr>
            <td>Quantas Camas ?</td>
            <td>{room?.beds}</td>
          </tr>
          <tr>
            <td>Possui Armario ?</td>
            <td>{booleanType(room?.cabinet)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default TableRoom
