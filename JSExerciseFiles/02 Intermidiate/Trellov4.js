myTodos = ['Go to Gym','Buy Bread','Write Code']

// console.log(myTodos[myTodos.indexOf('Go to Gym')])

const newTodos = [{
    title:'Go to Gym',
    isDone : false,    
},

{
title : 'Buy Bread',
isDone: true,    
},

{
    title : 'Write Code',
    isDone : true
}

]
// const index = newTodos.findIndex(function(todo,index){
//     return todo.title === 'Go to Gym'
// })

// console.log(index)

//Method 1 

// const findTodo = function (myTodos,title){
//     const index = myTodos.findIndex(function(todo,index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodos[index]
// }

// let printMe = findTodo(newTodos,'GO to gym')

// console.log(printMe)

const findTodo = function(myTodos,title){
    const titleReturned = myTodos.find(function(todo,index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos,'GO to gym')

console.log(printMe)
