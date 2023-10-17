export default function bubbleSort(items) {
  const newArr = [...items];
  const animArr = [];
  for (let i = 1; i < newArr.length; i++) {
    let swapped = 0;
    for (let j = 0; j < newArr.length - i; j++) {
      if (newArr[j] > newArr[j+1]) {
        animArr.push([j, j+1]);
        const t = newArr[j+1];
        newArr[j+1] = newArr[j];
        newArr[j] = t;
        swapped = 1;
      }
    }
    if (!swapped) break;
  }
  return [newArr, animArr];
}
