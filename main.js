/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];


/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*******************
 * YOUR CODE BELOW *
 *******************/

//holds the individual die/dice
const resultD6 = document.querySelector('#d6-roll')
const resultDD6 = document.querySelector('#double-d6-roll-1')
const resultDD6Jr = document.querySelector('#double-d6-roll-2')
const resultD12 = document.querySelector('#d12-roll')
const resultD20 = document.querySelector('#d20-roll')

//functions that add the images:

//the single die
const dieClick = function(){
  //have a variable hold our result, we'll use the 'getRandomNumber' function, and set the max to 6
  let result = getRandomNumber(6)
  // push the result into the array given to us, in this case 'sixes'
  sixes.push(result)
  //the image will be displayed when clicked
resultD6.src ='./images/d6/'+ result + '.png'

  }



// dice 1 of two
const oneOf = function(){
let result = getRandomNumber(6)

sixes.push(result)
resultDD6.src = './images/d6/' + result + '.png'
  }

// dice 2 of two
const twoOf= function(){
let result = getRandomNumber(6)

sixes.push(result)
resultDD6Jr.src ='./images/d6/' + result + '.png'
}

//makes them go at the same time
const sameTime = function(){
  oneOf()
  twoOf()
}

// twelve sided die
const twelveSided = function(){
let result = getRandomNumber(12)

twelves.push(result)
resultD12.src ='./images/numbers'
}

// twenty sided die
 const twentySided = function(){

 }
/*******************
 * EVENT LISTENERS *
 *******************/
//the action that will happen when i click on this
 resultD6.addEventListener('click',dieClick)
 //only going to use one function cause they will both work at the same time
 resultDD6.addEventListener('click',sameTime)
//  resultDD6Jr.addEventListener('click',twoOf)
 resultD12.addEventListener('click', twelveSided)
 resultD20.addEventListener('click',twentySided)



/******************
 * RESET FUNCTION *
 ******************/

/****************
 * MATH SECTION *
 ****************/
