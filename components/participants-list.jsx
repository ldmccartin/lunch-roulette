import Participant from './participant'
import { create } from 'zustand'
import {Button} from '@nextui-org/button';

const defaultParticipant = {
  name: '',
  cost: ''
}

const useStore = create((set) => ({
  participants: [defaultParticipant],
  addParticipant: () => set((state) => (
    { participants: [ ...state.participants, defaultParticipant ] }
  )),
  changeParticipantName: (index, value) => set((state) => {
    const updatedParticipants = [...state.participants]
    updatedParticipants[index] = {
      ...updatedParticipants[index],
        name: value
    }
    return { participants: updatedParticipants }
  }),
  changeParticipantCost: (index, value) => set((state) => {
    const updatedParticipants = [...state.participants]
    updatedParticipants[index] = {
      ...updatedParticipants[index],
        cost: value
    }
    return { participants: updatedParticipants }
  }),
  removeParticipant: (index) => set((state) => {
    const updatedParticipants = state.participants.toSpliced(index, 1)
    console.log(index, updatedParticipants)
    return { participants: [ ...updatedParticipants] }
  }),
}))

export default function ParticipantList() {

  const participants = useStore((state) => state.participants)
  const addParticipant = useStore((state) => state.addParticipant)
  const removeParticipant = useStore((state) => state.removeParticipant)
  const changeParticipantName = useStore((state) => state.changeParticipantName)
  const changeParticipantCost = useStore((state) => state.changeParticipantCost)

  return (
    <div className='flex-col items-center'>
      <div>
        <Button color='primary' onClick={addParticipant}>
          +
        </Button>
      </div>
      <div className='min-w-450'>
        {participants.map(({ name, cost }, index) => (
          <div className='flex gap-2 items-center my-1'>
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
