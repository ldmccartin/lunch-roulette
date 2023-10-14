import { Button } from '@nextui-org/button'

import fundsStore from '@state/funds'
import participantsStore from '@state/participants'

import { rollInterimWinner, validate } from '../helpers/show-winner'

export default function rollButton() {
  const calculateRemainingFunds = fundsStore((state) => state.calculateRemainingFunds)
  const { participants, setParticipantError, setWinner, setInterimWinner } = participantsStore((state) => state)

  const handleClick = () => {
    const valid = validate(participants, setParticipantError)

    if (valid) {
      rollInterimWinner(participants, setInterimWinner)
      setWinner(participants)
      calculateRemainingFunds(participants)
    }
  }

  return (
    <Button className='my-1 text-white' color='primary' onClick={() => { handleClick() }}>
      Roll
    </Button>
  )
}
