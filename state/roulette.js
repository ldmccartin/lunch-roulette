import { create } from 'zustand'

import participantsStore from '@state/participants'

const rouletteStore = create((set) => ({
  winner: undefined,
  participantError: '',

  rollWinner: () => set(() => {
    const participants = participantsStore.getState().participants
    if (participants.length === 0) {
      return {  participantError: 'Requires at least one participant!', winner: undefined }
    }

    const unnamedParticipant = participants.some(participant => participant.name.trim() === '')
    if (unnamedParticipant) {
      return { participantError: 'All participants must be named!', winner: undefined }
    }

    const selection = Math.floor(Math.random() * (participants.length))
    const winner = participants[selection].name
    return { participantError: '', winner }
  }),

  resetRoulette: () => set(() => {
    return {  participantError: '', winner: undefined }
  })

}))

export default rouletteStore