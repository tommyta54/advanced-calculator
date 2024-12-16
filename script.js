const display = document.getElementById("display");
let memory = null;

document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      display.textContent = "0";
    } else if (value === "=") {
      try {
        display.textContent = eval(display.textContent);
      } catch {
        display.textContent = "Error";
      }
    } else if (value === "M+") {
      memory = display.textContent;
    } else if (value === "MR") {
      display.textContent = memory || "0";
    } else if (value === "MC") {
      memory = null;
    } else if (["sin", "cos", "tan", "sqrt"].includes(value)) {
      const num = parseFloat(display.textContent);
      let result;
      switch (value) {
        case "sin":
          result = Math.sin(num);
          break;
        case "cos":
          result = Math.cos(num);
          break;
        case "tan":
          result = Math.tan(num);
          break;
        case "sqrt":
          result = Math.sqrt(num);
          break;
      }
      display.textContent = result;
    } else {
      if (display.textContent === "0") {
        display.textContent = value;
      } else {
        display.textContent += value;
      }
    }
  });
});
