// const myobj = {
//     username:"Rishab Khurana",
//     password:"Rishab@123",
//     loggedIn:true,
//     greet: function(){
//         console.log(`username: ${this.username}`)
//         console.log(this);
//     }
// }
// // console.log(myobj);
// console.log(myobj.greet());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    // return this                         this will return automatically.
}
const u1 = new User("rishab", 8, true)    //if we don't use new keyword then the valuse will override.
const u2 = new User("khurana", 19, false)
console.log(u1)
console.log(u2)