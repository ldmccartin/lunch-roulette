import sleep from './sleep'

const validate = (participants, setParticipantError) => {
  if (participants.length === 0) {
    setParticipantError('Requires at least one participant!')
    return false;
  }

  const unnamedParticipant = participants.some(participant => participant.name.trim() === '')
  if (unnamedParticipant) {
    setParticipantError('All participants must be named!')
    return false;
  }

  return true;
}

const rollInterimWinner = async (participants, setInterimWinner) => {
  let lastSelection;
  for (let index = 0; index < 50; index++) {
    let selection = Math.floor(Math.random() * (participants.length))
    
    if (selection === lastSelection) {
      selection++
    }

    await sleep(50)
    setInterimWinner(participants[selection].name)
  }
  setInterimWinner(undefined)
}

export { rollInterimWinner, validate }