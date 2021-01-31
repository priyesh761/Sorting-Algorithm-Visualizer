async function insertion_sort() {
  disable();
  let arr = document.querySelectorAll(".bar");
  if (arr.length == 0) return;
  arr[0].style.background = "red";

  for (let i = 1; i < arr.length; i++) {
    let ht1 = parseInt(arr[i].style.height);
    let ht2 = parseInt(arr[i - 1].style.height);
    let j = i - 1;

    while (j >= 0 && ht2 > ht1) {
      arr[j].style.background = "red";
      arr[j + 1].style.background = "red";

      swap(arr[j + 1], arr[j]);

      await resolveAfterXmilliSeconds(speed);

      arr[j].style.background = "green";
      arr[j + 1].style.background = "green";

      j--;
      if (j >= 0) ht2 = parseInt(arr[j].style.height);
    }
  }
  enable();
}
