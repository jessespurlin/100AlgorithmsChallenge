function allLongestStrings(inputArray: string[]): string[] {
  let maxLength = 0;
  let longestStrings = [];

  for(let i = 0; i < inputArray.length; i++){
    if(inputArray[i].length > maxLength){
      maxLength = inputArray[i].length;
    }
  }
  inputArray.forEach( e => {
    if(e.length === maxLength){
      longestStrings.push(e);
    }
  })
  return longestStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));