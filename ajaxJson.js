const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
  const ourRequest= new XMLHttpRequest();
  ourRequest.open('GET','./data.json');
  ourRequest.onload = function () {
  const ourData =JSON.parse(ourRequest.responseText);
    
  };
  ourRequest.send();
});

function renderHTML(){
  
}


