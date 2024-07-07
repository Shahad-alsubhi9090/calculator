let result = document.querySelector(".result");
let button = document.querySelectorAll("button");
let firtsOperand = 0;
let seconedOperand;

let operator = null;
let calc = button.forEach((button) => {
  button.onclick = () => {
    if (button.classList.contains("number")) {
      if (result.textContent === "0") 
        result.textContent = button.textContent;
      
      else if (seconedOperand !== 0 && operator != null) {
        result.textContent = button.textContent;
        seconedOperand = 0;
      } else 
      result.textContent += button.textContent;
    } else {
      switch (button.textContent) {
        case "AC": {
          result.textContent = "0";
          deselect()
          break;
        }
        case "+/-": {
          result.textContent = -result.textContent;
          break;
        }
        case "%": {
          // result.textContent = result.textContent / 100;
          firtsOperand = +result.textContent;
          operator = "%";
          deselect();
          button.classList.add("selectedOp");
          break;
        }
        case "+": {
          firtsOperand = +result.textContent;
          operator = "+";
          deselect();
          button.classList.add("selectedOp");
          break;
        }
        case "-": {
          firtsOperand = +result.textContent;
          operator = "-";
          deselect();
          button.classList.add("selectedOp");
          break;
        }
        case "*": {
          firtsOperand = +result.textContent;
          operator = "*";
          deselect();
          button.classList.add("selectedOp");
          break;
        }
        case "/": {
          firtsOperand = +result.textContent;
          operator = "/";
          deselect();
          button.classList.add("selectedOp");
          break;
        }
        case ".": {
          result.textContent = result.textContent + ".";
          break;
        }
        case "=": {
          deselect();
          if (firtsOperand !== null && operator !== null) {
            switch (operator) {
              case "+": {
                result.textContent = firtsOperand + +result.textContent;

                break;
              }
              case "-": {
                result.textContent = firtsOperand - +result.textContent;

                break;
              }
              case "*": {
                result.textContent = firtsOperand * +result.textContent;

                break;
              }
              case "/": {
                console.log(+result.textContent);
                result.textContent == 0
                  ? (result.textContent = "error")
                  : (result.textContent = firtsOperand / +result.textContent);
                break;
              }
              case "%": {
                console.log(+result.textContent);
                result.textContent == 0
                  ? (result.textContent = "error")
                  : (result.textContent =
                      firtsOperand -
                      parseInt(firtsOperand / +result.textContent) *
                        +result.textContent);
                break;
              }
            }
          }
          operator = null;
          firtsOperand = 0;
          seconedOperand = null;
          break;
        }
      }
    }
  };
});

function deselect() {
  console.log("called");
  let op = document.querySelectorAll(".op");
  op.forEach((button) => {
    button.classList.remove("selectedOp");
  });
}
