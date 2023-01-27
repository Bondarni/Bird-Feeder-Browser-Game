const startScreen = document.querySelector('#firstpage')
const startGame = document.querySelectorAll('.startGame')
const endScreen = document.querySelector('#end-game')
const results = document.querySelector('#results')
const review = document.querySelector('#review')

let score = 0
let scoreBoard = document.querySelector('#points')

const restaurant = document.querySelector('#game-area')
const guests = document.querySelectorAll('.customer')
const plates = document.querySelectorAll('.plate')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const p3 = document.querySelector('#p3')
const seats = document.querySelectorAll('.seat')
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')
const s3 = document.querySelector('#s3')
const chirps = document.querySelectorAll('.text')
const t1 = document.querySelector('#t1')
const t2 = document.querySelector('#t2')
const t3 = document.querySelector('#t3')
const foods = document.querySelectorAll('.food')

let handsEmpty = true
let inMyHand = []
const menuItems = ['Seed', 'Grain', 'Berry']
let chooseOrder = menuItems[Math.floor(Math.random() * menuItems.length)]
let orderGiven

function countdown() {
  restaurant.style.display = 'grid'
  endScreen.style.display = 'none'
  let time = 60
  let countdown = setInterval(function () {
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

let emptyHands = () => {
  handsEmpty = true
  inMyHand = []
}
const bird1 = {
  chirp: chirps[0],
  seat: seats[0],
  plate: plates[0],
  order: [],
  plumage: '',
  orderGiven: false,
  orderCorrect: false
}
const bird2 = {
  chirp: chirps[1],
  seat: seats[1],
  plate: plates[1],
  order: [],
  plumage: '',
  orderGiven: false
}
const bird3 = {
  chirp: chirps[2],
  seat: seats[2],
  plate: plates[2],
  order: '',
  plumage: '',
  orderGiven: false
}
let takeOrder = (event) => {
  let chooseOrder = menuItems[Math.floor(Math.random() * menuItems.length)]
  let currentId = parseInt(event.target.id[1])
  if (currentId === 1) {
    bird1.order = chooseOrder
    chirps[0].style.display = 'flex'
    chirps[0].innerText = `${chooseOrder}, please!`
    if (bird1.orderGiven === true) {
      chirps[0].innerText = `I already ordered...`
    } else {
      bird1.orderGiven = true
      event.target.removeEventListener('click', takeOrder)
    }
  } else if (currentId === 2) {
    bird2.order = chooseOrder
    chirps[1].style.display = 'flex'
    chirps[1].innerText = `${chooseOrder}, please!`
    if (bird2.orderGiven === true) {
      chirps[1].innerText = `I already ordered...`
    } else {
      bird2.orderGiven = true
      event.target.removeEventListener('click', takeOrder)
    }
  } else if (currentId === 3) {
    bird3.order = chooseOrder
    chirps[2].style.display = 'flex'
    chirps[2].innerText = `${chooseOrder}, please!`
    if (bird3.orderGiven === true) {
      chirps[2].innerText = `I already ordered...`
    } else {
      bird3.orderGiven = true
      event.target.removeEventListener('click', takeOrder)
    }
  }
}

let grabFood = (event) => {
  dishName = event.target.innerText
  inMyHand.push(dishName)
  handsEmpty = false
}
let orderUp1 = () => {
  if (handsEmpty === false && bird1.order === dishName) {
    bird1.orderCorrect = true
    score += 10
    scoreBoard.innerText = score
    bird1.order = ''
    chirps[0].innerText = 'Thanks!'
    bird1.orderGiven = false
    setTimeout(payUp1, 2000)
    emptyHands()
    setTimeout(showUp1, 3000)
  } else if (handsEmpty === false && bird1.order !== dishName) {
    score -= 5
    scoreBoard.innerText = score
    chirps[0].innerText = `This isn't what I asked for...`
  } else {
    score -= 5
    scoreBoard.innerText = score
    chirps[0].innerText = `Uh...where's my food?`
  }
}
let orderUp2 = () => {
  if (handsEmpty === false && bird2.order === dishName) {
    bird2.orderCorrect = true
    score += 10
    scoreBoard.innerText = score
    bird2.order = ''
    chirps[1].innerText = 'Thanks!'
    bird2.orderGiven = false
    setTimeout(payUp2, 2000)
    emptyHands()
    setTimeout(showUp2, 3000)
  } else if (handsEmpty === false && bird2.order !== dishName) {
    score -= 5
    scoreBoard.innerText = score
    chirps[1].innerText = `This isn't what I asked for...`
  } else {
    score -= 5
    scoreBoard.innerText = score
    chirps[1].innerText = `Uh...where's my food?`
  }
}
let orderUp3 = () => {
  if (handsEmpty === false && bird3.order === dishName) {
    bird3.orderCorrect = true
    score += 10
    scoreBoard.innerText = score
    bird3.order = ''
    chirps[2].innerText = 'Thanks!'
    bird3.orderGiven = false
    setTimeout(payUp3, 2000)
    emptyHands()
    setTimeout(showUp3, 3000)
  } else if (handsEmpty === false && bird3.order !== dishName) {
    score -= 5
    scoreBoard.innerText = score
    chirps[2].innerText = `This isn't what I asked for...`
  } else {
    score -= 5
    scoreBoard.innerText = score
    chirps[2].innerText = `Uh...where's my food?`
  }
}

function showUp1() {
  s1.style.display = 'flex'
  s1.addEventListener('click', takeOrder)
  p1.addEventListener('click', orderUp1)
  let patience = 10
  let waitTime1 = () => {
    patience--
    if (bird1.orderCorrect === true) {
      clearInterval(wait1)
      bird1.orderCorrect = false
    } else if (patience === 0) {
      s1.removeEventListener('click', takeOrder)
      p1.removeEventListener('click', orderUp1)
      t1.style.display = 'flex'
      t1.innerText = "Too slow; I'm outta here."
      score -= 10
      scoreBoard.innerText = score
      clearInterval(wait1)
      bird1.orderGiven = false
      setTimeout(payUp1, 2000)
      setTimeout(showUp1, 3000)
    } else if (patience <= 4) {
      // put code in here that changes facial expression of character.  Turns red, checks watch, etc.
    }
  }
  let wait1 = setInterval(waitTime1, 1000)
}
const payUp1 = () => {
  s1.style.display = 'none'
  t1.style.display = 'none'
  chirps[0].innerText = ''
}
function showUp2() {
  s2.style.display = 'flex'
  s2.addEventListener('click', takeOrder)
  p2.addEventListener('click', orderUp2)
  let patience = 10
  let waitTime2 = () => {
    patience--
    if (bird2.orderCorrect === true) {
      clearInterval(wait2)
      bird2.orderCorrect = false
    } else if (patience === 0) {
      s2.removeEventListener('click', takeOrder)
      p2.removeEventListener('click', orderUp2)
      t2.style.display = 'flex'
      t2.innerText = "Too slow; I'm outta here."
      score -= 10
      scoreBoard.innerText = score
      clearInterval(wait2)
      bird2.orderGiven = false
      setTimeout(payUp2, 2000)
      setTimeout(showUp2, 3000)
    } else if (patience <= 4) {
      // impatience code
    }
  }
  let wait2 = setInterval(waitTime2, 1000)
}

const payUp2 = () => {
  s2.style.display = 'none'
  t2.style.display = 'none'
  chirps[1].innerText = ''
}
function showUp3() {
  s3.style.display = 'flex'
  s3.addEventListener('click', takeOrder)
  p3.addEventListener('click', orderUp3)
  let patience = 10
  let waitTime3 = () => {
    patience--
    if (bird3.orderCorrect === true) {
      clearInterval(wait3)
      bird3.orderCorrect = false
    } else if (patience === 0) {
      s3.removeEventListener('click', takeOrder)
      p3.removeEventListener('click', orderUp3)
      t3.style.display = 'flex'
      t3.innerText = "Too slow; I'm outta here."
      score -= 10
      scoreBoard.innerText = score
      clearInterval(wait3)
      bird3.orderGiven = false
      setTimeout(payUp3, 2000)
      setTimeout(showUp3, 3000)
    } else if (patience <= 4) {
      // impatience code
    }
  }
  let wait3 = setInterval(waitTime3, 1000)
}
const payUp3 = () => {
  s3.style.display = 'none'
  t3.style.display = 'none'
  chirps[2].innerText = ''
}

countdown()
showUp1()
showUp2()
showUp3()

foods.forEach(function (food) {
  food.addEventListener('click', grabFood)
})

seats.forEach(function (seat) {
  seat.addEventListener('click', takeOrder)
})
