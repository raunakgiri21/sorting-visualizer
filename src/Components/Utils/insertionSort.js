export default function insertionSort(items) {
  const newArr = [...items];
  const animArr = [];
  for (let i = 1; i < newArr.length; i++) {
    let j = i;
    while (j > 0 && newArr[j] < newArr[j - 1]) {
      animArr.push([j - 1, j]);
      const t = newArr[j];
      newArr[j] = newArr[j - 1];
      newArr[j - 1] = t;
      j--;
    }
    if(i===j) {
      animArr.push([i, j]);
    }
  }
  return [newArr, animArr];
}
