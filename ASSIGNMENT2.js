// let newUser = [
//     {name: "#name", Surname: "#surname"},
//     {email: "#email", password: "#password"}
// ]
// let result = [newUser.push("#name"),   newUser.push("#surname"),
//                 newUser.push("#email"), newUser.push("#password")
// ]
// console.log(result);


// let stores = [];

// let names = prompt("your name pls?")
// stores.push(names)
// let email = prompt("email pls?")
// stores.push(email)
// let password = prompt("enter your password")
// stores.push(password)

// alert(stores);




// let now = [];

// function serve() {

//     let nom = prompt("Oga enter your name")
//     now.push(nom)
//     let email = prompt("enter email jor!")
//     now.push(email)
//     let pasword = prompt("if you get password, put am.")
//     now.push(pasword)

//     const okay = now.join("*")
//     alert(okay);

// }

// serve();

let theUsers = []

function signUp() {
    let entername = prompt("enter your name")
    let enteremail = prompt("enter your email")
    let enterpassword = prompt("enter your password")
    


    let newUsers = {
        name: entername,
        email: enteremail,
        password: enterpassword
    }

    theUsers.push(newUsers)

}

// for(i = 0; i < 3; i++) {
//     signUp()
// }


// console.log(theUsers);

document.getElementById("btn").onclick = function(){
    document.body.style.backgroundColor= "green";
    
    document.getElementById("btn").style.width = "5rem"
    document.getElementById("btn").style.height ="5rem"
    document.getElementById("btn").style.borderRadius= "50%"
    document.getElementById("btn").style.backgroundColor= "yellow"
    document.getElementById("btn").style.transform = "rotate(360deg)"
    document.getElementById("btn").style.transition = "5s ease-in-out"
    
    
}

