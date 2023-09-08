import {Input} from "@nextui-org/input";

const participant = ({index, name, cost, onChangeName, onChangeCost}) => {
  return (
    <div key={index} className="flex gap-2 text-white">
      <Input value={name} type="text" label="participant" onChange={onChangeName}/>
      <Input value={cost} type="number" label="cost" onChange={onChangeCost}/>
    </div>
  )
}

export default participant;