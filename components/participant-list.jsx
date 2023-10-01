import { Button } from '@nextui-org/button'

import Participant from '@components/participant'
import participantsStore from '@state/participants'

export default function ParticipantList() {

  const participants = participantsStore((state) => state.participants)
  const addParticipant = participantsStore((state) => state.addParticipant)
  const removeParticipant = participantsStore((state) => state.removeParticipant)
  const changeParticipantName = participantsStore((state) => state.changeParticipantName)
  const changeParticipantCost = participantsStore((state) => state.changeParticipantCost)

  return (
    <div className='flex gap-2 items-start my-6'>
      <Button className='my-1' color='secondary' onClick={addParticipant}>
        Add
      </Button>
      <div className='min-w-450'>
        {participants.map(({ name, cost }, index) => (
          <div key={index} className='flex gap-2 items-center my-1'>
            <Participant
              name={name}
              cost={cost}
              onChangeName={(e) => changeParticipantName(index, e.currentTarget.value)}
              onChangeCost={(e) => changeParticipantCost(index, e.currentTarget.value)}
            />
            <Button 
              color='danger'
              size='sm'
              onClick={() => removeParticipant(index)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
