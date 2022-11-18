
let genBtn = document.getElementById('generate');
genBtn.addEventListener('click', () => {
  let request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
  if(request.readyState === 4 && request.status === 200){
    console.log('FETCHED')
    var response = JSON.parse(request.responseText);
      let i = Math.floor((Math.random() * response.length - 1));
  document.getElementById('response').innerHTML = response[i].text + "<br> <br> By:" + response[i].author ;
  }else if(request.status != 200 ){
    document.getElementById('response').innerHTML = "could not fetch quotes"
  }
});
request.open('GET', "https://type.fit/api/quotes");
request.send();
});


