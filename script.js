const startScreen = document.querySelector('#start-game')
const startGame = document.querySelectorAll('button')
const endScreen = document.querySelector('#end-game')
const results = document.querySelector('#results')
const review = document.querySelector('#review')
console.log(review)

let score = 0
let scoreBoard = document.querySelector('#points')

const restaurant = document.querySelector('#game-area')
const guests = document.querySelectorAll('.customer')
const plates = document.querySelectorAll('.plate')
const seats = document.querySelectorAll('.seat')
const chirps = document.querySelectorAll('.text')
const foods = document.querySelectorAll('.food')
let handsEmpty = true
const menuItems = ['Seed', 'Grain', 'Berry']
let chooseOrder
// ^Remember This^ for declaring globally scoped variables.  They don't need to "=" anything, they just need to be listed.
const bird1 = {
  plate: plates[0],
  order: [],
  chirp: '',
  plumage: ''
}
const bird2 = {
  plate: plates[0],
  order: [],
  chirp: '',
  plumage: ''
}
const bird3 = {
  plate: plates[0],
  order: [],
  chirp: '',
  plumage: ''
}
const bird4 = {
  plate: plates[0],
  order: [],
  chirp: '',
  plumage: ''
}
const bird5 = {
  plate: plates[0],
  order: [],
  chirp: '',
  plumage: ''
}
function countdown() {
  restaurant.style.display = 'grid'
  startScreen.style.display = 'none'
  endScreen.style.display = 'none'
  let time = 3
  let countdown = setInterval(function () {
    setTimeout(showUp, 1000)
    time--
    document.querySelector('#clock').innerHTML = '00:' + time
    if (time === 0) {
      clearInterval(countdown)
      restaurant.style.display = 'none'
      endScreen.style.display = 'block'
      results.innerHTML = `You've earned ${score} points today.`
      if (score >= 90) {
        review.innerHTML = `Nicely done!  You're getting rave reviews!`
      } else if (score >= 50 && score <= 89) {
        review.innerHTML = `Not bad, not bad at all.`
      } else if (score >= 10 && score <= 49) {
        review.innerHTML = `There's room for improvement.  Keep it up!`
      } else {
        review.innerHTML = `Don't feel bad.  The restaurant business can be tough.`
      }
    }
  }, 1000)
}
// ^Timer Function^ - Credit to TAs and Stack Overflow for this one.  We have the time variable set within the function, then the variable attributed to setInterval that marks the seconds down.  We select the clock from the html as the place to put the time, and then the condition that stops the clock and logs the appropriate messages.

// const birds = {
//   names: ['Ness', 'Heather', 'Bill', 'Chip', 'Gale', 'Flynn'],
//   waitCount: 10
// }

let emptyHands = () => {
  handsEmpty = true
}

let takeOrder = (event) => {
  chooseOrder = menuItems[Math.floor(Math.random() * menuItems.length)]
  console.log(`I'll have a ${chooseOrder}, please!`)
  chirps.forEach(function (chirp) {
    chirp.style.display = 'block'
    chirp.innerText = `I'll have a ${chooseOrder}, please!`
  })
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
    chirps.forEach(function (chirp) {
      chirp.innerText = `Thanks!`
    })
    timeoutID1 = setTimeout(payUp, 2000)
    emptyHands()
  } else if (handsEmpty === false && chooseOrder !== dishName) {
    score -= 5
    scoreBoard.innerText = score
    chirps.forEach(function (chirp) {
      chirp.innerText = `This isn't what I asked for...`
    })
  } else {
    score -= 5
    scoreBoard.innerText = score
    chirps.forEach(function (chirp) {
      chirp.innerText = `Uh...where's my food?`
    })
  }
}

const openService = (event) => {
  countdown()
}

const showUp = () => {
  guests.forEach(function (guest) {
    guest.style.display = 'flex'
  })
  chirps.forEach(function (chirp) {
    chirp.style.display = 'none'
  })
}

// setTimeout(showUp, 3000)

const payUp = () => {
  guests.forEach(function (guest) {
    guest.style.display = 'none'
  })
  chirps.forEach(function (chirp) {
    chirp.innerText = ''
  })
}

b1.addEventListener('click', takeOrder)

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
