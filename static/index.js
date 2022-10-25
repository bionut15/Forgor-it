//Here is the java script file

console.log("script loaded");

function updateCounter()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      document.getElementById("counter").innerHTML = this.responseText;
      counterStyle();
    }
  }
  xhttp.open('GET', "query", true);
  xhttp.send();
}

function increment()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      updateCounter();
    }
  }
  xhttp.open('GET', "increment", true);
  xhttp.send();
}

function decrement()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      updateCounter();
    }
  }
  xhttp.open('GET', "decrement", true);
  xhttp.send();
}

function counterStyle() {
  if (counter.innerHTML < 0) {
    counter.classList.add("negative");
  } else if (counter.innerHTML > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}


