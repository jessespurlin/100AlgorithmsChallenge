function absoluteValuesSumMinimization(a: number[]): number {
  // abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
  const isEven = a.length % 2 === 0;

  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));