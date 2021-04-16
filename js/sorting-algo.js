//Implementation for Bubble Sort
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

//Implementation for Insertion Sort
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

//Implementation for Selection Sort
async function selection_sort() {
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

//Implementation for Quick Sort
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

//Implementation for Merge Sort
async function msort(arr, start, end) {
  if (start === end || start > end) return;
  console.log(start, end);

  let mid = parseInt(start + (end - start) / 2);
  await msort(arr, start, mid);
  await msort(arr, mid + 1, end);
  await merge(arr, start, mid, end);
}

async function merge(arr, start, mid, end) {
  let i = start;
  let j = mid + 1;
  let k = start;
  for (let ind = start; ind <= end; ind++) arr[ind].style.background = "white";

  while (i <= mid && j <= end) {
    const ht1 = parseInt(arr[i].style.height);
    const ht2 = parseInt(arr[j].style.height);
    arr[i].style.background = "red";
    arr[j].style.background = "red";

    let ii = i;
    let jj = j;

    if (ht1 <= ht2) {
      swap(arr[i], arr[k]);
      i++;
    } else {
      swap(arr[j], arr[k]);
      for (let ind = j; ind > k + 1; ind--) swap(arr[ind], arr[ind - 1]);
      j++;
      i++;
      mid++;
    }
    await resolveAfterXmilliSeconds(speed);

    arr[ii].style.background = "white";
    arr[jj].style.background = "white";
    arr[k].style.background =
      end - start + 1 == arr.length ? "green" : "yellow";

    k++;
  }

  while (k <= end) {
    arr[k].style.background = "red";
    await resolveAfterXmilliSeconds(speed);
    arr[k].style.background =
      end - start + 1 == arr.length ? "green" : "yellow";
    k++;
  }
}

async function merge_sort() {
  disable();
  let arr = document.querySelectorAll(".bar");
  if (arr.length == 0) return;

  await msort(arr, 0, arr.length - 1);
  enable();
}
