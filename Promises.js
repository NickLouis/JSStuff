const wordApi = "https://random-word-api.herokuapp.com/word?number=10&swear=0";
const localApi= "http://localhost:8080/api/employee";

fetch(localApi)
  .then((data) => data.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
