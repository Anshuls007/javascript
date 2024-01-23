function calculate() {
  let p_value = document.getElementById("p-item").value;
  let r_value = document.getElementById("r-item").value;
  let t_value = document.getElementById("t-item").value;

  let result = (p_value * r_value * t_value) / 100;
  if (! result) {
    document.getElementById("result").innerText = "invalid";
  } else {
    document.getElementById("result").innerText = result;
  }
}
function validator(name, element) {
  let value = document.getElementById(name).value;
  console.log(typeof value);
  if (!isNaN(value)) {
    document.getElementById(element).style.display = "none";
  } else {
    document.getElementById(element).style.display = "block";
  }
}
document.getElementById("p-item").addEventListener("input", function () {
  validator("p-item", "p_error");
});
document.getElementById("r-item").addEventListener("input", function () {
  validator("r-item", "r_error")
});
document.getElementById("t-item").addEventListener("input", function () {
  validator("t-item", "t_error");
});
