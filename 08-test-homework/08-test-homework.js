let interval;
let button = false;


function randomColor() {
  return (
    "#" + (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase()
  );
}

function setColor() {
  let squares = document.querySelectorAll(".block");
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = randomColor();
  }
}



function startInterval() {
  if(button) {
    clearInterval(interval);
    document.getElementById("interval").innerHTML = "RUN";
    button = false;
  } else {
    interval = setInterval(() => setColor(), 1000);
    document.getElementById("interval").innerHTML = "STOP";
    button = true;
  }
}