//Eloquent Javascript Challenges 
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
