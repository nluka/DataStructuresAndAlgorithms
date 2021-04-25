module.exports.getRandomAlphabeticalString = function getRandomAlphabeticalString(maxLength) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const numberOfCharacters = Math.round(Math.random() * maxLength);
  let string = '';
  for (let i = 0; i < numberOfCharacters; i++) {
    const randomIndex = Math.round(Math.random() * (characters.length - 1));
    string += characters.charAt(randomIndex);
  }
  return string;
};
