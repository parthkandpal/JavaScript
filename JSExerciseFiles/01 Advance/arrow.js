// // const sayHello = function(name){
// //     return 'Hey There, ' + name + ' !'
// // }

// // console.log(sayHello('Parth'))

// const sayHello = (name) => `Hey there ${name}!`


// console.log(sayHello('Parth'))

// const todos = [{
//     title: 'Bread',
//     isDone: true
// },
// {
//     title: 'GO to Gym',
//     isDone: true
// },
// {
//     title : 'Record video',
//     isDone : true
// },
// {
//     title: 'Learn Javascript',
//     isDone : false
// },
// {
//     title: 'Play snooker',
//     isDone : false
// },
// {
//     title: 'Go to temple',
//     isDone : false
// }
// ]

// const thingsDone = todos.filter((todo)=>{
//     return todo.isDone === true
// })

// console.log(thingsDone)

// const thingsNotDone = todos.filter((todo) =>{
//     return todo.isDone === false
// })

// thingsNotDone.forEach(todo => {console.log(todo.title)})        


const cameras = {
    price : 600,
    weight : 2000,
    myDes : () => {
        return `This cannon camera is of ${this.price}`
    }
}

console.log(cameras.myDes())