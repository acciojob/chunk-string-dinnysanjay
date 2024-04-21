function stringChop(str, size) {
  if (!str) {
    return [];
  }
  let arr = [];
  for(let i=0; i<str.length; i+=size){
    arr.push(str.slice(i,i+size));
  }
  return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size.")); 
alert(stringChop(str, size));