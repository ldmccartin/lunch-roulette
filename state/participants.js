import { create } from 'zustand'

import fundsStore from '@state/funds'

const participantsStore = create((set) => ({
  participants: [{
    name: '',
    cost: fundsStore.getState().fundsPerParticipant
  }],
  
  addParticipant: () => set((state) => (
    { participants: [
        ...state.participants,
        { 
          name: '',
          cost: fundsStore.getState().fundsPerParticipant
        }
      ]
    }
  )),

  removeParticipant: (index) => set((state) => {
    const updatedParticipants = state.participants.toSpliced(index, 1)
    return { participants: [ ...updatedParticipants] }
  }),

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
        cost: Number(value)
    }
    return { participants: updatedParticipants }
  }),

  resetParticipants: () => set({ 
    participants: [
      {
        name: '',
        cost: fundsStore.getState().fundsPerParticipant
      }
    ]
  })

}))

export default participantsStore