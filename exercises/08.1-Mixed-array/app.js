let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newArr=[];
let type=null;
let typeDate=null;
for(let i=0;i<mix.length;i++){
    type=typeof(mix[i]);
    typeDate=type.toString();
    //console.log("typeDate);
    newArr.push(typeDate);

   
}
console.log(newArr);