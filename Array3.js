let nos = [1, 2, 3, 4, 5];
//shift the element
let no = nos.shift(1);
console.log("Element shifted", no);
console.log("Array after shift",nos);
nos.unshift(6);
//print the unshift element
console.log("Array after unshift",nos);



let arr = [1, 2, 3, 4, 5];
arr.splice(1,4);//index, no of elements
console.log("Array after splice", arr);
//cosole.log("Array after splice",arr);
arr.splice(1,1,12,13,14);//index, replace,what to replace
console.log("Array after adding splce",arr);
arr.splice(3,50);
console.log("Array after splice:",arr);
