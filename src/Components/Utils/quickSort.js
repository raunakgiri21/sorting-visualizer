export default function quickSort(items) {
  const arr = [...items];
  const animArr = [];
  partition(arr, animArr, 0, arr.length - 1);
  return [arr, animArr];
}

const partition = (arr, animArr, low, high) => {
  if (low >= high) return;
  let lt = low;
  let i = low;
  const v = arr[low];
  let gt = high;

  while (i <= gt) {
    if (arr[i] < v) exchng(arr, animArr, i++, lt++);
    else if (arr[i] > v) exchng(arr, animArr, i, gt--);
    else i++;
  }
  partition(arr, animArr, low, lt - 1);
  partition(arr, animArr, gt + 1, high);
};

const exchng = (arr, animArr, a, b) => {
  animArr.push([a, b]);
  const t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
};
