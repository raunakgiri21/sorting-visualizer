const merge = (items, aux, animArr, low, mid, high) => {
  for (let i = low; i <= high; i++) {
    aux[i] = items[i];
  }

  let i = low,
    j = mid + 1;
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      animArr.push([aux[j], k]);
      items[k] = aux[j++];
    } else if (j > high) {
      animArr.push([aux[i], k]);
      items[k] = aux[i++];
    } else if (aux[i] <= aux[j]) {
      animArr.push([aux[i], k]);
      items[k] = aux[i++];
    } else {
      animArr.push([aux[j], k]);
      items[k] = aux[j++];
    }
  }
};

export default function mergeSort(items, aux, animArr, low, high) {
  if (low >= high) return;
  const mid = low + Math.floor((high - low) / 2);

  mergeSort(items, aux, animArr, low, mid);
  mergeSort(items, aux, animArr, mid + 1, high);
  merge(items, aux, animArr, low, mid, high);
}
