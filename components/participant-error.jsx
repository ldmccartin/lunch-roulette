import participantStore from '@state/participants'

export default function participantError() {
  const { participantError } = participantStore((state) => state)

  if (participantError) {
    return (
      <div className='text-red-600 flex justify-center my-4'> <span>{participantError}</span> </div>
    )
  }
}