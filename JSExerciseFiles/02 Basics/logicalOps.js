// && - AND operator - both sides needs to be true
// || - OR operation - One side need to be true

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true 
let isGuest = true  

if (isVerified && isLoggedIn && hasPaymentToken){

    console.log("Greeting message to User")
    console.log("Grant access to paid courses")
}else if (isVerified || isGuest) {

    console.log("Allow free previews")
}else{
    console.log('MESSAGE: please contact admin')
}