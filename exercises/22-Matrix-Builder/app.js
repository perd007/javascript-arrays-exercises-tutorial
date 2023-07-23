// Code goes here
function matrixBuilder(value){

    var array = [];
   
  
    for(let i=0;i<value;i++){
        array[i]=[];
        for(let j=0;j<value;j++){

            array[i][j]=Math.floor(Math.random()*2);
         //console.log(array[i][j]);
        }
    }

    return array;
}


// do not change anything from this line down
console.log(matrixBuilder(5))