import { Input } from '@nextui-org/input';

const participant = ({index, name, cost, onChangeName, onChangeCost}) => {
  return (
    <div key={index} className='flex gap-2 text-white'>
      <Input value={name} placeholder='Partiboi' size='sm' type='text' label='Participant' onChange={onChangeName}/>
      <Input 
        value={cost}
        placeholder='0.00'
        size='sm'
        type='number'
        label='Cost'
        onChange={onChangeCost}
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-small">€</span>
          </div>
        }
      />
    </div>
  )
}

export default participant;