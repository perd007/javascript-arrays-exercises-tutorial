// Add your code here
function lyricsGenerator(arr){
    let letra=" ";
    let contador;
    for(let i=0;i<arr.length;i++){
        //invertimos de contador=arr[i]+ arr[i+1]+arr[i+2] para hacer que concatene luego de 3 unos
       contador=arr[i]+ arr[i-1]+arr[i-2];
     
        if(arr[i]===0) letra=letra + "Boom ";
        else if(arr[i]===1 ) letra=letra + "Drop the base ";
         if(contador===3 ) letra=letra + "!!!Break the base!!! ";
        // console.log(arr[i]+"---"+arr[i-1]+"---"+arr[i-2]+"---"+contador+" letra a meter "+letra);
      
    }
    
    return letra;
}

// Don't change anything bellow this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))