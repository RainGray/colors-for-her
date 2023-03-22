export function listToMatrix(list: Array<any>, elementsPerSubArray: number) {
  var matrix: Array<any> = [],
    i,
    k;

  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
}

export function removeArrayItem(myArray: any[], key: any) {
  const index = myArray.indexOf(key, 0);
  if (index > -1) {
    return myArray.splice(index, 1);
  } else {
    return myArray;
  }
}
