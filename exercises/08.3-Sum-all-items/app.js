function sumTheElements(theArray){
	let total = 0;
	//your code here
	for(let i=0;i<theArray.length;i++){
		total= total + theArray[i];
	}
	return total;
}
let number= [2,13,34,5];
console.log(sumTheElements(number));