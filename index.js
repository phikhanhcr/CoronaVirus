document.getElementById("btn").addEventListener("click" , getData());
function getData() {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = 'https://code.junookyo.xyz/api/ncov-moh/data.json';

  fetch(proxyUrl + targetUrl).
  then(blob => blob.json()).
  then(data => {
    console.log(data);
    document.getElementById("cases").innerHTML = data.data.global.cases;
    document.getElementById("dead").innerHTML = data.data.global.deaths;
    document.getElementById("alive").innerHTML = data.data.global.recovered;
    document.getElementById("casesVn").innerHTML = data.data.vietnam.cases;
    document.getElementById("deadVn").innerHTML = data.data.vietnam.deaths;
    document.getElementById("aliveVn").innerHTML = data.data.vietnam.recovered;
  }).
  catch(e => {
    console.log(e);
  });
}