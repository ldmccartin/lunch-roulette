import { create } from 'zustand'

const fundsStore = create((set) => ({
  fundsPerParticipant: 12.90,
  remainingFunds: 0,

  changeFundsPerParticipant: (value) => set(() => {
    return { fundsPerParticipant: value }
  }),

  calculateRemainingFunds: (participants) => set((state) => {
    const totalCost = participants.reduce((acc, cur) => acc = acc + cur.cost, 0)
    const remainingFunds = participants.length * state.fundsPerParticipant - totalCost
    return { remainingFunds }
  })

}))

export default fundsStore