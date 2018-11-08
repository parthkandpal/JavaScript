let sayHello = function(name){
        console.log("Greeting message for user")
        console.log(`Hey ${name}`)
}

sayHello("John")

let fullNameMaker = function(firstName, lastName){
    console.log("Welcome Here!")
    console.log(`Happy to help you ${firstName + " " + lastName}`)
}

fullNameMaker('Parth','Kandpal')

let myAdder = function(num1 , num2){
    let added = num1 +num2
    return added
} 

console.log(myAdder(3,5))


let myMultiplier = function (num1 , num2) {
    let multiplied = num1*num2
    return multiplied
}

console.log(myMultiplier(5,6))

let guestUser = function (name = "Name",courseCount = 0) {
    return "Hello " + name + " your course count is " + courseCount
    
}
console.log(guestUser("john",5))