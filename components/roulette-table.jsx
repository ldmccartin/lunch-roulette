import AvailableFunds from '@components/available-funds'
import ParticipantList from '@components/participant-list'
import RollButton from '@components/roll-button'
import ResetButton from '@components/reset-button'
import Winner from '@components/winner'
import ParticipantError from '@components/participant-error'

import rouletteStore from '@state/roulette'

export default function rouletteTable() {

  const { winner } = rouletteStore((state) => state)

  return (
    <div className='flex-col items-center'>
      {!winner 
        ? <>
            <div className='flex gap-2 justify-center items-center'>
              <AvailableFunds/>
              <RollButton />
            </div>
            <ParticipantError />
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