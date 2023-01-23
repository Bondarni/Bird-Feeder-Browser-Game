let score = 0
let scoreBoard = document.querySelector('#points')
const foods = document.querySelectorAll('.food')
const seeds = document.querySelector('#Seed')
const grains = document.querySelector('#Grain')
const berries = document.querySelector('#Berry')
const plates = document.querySelectorAll('.plate')
const birds = document.querySelectorAll('.customer')
const time = document.querySelector('#timer')
let handsEmpty = true

let emptyHands = () => {
  handsEmpty = true
}
let grabFood = (event) => {
  dishName = event.target.innerText
  handsEmpty = false
  console.log("You're holding a " + dishName + '!')
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

// seeds.addEventListener('click', grabFood)
// grains.addEventListener('click', grabFood)
// berries.addEventListener('click', grabFood)

foods.forEach(function (food) {
  food.addEventListener('click', grabFood)
})
plates.forEach(function (plate) {
  plate.addEventListener('click', orderUp)
})
//remember ^this^ for event listeners on classes.
