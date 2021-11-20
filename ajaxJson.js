let pageCounter = 1;
const dataContainer = document.getElementById('info')
const btn = document.getElementById("btn");

btn.addEventListener('click', function() {
  const ourRequest= new XMLHttpRequest();
  ourRequest.open('GET','./data'+ pageCounter +'.json');
  ourRequest.onload = function () {
    const ourData =JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3){
    btn.classList.add('hide-me');
  }
});

function renderHTML(data){
  let htmlString = "";

  for( let i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + "is a " + data[i].species+".";
  }
  info.insertAdjacentHTML("beforeend", htmlString);
};


