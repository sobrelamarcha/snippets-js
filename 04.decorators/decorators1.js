let getRectangleTriangleArea = (base, height) => {
  return (base * height) / 2
}

// A decorator that counts the correct number of parameters
const countParams = (fn) => {
  return (...params) => {
    console.log('counting the number of parameters')
    if (fn.length !== params.length) {
      throw new Error(`Incorrect number of parameters for ${fn.name}`)
    }
    // console.log(fn)
    return fn(...params)
  }
}

// A decorator that forces to pass integer values
const integerParams = (fn) => {
  // here we lost fn.name because the second decorator that applies returns an anonymous function (which has no name)
  return (...params) => {
    console.log('enforcing to pass integer values')
    params.forEach(param => {
      if (!Number.isInteger(param)) {
        throw new Error('The type of the parameters must be integer')
      }
    })

    return fn(...params)
  }
}

getRectangleTriangleArea = countParams(getRectangleTriangleArea)
getRectangleTriangleArea = integerParams(getRectangleTriangleArea)

// console.log(getRectangleTriangleArea(3, 5, 7)) // Incorrect number of parameters
console.log(getRectangleTriangleArea(3, 5))
