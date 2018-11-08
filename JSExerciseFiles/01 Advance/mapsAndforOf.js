var john = {
    name: 'I am John',
    age : 24,
    isActive : true
}

var marry ={

    name: 'I am marry',
    age: 23,
    isActive : true
}

var sam = {
    name: 'I am Sam',
    age: 23,
    isActive : false
}

let users= new Map()

// console.log(typeof(users))

users.set('john', john)
users.set('marry', marry)
users.set('sam', sam)

console.log(users.get('sam'))

console.log(users.values())


for (const key of users.keys() ){
    console.log(key)
}

for (const [key, value] of users.entries()) {
    console.log(key + ' = ' + value.name)
}

users.forEach((value,key) => {
    console.log(key + ' = ' + value.name)
    
});


var arrOfArr= [['one','1',],['two','2'],['three','3']]

var newMap = new Map(arrOfArr)

console.log(newMap)
