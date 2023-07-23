let allNames = ["Romario","Boby","Roosevelt","Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

//your code here
let resultingNames= allNames.filter(function(char){
    if(char[0]=="R")
    return char[0];
});

console.log(resultingNames);