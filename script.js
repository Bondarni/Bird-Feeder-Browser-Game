let score = 0
let scoreBoard = document.querySelector('#points')
const foods = document.querySelectorAll('.food')
const guest = document.querySelectorAll('.customer')
const plates = document.querySelectorAll('.customer > div.plate')
const seats = document.querySelectorAll('.customer > div.seat')
const startScreen = document.querySelector('#start-game')
const endScreen = document.querySelector('#end-game')
const results = document.querySelector('#end-game > p#results')
const review = document.querySelector('#end-game > p#review')
const startGame = document.querySelectorAll('button')
const restaurant = document.querySelector('#game-area')
let handsEmpty = true
const menuItems = ['Seed', 'Grain', 'Berry']
let chooseOrder
// ^Remember This^ for declaring globally scoped variables.  They don't need to "=" anything, they just need to be listed.

function countdown() {
  restaurant.style.display = 'grid'
  startScreen.style.display = 'none'
  let time = 3
  let countdown = setInterval(function () {
    time--
    document.querySelector('#clock').innerHTML = '00:' + time
    if (time === 0) {
      clearInterval(countdown)
      restaurant.style.display = 'none'
      endScreen.style.display = 'block'
      results.innerHTML = `You've earned ${score} points today.`
      if (score >= 90) {
        review.innerHTML = `Nicely done!  These birds might just put a Michelin Star in your sky!`
      } else if (score >= 50 && score <= 89) {
        review.innerHTML = `Not bad, not bad at all.`
      } else if (score >= 10 && score <= 49) {
        review.innerHTML = `There's room for improvement.  Keep it up!`
      } else {
        review.innerHTML = `Don't feel bad.  The restaurant business can be tough.  Maybe you can join the circus?`
      }
    }
  }, 1000)
}
// ^Timer Function^ - Credit to TAs and Stack Overflow for this one.  We have the time variable set within the function, then the variable attributed to setInterval that marks the seconds down.  We select the clock from the html as the place to put the time, and then the condition that stops the clock and logs the appropriate messages.

const birds = {
  names: ['Ness', 'Heather', 'Bill', 'Chip', 'Gale', 'Flynn'],
  waitCount: 10
}

let emptyHands = () => {
  handsEmpty = true
}

let takeOrder = (event) => {
  console.log(`I'm Hungry!`)
  chooseOrder = menuItems[Math.floor(Math.random() * menuItems.length)]
  console.log(`I'll have a ${chooseOrder}, please!`)
}

let grabFood = (event) => {
  dishName = event.target.innerText
  handsEmpty = false
  console.log(`You're holding a ` + dishName + `.`)
}
let orderUp = () => {
  if (handsEmpty === false && chooseOrder === dishName) {
    score += 10
    scoreBoard.innerText = score
    console.log('Thanks!')
    emptyHands()
  } else if (handsEmpty === false && chooseOrder !== dishName) {
    score -= 5
    scoreBoard.innerText = score
    console.log("This isn't what I asked for...")
  } else {
    score -= 5
    scoreBoard.innerText = score
    console.log("Uh...Where's my food?")
  }
}

let openService = (event) => {
  countdown()
}

startGame.forEach(function (btn) {
  btn.addEventListener('click', countdown)
})

foods.forEach(function (food) {
  food.addEventListener('click', grabFood)
})

plates.forEach(function (plate) {
  plate.addEventListener('click', orderUp)
})

seats.forEach(function (seat) {
  seat.addEventListener('click', takeOrder)
})
//remember ^this^ for event listeners on classes.
