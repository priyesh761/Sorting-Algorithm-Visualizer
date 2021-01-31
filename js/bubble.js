async function bubble_sort() {
  disable();
  let arr = document.querySelectorAll(".bar");
  if (arr.length == 0) return;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      arr[j].style.background = "red";
      arr[j + 1].style.background = "red";

      const ht1 = parseInt(arr[j].style.height);
      const ht2 = parseInt(arr[j + 1].style.height);
      if (ht1 > ht2) await swap(arr[j], arr[j + 1]);
      await resolveAfterXmilliSeconds(speed);

      arr[j].style.background = "yellow";
      arr[j + 1].style.background = "yellow";
    }
    arr[arr.length - i - 1].style.background = "green";
  }
  arr[0].style.background = "green";
  enable();
}
