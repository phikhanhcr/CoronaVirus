/*****************************************/
import axios from axios; 
//document.getElementById("cases").innerHTML = 2134;
//var axios = require("axios");
document.getElementById("btn").addEventListener("click" , getData);

function getData() {
    axios.get("https://code.junookyo.xyz/api/ncov-moh/data.json?fbclid=IwAR0WjUxY3Ih_5y-F2fcXO0YdlYy2VU9jWwt0LnB7QVezbDVv8RyIGWEXgEw")
        .then(res => {
            console.log(res.data.data.global.cases);
            document.getElementById("cases").textContent = res.data.data.global.cases;

            // document is not defined 
        })
        .catch(err => {
            console.log(err);
        })
}

//var url = "https://code.junookyo.xyz/api/ncov-moh/data.json?fbclid=IwAR0WjUxY3Ih_5y-F2fcXO0YdlYy2VU9jWwt0LnB7QVezbDVv8RyIGWEXgEw";
/*****************************************/
// function getData() {
//     const testURL = 'https://code.junookyo.xyz/api/ncov-moh/data.json';
//     const myInit = {
//         method: 'GET',
//         mode: 'no-cors',
//     };

//     const myRequest = new Request(testURL , myInit);

//     fetch(myRequest , myInit).then(response => response.json())
//         .then(function (response) {
//             console.log(response);
//         }).catch(function(e) {
//             console.log(e);
//         });

// }
// function getData() {
//     fetch("https://code.junookyo.xyz/api/ncov-moh/data.json?fbclid=IwAR0WjUxY3Ih_5y-F2fcXO0YdlYy2VU9jWwt0LnB7QVezbDVv8RyIGWEXgEw")
//         .then( res => res.json())
//         .then(res => {
//             console.log(res);
//         }).catch(err => {
//             console.log(err);
//         })
// }
// getData();