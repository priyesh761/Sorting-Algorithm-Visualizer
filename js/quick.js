async function qsort(arr, start, end) {
  if (start > end) return;
  if (start == end) {
    arr[start].style.background = "green";
    return;
  }
  let mid = await partition(arr, start, end);
  await qsort(arr, start, mid - 1);
  await qsort(arr, mid + 1, end);
}

async function partition(arr, start, end) {
  let pivot = parseInt(arr[end].style.height);
  let i = start - 1;

  arr[end].style.background = "deepskyblue";
  for (let j = start; j < end; j++) {
    if (parseInt(arr[j].style.height) <= pivot) {
      i++;
      arr[i].style.background = "red";
      arr[j].style.background = "red";
      swap(arr[i], arr[j]);
      await resolveAfterXmilliSeconds(speed);
      arr[i].style.background = "yellow";
      arr[j].style.background = "yellow";
    }
  }

  arr[end].style.background = "yellow";
  swap(arr[i + 1], arr[end]);
  arr[i + 1].style.background = "green";
  return i + 1;
}

async function quick_sort() {
  disable();
  let arr = document.querySelectorAll(".bar");
  if (arr.length == 0) return;

  await qsort(arr, 0, arr.length - 1);
  enable();
}
