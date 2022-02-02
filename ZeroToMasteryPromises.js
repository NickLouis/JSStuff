const promise = new Promise((resolve,reject) =>{
    if (true){
        resolve("Working");
    }
    else {
        reject("Not Working");
    }
})

promise.then(result => console.log(result));


console.log("done");