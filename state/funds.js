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
    console.log(totalCost)
    const totalAllowed = round(participants.length * state.fundsPerParticipant, 2)
    console.log(totalAllowed)
    const remainingFunds = round(totalAllowed - totalCost, 2)
    console.log(remainingFunds)
    return { remainingFunds }
  })

}))

export default fundsStore