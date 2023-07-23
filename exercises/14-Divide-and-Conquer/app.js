let list_of_numbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// your code here
const mergeTwoList = (array) => {
    const odd = [];
    const even = [];
    
for(let i=0;i<array.length;i++){

    if (array[i]%2===0) {
        even.push(array[i].toString())
    }
    else { 
        odd.push(array[i].toString()) 
    }
}
/*
    array.map((element) => {

        if (element%2===0) {
            even.push(element.toString())
        }
        else { 
            odd.push(element.toString()) 
        }

    })*/


  const newArray =  odd.concat(even);
    const arrayNumber=newArray.map(function(item){
    return Number(item);
})
    return arrayNumber;

}
console.log(mergeTwoList(list_of_numbers));
