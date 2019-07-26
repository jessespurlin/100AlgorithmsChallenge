function adjacentElementsProduct(inputArray: number[]): number {
  let largestAdjacentNums = 0;

  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i] + inputArray[i+1] > largestAdjacentNums){
      largestAdjacentNums = inputArray[i] + inputArray[i+1];
    }
  }

  return largestAdjacentNums;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([1,2,3]));
console.log(adjacentElementsProduct([3,2,1]));
console.log(adjacentElementsProduct([1,2,1]));