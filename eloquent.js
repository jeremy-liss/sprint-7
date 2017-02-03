function min (a, b){
  if (a < b){
    return a;
  }
  return b;
};

function isEven(x){
  if (x === 0) {
    return true;
  }
  else if (x === 1){
   return false;
  }
  else {
    return isEven(x-2);
  }
};

function countBs(string){
var count = 0;
for (var i = 0; i < string.length; i ++){
  if (string.charAt(i) === "B"){
   count += 1;
  }
}
return count;
};

function countChar(string, x){
var count = 0;
for (var i = 0; i < string.length; i ++){
  if (string.charAt(i) === x){
   count += 1;
  }
}
return count;
};
