let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

//declare your function here
function filterByName(arr,string){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
            let char=arr[i].toLowerCase();
            if(char.includes(string.toLowerCase())==true) {
                newArray.push(arr[i]);
            }
    }
    /*
    let newArray= arr.filter(function(value){
       // if(value.search(string)!=-1) re{turn value;
       let name= value.toLowerCase()
       console.log(name);
       if(name.includes(string)==true) {
        return name;
    }
    });*/

    return newArray;
}//fin de la funcion filterByName
console.log(filterByName(names, 'am'));