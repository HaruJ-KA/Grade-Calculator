document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let a = +document.getElementById("in1").value;
  let b = +document.getElementById("in2").value;
  let c = +document.getElementById("in3").value;
  let d = +document.getElementById("in4").value;
  let e = +document.getElementById("in5").value;

  let grade = (a + b + c + d + e) / 5;

  document.getElementById("grade").innerHTML = grade;
}
