let score = 0
let scoreBoard = document.querySelector('#points')
const foods = document.querySelectorAll('.food')
const seeds = document.querySelector('#Seed')
const grains = document.querySelector('#Grain')
const berries = document.querySelector('#Berry')
const plates = document.querySelectorAll('.plate')
const birds = document.querySelectorAll('.customer')
const openSign = document.querySelector('#start-game')
const restaurant = document.querySelector('#game-area')
let handsEmpty = true

function countdown() {
  console.log('Now Open!')
  let time = 61
  let countdown = setInterval(function () {
    time--
    document.querySelector('#clock').innerHTML = '00:' + time
    if (time === 0) {
      clearInterval(countdown)
      console.log("We're Closed!")
      console.log("You've raked up " + score + ' points today.')
    }
  }, 1000)
}

const chooseOrder = () => {
  math.floor(math.random() * max)
}

let emptyHands = () => {
  handsEmpty = true
}

let takeOrder = (event) => {
  console.log(`I'm Hungry!`)
}

let grabFood = (event) => {
  dishName = event.target.innerText
  handsEmpty = false
  console.log(`You're holding a ` + dishName + `.`)
}
let orderUp = () => {
  if (handsEmpty === false) {
    score += 10
    scoreBoard.innerText = score
    console.log('Order up!')
    emptyHands()
  } else {
    score -= 5
    scoreBoard.innerText = score
    console.log("Uh...Where's my food?")
  }
}
let openService = (event) => {
  countdown()
}

// seeds.addEventListener('click', grabFood)
// grains.addEventListener('click', grabFood)
// berries.addEventListener('click', grabFood)

openSign.addEventListener('click', countdown)
foods.forEach(function (food) {
  food.addEventListener('click', grabFood)
})
plates.forEach(function (plate) {
  plate.addEventListener('click', orderUp)
})
birds.forEach(function (bird) {
  bird.addEventListener('click', takeOrder)
})
//remember ^this^ for event listeners on classes.
