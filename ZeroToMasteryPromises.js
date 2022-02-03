const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Working");
    }
    else {
        reject("Not Working");
    }
})

/// the promise is actually created and returned pending the result of the funtion given to create it


const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "String 1")
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "String 2")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "String 3")
})

urls = ["https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"]


Promise.all(urls.map(element => { 
    return fetch(element).then(values => values.json())
 })) .then(jsonData => jsonData.forEach(element => {
    console.log(element); 
 }))



// promise.then(result => result + "!!!")
//     .then(result1andahalf => result1andahalf + "%%%")
//     .catch(() => console.log("An Err"))
//     .then(result2 => console.log(result2 + "???"));


console.log("done");