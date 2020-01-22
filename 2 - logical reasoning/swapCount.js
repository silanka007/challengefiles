function swapCount(inputArray){

    //validating inputArray is an instance of the Array
    if(!(inputArray instanceof Array)){
        return "Input must be of type Array";
    }

    //checking that all elements of input array is of type number
    for(let check = 0; check < inputArray.length; check++){
        if(typeof inputArray[check] != "number"){
            return "all elements of the array must be of type number";
        }
    }

    let highestNum, highestNumIndex, lowestNum, lowestNumIndex;
    let swapCounter = 0;

    //creating a copy of the original array;
    let initialInputArray = [...inputArray];

    //finding the maximum element of the array and its index -- using spread syntax and math functions
    highestNum = Math.max(...inputArray);
    highestNumIndex = inputArray.indexOf(highestNum);
    
    //try swapping the highest number to index 0
    for(let count = 0; count < inputArray.length; count++){
        if(highestNumIndex != 0){
            if(inputArray[0] < inputArray[highestNumIndex]){
                if(inputArray[highestNumIndex] > inputArray[highestNumIndex - 1]){
                    let temp = inputArray[highestNumIndex - 1];
                    inputArray[highestNumIndex - 1] = inputArray[highestNumIndex];
                    inputArray[highestNumIndex] = temp;
                    swapCounter ++;
                    highestNumIndex--;
                }
            }
        }
    }
    //finding the minimum element of the array and its index -- using spread syntax and math functions
    lowestNum = Math.min(...inputArray);
    lowestNumIndex = inputArray.indexOf(lowestNum);

    //try swapping the lowest number to index -1
    for(let count = 0; count < inputArray.length; count++){
        if(lowestNumIndex != (inputArray.length - 1)){
            if(inputArray[inputArray.length - 1] > lowestNum){
                if(inputArray[lowestNumIndex] < inputArray[lowestNumIndex + 1]){
                    let temp = inputArray[lowestNumIndex + 1];
                    inputArray[lowestNumIndex + 1] = inputArray[lowestNumIndex];
                    inputArray[lowestNumIndex] = temp;
                    swapCounter++;
                    lowestNumIndex++;
                }
            }
        }
    }
    return `
            Initial array: [${initialInputArray}]
            final array: [${inputArray}]
            swap count: ${swapCounter}
            
            `

}

console.log(swapCount([3,2,5,2,5,6,2]));
console.log(swapCount([2,7,5]));
console.log(swapCount([8,5,8,3,0,7,7,1]));
console.log(swapCount([-9, -1, 0]));
console.log(swapCount(["-3", "-1", 0]));
console.log(swapCount("hello"));