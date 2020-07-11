// add solution here
var empty = []

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}


function johnLennonFacts(array) {
  let i = 0
  newArray = []
  while (i < array.length) {
    array[i] = newArray[`${i}!!!`]
  }
}
