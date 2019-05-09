"use strict";

//HOMEWORK 5  //////////////////////////    EDUARD SANTURYAN    ///////////////////

//  HMW_5-1     ----------------------------------------------------------------------

/*

let arr = [6];
let newArr = [];

function modifyArr (arr){
   if (arr.length <= 1){
    return newArr;
   } else{
       //debugger
   newArr.push(arr[1]);
   arr.splice(1, 1);
   return modifyArr (arr)
}
}

*/


//  HMW_5-2     ----------------------------------------------------------------------

/*

let arr = [1, [3, 4, [1, 2]], 10];
let newArr = []

function concatArray(arr){
	if(arr.length === 0){
		return arr;
	}
if(Array.isArray(arr[0])){
 concatArray(arr[0],newArr);
}else{
newArr.push(arr[0]);
}
newArr.concat(concatArray(arr.splice(1),newArr));
return newArr;;
}

*/

//  HMW_5-3     ----------------------------------------------------------------------

/*

function sumOfDigits(num){
    while( num >= 10 ){
    let sum = 0;
        for(let i = 0; i < String(num).length; i++){
            sum += +String(num)[i]
        }
        num = sum;
       }
    return num;
    }

    */


 //  HMW_5-4     ----------------------------------------------------------------------

    /*

    function arrayRot(arr, n){
        if(n === arr.length || n === 0){
            return arr;
        }
        arr.unshift(arr[arr.length-1]);
        arr.pop(arr[arr.length-1]);
        return arrayRot(arr, ++n);
    }
    arrayRot(['a', 'b', 'c', 'd', 'e'],  2)

*/

 //  HMW_5-6     ----------------------------------------------------------------------

/*

 function objectSort(list){
    let res = list.filter( index => index.readStatus === true );
    res = res.sort( (a,b)=> { return b.percent - a.percent} );
    return res;
    }


    */