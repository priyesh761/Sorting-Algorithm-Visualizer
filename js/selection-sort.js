//Implementation for Selection Sort
export async function selection_sort() {
  disable();
  let arr = document.querySelectorAll(".bar");
  if (arr.length == 0) return;

  for (let i = 0; i < arr.length; i++) {
    arr[i].style.background = "red";
    for (let j = i + 1; j < arr.length; j++) {
      arr[j].style.background = "red";

      const ht1 = parseInt(arr[i].style.height);
      const ht2 = parseInt(arr[j].style.height);

      if (ht1 > ht2) swap(arr[i], arr[j]);

      await resolveAfterXmilliSeconds(speed);

      arr[j].style.background = "yellow";
    }
    arr[i].style.background = "green";
  }
  enable();
}
