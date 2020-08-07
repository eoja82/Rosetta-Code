/* Rosetta Code: 100 doors
There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.
Implement a function to determine the state of the doors after the last pass. Return the final result in an array, with only the door number included in the array if it is open. */

function getFinalOpenedDoors(numDoors) {
  let passes = 1;
  let doors = [];
  let result = [];

  for (let i = 0; i < numDoors; i++) {
    doors.push({status: "closed"})
  }

  for (let j = 0; j < doors.length; j++) {
    doors.forEach( (x, i) => {
      if ((i + 1) % passes == 0) {
        if (x.status == "closed") {
          x.status = "open";
        } else {
          x.status = "closed";
        }
      }
    });
    passes++;
  }

  doors.forEach( (x, i) => {
    if (x.status == "open") {
      result.push(i + 1);
    }
  });
  console.log(result); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
  return result;
}

getFinalOpenedDoors(100);