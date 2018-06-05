// Knowledge Check how to access an element in an array.
// How do we access a specific element in an array?
// How do we find how many elements are in the array?
// How do we get the last element?

// 4 Simple function to modify an array

let friends = ['Schwimmer', 'Rachael', 'Monica', 'Joey', 'Chandler', 'Feebee']


// Push < - > Pop
// Oops we misspelled Phoebe
// Lets pop it off and push on the correct spelling

// Shift < - > Unshift
// We put in the actor's last name instead of Ross for the 
// character.  Lets Shift and Unshift to fix our array.

// Copying an array Slice
// What is the main difference between slice and splice?

// Question if we have 
let a = [5, 4, 7, 1, 5]
let b = a;
b.push(15);

// If I run the line below what do I see.
// console.log(a);

let c = [1, 7, 98, 2, 5, 2];
let d = c.slice();
d.push(15);

// If I run the line below what do I see.
// console.log(d);

let myArry = [5,7,3,1,6];
// let's grab the array from 7, 3, 1
let newArry = myArry.slice(1,4)
let bigArry = [5,6,8,3,4,6,7,1,3,7,4,2,7,5,3,7,5]
// Lets split up bigArray into a left and right array
let left = bigArry.slice(0,7);
let right = bigArry.slice(7);

// console.log(left, right);

// split around it's middle


// Splice
// Editing an array anywhere

let invitations = ['bob@builders.com', 'jan@do.e', 'billy@crystal.music', 'jane@austin.blog', 'harry@potter.com'];

// let's remove jane@austin.blog from our array using splice

let janeaustin = invitations.splice(3, 1); // takes out jane@austin.blog
//janeaustin == the spliced




let genome = ['A','T','C','G','A','T','T','A','C','A','G','T','A','C','A','G','A','T','G'];

// let's replace 'G','A','T','T','A','C','A' with 'C','A','T' using splice
genome.splice(3,7, 'C','A','T')
// console.log(genome)

// Splice vs Slice
//  Splice I think of splicing a genome
//  Slice I remeber as being less complicated than geonome splicing

// For Loop Practice

// Loop a fixed number of times.
// 3 parts of a for loop
// Starting condition
// Ending condition
// Step iteration

// Standard loop
// Loop through from 0 to 10 and console log the square of each number

for (let i = 0; i<=10; i++){
 console.log(i*i) 
}

// Odd Loops
// Different Starting
// Console logs the square from 100 to 110

for (let i=100; i <=110; i++){
console.log(i*i)
}
// Backwords
// Console log a countdown from 5 to 1 then a boom;

for (let i=5; i >=0; i--){
  console.log(i*i)

}
// Skip Step
// Console log the multiples of 13 between 1 and 178
for (let i=13; i<=178; i+=13){
  console.log (i);
}

// Standard format for looping over an array

// Start at index 0
// Go while less than the length of array
// Increase by 1 every time
let ary = [5,3,7,8,2,5,8,2];

for (let i=0; i<ary.length; i++){
  ary[i]
}
// Goto Practice




// ## Objects

// Look, a wild artist object appears

let artist = {
  name : "Band of Horses",
  playThatOneHitSingle(){return'lyrics of that one hit single... You know the one... The one with the music... And the words... Yeah that one...'},
  popularity : 59,
  type : "artist",
  uri : "spotify:artist:0OdUWJ0sBjDrqHygGUXeCF",
  href : "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
  id : "0OdUWJ0sBjDrqHygGUXeCF",
  genres : [ "indie folk", "indie pop" ],
  external_urls : {
    spotify : "https://open.spotify.com/artist/0OdUWJ0sBjDrqHygGUXeCF"
  },
  followers : {
    href : null,
    total : 306565
  },
  images : [ {
    height : 816,
    url : "https://i.scdn.co/image/eb266625dab075341e8c4378a177a27370f91903",
    width : 1000
  }, {
    height : 522,
    url : "https://i.scdn.co/image/2f91c3cace3c5a6a48f3d0e2fd21364d4911b332",
    width : 640
  }, {
    height : 163,
    url : "https://i.scdn.co/image/2efc93d7ee88435116093274980f04ebceb7b527",
    width : 200
  }, {
    height : 52,
    url : "https://i.scdn.co/image/4f25297750dfa4051195c36809a9049f6b841a23",
    width : 64
  } ]
}

// Grab the name of the artist
artist.name
// Grab the total number of followers
artist.followers.total
// Grab the url for the 3rd image
artist.images[2]
// Add a playThatOneHitSingle method
// It console logs the lyrics of that one hit single... You know the one... 
// The one with the music... And the words... Yeah that one...
// Invoke that method
artist.playThatOneHitSingle()

// ## Conditional (Ternary) Operator

// * Student can use the ternary operator as an alternative to an if statement

// Sometimes if statements are big and bulky and can get in the way.
// We can use terinary as a shortcut for simple if statements.


let party = 'R';
let str = 'The latest '
if (party === 'R'){
  str += 'Republican '
}else{
  str += 'Democratic '
}
str += 'candidate has won the election'



let newStr = `the latest ${(party === "R"? 'Republican': "Democratic")} candidate has won the election.`
// Let's turn this into a terinary


let age = 14
let drivingAge

let drivingAge = (age>=16?true:false)

if (age >=16){
  drivingAge = true;
}else{
  drivingAge = false;
}

// Nested ternary

// If the temperature is over 70 and it's sunny return true
// else return false
function goOutside(sunny, temperature){

}

// ## Callbacks

// * Student can pass a function (as an argument) in to another function
// * Student can invoke a parameter whose value is a function
// * Student can write a higher order function (can take in function, as arugment, and use it)

