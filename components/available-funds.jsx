import { Input } from '@nextui-org/input';

import fundsStore from '@state/funds'

const availableFunds = () => {
  const fundsPerParticipant = fundsStore((state) => state.fundsPerParticipant)
  const changeFundsPerParticipant = fundsStore((state) => state.changeFundsPerParticipant)

  return (
    <Input
      className='text-white w-32'
      value={fundsPerParticipant}
      size='sm'
      type='number'
      placeholder='0.00'
      label='Funds Per Person'
      onChange={(e) => {changeFundsPerParticipant(e.currentTarget.value)}}
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">€</span>
        </div>
      }
    />
  )
}

export default availableFunds;