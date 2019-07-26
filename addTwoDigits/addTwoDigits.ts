// function addTwoDigits(n: any): number {
//   let sum = 0;
  
//   n.toString().split('');
//   n.forEach( num => {
//     sum += parseInt(num);
//   })

//   return sum;
// }

// console.log(addTwoDigits(29));


function addTwoDigits(n: any): number {
  const nums = n.toString().split('');
  let sum = 0;

  nums.forEach( num => sum += parseInt(num) )

  return sum;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(1111));
console.log(addTwoDigits(666));
console.log(addTwoDigits(420));