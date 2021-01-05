// Callbacks hell in ES5

// function PrinterService(string, callback) {
//     let timeout = Math.floor(Math.random() * 1000)
//     setTimeout(function () {
//         console.log(string)
//         console.log("ms: ", timeout);
//         callback()
//     }, timeout)
// }

// PrinterService('First task', function () {
//     PrinterService('Second task', function () {
//         PrinterService('Third task', function () {
//             console.log('done.')
//         })
//     })
// })


// getUser(function (err, user) {
//     getProfile(user, function (err, profile) {
//         getAccount(profile, function (err, acc) {
//             getReport(acc, function (err, report) {
//                 DownloadService(download, function (e) {
//                     // programming
//                 })
//             })
//         })
//     })
// })





// Promises Chain ES6

// getUser()
// .then(getProfile)
// .then(getAccount)
// .then(getReport)
// .then(DownloadService)
// .catch(function (e) { console.error(e) })


// Async/Await - ES7

// async function SendAsync(){
//     let response = await "hello world"
//     console.log(response)
// }

// SendAsync()


// let comments = [
//     {
//         id:1,
//         user:"Priya",
//         comment:"Hello world!"
//     }
// ]

// let addComment = (callback)=>{
//     setTimeout(()=>{
//         comments.push({
//             id:2,
//             user:"Elnura",
//             comment:"Hello friend!"
//         })
//         callback()
//     },3000)
// }

// let getComments = ()=>{
//     setTimeout(()=>{
//         comments.forEach(comment=>{
//             console.log(`ID:${comment.id}\nUser:${comment.user}\nComment:${comment.comment}`)
//         })
//     },2000)
// }

// addComment(getComments);

// new Promise()

let printService = (string) => {
    return new Promise((resolve, reject) => {
        console.log(string)
        resolve()
    })
}

printService('intecbrussel') // JSON data
    .then(() => printService('intecbrussel-1')) // formatting
    .then(() => printService('intecbrussel-2')) // res.slice(29)
    .catch(err => err)

let students = ['Lotte', 'Arne', 'Adnan', 'Mikail', 'Joty', 'Priya', 'Susan', 'Emmanuel', 'Oguz', 'Elnura', 'Kobe', 'Yannick']

let data;

let PromiseMe = new Promise((resolve,reject)=>{
    if(students !=null){
        resolve(students.sort())
    }else{
        reject('Error!')
    }
})

PromiseMe.then(res=>res).then(data=>{
    data.forEach(student=>{
        console.log(student)
    })
})

// fetch('https://jsonplaceholder.typicode.com/todos/')
// .then(res=>res.json())
// .then(res=>{
//     console.log(res)
// })


let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('First promise is done')
    },1000)
})

let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Second promise is done')
    },500)
})

let promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('Third promise is done')
    },200)
})

// Promise.all
Promise.all([promise1,promise2,promise3])
.then(allAnswers=>{
    console.log(allAnswers)
}).catch(err=>{
    console.error(err)
})

const myArr = [promise1,promise2,promise3]
Promise.all(myArr)
.then(allAnswers=>{
    console.log(allAnswers)
})

//Promise.all([1,2,3,4,5,6,7,8])