// let registeredUser = [
//     {name: "john doe", email: "johndoe@gmail.com", password:12345 },
//     {name: "tinubu dollar", email:"tinubu@gmail.com", password: "abcde"},
//     {name: "peter dollar", email: "peter@gmail.com", password:"peterdollar"},
//     {name: "atiku", email: "atiku@gmail.com", password: "atiku2o23"}
// ]

// let email = prompt("enter your email")
// let password = prompt("enter password")

// if(email == "" || password == ""){
//     alert("input field cannot be empty")
// }else{
//     for( let each of registeredUser){
//     if(each.email == email  && each.password == password){
//         alert("login successful")
//     }else{
//         alert("invalid credentials")
//     }
// }
// }


let clients = []

let entername = prompt("enter a name")
let enteremail = prompt("enter an email")
let enterpassword = prompt("enter a password")

function storage() {
    let user= {
        name: entername,
        email: enteremail,
        password: enterpassword
    }
    clients.push(user)
     console.log(clients);
}

storage()