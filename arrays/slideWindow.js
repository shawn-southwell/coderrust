const arr = [-4,2,-5,3,6];
const wSize = 3; 
function maxWindow(arr,windowSize,max=-Infinity){
if (!arr.length) return max;
max = Math.max(...arr.slice(0,3)) > max? Math.max(...arr.slice(0,3)) : max;
console.log(max,arr)
return maxWindow(arr.slice(3), windowSize, max);
}

function maxSlideWindow(arr,windowSize){
  let max = -Infinity;
  const window = { begin: 0, end: windowSize };
  while(window.end!==arr.length - 1){
    const currWindow = arr.slice()
  }
}

function maxSlideWindowPop(arr,windowSize){
  let max = -Infinity;
  while(arr.length){
    const currWindow = arr.length >= 3 ? arr.slice(arr.length - 3 , arr.length) : arr;
    const maxWindow = Math.max(...currWindow);
    console.log(currWindow)
    if (maxWindow > max) max = maxWindow;
    arr.pop();
  }
  return max;
}

maxSlideWindowPop(arr,wSize);
