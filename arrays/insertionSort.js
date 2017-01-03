const arr = [4,2,1];
function insertionSort(arr){
	for(let i = 0; i < arr.length; i++){
		let j = i;
		while(j > 0 && arr[j - 1] > arr[j]){
			let temp = arr[j-1];
			arr[j-1] = arr[j];
			arr[j] = temp;
			--j}
	}
	return arr
}
console.log(insertionSort(arr));

