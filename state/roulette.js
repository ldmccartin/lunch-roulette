import { create } from 'zustand'

import participantsStore from '@state/participants'

const rouletteStore = create((set) => ({
  winner: undefined,
  isRolled: false,
  hasParticipantError: false,

  rollWinner: () => set(() => {
    const participants = participantsStore.getState().participants
    const unnamedParticipant = participants.some(participant => participant.name.trim() === '')

    if(unnamedParticipant) {
      return { isRolled: false, hasParticipantError: true, winner: undefined }
    }

    const selection = Math.floor(Math.random() * (participants.length))
    const winner = participants[selection].name
    return { isRolled: true, hasParticipantError: false, winner }
  }),

  resetRoulette: () => set(() => {
    return { isRolled: false, hasParticipantError: false, winner: undefined }
  })

}))

export default rouletteStore