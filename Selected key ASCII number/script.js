const partial = (f, ...a) => (...b) => f(...a,...b)
const outputElement = document.querySelector(".output");
let output = [];

const preventDefault = (f, event) => (event.preventDefault(), f(event))

const logKeypress = event => {
  if (event.which === 8 ) {
      output.pop()
    } else {
      output.push(event.which)
    }
  print();
}

const print = () => {
  const placeholder = ["...to see the ascii code here"]
  if (output.length === 0) {
    outputElement.textContent = placeholder.toString();
  } else {
    outputElement.textContent = output.toString();
  }
}

document
  .querySelector("input[name=ascii-input]")
  .addEventListener("keydown", partial(logKeypress))

print();