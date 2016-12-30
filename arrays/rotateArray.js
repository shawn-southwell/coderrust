const arr = [1,10, 20, 0, 59, 86, 32, 11, 9 , 40];
//- unshifts and appends
//+ pops and prepends

function rotateArr(arr,n){
  if (n < 0) return arr.concat(arr.splice(0,Math.abs(n)));
  return arr.splice(arr.length - n, n).concat(arr);
}

function rotateArr2(arr, n){
  const output = [];
  if (n > 0){
    for (let i = arr.length - n; i < arr.length; i++){
      output.push(arr[i]);
    }
    for (let i = 0; i < arr.length - n; i++){
      output.push(arr[i])
    }
  }  
  return output;
}

rotateArr2(arr,2)
