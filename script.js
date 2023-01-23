let score = 0
let scoreBoard = document.querySelector('#points')
const foods = document.querySelectorAll('.food')
const plates = document.querySelectorAll('.plate')
const bird = document.querySelectorAll('.customer')
const time = document.querySelector('#timer')
let handsEmpty = true
console.log(foods)
let emptyHands = () => {
  handsEmpty = true
}
let grabFood = () => {
  handsEmpty = false
  console.log(`You picked up ${foods.innerText}`)
}
let orderUp = () => {
  if (handsEmpty === false) {
    score += 10
    scoreBoard.innerText = score
    console.log('You put down food')
    emptyHands()
  } else {
    console.log("Where's the Beef?")
  }
}

foods.forEach(function (food) {
  food.addEventListener('click', grabFood)
})

plates.forEach(function (plate) {
  plate.addEventListener('click', orderUp)
})
//remember ^this^ for event listeners on classes.
