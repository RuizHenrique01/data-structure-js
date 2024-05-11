import { defaultCompare } from "../utils/defaultCompare";
import { swap } from "../utils/swap";

export function heapSort(array, comapreFn = defaultCompare) {
  let heapSize = array.length;
  buildMaxHeap(array, comapreFn);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    heapify(array, 0, heapSize, comapreFn);
  }
  return array;
}

function buildMaxHeap(array, comapreFn) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length, comapreFn);
  }
  return array;
}

function heapify(array, index, heapSize, compareFn) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;
  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left;
  }
  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right;
  }
  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, largest, heapSize, compareFn);
  }
}
