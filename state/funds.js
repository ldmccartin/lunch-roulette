import { create } from 'zustand'
import { round } from 'lodash'

const fundsStore = create((set) => ({
  fundsPerParticipant: 12.90,
  remainingFunds: 0,

  changeFundsPerParticipant: (value) => set(() => {
    return { fundsPerParticipant: value }
  }),

  calculateRemainingFunds: (participants) => set((state) => {
    const totalCost = round(participants.reduce((acc, cur) => acc = acc + cur.cost, 0), 2)
    const totalAllowed = round(participants.length * state.fundsPerParticipant, 2)
    const remainingFunds = round(totalAllowed - totalCost, 2)
    return { remainingFunds }
  })

}))

export default fundsStore