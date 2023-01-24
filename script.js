let score = 0
let scoreBoard = document.querySelector('#points')
const foods = document.querySelectorAll('.food')
const guest = document.querySelectorAll('.customer')
const plates = document.querySelectorAll('.customer > div.plate')
const seats = document.querySelectorAll('.customer > div.seat')
const openSign = document.querySelector('#start-game')
const restaurant = document.querySelector('#game-area')
let handsEmpty = true
const menuItems = ['Seed', 'Grain', 'Berry']
let chooseOrder
// ^Remember This^ for declaring globally scoped variables.  They don't need to "=" anything, they just need to be listed.

function countdown() {
  restaurant.style.display = 'grid'
  openSign.innerHTML = 'Now Open!'
  let time = 61
  let countdown = setInterval(function () {
    time--
    document.querySelector('#clock').innerHTML = '00:' + time
    if (time === 0) {
      clearInterval(countdown)
      openSign.innerHTML =
        "We're Closed!<br><br>You've earned up " + score + ' points today.'
      restaurant.style.display = 'none'
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

openSign.addEventListener('click', countdown)

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
