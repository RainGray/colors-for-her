import { buffer } from "stream/consumers";

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

export function nextItemAfterXExceptY(myArray: any[], itemX: any, itemY: any) {
  if (myArray.length == 0) {
    throw new Error("Array is empty");
  }
  if (myArray.length <= 2) {
    return myArray[0];
  }
  const currentIndex = myArray.indexOf(itemX);
  if (currentIndex === -1) {
    return myArray[0];
  }

  let nextIndex = (currentIndex + 1) % myArray.length;
  while (myArray[nextIndex] == itemY || myArray[nextIndex] == itemX) {
    nextIndex = (nextIndex + 1) % myArray.length;
  }
  return myArray[nextIndex];
}
