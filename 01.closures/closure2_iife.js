// IIFE: Immediately Invoked Function Expression

const privateCounter = (() => {
  let count = 0
  console.log(`initial value ${count}`)
  return () => {
    count += 1 //=
    console.log(`count: ${count}`)
  }
})()

privateCounter() //=
privateCounter() //=
privateCounter() //=
privateCounter() //=

// ---------------------------------------------------------------------------
// Another IIFE but now passing a parameter

console.log('----------------------------------------------')

const credits = ((initial) => {
  let actual = initial
  console.log(`initial credits: ${actual}`)

  return () => {
    actual -= 1
    console.log(`remaining credits: ${actual}`)
  }
})(5)

credits()
credits()
credits()
credits()
