import { create } from 'zustand'

import participantsStore from '@state/participants'

const rouletteStore = create((set) => ({
  winner: undefined,
  isRolled: false,
  participantError: '',

  rollWinner: () => set(() => {
    const participants = participantsStore.getState().participants
    if (participants.length === 0) {
      return { isRolled: false, participantError: 'Requires at least one participant!', winner: undefined }
    }

    const unnamedParticipant = participants.some(participant => participant.name.trim() === '')
    if (unnamedParticipant) {
      return { isRolled: false, participantError: 'All participants must be named!', winner: undefined }
    }

    const selection = Math.floor(Math.random() * (participants.length))
    const winner = participants[selection].name
    return { isRolled: true, hasParticipantError: '', winner }
  }),

  resetRoulette: () => set(() => {
    return { isRolled: false, hasParticipantError: '', winner: undefined }
  })

}))

export default rouletteStore