"use strict";

//HOMEWORK 5  //////////////////////////    EDUARD SANTURYAN    ///////////////////

//  HMW_6-1     ----------------------------------------------------------------------
/*

let arr = [1, 7, 5, 8, 9, 4, 3, 6];

let prod =[]
for (let i = 0; i<arr.length - 1; i++){
    prod.push(arr[i] * arr[i+1])
}

prod.sort((a,b) => b - a);
console.log(prod[0]);

*/


//  HMW_6-2    ----------------------------------------------------------------------


/*

let arr = [4, 8, 10];
function countOfmissingNumbers(arr){
  arr.sort((a, b) => a - b);
  let num;
  num = arr[arr.length-1] - arr[0] -arr.length + 1
  return num;
}



*/

//  HMW_6-3    ----------------------------------------------------------------------

/*
let str = 'Have a good night k k kaaaa 7';
function acronym(str){
str = str.toUpperCase();
let arr = str.split(' ');
let res = []
let res1 = []
for (let i = 0; i< arr.length; i++){
  //debugger
  res.push(arr[i].split(''));
  res1.push(res[i][0])
};
return res1.join('');
}
*/


//  HMW_6-4    ----------------------------------------------------------------------
/*
let str = '495215';
let n = 4;

function contiguousSubstring(str, n){
  //debugger
let arr = str.split('')
let res = []
let arr1 = [];
iter: for (let i = 0; i <= str.length; i++){
  if (res.length <n){
  res.push(arr[i]);
} else if (res.length >= n && arr.length >= n) { arr1.push(res.join(''))
        res = []
        arr.shift()
        i = -1
        continue iter; 
}
}  return arr1
}
*/

//  HMW_6-5    ----------------------------------------------------------------------

/*

let arr = [
    { parent: null, id: 0},
    { parent: 0, id: 1},
    { parent: 0, id: 2},
    { parent: 1, id: 3},
    { parent: 1, id: 4},
    { parent: 2, id: 5},
    { parent: 4, id: 6},
  ]
  
  function buildTree(arr, res = {}) {
    arr.sort((a, b) => a.parent - b.parent);
      for (let i = 0; i < arr.length; i++) {
              if (arr[i].parent === null) {
                      res[arr[i].id] = {};
                      arr.splice(i, 1);
                      break;
              }
      }
      for (let i = 0; i < arr.length; i++) {
              tree(arr[i], res);
      }
      return res;
  }
  
  function tree(arr, res) {
      for (let key in res) {
              if (arr.parent == key) {
                      res[key][arr.id] = {};
                      return res;
              } else {
                      tree(arr, res[key])
              }
      }
  }

  */