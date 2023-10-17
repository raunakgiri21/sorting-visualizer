export default function selectionSort(items) {
  const newArr = [...items];
  const animArr = [];
  for (let i = 0; i < newArr.length-1; i++) {
    for (let j = i+1; j < newArr.length; j++) {
      if (newArr[j] < newArr[i]) {
        animArr.push([i, j]);
        const t = newArr[j];
        newArr[j] = newArr[i];
        newArr[i] = t;
      }
    }
  }
  return [newArr, animArr];
}
