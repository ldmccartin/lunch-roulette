import rouletteStore from '@state/roulette'

export default function participantNameError() {
  const { hasParticipantError } = rouletteStore((state) => state)

  if (hasParticipantError) {
    return (
      <div className='text-red-600 flex justify-center my-4'> <span>All participants must be named!</span> </div>
    )
  }
}