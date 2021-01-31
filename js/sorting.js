function init() {
  let num_bars = 100;
  let drw = document.getElementById("draw");
  drw.innerHTML = "";

  let arr = [];
  let width = (window.innerWidth - 500) / num_bars;
  let height = window.innerHeight / 2;
  drw.height = height;
  for (let i = 0; i < num_bars; i++) {
    let val = Math.floor(Math.random() * height);
    arr.push(val);
    console.log(val);
    let dv = document.createElement("div");
    dv.classList.add("bar");
    dv.style.height = "" + val + "px";
    dv.style.width = "" + width + "px";
    drw.appendChild(dv);
  }

  console.log("success");
}
