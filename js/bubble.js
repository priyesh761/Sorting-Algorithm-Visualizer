function resolveAfterXSeconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, x * 1000);
  });
}

function swap(el1, el2) {
  const style1 = window.getComputedStyle(el1);
  const style2 = window.getComputedStyle(el2);

  const transform1 = style1.getPropertyValue("height");
  const transform2 = style2.getPropertyValue("height");

  el1.style.height = transform2;
  el2.style.height = transform1;
  console.log(`swapped ${transform1} ${transform2}`);
}
var i = 0;
async function bubble_sort() {
  let arr = document.querySelectorAll(".bar");

  for (let i = 0; i < arr.length - 1; i++) {
    // let i = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].style.background = "red";
      arr[j + 1].style.background = "red";

      const ht1 = parseInt(arr[j].style.height);
      const ht2 = parseInt(arr[j + 1].style.height);
      if (ht1 > ht2) await swap(arr[j], arr[j + 1]);
      await resolveAfterXSeconds(0.005);

      arr[j].style.background = "yellow";
      arr[j + 1].style.background = "yellow";
    }
    arr[arr.length - i - 1].style.background = "green";
  }
  arr[0].style.background = "green";
}
