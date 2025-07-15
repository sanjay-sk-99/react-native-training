//map filter foreach

const users = [
    {id:1,username:'sanjay',email:"sanjay@gmail.com",age:21},
    {id:1,username:'kumar',email:"kumar@gmail.com",age:17},
    {id:1,username:'kevin',email:"kevin@gmail.com",age:20},
]
//map the username
let username = users.map((user)=>user.username)
console.log(username)

//filter
let authorized = users.filter((user)=>user.age>18)  //filter based on age
console.log(authorized)

//foreach
let usernames=[];
users.forEach((user)=>usernames.push(user.username))
console.log(usernames)

//conditional statement

//verifying user for login
let user = 'sanjay'
let pass = 'pass@123'

let registerUser = 'sanjay'
let registerpass = 'pass@123'

if(user === registerUser && pass === registerpass){
    console.log('user verified')
}


//switch

let favCar = "swft";

switch(favCar){
    case "swift":console.log("swift is low budget car")
    break;
    case "honda city":console.log("its a nice choice")
    break;
    default:console.log("you didn't choose right car")
}



//loops - for,while,do while

const arr = [1,2,3,4]
let reverse=[]
for(let i=arr.length-1;i>=0;i--){
     reverse.push(arr[i])
}
console.log(reverse)

let i=0
// while(i<5){
//     console.log(i*2)
//     i++

// }

do{
    console.log(i*2)
    i++
}while(i<5)

//for of for in

let sentence = "education is important"

let words = sentence.split(" ")

for(let word of words){   //loop through values
   console.log(word)
}

for(let key in words){  //loop through keys
   console.log(key)
}