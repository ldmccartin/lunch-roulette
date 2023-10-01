import fundsStore from '@state/funds'
import rouletteStore from '@state/roulette'

export default function winner() {
  const winner = rouletteStore((state) => state.winner)
  const remainingFunds = fundsStore((state) => state.remainingFunds)

  return (
    <div>
      <span>{winner} has €{remainingFunds} to spend!</span>
    </div>
  )
}