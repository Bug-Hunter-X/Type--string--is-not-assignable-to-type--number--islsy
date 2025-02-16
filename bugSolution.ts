function combine(arr1: number[], arr2: number[]): number[] {
  //Using every function to check if all elements are numbers
  if(!arr1.every(item => typeof item === 'number') || !arr2.every(item => typeof item === 'number')){
    throw new Error('Arrays must contain only numbers');
  }
  return arr1.concat(arr2);
}

const result1 = combine([1,2,3], [4,5,6]);
console.log(result1); // [1, 2, 3, 4, 5, 6]

const result2 = combine([1,2,3], [4,5,'6']);
console.log(result2); // Throws an error