let parking_state = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(parking_state){
  let occupied=0;
  let available=0;
  let noParking=0;

 
  for(let i=0;i<parking_state.length;i++){
    for(let j=0;j<parking_state[i].length;j++){
      //console.log("["+i+"]"+" ["+j+"] "+parking_state[i][j]);
      
      if(parking_state[i][j]===0){noParking=noParking +1;
      } else  if(parking_state[i][j]===1){occupied=occupied +1;
      } else  if(parking_state[i][j]===2) {available=available +1;}
    
    }
  }
  
  
  
  const state={
    totalSlots: (available+occupied),
    availableSlots: available,
    occupiedSlots: occupied
  }

  return state;
}


console.log(getParkingLotState(parking_state))