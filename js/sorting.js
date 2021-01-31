function init() {
  let drw = document.getElementById("draw");
  drw.innerHTML = "";

  let arr = [];
  let width = (window.innerWidth - 500) / num_bars;
  let height = window.innerHeight / 2;
  drw.height = height;
  for (let i = 0; i < num_bars; i++) {
    let val = Math.floor(Math.random() * height);
    arr.push(val);
    let dv = document.createElement("div");
    dv.classList.add("bar");
    dv.style.height = "" + val + "px";
    dv.style.width = "" + width + "px";
    drw.appendChild(dv);
  }

  console.log("success", num_bars);
}

function resolveAfterXmilliSeconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, x);
  });
}

function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
  //console.log(`swapped ${transform1} ${transform2}`);
}
