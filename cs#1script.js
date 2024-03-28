// Casestudy#1

// Write a JavaScript function to get an array and to read the first element of an array.
//Check whether it is prime or not

function getArray(){
    const numbers = [2,5,3,9,3,4];
    var firstnum = numbers[0];

    function isPrime(firstnum){
        let result = true;
        if (firstnum <= 1){
            result = false;
        }
        for (i = 2; firstnum >= i*i; i++){
            if (firstnum % i === 0){
                result = false;
                break;
            }
        }
        if(result){
            console.log("It is a prime number");
        }
        else{
            console.log("It is not a prime number");
        }
    }isPrime(firstnum);
    
}getArray();
 

//Write a JavaScript program to find the most frequent item of an array

function findFrequentItem(anArray) {
    let mostFrequentItem;
    let maxCount = 0;
  
    for (let i = 0; i < anArray.length; i++) {
      let count = 0;
      for (let j = 0; j < anArray.length; j++) {
        if (anArray[i] === anArray[j]) {
          count++;
        }
      }
      if (count > maxCount) {
        maxCount = count;
        mostFrequentItem = anArray[i];
      }
    }
    console.log("Most frequent item:", mostFrequentItem);
  }
  
  const anArray = [1,3,"a",3,"b",1,5,6,"c","a","b","a",7];
  findFrequentItem(anArray);


//Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

for(var i=0; i<=15; i++){
  if (i % 2 == 0){
    console.log("Even");
  }
  else{
    console.log("Odd");
  }
}



//Write a JavaScript program to find the sum of squares of the elements of an array.

function sumOfSquare(newArray){
  var sum = 0;
  for (let i=0; i<newArray.length; i++){
    sum +=  Math.pow(newArray[i], 2);
  }
  console.log("Sum of squares = " + sum)
}

const newArray = [2, 4, 9, 10, 76];
sumOfSquare(newArray);