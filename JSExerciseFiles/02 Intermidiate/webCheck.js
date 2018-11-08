let usrEmail = 'Email'
let password = '1234'

let userChecker = function (myString) {
    if (myString.includes(123) && (myString.length > 6)){
        return true
    }

    return false
}

userChecker(usrEmail)

let passChecker = function (pass) {
    if (pass.includes(1234) && (pass.length > 8)){
        return True
    }
    return False
}