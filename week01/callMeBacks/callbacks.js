

// //     const sum = (num1, num2) => {
// //         console.log("1", num1, "2", num2)
// //         return num1 + num2
// //     }

// //     console.log(sum(2, 2))

// //     const sum2 = (num1, num2) => {
// //         console.log("1", num1, "2", num2)
// //         return num1 + num2
// //     }

// //     const area = (input, callback) => {

// //         console.log("input", input)
// //         console.log("callback", callback)
// //         // return "area return" + " " +  input * callback
// //         return `area return:`  + input * callback
// //     }

// //     console.log("twz", area(20 , sum( 20, sum2(20, 10000))))

// // // let arr = [1,2,3,4,5,6,7,8,9,10]

// // // let len = arr.length

// // //     for (let i = 0 ; i < len ; i++){
// // //   //do stuff
// // //     }









// const sum = (num1, num2) => {             //2
    
//     console.log("sum", num1 + num2)

//     return num1 + num2                    //3
    
// }

// const area = (input, callback) => {       //1
    
//     return input * callback               //4
    
// }

// console.log("area", area(10, sum(20, 4 )))


// //Big O notation and making loops efficent 
// let arr = [1,2,3,4,5,6,7,8,9,10]

// let len = arr.length
// console.log("len", len)

// for ( let i = 0 ; i < len ; i++){
    
// // do stuff

// }"
// '"


function test(param1, param2) {
return param1 + param2

}

const sum = (param1, param2)  =>  {   //2
 return   param1 + param2   //3
}

const  area = (num, callback) => {  //1
return num * callback   
}

console.log(area( 2,    sum(30, 20)     ))