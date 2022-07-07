/**
 * Problem 1: Given five positive integers, find the minimum and maximum values that can be calculated by
    summing exactly four of the five integers.
 */
document.addEventListener('DOMContentLoaded', readyHandler);

let arr = [1,2,3,4,5];
let minSum = 0;
let maxSum = 0;

function readyHandler(){
    let sortedArr = arr.sort((a,b) => a-b);
    minSum = calculateMin(sortedArr);
    maxSum = calculateMax(sortedArr);
    console.log(minSum, maxSum);

    main([1, -2, -7, 9, 1, -8, -5]);
}

function calculateMin(sortedArr){
    for(let i=0; i<= 3; i++){
        minSum += sortedArr[i]
    }
    return minSum;
}

function calculateMax(sortedArr){
    for(let i=(arr.length-1); i>= (arr.length-4); i--){
        maxSum += sortedArr[i]
    }
    return maxSum;
}

/**
 * Problem 2: Given an array of integers, calculate the ratios of its elements that are positive, 
 * negative, and zero. 
 */
 function main (numbersArr){
    let finalNumbersArr = numbersArr; 
    let numbersArrLen = finalNumbersArr.length;
    let positiveArray = [];
    let negativeArray = [];
    let zeroArray = [];

    numbersArr.forEach((item) => {
        if(item > 0){
            positiveArray.push(item);
        }
        else if(item < 0){
            negativeArray.push(item);
        }
        else {
            zeroArray.push(item)
        }
    })
    let positiveArrayLen = positiveArray.length;
    let negativeArrayLen = negativeArray.length;
    let zeroArrayLen = zeroArray.length;

    let positiveFraction = positiveArrayLen/numbersArrLen;
    let negativeFraction =  negativeArrayLen/numbersArrLen;
    let zeroFraction = zeroArrayLen/numbersArrLen;

    console.log(positiveFraction.toFixed(6));
    console.log(negativeFraction.toFixed(6));
    console.log(zeroFraction.toFixed(6));
}
