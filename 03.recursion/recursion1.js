const gameList = {

  pc: {
    actual: {
      opensource: ['mindustry', 'openttd'],
      comercial: ['grand theft auto']

    },
    old: ['manic miner', 'out run']
  },
  console: {
    simulation: ['speed 3'],
    fight: ['street fighter', 'infinity fighter']
  }

}

const getGamesNames = (dataObj, arr = []) => {
  const keys = Object.keys(dataObj) //=
  keys.forEach(element => {
    if (Array.isArray(dataObj[element])) {
      dataObj[element].forEach(name => {
        arr.push(name)
      })
      return arr
    } else {
      // recursion
      getGamesNames(dataObj[element], arr)
    }
  })
  return arr
}

const namesOfGames = getGamesNames(gameList) //=
console.log(namesOfGames)
