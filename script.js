//Function types example 
//Question : print odd numbers in an array [1,2,3,4,5,6,7,8,9,10]

//1. Normal function
var result = []
function odd (arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));
