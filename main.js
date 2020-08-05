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

//functions:

//the single die
const dieClick = function(){
  
  }

// dice 1 of two
const oneOf = function(){

  }

// dice 2 of two
const twoOf= function(){

}

// twelve sided die
const twelveSided = function(){

}

// twenty sided die
 const twentySided = function(){

 }
/*******************
 * EVENT LISTENERS *
 *******************/
//the action that will happen when i click on this
 resultD6.addEventListener('click',dieClick)
 resultDD6.addEventListener('click',oneOf)
 resultDD6Jr.addEventListener('click',twoOf)
 resultD12.addEventListener('click', twelveSided)
 resultD20.addEventListener('click',twentySided)
/******************
 * RESET FUNCTION *
 ******************/

/****************
 * MATH SECTION *
 ****************/
