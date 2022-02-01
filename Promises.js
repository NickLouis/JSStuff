const wordApi = "https://random-word-api.herokuapp.com/word?number=10&swear=0";
const localApi= "http://localhost:8080/api/employee";

fetch(localApi)
  .then((data) => data.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));


  fetch(localApi, {
   
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({
         "firstName": "Indigo", 
         "lastName": "Prenzler", 
         "email": "OhDear@luv2code.com"
     }) // body data type must match "Content-Type" header
    })
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })



  // method: 'POST',
  // headers: {
  //   'content-type': 'application/json',
  //   authorization: 'Bearer 123abc456def'
  // },
  // body: {
  //   name: 'Roger',
  //   age: 8
  // }