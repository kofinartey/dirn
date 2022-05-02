const alphabets = "ABCDEFGHJKLMNPQRSTUVWXYZ";
//derive random number with limit
function getRandomNum(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export function generateID() {
  let alph1 = alphabets[getRandomNum(alphabets.length - 1)];
  let alph2 = alphabets[getRandomNum(alphabets.length - 1)];
  let num1 = getRandomNum(9);
  let num2 = getRandomNum(9);
  let num3 = getRandomNum(9);
  let num4 = getRandomNum(9);

  let id = alph1 + alph2 + num1 + num2 + num3 + num4;
  return id;
}
