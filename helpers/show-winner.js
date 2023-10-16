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

const getRandomParticipant = (participantsCount) => {
  return Math.floor(Math.random() * (participantsCount))
}

const rollInterimWinner = async (participants, setInterimWinner) => {
  if (participants.length > 1) {
    let lastSelection;
    let selection = getRandomParticipant(participants.length)

    for (let index = 0; index < 50; index++) {      
      while (selection === lastSelection) {
        selection = getRandomParticipant(participants.length)
      }
  
      lastSelection = selection
      await sleep(50 + (2 * index))
      setInterimWinner(participants[selection].name)
    }
  }
  
  setInterimWinner(undefined)
}

export { rollInterimWinner, validate }