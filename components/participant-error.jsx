import rouletteStore from '@state/roulette'

export default function participantNameError() {
  const { participantError } = rouletteStore((state) => state)

  if (participantError) {
    return (
      <div className='text-red-600 flex justify-center my-4'> <span>{participantError}</span> </div>
    )
  }
}