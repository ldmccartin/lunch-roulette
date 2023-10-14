import fundsStore from '@state/funds'
import participantsStore from '@state/participants'

export default function winner() {
  const { winner, interimWinner } = participantsStore((state) => state)
  const { remainingFunds } = fundsStore((state) => state)

  return (
    <div>
      <span>{interimWinner ? interimWinner : winner +  ` has €${remainingFunds} to spend!`}</span>
    </div>
  )
}