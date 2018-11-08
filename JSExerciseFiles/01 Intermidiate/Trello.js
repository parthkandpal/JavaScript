const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

console.log(days[0]);

let sayHello = function () {
    console.log("Greeting  message for user")
    
}
days.forEach(function (day, index) {
    console.log(`day ${index+1} is ${day}`)
    
})

// for (let index = 0; index < days.length; index++) {
    
//     console.log(days[index])
// }

// for (let index = days.length-1; index >=0 ; index--) {
    
//     console.log(days[index])
// }    

const myTodos= []

myTodos.push('Task 1')
myTodos.push('Task 2')
myTodos.push('Task 3')

myTodos.forEach(function(todo,index){
    console.log(`Your Task no. ${index+1} is ${todo}`)
})