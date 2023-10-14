import { Button } from '@nextui-org/button'
import fundsStore from '@state/funds'
import participantsStore from '@state/participants'

import rouletteStore from '@state/roulette'

export default function rollButton() {
  const rollWinner = rouletteStore((state) => state.rollWinner)
  const calculateRemainingFunds = fundsStore((state) => state.calculateRemainingFunds)
  const participants = participantsStore((state) => state.participants)

  return (
    <Button className='my-1 text-white' color='primary' onClick={() => { rollWinner(); calculateRemainingFunds(participants) }}>
      Roll
    </Button>
  )
}
