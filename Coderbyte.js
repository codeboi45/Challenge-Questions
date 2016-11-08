//CoderByte Challenges

//1.Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

function FirstReverse(str) {
 var newString="";
  for(i= str.length -1 ;i >=0; i--){
      newString += str[i];
  }
  return newString;
};

// keep this function call here
FirstReverse(readline());

//2.Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4,
return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.

function FirstFactorial(num) {
	if (num ==0){
	return 1;
	}
	else {
  return num * FirstFactorial (num-1) ;
	}
}


// keep this function call here
FirstFactorial(readline());
