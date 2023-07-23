let chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
let chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];

const mergeArrays = (firstArray, secondArray) => {
    let newArray = []
    //your code here
    firstArray.map((element)=>{

        return(
            newArray.push(element)
        );

    })
    secondArray.map((element)=>{
        return(
            newArray.push(element)
        );
    })
       
    
    return newArray
}

console.log(mergeArrays(chunk_one, chunk_two));