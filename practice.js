let cartPrices = [4.34, 6.23, 1.25, 34.5, 2.34, 2.35, 3.56]

function applyTax(prices){
  // Loop over an array and apply a 100% tax.  
  // Modify the original array
  // Taxes man... 
 for (i=0; i<prices.length; i++){
   prices[i]*=2;
 }
//  console.log (prices)
 return prices;
}
applyTax(cartPrices);

let myPrices = [6, 2, 4, 7, 8, 2, 7, 5, 2, 8, 9, 5, 2];
function  findEvens(arr){
  // Make a new array of only evens 
  var evensOnly=[];
  for (let i=0; i<arr.length; i++){
    if (arr[i]%2==0){
    evensOnly.push(arr[i])
    }
  }
  // console.log(evensOnly)
  return evensOnly
}
findEvens(myPrices)


let alignments = ['CG', 'LE', 'NG', 'LG', 'CE', 'CN', 'NE', 'CE']
function destroyEvil(arr){
  // Remove from the existing array any strings that contain E
  // tip consider what happens with 2 in a row
  // console.log (arr.length)
    for (let i = 0; i < arr.length; i++){
      // console.log(arr[i].includes('E'))
      if (arr[i].includes('E')){arr.splice(i, 1); i--}
  // for(let i = 0; i<arr.length; i++){
  //   if(arr[i].indexOf('E')>0){console.log(arr[i])}
  // }
    }
  return arr
  }
destroyEvil(alignments);


let scores = [[4,6], [3,5], [3,7], [7,2], [6,3], [5,5], [8,3], [4,6], [2,6]];
// let scores = [[4,6], [3,5], [3,7], [7,2], [6,3], [5,5], [8,3], [4,6], [2,6]];
let expectOutput = {
  wins:3,
  loses:5,
  ties:1
}

function calculateWins(scores){
  // given an array of arrays
  // each sub array represents the scores of 2 teams
  // make an obj that keeps track of the wins, loses, and ties from the first team's perspective.
  // Return that object
  var winsVsLoses ={wins:0,loses:0,ties:0}
for (let i=0; i<scores.length; i++){
  if (scores[i][0]>scores[i][1]){
    winsVsLoses.wins+=1;
  } else if (scores[i][1]>scores[i][0]){
    winsVsLoses.loses+=1;
  }else {winsVsLoses.ties +=1}
}
// console.log (winsVsLoses)
return winsVsLoses;
}
calculateWins (scores)
// Go back to lecture

// Write a function. danceALot that will take in a dance
// and the number of times to perform that dance.
// function salsa(){console.log("salsa salsa")}

function danceALot(dance, times){
  for (let i = 0; i<times;i++){
    dance()
  }
}
danceALot(doTheChacha, 0)


// Make a buildArray function that will take in a callback,
// and return an array where each element has gone through 
// the callback function with their index
// Example buildArray(x => x*x , 4) 
// [0,1,4,9]
function buildArray(callback, n){
  let newArray =[];
  for (let i = 0; i<n; i++){
    newArray.push(callback(i))
  }
  return newArray
}
let squares = buildArray(x => x*x, 10)
// console.log(squares)

function letFateDecide(option1, option2){
  // write a function that will randomly select 1 of the 2 options being passed in.
  // Both should occur at least once given 100 tries. (so probably stick to nothing less than 2% chance of happening)
randomNumber = Math.floor(Math.random()*100);
  // if (randomNumber>50){option1()}else{option2()}
console.log(randomNumber)
randomNumber >=50? option1():option2();

}
function salsa (){console.log('salsa')}
function doTheChacha (){console.log("Cha cha cha")}
letFateDecide(doTheChacha, salsa)

