function powersOfTwo(n){
  let array = [];
  for (let i = 0; i <= n; i++) {
    array[i] = 2**i
  }
  return array;
}