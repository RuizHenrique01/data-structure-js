export function swap(array, a, b) {
    const temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}