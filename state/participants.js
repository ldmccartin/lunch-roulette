import { create } from 'zustand'

import fundsStore from '@state/funds'

const participantsStore = create((set) => ({
  participants: [{
    name: '',
    cost: fundsStore.getState().fundsPerParticipant
  }],
  participantError: '',
  winner: undefined,
  interimWinner: undefined,
  
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
  }),

  setParticipantError: (error) => set(() => {
    return { participantError: error }
  }),

  setWinner: (participants) => set(() => {
    const selection = Math.floor(Math.random() * (participants.length))
    const winner = participants[selection].name
    return { participantError: '', winner }
  }),

  resetRoulette: () => set(() => {
    return { participantError: '', winner: undefined }
  }),

  setInterimWinner: (participant) => set(() => {
    return { interimWinner: participant }
  })

}))

export default participantsStore