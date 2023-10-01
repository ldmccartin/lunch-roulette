import AvailableFunds from '@components/available-funds'
import ParticipantList from '@components/participant-list'
import RollButton from '@components/roll-button'
import ResetButton from '@components/reset-button'
import Winner from '@components/winner'

import rouletteStore from '@state/roulette'

export default function RouletteTable() {

  const { isRolled } = rouletteStore((state) => state)

  return (
    <div className='flex-col items-center'>
      {!isRolled 
          ? <>
              <div className='flex justify-around items-center'>
                <AvailableFunds/>
                <RollButton />
              </div>
              <ParticipantList />
            </>
          : 
            <div>
              <ResetButton />
              <Winner />
            </div>
      }
    </div>
  )
}