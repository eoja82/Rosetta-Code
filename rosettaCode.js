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
  //console.log(result); // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
  return result;
}

getFinalOpenedDoors(100);

/* Rosetta Code: 24 game */

/* Rosetta Code: 9 billion names of God the integer */

/* Rosetta Code: ABC Problem
You are given a collection of ABC blocks (e.g., childhood alphabet blocks). There are 20 blocks with two letters on each block. A complete alphabet is guaranteed amongst all sides of the blocks. The sample collection of blocks:
(B O) (X K) (D Q) (C P) (N A) (G T) (R E) (T G) (Q D) (F S) (J W) (H U) (V I) (A N) (O B) (E R) (F S) (L Y) (P C) (Z M)
Implement a function that takes a string (word) and determines whether the word can be spelled with the given collection of blocks.
Some rules to keep in mind:
    Once a letter on a block is used, that block cannot be used again.
    The function should be case-insensitive. */

function canMakeWord(word) {
  const blocks = [["B", "O"], ["X", "K"], ["D", "Q"], ["C", "P"], ["N", "A"], ["G", "T"], ["R", "E"], ["T", "G"],
                ["Q", "D"], ["F", "S"], ["J", "W"], ["H", "U"], ["V", "I"], ["A", "N"], ["O", "B"], ["E", "R"], 
                ["F", "S"], ["L", "Y"], ["P", "C"], ["Z", "M"]]
  let wordArr = word.toUpperCase().split(""),
      matched = 0,
      match = false
  
  for (let i = 0; i < wordArr.length; i++) {
    for (let j = 0; j < blocks.length; j++) {
      if (blocks[j][0] == wordArr[i] || blocks[j][1] == wordArr[i]) {
        blocks.splice(j, 1)
        matched++
        break
      }
    } 
    if (matched == wordArr.length) {
      match = true
      break
    }
  }
  // console.log(match) // true
  return match
}

canMakeWord("conFUSE")