export const rollDice = (diceSize) => {
  const minRoll = 1;
  const maxRoll = diceSize;
  return Math.floor(Math.random() * (maxRoll - minRoll + 1)) + minRoll;
}