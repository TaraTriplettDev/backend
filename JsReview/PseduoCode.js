// Given an array of integers, find the sum of its elements.
// For example, if the array arr = [1,2,3] = 1 + 2 + 3  = 6, so return .
// Function Description
// Complete the simpleArraySum function in the editor below. It must return the sum of the array elements as an integer.
// simpleArraySum has the following parameter(s):
// ar: an array of integers
// Input Format
// The first line contains an integer, , denoting the size of the array.
// The second line contains  space-separated integers representing the array's elements.
// Constraints

// Output Format
// Print the sum of the array's elements as a single integer.
// Sample Input
// 6
// 1 2 3 4 10 11
// Sample Output
// 31
// Explanation
// We print the sum of the array's elements: 

// ***********************************************
//Psuduo Code   =  human steps to solve a algo
// Input = [ of numbers ]
// I need to add all the numbers
// mock function call = simpleArraySum(6, [ 0,1,2,3,4,5])
// Return is the sum of all Intergers in the array

// I need to make a function :                      =  simpleArraySum ()

// it will take in a ( arr.length, arr )            =  simpleArraySum(6, [0,1,2,3,4,5])
// I need somewhere to hold a vaule ( varible )     =  let result = 0

// I need a loop to iterate over the array          =  (let i = 0 ; i < arr.length ; i++) 

// for each vaule I need to add that to my variable =     result += arr[i]  // result = result + arr[i]
// I need to return that variable we made           =   resturn result
// I need to console.log my function call


const simpleArraySum = ( arr) => {
    console.log( "arr", arr)
    let result = 0

    for (let i = 0 ; i < 6; i++) {
            console.log("i", i, "arr[i]", arr[i])
            result += arr[i]
            console.log("result", result)
            // result = result + arr[i]
    }

    // return result
    return arr.reduce((a, b) => {
        console.log("a", a, "b", b)
        return a + b;
    }, 0)



}
console.log(simpleArraySum([ 0  ,  1  ,  2  ,  3  ,  4  , 5]))


// split
let str = "hello World"
let split = str.split("")
console.log("split", split)
console.log(split[0].toUpperCase())
split[0] = split[0].toUpperCase()
console.log("split", split)
let join = split.join("")
console.log("join", join)