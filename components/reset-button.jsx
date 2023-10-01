import { Button } from '@nextui-org/button'

import rouletteStore from '@state/roulette'
import participantsStore from '@state/participants'

export default function ParticipantList() {
  const resetRoulette = rouletteStore((state) => state.resetRoulette)
  const resetParticipants = participantsStore((state) => state.resetParticipants)

  return (
    <Button className='my-1 text-white' color='primary' onClick={() =>  { resetRoulette(); resetParticipants() }} >
      Reset
    </Button>
  )
}
