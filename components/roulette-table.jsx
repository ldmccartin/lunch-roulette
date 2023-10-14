import AvailableFunds from '@components/available-funds'
import ParticipantList from '@components/participant-list'
import RollButton from '@components/roll-button'
import ResetButton from '@components/reset-button'
import Winner from '@components/winner'
import ParticipantNameError from '@components/participant-name-error'

import rouletteStore from '@state/roulette'

export default function rouletteTable() {

  const { isRolled } = rouletteStore((state) => state)

  return (
    <div className='flex-col items-center'>
      {!isRolled 
        ? <>
            <div className='flex gap-2 justify-center items-center'>
              <AvailableFunds/>
              <RollButton />
            </div>
            <ParticipantNameError />
            <ParticipantList />
          </>
        : 
          <>
            <div className='flex justify-center'>
              <ResetButton />
            </div>
            <Winner />
          </>
      }
    </div>
  )
}