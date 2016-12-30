function twoSum(arr,target){
  const cache = {};
  
  for (let i = 0; i < arr.length; i++){
    cache[target - arr[i]] = true;
    if (cache[arr[i]]) return true;
  }
  
  return false;
}

//Given nums = [2, 7, 11, 15], target = 9,

twoSum([2, 6, 11, 15], 9)
