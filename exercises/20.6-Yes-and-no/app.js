let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let wikiWoko= theBools.map(function(item){
    if(item===1)return "wiki"
    else if(item===0) return "woko"
});
console.log(wikiWoko);