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

function merge_sort() {
  let arr = document.querySelectorAll(".bar");
  if (arr.length == 0) return;

  msort(arr, 0, arr.length - 1);
}
