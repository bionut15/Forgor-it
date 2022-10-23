//Here is the java script file
let decreaseBtn = document.getElementById("button__decrease");
let increaseBtn = document.getElementById("button__increase");
let counter = document.getElementById("counter");
let count = 0;

decreaseBtn.addEventListener("click", () => {
  count--;
  counter.innerHTML = count;
  counterStyle();
});

increaseBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
  counterStyle();
});

function counterStyle() {
  if (count < 0) {
    counter.classList.add("negative");
  } else if (count > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}


