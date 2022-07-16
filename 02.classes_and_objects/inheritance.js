class Vehicle {
  constructor () {
    this.wheels = 4
  }

  ready () {
    console.log('Ready to go')
  }
}

class Bike extends Vehicle {
  constructor () {
    super()
    this.wheels = 2
  }

  wheelie () {
    console.log('On one wheel now!')
  }
}

const myBike = new Bike()
myBike.ready()
myBike.wheelie()
