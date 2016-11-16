//1.Eloquent Javascript Challenges 
//Create a program that console logs this # diagram to the console.
#
##
###
####
#####
######
#######

var string = "1234567";
var pound = "#";

for (i= 0 ; i< string.length; i++){

	console.log(pound);
	pound = pound += "#";
};


//2.Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
//For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
//When you have that working, modify your program to print "FizzBuzz",
//for numbers that are divisible by both 3 and 5


for ( var i = 1; i<100; i++){

    if ( i % 3==0 && i %5 ==0) {
        console.log ("FizzBuzz")
    }
    else if ( i % 5==0) {
        console.log ( "Buzz")
}
else if ( i% 3==0){
    console.log ("Fizz")
}
else{ console.log (i)
}
}



//The previous chapter introduced the standard function Math.min that returns its smallest argument.
//We can do that ourselves now. 
//Write a function min that takes two arguments and returns their minimum.
// Your code here.

var min = function (numb1,numb2){
	return Math.min(numb1,numb2)
};

console.log (min(2,4));

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

