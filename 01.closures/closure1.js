const initialCoins = 5

const playGame = () => {
  let initial = initialCoins //=

  console.log(`Initial coins: ${initial}`)

  return () => {
    if (initial > 0) {
      initial -= 1
      console.log(`te quedan: ${initial}`)
    } else { console.log('se acabo') };
  }
}

const game = playGame() //=

game() //=
game() //=
game() //=
game() //=
game() //=
game() //=
