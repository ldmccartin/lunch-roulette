import { Button } from '@nextui-org/button'
import participantsStore from '@state/participants'

export default function resetButton() {
  const { resetParticipants, resetRoulette } = participantsStore((state) => state)

  return (
    <Button className='my-1 text-white' color='primary' onClick={() =>  { resetRoulette(); resetParticipants() }} >
      Reset
    </Button>
  )
}
