




// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).



var input= +prompt("1.Enter Number To Chech Charcter");

if(input == " " || input > 122 || input < 58){
    alert("1.Please Enter Valid Number");
}
else {
    if(input >= 65 && input <= 90){
        alert("The Charcter Is Uppercase");
    }
    else if (input >= 97 && input <=122 ){
        alert("The Character Is Lowecase")
        
    }
    else if (input >= 48 && input <=57){
        alert("The Character Is Number")
    }
    else if (input >= 58 && input <=64){
        alert("Please Enter Valid Number");
    }
}




//------------------------------------point 1 end----------------------------



// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.  && num2 === Number && !isNaN(num1) && !isNaN(num2)



var num1 = +prompt("2.Enter First Integer");
var num2 = +prompt("2.Enter Second Integer");
if(num1 === num2){
    alert("Both Integers are Equal" + num1);
}
else{ if (num1 > num2){
    alert("The Larger integer is: " + num1);
}else if(num1 < num2){
    alert("The Larger Integer is: " + num2);
}
else{alert("Please Enter Valid Integer");}}


//-------------------------------------------------point 2 end-------------------------------


// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.




 var number  = +prompt("3.Enter a number:"); 
 if (typeof number === 'number' && !isNaN(number)) {
     if (number > 0) {
         alert("The number is positive.");
     } else if (number < 0) {

         alert("The number is negative.");
     } else {

         alert("The number is zero.");
     }
 } else {
     alert("Please enter a valid number.");
 }


 //---------------------------------------------poiint 3 end--------------------------------




//  4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise


var character = prompt("4.Enter a single character:");
if (character === 'a' || character === 'A' || character === 'e' || character === 'E' || 
    character === 'i' || character === 'I' || character === 'o' || character === 'O' || 
    character === 'u' || character === 'U') {
    alert("The character is a vowel.");
} else if (character === '') {
    alert("You didn't enter anything.");
} else {
    alert("The character is not a vowel.");
}



//------------------------------------------point 4 end--------------------------------




// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

   var correctPassword = "rehan"; 
      var enteredPassword = prompt("5.Please enter your password:");

   if (enteredPassword === null || enteredPassword === "") {
       alert("Please enter your password.");
   } else if (enteredPassword === correctPassword) {
       alert("Correct! The password you entered matches the original password.");
   } else {
       alert("Incorrect password.");
   }


//------------------------------------------point 5 end----------------------------


// 6. This if/else statement does not work. Try to fix it:



var greeting;
var hour = +prompt("6.Enter Hour");
if(hour == " " || hour > 24){alert("Please Enter Valid Hour")}
else{if (hour < 18) {
greeting = "Good day";
alert(greeting)}
else {greeting = "Good evening"; alert(greeting)}}


//---------------------------------------------point 6 end-----------------






// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var time = +prompt("7.Enter The 24 Format Time");

if (time == " " || time > 2359){
    alert("Please Enter Your Time"); 
}
else {
    if(time >= 0000 && time < 1200){
        alert("Good Morning");
    } 
    else if(time >= 1200 && time < 1700){
        alert("Good Afternoon");
    }
    else if(time >= 1700 && time < 2100){
        alert("Good Evening");
    }
    else if(time >= 2100 && time <= 2359){
        alert("Good Night");
    }
    
}