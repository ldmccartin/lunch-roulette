import { create } from 'zustand'

import participantsStore from '@state/participants'

const rouletteStore = create((set) => ({
  winner: undefined,
  isRolled: false,

  rollWinner: () => set(() => {
    const participants = participantsStore.getState().participants
    const selection = Math.floor(Math.random() * (participants.length))
    const winner = participants[selection].name
    return { isRolled: true, winner }
  }),

  resetRoulette: () => set(() => {
    return { isRolled: false, winner: undefined }
  })

}))

export default rouletteStore