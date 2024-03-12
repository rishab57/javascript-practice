// const promiseOne = new Promise(function(resolve, reject) {
//     setTimeout(function(){
//         console.log('async task is comleted');
//         resolve()
//     }, 1000)
// })
// promiseOne.then(function(){
//     console.log('promise consumed');
// })


// --------------------


// const promiseTwo = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('async task 2');
//         resolve()
//     },1000)
// }).then(function(){
//     console.log('Asyn 2 resolved');
// })

// --------------------------


// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         resolve({name:'rishab khurana', password: 'rishab@123'}) //whatever you want to pass whether it is (object, list, function)
//     }, 1000);
// }).then(function(user){
//     console.log(user);
// })


// ---------------------


// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = false    //    true/ false
//         if (!error){
//             resolve({name:'rishab khurana', password: 'rishab@123'})
//         }else{
//             reject('ERROR: Something went wrong.')
//         }
//     }, 1000);
// }).then((user)=>{                 //callback hell
//     console.log(user);
//     return user.name
// }).then((name)=>{
//     console.log(name)
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log('the promise is either resolved or rejected')
// })


// ------------------


// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(() => {
//         let error = true  // true/ false
//         if (!error){
//             resolve({name:'rishab khurana', password: 'rishab@123'})
//         }else{
//             reject('ERROR: SOMETHING WENT WRONG')
//         }
//     }, 1000);
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive  // its an object
//     console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()


// ----------------------


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getAllUsers()




// fetch('http://jsonplaceholder.typicode.com/users')
// .then((response)=>{
//     return response.json()
// })
// .then((data)=>{
//     console.log(data);
// })