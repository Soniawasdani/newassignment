//Chapter 1
//TASK:1


alert("Hello Guys\n CHAPTER:1 THIS IS TASK 1")

//TASK:2

alert("Error!Please enter a valid password. \n CHAPTER:1 THIS IS TASK 2")

//TASK:3

alert("Welcome to JS Land. \nHappy coding! \n CHAPTER:1 THIS IS TASK 3")

//TASK:4
alert("Welcome to JS Land. \n CHAPTER:1 THIS IS TASK 4")
alert("Happy coding!  \n CHAPTER:1 THIS IS TASK 4")

//TASK:5
// 5. Generate the following message through browser’s developer console
// Note we can not save work of js on console window so iam writing steps
// Step:1
// we will open html file on browser
// Step2
// we will click inspect and click on console window
// Step3
// We will write alert fuction with the message and when we will enter message will be pop out.


///TASK:6

alert("Iam using Alert in this Html project!  \n CHAPTER:1  THIS IS TASK 6")





// Chapter 2


//TASK:1

var userName;


//TASK:2

var myName ="Sonia Kumari";



//TASK:3
var message;
 message = "Hello World \n CHAPTER:2 THIS IS TASK 3";
 alert(message)

//TASK:4

 var name = "john Doe";
var age = "15 Years old"
var certification = "Certified Mobile Application Development"

alert(name +"\n CHAPTER:2  THIS IS TASK 4")
alert(age +"\n CHAPTER:2  THIS IS TASK 4")
alert(certification +"\n CHAPTER:2  THIS IS TASK 4")


//TASK:5

var food = ["Pizza", "pizz", "piz","pi" ,"p"];
alert(food[0]+ "\n" +" " + food[0,1] + "\n" +" " + food[0,2] + "\n" +" " + food[0,3]+ "\n" +" " + food[0,4] +"\n CHAPTER:2  THIS IS TASK 5" );



//TASK:6

var email = "soniawasdani@gmail.com"
alert("My email address is" + " "+email +"\n  CHAPTER:2 THIS IS TASK 6" )



//TASK:7

var book = "A smarter way to learn javascript";
alert("Iam trying to learn from the book" + " "+book +"\n CHAPTER:2  THIS IS TASK 7" )


//TASK:8
document.write("<br> <br> CHAPTER:2 THIS IS TASK 8 <br> <br>")
var example = 'yay! I can write HTML content through javascript';
document.write(example+"<br><br>");




//TASK:9

var design ="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ";
alert(design +"\n  CHAPTER:2 THIS IS TASK 9")


// Chapter 3
//TASK:1

var age = 15;
alert("Iam"+" "+age + " " + "Years old" +"\n  CHAPTER:3 THIS IS TASK 1")

//TASK:2

var track;
track = 15;
alert("your visit number is "+ track + "times" +"\n  CHAPTER:3THIS IS TASK 2")

//TASK:3
document.write("<br> <br> CHAPTER:3 THIS IS TASK 3<br> <br>")
var birthYear = 1991;
document.write("<br> My birth year is"+ birthYear + "<br>" +"data is save in number"  + "<br> <br> <br>");


//TASK:4
document.write("<br> <br> CHAPTER:3 THIS IS TASK 4 <br> <br>")
var VisitorName ="John";
var Producttitle ="T.Shirts";
var Quantity = 5;
document.write("<br>"+VisitorName+ " " + "ordered" +" "+ Quantity + Producttitle + " "+ "on xyzClothing store" + "<br> <br> <br>");


// Chapter 4

//TASK:1

var number = [1,2,3];

//TASK:2


//5 legal variable name
var firstName = "sonia";
var lastName = "wasdani";
var $age = 30;
var Qualification = "Masters"
var _height = 6;





//Iam commenting illegal variable names

// var 1firstName = "sonia";
// var 3lastName = "wasdani";
// var 4age = 30;
// var 5Qualification = "Masters"
// var 6height = 6;


//TASK:3
document.write("<br> <br> CHAPTER:4  THIS IS TASK 3 ")
document.write("<br> <h1>“Rules for naming JS variables</h1>" +" Variable names can only contain numbers, $, and _. For example $my_1stVariable "+"<br> Variables must begin with a letter, $ or _. For example $name, _name or name"+"<br> Variable names are case sensitive"+" <br> Variable names should not be JS Keywords "+ "<br>  CHAPTER:4 THIS IS TASK 3")


   // chapter 5
//TASK:1

   document.write("<br> <br> CHAPTER:5  THIS IS TASK 1 <br> <br>")
    var num1 = 3;
    var num2 = 5;
    var result = num1+num2;

    document.write("SUM of"+" "  + num1 +" " +"and "+ num2 +" " +"is"+" " + result + "<br> ");

//TASK:2
    document.write("<br> <br> CHAPTER:5 THIS IS TASK 2 <br>")
    var num3 = 5;
    var num4 = 3;
    var resultmin = num3-num4;
    document.write("<br><br>  SUBTRACTION of"+" "  + num3 +" " +"and "+ num4 +" " +"is"+" " + resultmin + "<br> ");


    // Multiply
    var num5 = 5;
    var num6 = 3;
    var resultmul = num3*num4;
    document.write("<br><br>  MULTIPLICATION of"+" "  + num5 +" " +"and "+ num6 +" " +"is"+" " + resultmul + "<br> ");


    // Division

    var x = 8;
    var y = 2;
    var z = x / y
    document.write("<br><br>  DIVISION of"+" "  + x +" " +"and "+ y+" " +"is"+" " + z + "<br> ");

//Modulous
    var a = 10;
    var b= 3;
    var c = a % b
    document.write("<br><br>  Modulous of"+" "  + a +" " +"and "+ b+" " +"is"+" " + c + "<br> ");




//TASK:3
    document.write("<br> <br> CHAPTER:5 THIS IS TASK 3 <br>")
 var number1;

 document.write("<br> <br> Value after variable declaration is"+" "+number1 + "<br> ");

 number1 = 5;
 document.write("<br> <br> Initial value :"+" "+number1 + "<br> ");

 number1++;
 document.write("<br> <br> Value after increment is :"+" "+number1 + "<br>");

 var operation =number1++ + number1  ;
document.write("<br> <br> Value after addition is :"+" " +operation + "<br> ")

var decoperation =  --number1+ number1++  ;
document.write("<br> <br> Value after decrement is :"+" " +decoperation + "<br> ")

var decoperation =  number1++ - --number1  ;
document.write("<br> <br> Remainder is :"+" " +decoperation + "<br> ")

//TASK:4

document.write("<br> <br> CHAPTER:5 THIS IS TASK 4 <br>")
var ticket = 600;
var fivetick = ticket*5;
document.write("<br> <br> Total cost to buy 5 tickets to a movie is :"+" " +fivetick + "<br> ")


//TASK:5
document.write("<br> <br> CHAPTER:5 THIS IS TASK 5 <br>")
for(var i =1; i<=10; i++)
{

    document.write("<br><br>  4" + "x" + i + "="+ 4*i + "<br>")
    
}

//TASK:6

document.write("<br> <br>  CHAPTER:5 THIS IS TASK 6 <br>")
var Celsius = 25 ;
var Fahrenheit;

Fahrenheit = (Celsius *9/5)+32;

 document.write("<br>"+Celsius + " " + "is "+ " " + Fahrenheit)


var cel;
var far = 70;

cel = (far-32)*5/9;


 document.write("<br>"+far +" " + "is " + " " + cel)
 
//TASK:7


 document.write("<br> <br><br> CHAPTER:5 THIS IS TASK 7 ")
 document.write("<br> <h1> Shopping Cart</h1> <br>")
 
 
 var item1 = 650;
 var item2 = 100;
 var OQ1 = 3;
 var OQ2 = 7;
 var Shippingcharges = 100;
 var totalcost = item1*3 + item2*7 + Shippingcharges;
 
 document.write("Price of item 1 is" + " " + item1 +"<br><br> ")
 document.write("Quantity of item 1 is" + " " +OQ1 +"<br><br> ")
 
 document.write("Price of item 2 is" + " " + item2+"<br><br> " )
 document.write("Quantity of item 1 is" + " " +OQ2 +"<br><br> ")
 
 document.write("Shipping charges is" + " " +Shippingcharges +"<br><br> ")
 
 document.write("Total cost s is" + " " +totalcost +"<br><br> ")



 //TASK:8

 document.write("<br> <br> CHAPTER:5 THIS IS TASK 8 <br>")
document.write("<br> <br><h1>Marks Sheet</h1> <br>")



var totaMarks = 980;
var obtainedMarks = 804;
var percentage = obtainedMarks*100/totaMarks;

document.write("Total Maks :" + " " + totaMarks + "<br>"   +"Obtained Marks :" + " " + obtainedMarks + "<br>"+"Percentage :" + " " + percentage + "%")



//TASK:9

document.write("<br> <br><br> CHAPTER:5 THIS IS TASK 9 <br>")
document.write("<br> <br><h1> Curency in PKR</h1> ")

var Dollar =  104.80 ;
var  Riyals =  28 ;
var pkr = Dollar*10 + Riyals*25;

document.write("Total currency in PKR:"+ " " + pkr +"<br>")

//TASK:10


document.write("<br> <br> CHAPTER:5 THIS IS TASK 10<br>")

 var firstNum = 5;
var resulltt = firstNum+5*10/2;

document.write("Result is:"+ " " + resulltt+"<br>");

//TASK:11


document.write("<br> <br><br> CHAPTER:5 THIS IS TASK 11 ")
document.write("<br> <h1> Age Calculator</h1> <br>")
var cuurentYear = 2016;
var  birthYear = 1992;
var age = cuurentYear-birthYear;

document.write("Current Year is" + " " +cuurentYear +"<br>" +"Birth Year is" + " "+birthYear+"<br>" +"Your age is:"+ " " + age+"<br>");


//TASK:12


document.write("<br> <br> CHAPTER:5 THIS IS TASK 12")
document.write("<br> <h1> The Geometrizer</h1> <br>")
var radius = 20;
var radius2 = radius+radius;
var  circumference = 2*3.142*radius
var area = 3.142*radius2;
document.write("Radius of a circle is" + " " +radius +"<br>" +"The Circumference is" + " "+circumference+"<br>" +"The area is:"+ " " + area+"<br>");



//TASK:13

document.write("<br> <br> CHAPTER:5 THIS IS TASK 13")
   document.write("<br> <h1> The Lifetime Supply Calculator</h1> <br>")

var snack = "chips";
   var Curenttage = 15;
var  maximumAge = 65;
var perDay = 3;
var totalLife = perDay*Curenttage - perDay*maximumAge;
document.write("Favouite snack is" + " " +snack +"<br>" +"Current age is" + " "+Curenttage+"<br>" +"Estimated Maximum age:"+maximumAge+ " " +"<br>" +"Amount of snacks per day:"+ perDay + " " +"<br>" +"you will need:"+totalLife +"chip to last you until the ripe old age of "+maximumAge +"<br>");


//chapter6-9

//TASK:1
document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 1 <br> <br>")

var a  = 10;


document.write("Result"+ " <br>"+"The value of a is" + " " +a +"<br>");
var b =++a;

document.write("The value of ++a is:"+ b+ "<br>"+"Now the value of a is:"  +a +"<br>");

var c = a++;

document.write("The value of a++ is:"+ c +"<br>"+"Now the value of a is:"  + a +"<br>");

var d = --a;
document.write("The value of --a is:"+ d +"<br>"+"Now the value of a is:"  + a +"<br>");

var e = a--;
document.write("The value of a-- is:"+ e +"<br>"+"Now the value of a is:"  + a +"<br>");


//TASK:2
document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 2 <br><br> ")


var f= 2;
 var g = 1;
 var result =   --f - --g + ++g + g--;
                 
 document.write("f is:"+ f +"<br>"+"g is:"  + g +"<br>"+"result is"+result+"<br>");


//TASK:3

 document.write("<br> <br> CHAPTER:6-9 TASK 3 is in alert function <br><br> ")

 var userName = prompt("Enter your name");
 alert("hello" + " " +userName);

//TASK:5

 document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 5 <br><br> ")

 var i = prompt("Enter your number 2 to 10 for table")

if(i>=2 && i < 3){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  2" + "x" + i + "="+ 2*i + "<br>")
        
    }
}


else if(i>=3 && i <4){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  3" + "x" + i + "="+ 3*i + "<br>")
        
    }
}

else if(i>=4 && i <5){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  4" + "x" + i + "="+ 4*i + "<br>")
        
    }
}

else if(i>=5 && i <6){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br> 5" + "x" + i + "="+ 5*i + "<br>")
        
    }
}

else if(i>=6 && i <7){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  6" + "x" + i + "="+ 6*i + "<br>")
        
    }
}
else if(i>=7 && i <8){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  7" + "x" + i + "="+ 7*i + "<br>")
        
    }
}
else if(i>=8 && i <9){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  8" + "x" + i + "="+ 8*i + "<br>")
        
    }
}

else if(i>=9 && i <10){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  9" + "x" + i + "="+ 9*i + "<br>")
        
    }
}
else if(i>=10 && i <10){

    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  10" + "x" + i + "="+ 10*i + "<br>")
        
    }
}

else   {
    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  5" + "x" + i + "="+ 5*i + "<br>")
        
    }

}


//TASK:6

document.write("<br> <br> CHAPTER:6-9 THIS IS TASK 6 <br><br> ")
document.write("<br> <br> Subject total marks Obtained Marks Percentage <br><br> ")
    


   

var english = prompt("Enter your Subject1");
var urdu = prompt("Enter your Subject2");

var maths= prompt("Enter your Subject3");



var  subjectMarks = 100;
var threesubjectmarks = 300;
var obtainedMarks1 = +prompt("Enter Your English Marks")

var obtainedMarks2 = +prompt("Enter Your History Marks")
var obtainedMarks3 = +prompt("Enter Your Maths Marks")


var totalMarksSubjects = obtainedMarks1+obtainedMarks2+obtainedMarks3 ;
var percentage =  totalMarksSubjects *100/threesubjectmarks;

document.write(english + " " + " " + subjectMarks +  " " +" "+obtainedMarks1 + " " +  " " +" "+obtainedMarks1*100/100+"%"+"<br> <br>")
document.write(urdu + " " + " " + subjectMarks +  " " +" "+obtainedMarks3 + " " +  " " +" "+obtainedMarks3*100/100+"%" +"<br> <br>")

document.write(maths + " " + " " + subjectMarks +  " " +" "+obtainedMarks3 + " " +  " " +" "+obtainedMarks3*100/100+"%" +"<br> <br>")

document.write(threesubjectmarks + " " + " " + " "+ totalMarksSubjects+ " " + " "+ percentage+"%" +"<br> <br>");


//chapter9-11

//TASK:1

document.write("<br> <br> chapter9-11 THIS IS TASK 1 <br><br> ")



var city = prompt("enter your city");
if (city === "karachi")
{
document.write("Welcome to karachi")
}
else
{
    document.write("Not Welcome to city of lights")
}



// TASK 2

document.write("<br> <br> chapter9-11 THIS IS TASK 2 <br><br> ")

var gender = prompt("enter your gender");
if (gender === "female")
{
document.write("Good Morning Ma’am")
}
else if(gender === "male")
{
    document.write("Good Morning Sir")
}
else
{
    document.write("Good Morning ")
}



// TASK 3


document.write("<br> <br> chapter9-11 THIS IS TASK 3 <br><br> ")

var signalColor = prompt("enter your Color");
if (signalColor === "red")
{
document.write("Must Stop")
}
else if(signalColor === "yellow")
{
    document.write("Ready to move")
}
else if(signalColor === "green")
{
    document.write("Move now ")
}
else
{
    document.write("Enter your color")
}



// TASK 4


document.write("<br> <br> chapter9-11 THIS IS TASK 4 <br><br> ")

var fuel = prompt("enter your remaining fuel");
if (fuel <= 0.25)
{
    document.write("Please refill the fuel in your car")
}
else{
    document.write("You have enough fuel")
}



// TASK 5


document.write("<br> <br> chapter9-11 THIS IS TASK 5 <br><br> Result in alert ")
var a = 4; 
if (++a === 5)
{ alert("given condition for variable a is true"); }   

 var b = 82; 
 if (b++ === 83)
 { alert("given condition for variable b is true"); }  
 else{
    alert("given condition for variable b is not true"); 
 }

  var c = 12; 
  if (c++ === 13)
  { 
      alert("condition 1 is true");
     } 
  if (c === 13)
  { 
      alert("condition 2 is true");
     } 
     if (++c < 14)
     { 
         alert("condition 3 is true"); 
        } 
     if(c === 14)
     { 
         alert("condition 4 is true");
         } 

var materialCost = 20000;
 var laborCost = 2000;
  var totalCost = materialCost + laborCost; 
  if (totalCost === laborCost + materialCost)
  { 
      alert("The cost equals"); 
    } 

    if (true)
    { 
        alert("True");
     } 
     if (false)
     { 
         alert("False");
         }    
    if("car" < "cat")
    { 
        alert("car is smaller than cat"); 
    }



// TASK 6

    document.write("<br> <br> chapter9-11 THIS IS TASK 6 <br><br> ")
  



    var english = +prompt("Enter your Subject1 Marks");
    var urdu = +prompt("Enter your Subject2 Marks");
    
    var maths= +prompt("Enter your Subject3 Marks");
    var totalMarks= prompt("Enter your total marks");
    var obtainedMarks = english+urdu+maths;

    var percentage = obtainedMarks*100/totalMarks;

document.write("Total Marks"+ " " + totalMarks+ "<br>")
document.write("Marks Obtained"+ " " + obtainedMarks +"<br>")








  

    if(percentage >= 80 && percentage<= 100){
        document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :A-ONE"+"<br>")
        document.write("Remarks :Exellent"+"<br>")
}
else if(percentage >= 70 && percentage<= 80){
    document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :A"+"<br>")
        document.write("Remarks :Good"+"<br>")
}
else if(percentage >= 60 && percentage<= 70){
    document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :B"+"<br>")
        document.write("Remarks :You need to improve"+"<br>")
}
else if(percentage >= 50 && percentage<= 60){
    document.write("Percentage"+ " " + percentage +"%"+"<br>")
        document.write("Grade :Fail"+"<br>")
        document.write("Remarks :sorry"+"<br>")
}

else{
    alert("incorrect number")
}


// TASK 7


document.write("<br> <br> chapter9-11 THIS IS TASK 7 <br><br> Result in alert ")

var secretNo = 6;
var yourGuess = prompt("Enter your number");

if (yourGuess == 6)
{

    alert("Bingo! Correct answer")


}
 else if (yourGuess == ++secretNo){

    alert("Close enough")


 }

 else {

    alert("oops sorry")

 }



// TASK 8

 document.write("<br> <br> chapter9-11 THIS IS TASK 8 <br><br>Result in alert  ")
var givenNo = prompt("enter your number")

if(givenNo%3 == 0 ){

    alert("yes it is divisible")

}
else{
    alert("no it is not divisible")

}


// TASK 9

document.write("<br> <br> chapter9-11 THIS IS TASK 9 <br><br> Result in alert  ")

var checkNo = prompt("Enter Your Number")

if(checkNo%2 == 0){

alert("Even No")


}

else if (checkNo%3 == 0){

    alert("Odd No")


}


// TASK 10

document.write("<br> <br> chapter9-11 THIS IS TASK 10 <br><br> ")

var  temperature = prompt("Enter your Temprature")



    if(temperature >= 40 ){
      
        document.write("It is too hot outside."+"<br>")
        
}
else if(temperature >= 30 ){
   
        document.write("The Weather today is Normal."+"<br>")
}
else if(temperature >= 20 )
{

        document.write("Today’s Weather is cool"+"<br>")
}
else if(temperature >= 10  )
{

        document.write("OMG! Today’s weather is so Cool"+"<br>")
}


else{
   
    document.write("Enrtr no"+"<br>")
}



// TASK 11

document.write("<br> <br> THIS IS TASK 11 <br><br> ")

var num1 = +prompt("Enter your first number");
var num2 = +prompt("Enter your second number");
var Operation = prompt("Enter your operator")

if (Operation == "+")
{

    
alert(num1+num2)

}
if (Operation == "-")
{

    
alert(num1-num2)

}
if (Operation == "*")
{

    
alert(num1*num2)

}
if (Operation == "/")
{

    
alert(num1/num2)

}
if (Operation == "%")
{

    
alert(num1%num2)

}


else{
   
    document.write("Enrtr no"+"<br>")
}




//Chapter 12-13

//TASK:1


document.write("<br> <br> chapter12-13 THIS IS TASK 1 <br><br>Result in alert  ")


var alphabet = prompt("Enter your word")

if(alphabet >= "A" && alphabet <= "Z"  ){

    alert("This is uppercase")

}

else if (alphabet >= "a" && alphabet <= "z")
{
    alert("This is lowercase")

}
else{
    alert("is not an aplhabetic character\n")
}








//TASK:2

document.write("<br> <br> chapter12-13 THIS IS TASK 2<br><br>Result in alert  ")


var firstNum = prompt("Enter your 1st number");
var secondNum = prompt("Enter your 2nd number");

if (firstNum > secondNum){

alert(firstNum)

}
else if(secondNum > firstNum)

{

    alert(secondNum)
}

else if (firstNum === secondNum){

    alert("equal")
}
else{

    alert("put correct num")
}















//TASK:3

document.write("<br> <br> chapter12-13 THIS IS TASK 3 <br><br>Result in alert  ")


var inpNumber = prompt("Enter your number")

if(inpNumber > 0 && inpNumber <=9){
    alert("positive")


}
else if (inpNumber < 0){
    alert("negative")


}

else if (inpNumber == 0){
    alert("zero")


}
else   {

    alert("Enter corect number")
    
    }


















//TASK:4
document.write("<br> <br> chapter12-13 THIS IS TASK 4 <br><br>Result in alert  ")


var text = prompt("enter word")
var vowel = ["A","E","I","O","a","e"]
  for (var i = 0; i < text.length; i++)
   {    if (text.slice(i, i + 1) === "a" ||text.slice(i, i + 1) === "e"||text.slice(i, i + 1) === "i"||text.slice(i, i + 1) === "o" ||text.slice(i, i + 1) === "u" ||text.slice(i, i + 1) === "A" ||text.slice(i, i + 1) === "E" ||text.slice(i, i + 1) === "I" ||text.slice(i, i + 1) === "O" ||text.slice(i, i + 1) === "U" )
    {   
        alert("vowel found")   
         } 
         } 














//TASK:5

document.write("<br> <br> chapter12-13 THIS IS TASK 5 <br><br>Result in alert  ")


var paswd = "sonia" ;     
 
var password = prompt("Enter paswd")

  if(password=== "sonia"){

alert("Correct")
}
else if (password !== "sonia" && password !== ""){

alert("Incorrect password")
}

else if (password === ""){

  alert("Please enter your password")
}






//TASK:6
document.write("<br> <br> chapter12-13 THIS IS TASK 6 <br><br>Result in alert  ")


var paswd = "sonia" ;     
 
var password = prompt("Enter paswd")

  if(password=== "sonia"){

alert("Correct")
}
else if (password !== "sonia" && password !== ""){

alert("Incorrect password")
}

else if (password === ""){

  alert("Please enter your password")
}

//TASK:7

document.write("<br> <br> chapter12-13 THIS IS TASK 7<br><br>Result in alert  ")

var clock = +prompt("Enter your time");
       
        
        if(clock >= 0000 && clock<= 1200)
        {
            alert("Good morning")
            }  
         else if (clock >= 1200 && clock<= 1700)
            {
                alert("Good afternoon")
                }  
                else if (clock >= 1700 && clock<= 2100)
                {
                    alert("Good evening")
                    }  
                    else if (clock >= 2100 && clock<= 2359)
                    {
                        alert("Good night")
                        }  
                    else {

                        alert("have a nice day")
                    }




//Chapter14-16
//TASK:1

var studentNames = {
    
};

//TASK:2
 var studentsnames = [];


//TASK:3
var a = ["sonia","masu","honey"];




//TASK:4
var b =[1,2,3,4];




//TASK:5
//Bollean array
var a =[true,false];





//TASK:6

 //Mixed arrays
 var fruits = ["apple",1];





//TASK:7
document.write("<br> Chatpter 14-16 TASK 7 <br><br> ")
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("1"+qualifications[0]+"<br>"+"2"+qualifications[1]+"<br>"+"3"+qualifications[2] +"<br>"+"4"+qualifications[3] +"<br>"+"5"+qualifications[4] +"<br>"+"6"+qualifications[5] +"<br>"+"7"+qualifications[6] +"<br>"+"8"+qualifications[7]);




//TASK:8
document.write("<br><br> Chatpter 14-16 TASK 8 <br>")
var students = ["Michael","John","Tonny"];
var scores = [320,230,480];

document.write("<br>Score of"+" " +students[0] +" "+"is" +scores[0]+" "+".percentage:64%");
document.write("<br>Score of"+" " +students[1]+" " +"is" +scores[1]+" "+".percentage:46%");
document.write("<br>Score of"+" " +students[2] +" "+"is" +scores[2]+" "+".percentage:96%");





//TASK:9

document.write("<br><br> Chatpter 14-16 TASK 9 <br>")
var color = ["red","pink","black"];




var startColor = prompt("what color would you add at beginning");
var endColor = prompt("what color would you add at end");
color.unshift(startColor)  //we can add multiple value by adding coma



color.unshift("mergenda","gray")

color.shift()




color.pop();
color.push(endColor)

var userChoice = prompt("your index number");
var userchoicecolor = prompt("your color");
var deleteColorindex  = prompt("your index number for delete the color")


color[userChoice] = userchoicecolor;

delete color[deleteColorindex];




document.write(color);







//TASK:10


document.write("<br><br> Chatpter 14-16 TASK 10 <br>")

var Marks = [320,230,480,120];


document.write("Score of students" + " "+ Marks.sort())
document.write("Orderd score of students" + " "+ Marks.sort())

//Task11
document.write("<br><br> Chatpter 14-16 TASK 11<br>");

var city = ["KARACHI","LAHORE","MULTAN","MUMBAI","PERTH"];

var  selectedCities = city.slice(2,4);


document.write("city List" + " <br>"+ city + " <br>");
document.write("Selected city List" + "  <br>"+ selectedCities);



//Task 12
document.write("<br><br> Chatpter 14-16 TASK 12<br>");
var arr = ["This", " is ", " my " , "cat"];

document.write(arr.join(" ")+"<br>");



//Task13
document.write("<br><br>Chatpter 14-16  TASK 13<br>");

var computerDevices = ["Keyboard","mouse","printer","monitor"];
document.write("Out<br> "+computerDevices.shift(0)+"<br>"+"Out<br> "+computerDevices.shift(1)+"<br>"+"Out<br> "+computerDevices.shift(2)+"<br>"+"Out<br> "+computerDevices.shift(3))


//Task14
document.write("<br><br>Chatpter 14-16  TASK 14<br>");

var computerDevices = ["Keyboard","mouse","printer","monitor"];

document.write(computerDevices.reverse()+"&nbsp");

//Task15






//CHAPTER17-20

// //Task1

var data = [
    [],
    [],
    []

];

// //Task2
document.write("<br><br>Chatpter 17-20  TASK 2<br>");

var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]

];

document.write(matrix[0]+"<br>"+ matrix[1]+"<br>"+ matrix[2]);



//Task3

document.write("<br><br>Chatpter 17-20  TASK 3<br>");

var counting = [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8],
    [9],
    [10]


];

document.write(counting[0]+"<br>"+ counting[1]+"<br>"+counting[2]+"<br>"+counting[3]+"<br>"+counting[4]+"<br>"+counting[5]+"<br>"+counting[6]+"<br>"+counting[7]+"<br>"+counting[8]+"<br>"+counting[9]);



//Task4

document.write("<br><br>Chatpter 17-20  TASK 4<br>");


var i = prompt("Enter your number 2 to 10 for table");
var length = prompt("Enter your number 2 to 10 for table");

if(i>=2 && i < 3){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  2" + "x" + i + "="+ 2*i + "<br>")
        
    }
}


else if(i>=3 && i <4){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  3" + "x" + i + "="+ 3*i + "<br>")
        
    }
}

else if(i>=4 && i <5){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  4" + "x" + i + "="+ 4*i + "<br>")
        
    }
}

else if(i>=5 && i <6){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br> 5" + "x" + i + "="+ 5*i + "<br>")
        
    }
}

else if(i>=6 && i <7){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  6" + "x" + i + "="+ 6*i + "<br>")
        
    }
}
else if(i>=7 && i <8){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  7" + "x" + i + "="+ 7*i + "<br>")
        
    }
}
else if(i>=8 && i <9){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  8" + "x" + i + "="+ 8*i + "<br>")
        
    }
}

else if(i>=9 && i <10){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  9" + "x" + i + "="+ 9*i + "<br>")
        
    }
}
else if(i>=10 && i <10){

    for(var i =1; i<=length; i++)
    {
    
        document.write("<br><br>  10" + "x" + i + "="+ 10*i + "<br>")
        
    }
}

else   {
    for(var i =1; i<=10; i++)
    {
    
        document.write("<br><br>  5" + "x" + i + "="+ 5*i + "<br>")
        
    }

}


//Task5

document.write("<br><br>Chatpter 17-20  TASK 5<br>");
var fruits = ["apple","banana","mango","orange","strawbery"]; 

for(var j =0; j<=fruits.length-1; j++)
{

    document.write(fruits[j]+"<br>");
  
}
document.write("<br><br>  Element at index 0" + "is" + " "+ fruits[0]+ "<br>")
  document.write("<br><br>  Element at index 1" + "is" +" "+ fruits[1]+  "<br>")
  document.write("<br><br>  Element at index 2" + "is" + " "+fruits[2]+  "<br>")
  document.write("<br><br>  Element at index 3" + "is" + " "+fruits[3]+  "<br>")
  document.write("<br><br>  Element at index 4" + "is" + " "+fruits[4]+  "<br>")



  //Task6
  document.write("<br><br>Chatpter 17-20  TASK 6<br>");
   var countingg = [
        [1],
        [2],
        [3],
        [4],
        [5],
        [6],
        [7],
        [8],
        [9],
        [10]
    
    
    ];
    
    document.write("<h3>Counting</h3>"+"<br>"+countingg + "<br>");
    document.write("<h3>Reverse Counting</h3>"+"<br>"+countingg.reverse()+ "<br>");
  document.write("<h3>Even</h3>")  
    for(k = 0; k<21;k= k+2){

        document.write([k]+"&nbsp");
    }
    document.write("<h3>Odd</h3>")  
    for(l = 1; l<20;l= l+2){

        document.write([l]+"&nbsp");
    }
    document.write("<h3>Series</h3>")  
    for(k = 2; k<21;k= k+2){

        document.write([k]+"k"+"&nbsp");
    }

    //task7
    document.write("<br><br>Chatpter 17-20  TASK 7<br>");
   var  A = ["cake", "apple" ,"pie", "cookie", "chips", "patties"] 
var user = prompt("welcome to ABC Bakery.What do you want to order sir/mam?")
   if(A[0]==user||A[1]==user||A[2]==user||A[3]==user||A[4]==user){

document.write(A[0] +"is available at index"+A.indexOf(user))

   }
   else{

    document.write("We are sorry pstery is not available in our bakery")
   }

   
   //Task8
   document.write("<br><br>Chatpter 17-20  TASK 8<br>");
   var B = [24,53,78,91,12]
   document.write("The largest number is"+Math.max.apply(null,B)+"<br><br>");

   //Task9
   document.write("<br><br>Chatpter 17-20  TASK 9<br>");
   document.write("The smallest number is"+Math.min.apply(null,B));



//    Task 10
document.write("<br>")
for(t = 5; t<101;t= t+5){

    document.write([t]+"&nbsp");
}










// //class21-25
// //TASK1
document.write("<br><br><h2>TASK1</h2><br><br>");
var firstName = prompt("Enter your Firstname");
var lasttName = prompt("Enter your lastname");
var fullName = firstName+lasttName;

document.write("Hello"+" "+fullName);


// //TASK2
document.write("<br><br><h2>TASK2</h2><br><br>");
var favMobile = prompt("your fav mobile");

document.write("My favourite phone is"+" "+favMobile);
document.write("<br><br>Lenght of string"+" "+favMobile.length);

//TASK3

document.write("<br><br><h2>TASK3</h2><br><br>");
var nation  = "pakistani";


document.write("<br><br>String"+" "+nation);
document.write("<br><br>Index of 'n':"+" "+nation.indexOf("n"));


// //TASK4
document.write("<br><br><h2>TASK4</h2><br><br>");
var word = "Hello world";
document.write("<br><br>String"+" "+word);
document.write("<br><br>Index of 'l':"+" "+word.lastIndexOf("l"));

// //TASK5

document.write("<br><br><h2>TASK5</h2><br><br>");
var nation  = "pakistani";


document.write("<br><br>String"+" "+nation);
document.write("<br><br>Index of 'i':"+" "+nation.charAt(3));


// TASK6
document.write("<br><br><h2>TASK6</h2><br><br>");

var firstName = prompt("Enter your Firstname");
var lasttName = prompt("Enter your lastname");
var fullName = firstName+lasttName;

document.write("Hello"+" "+fullName);


// // TASK7
document.write("<br><br><h2>TASK7</h2><br><br>");


var city = "Hyderabad";
var n = city.replace("Hyder","Islam");

document.write("<br>"+n);

// TASK8
document.write("<br><br><h2>TASK8</h2><br><br>");

var message = "Ali and Sami are best friends. They play cricket and football together."; 
var change = message.replace("and","&");

document.write("<br>"+change);


// // TASK9
document.write("<br><br><h2>TASK9</h2><br><br>");

var string = "472";
var stringToNum = parseInt("472");
console.log(stringToNum)
document.write("<br>Value"+string+"<br>"+"Type : String");
document.write("<br>Value"+stringToNum+"<br>"+"Type : number");


// // TASK10
document.write("<br><br><h2>TASK10</h2><br><br>");


var userInput = prompt("your fav dryfruit");
document.write(userInput.toUpperCase());


// TASK11
document.write("<br><br><h2>TASK11</h2><br><br>");

var favSubject = prompt("your fav subject");

var firstWord = favSubject[0].toUpperCase();
var lastText =  favSubject.substring(1);

document.write(firstWord+lastText)


// // TASK12
document.write("<br><br><h2>TASK12</h2><br><br>");
var num = 35.36 ;
var string = num.toString();

document.write("Number"+" "+num+"<br>");

document.write("Result"+" "+string);


// TASK13
document.write("<br><br><h2>TASK13</h2><br><br>");

var match = false;


var yourName = prompt("Enter your name");

for(i=0; i<yourName.length; i++) {
    var n = yourName.charCodeAt(i);

if(n >= 33 && n<= 64 ){

    match = true;
alert("please enter valid username")

}

}



if (match=false){

    alert("saved")
}



// TASK14
document.write("<br><br><h2>TASK14</h2><br><br>");

var user = prompt("welcome to ABC Bakery.What do you want to order sir/mam?");
user = user.toLowerCase();


var A = ["cake", "apple" ,"pie", "cookie", "chips", "patties"] 
if(A.indexOf(user) !== -1){

    document.write(user +" "+"is available at index"+" "+A.indexOf(user))
    
       }
       else{
    
        document.write("We are sorry"+" " +user+" "+ "is not available in our bakery")
       }
    

// TASK15
document.write("<br><br><h2>TASK15</h2><br><br>");

var paswd = prompt("Enter your password");
if(paswd.charCodeAt() >=65 && paswd.charCodeAt() <=122 )
{
    
if(paswd.charCodeAt(0) !=0 || paswd.charCodeAt(0) !=1 | paswd.charCodeAt(0) !=2 | paswd.charCodeAt(0) !=3| paswd.charCodeAt(0) !=4 | paswd.charCodeAt(0) !=5 | paswd.charCodeAt(0) !=6 | paswd.charCodeAt(0) !=7 | paswd.charCodeAt(0) !=8 | paswd.charCodeAt(0) !=9){

if(paswd.length === 6){


    alert("ok")

}
   
else{

    alert("atleast 6 characters")
}

}

}

else{

    alert("enter a valid password")
}





// TASK16
document.write("<br><br><h2>TASK16</h2><br><br>");


var university = "University of Karachi"; 
var arr = university.split("");

for(i=0; i<arr.length; i++){

document.write(arr[i]+"<br>")

}

// TASK17
document.write("<br><br><h2>TASK17</h2><br><br>");

var userinput = prompt("Enter your word");

var indexnum = userinput.charAt(userinput.length-1)

document.write("Userinput:"+" "+userinput+"<br>");
document.write("Last character of input:"+" "+indexnum);

// TASK18
document.write("<br><br><h2>TASK18</h2><br><br>");

// var text = "The quick brown fox the jumps over the lazy dog";
// text = text.toUpperCase
// var count = (text.match(/The/g) || []).length;
// console.log(count);




var temp = "The quick brown fox  jumps over the lazy dog";
temp = temp.toLowerCase()
var count = (temp.match(/the/g)  || []).length;
alert(count);




// Chapter26-30

// TASK1
document.write("<br><br><h2> Chapter26-30 TASK1</h2><br><br>");

var userNumber = prompt("Enter positive number");
document.write(userNumber+"<br>");
document.write(Math.round(userNumber)+"<br>");
document.write(Math.floor(userNumber)+"<br>");
document.write(Math.ceil(userNumber)+"<br>");


// TASK2
// document.write("<br><br><h2> Chapter26-30 TASK2</h2><br><br>");

var userNumber = prompt("Enter negative number");
document.write(userNumber+"<br>");
document.write(Math.round(userNumber)+"<br>");
document.write(Math.floor(userNumber)+"<br>");
document.write(Math.ceil(userNumber)+"<br>");


// TASK3
document.write("<br><br><h2> Chapter26-30 TASK3</h2><br><br>");

var userNumber = prompt("Enter your number it will convert into absolute number");
var abs = Math.abs(userNumber);


document.write("The absolute value of"+" "+userNumber+ " "+ "is"+abs );



// TASK4
document.write("<br><br><h2> Chapter26-30 TASK4</h2><br><br>");


var dice = Math.random()*7
var diceFloor = Math.floor(dice)
var dice2 = Math.random()*7
var diceFloor2 = Math.floor(dice2)

document.write("Random device value "+diceFloor2+"<br>");

document.write("Random device value "+diceFloor);




// // TASK5
document.write("<br><br><h2> Chapter26-30 TASK5</h2><br><br>");


var headUser = "heads";
var tailUser = "tails";


var random = Math.random()*3;
var floor = Math.floor(random);


if(floor === 2){

document.write(floor+" <br>"+"Random coin value heads")



}

else if (floor === 1){

    document.write(floor+" <br>"+"Random coin value tails")

}
else{
    document.write(floor+" <br>"+"Tie")

}

// // TASK6
document.write("<br><br><h2> Chapter26-30 TASK6</h2><br><br>");


var rand  = Math.random()*101
var randFloor = Math.floor(rand);

document.write("Random number between 1 and 100:"+" "+randFloor)




// // TASK7
document.write("<br><br><h2> Chapter26-30 TASK7</h2><br><br>");

var weight = prompt("Enter your weight in Kg");
var Result = parseFloat(weight);

document.write(Result)


// // TASK8
document.write("<br><br><h2> Chapter26-30 TASK8</h2><br><br>");

var yourGuess = prompt("Enter your number");
var secretNo = Math.random()*10;
var secFlor = Math.floor(secretNo)


if (yourGuess == secFlor)
{

    alert("Bingo! Congratulations")


}
 

 else {

    alert("Try again")
 }


 document.write("<br>"+secFlor)


 //Chapter31-34

 
// TASK1
document.write("<br><br><h2> Chapter31-34 TASK1</h2><br><br>");


var currentDate = new Date();
document.write(currentDate);

// // TASK2
document.write("<br><br><h2> Chapter31-34 TASK2</h2><br><br>");

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();

document.write("Current month :" + monthNames[d.getMonth()]);

// TASK3
document.write("<br><br><h2> Chapter31-34 TASK3</h2><br><br>");

var a = new Date();
var b  = a.toString();
var c = b.slice(0,3);

document.write("Today is "+" "+c);


// // TASK4
document.write("<br><br><h2> Chapter31-34 TASK4</h2><br><br>");


var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 
var d = new Date();



if(dayNames[d.getDay()] === "Sat"||dayNames[d.getDay()] === "Sun"){

alert("It’s Fun day")

}
else{
    alert("It’s boring day")



}


// // TASK5
document.write("<br><br><h2> Chapter31-34 TASK5</h2><br><br>");

var dates = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
var d = new Date();
document.write(dates[d.getDate()])
if(dates[d.getDate()] <=15 && dates[d.getDate()] >=0){

    alert("First fifteen days of the month")
    
    }
    else if(dates[d.getDate()] <=30 && dates[d.getDate()] >=16){
        alert("Last days of the month")
    
    
    
//     }


//     // TASK6
document.write("<br><br><h2> Chapter31-34 TASK6</h2><br><br>");

var minutes = new Date();
var minMili = minutes.getTime();

var minutesconvert = minMili/(1000*60*60)

document.write("Current Date:"+minutes+"<br>");
document.write("Elapsed milisecondsince january 1 ,1970:"+minMili+"<br>");
document.write("Elapsed minutes since january 1 ,1970:"+minutesconvert+"<br>");


//     // TASK7
    document.write("<br><br><h2> Chapter31-34 TASK7</h2><br><br>");
    var hours=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
       var d =  new Date();
       
       if(hours[d.getHours()] >=0 && hours[d.getHours()] <=12){

        alert("am")
        
        }
        else if(hours[d.getHours()] <=13 && hours[d.getHours()] > 24){
            alert("pm")
        
        
        
        }

//          // TASK8
    document.write("<br><br><h2> Chapter31-34 TASK8</h2><br><br>");
    var laterDate = new Date("December 31,2020");
    document.write("LaterDate:"+laterDate);


//     // TASK9
    document.write("<br><br><h2> Chapter31-34 TASK9</h2><br><br>");
    var date1 = new Date("05/18/2020"); 
    var date2 = new Date("05/18/2015"); 
    var Difference_In_Time =  date1.getTime()-date2.getTime() ; 
    var Difference_In_Days = Difference_In_Time / (1000 * 360 * 24); 
    document.write(Difference_In_Days+"days have passed <br>" ); 

// // TASK10

document.write("<br><br><h2> Chapter31-34 TASK10</h2><br><br>");
var date1 = new Date("January 1,2015"); 
var datmili = date1.getTime();
var date2 = new Date("Decenber 5,2015");
var datmili2 = date2.getTime();
var Difference_In_Time =  datmili2-datmili; 
var Difference_In_Days = Difference_In_Time / (1000*60);

document.write(Difference_In_Days+ "<br>" ); 






  
//  // TASK11
 document.write("<br><br><h2> Chapter31-34 TASK11</h2><br><br>");


 var d = new Date();
 var e  = new Date();
 d.setHours(4);
 document.write("1 hour ago,it was:"+e+"<br>")
document.write("Current date:"+d+"<br>")



// //Task12
document.write("<br><br><h2> Chapter31-34 TASK12</h2><br><br>");

var d = new Date();
 var e  = new Date();
 d.setFullYear(1915);
 document.write("1 hour ago,it was:"+e+"<br>")
document.write("Current date:"+d+"<br>")







// //Task13
document.write("<br><br><h2> Chapter31-34 TASK13</h2><br><br>");
var age= prompt ("Enter your age");
var currentYear = new Date();
var conv = currentYear.getFullYear();
var diff = conv-age;


document.write("<br> Your birthYear is"+diff);





// //Task14
document.write("<br><br><h2> Chapter31-34 TASK14</h2><br><br>");


var name ="Sonia;"

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var d = new Date();

document.write("Current month :" + monthNames[d.getMonth()]);

var units = 410;
var charges = 16;
var  neAmount = units*charges;
var latePaymnet = 350;
var grossAmount = neAmount+latePaymnet;

document.write("Customer Name:"+" "+name+"<br>");
document.write("Moth :" + monthNames[d.getMonth()]);
document.write("Number of Units:"+" "+units+"<br>");
document.write("Charges per Units:"+" "+charges+"<br>");
document.write("Net Amount Payable (within Due Date) :"+" "+neAmount+"<br>");
document.write("Latepaymnet Surchrge:"+" "+latePaymnet+"<br>");
document.write("Gross Amount Payable (after Due Date) :"+" "+grossAmount+"<br>");



//  //Chapter35-38

 
// // TASK1
document.write("<br><br><h2> Chapter31-34 TASK1</h2><br><br>");


function currentTime (){

    var now = new Date(); 
document.write(now);

}
currentTime();


//TASK2
document.write("<br><br><h2>TASK2</h2><br><br>");


function greeting(fullName){
var firstName = prompt("Enter your Firstname");
var lasttName = prompt("Enter your lastname");
firstName+lasttName;

document.write("Hello"+" "+fullName);

}
greeting();



//TASK3
document.write("<br><br><h2>TASK3</h2><br><br>");


function userCalc(){

var num1 = +prompt("Enter your number1")

var num2 = +prompt("Enter your 2nd number");

var result = num1+num2;

document.write(result);


}

userCalc();






//TASK4
document.write("<br><br><h2>TASK4</h2><br><br>");



function smartcalc(dig1,sign,dig2){

    if(sign === "+"){
    
        return dig1 + dig2
    }
    
    else if (sign === "-"){
    
        return dig1 - dig2
    }
    
    else if (sign === "*"){
    
        return dig1 * dig2
    }
    else if (sign === "/"){
    
        return dig1 / dig2
    }
    else{
        return "incorrect"
    }
    }
    var result4 = smartcalc(4,"+",6);
    
    var result = smartcalc(5,"-",5);
    var result1 = smartcalc(4,"*",6);
    var result2 = smartcalc(6,"/",3);
    var result3 = smartcalc(4,"$",6);
   document.write(result+"<br>");
   document.write(result1+"<br>");

   document.write(result2+"<br>");
   document.write(result3+"<br>");
   document.write(result4+"<br>");




//TASK5
document.write("<br><br><h2>TASK5</h2><br><br>");

function sqrt(a){


    var b = Math.sqrt(a)
    document.write(b);

}
sqrt(9);





//TASK6
document.write("<br><br><h2>TASK6</h2><br><br>");

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
  
  alert( factorial(6) );


  //TASK7
document.write("<br><br><h2>TASK7</h2><br><br>");

function counting(){
 

for(var i = 1; i<=10; i++){

    
    document.write(i+"<br>")
}


}

counting();



//TASK8
document.write("<br><br><h2>TASK8</h2><br><br>");

function pythagorean(A, B){
    // return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));

    function square(x){

        return x*x
    }

return  Math.sqrt(square(A)+square(B));


  }
  
  document.write(pythagorean(4, 3));



//TASK9
document.write("<br><br><h2>TASK9</h2><br><br>");

function rectangel(width ,height){


var area = width*height
document.write(area);

}
rectangel(200,100)



//TASK10
document.write("<br><br><h2>TASK10</h2><br><br>");

function palindrome(){

    var word = prompt("enter your word");
    var check = "";
    
    for(i = word.length-1; i>=0; i--){
    
      check += word[i]
    document.write(word[i]+"<br>")
    
    
    }
    
    if(word === check){
    
      alert("its palindrome word");
    }
    
    else{
      alert("its not palindrome word");
    
    }



}
palindrome();








//TASK11
document.write("<br><br><h2>TASK11</h2><br><br>");

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write(uppercase("the quick brown fox"));;





//TASK12
document.write("<br><br><h2>TASK12</h2><br><br>");




function findShortestWord(str) {
    var words = str.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length > shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
  }
}
  document.write(findShortestWord("Web Development Tutorial" ));



//   //TASK13
document.write("<br><br><h2>TASK13</h2><br><br>");


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSResourceS.com', 'o'  ));



//   //TASK14
document.write("<br><br><h2>TASK14</h2><br><br>");
//chapters38-42
//Task1
// document.write("<br><br><h2>TASK1</h2><br><br>");
// function pow(a,b){

//    var p=1;
//     for(var i=1;i<=b;i++)
//           p*=a;
//     return p;
    


// }
// var x = prompt ("Enter your value")
// var n = prompt ("Enter your n vlue")
// p =  pow(x,n)

// document.write(p)

// //Task2
// document.write("<br><br><h2>TASK2</h2><br><br>");
// function leapYear(){
// var user = prompt("Enter your year")

// if (user == 2012 ||user == 2016||user == 2020){

//     alert ("this is a leap year")

// }

// else
// alert("this is not leap year")


// }

// leapYear()

// // //Task3
// document.write("<br><br><h2>TASK3</h2><br><br>");

// function area(a, b,c){
//     // return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));


//     function sidesValue(s){
//         s  = (a+b+c)/2
//         var g =  s*(s-a)*(s-b)*(s-c)
//         return g
//     }

// return sidesValue()


//   }
  
//   document.write(area(4, 3,6));


// // //Task4
// document.write("<br><br><h2>TASK4</h2><br><br>");





    
// function percentage(eng,urdu,maths,total,obtainedMarks,p){
//     eng = +prompt("Enter your eng marks")
//     urdu = +prompt("Enter your urdu marks")
//     maths = +prompt("Enter your maths marks")
//     total = prompt("Enter total marks")

//     var obtainedMarks = eng+urdu+maths
//     p = obtainedMarks*100/total
// return p
// }

// function avg(eng,urdu,maths,average){
//     eng = +prompt("Enter your eng marks")
//     urdu = +prompt("Enter your urdu marks")
//     maths = +prompt("Enter your maths marks")
//     var average= eng+urdu+maths/3
//     return average
// }

// function main(){

// return "Per : " + percentage() + "   Avg : " + avg()

// }



// document.write("fffff   " + main())


// // //Task5

// document.write("<br><br><h2>TASK5</h2><br><br>");





// function indexOf(str,char){

// str = prompt ("Enter your word")
// char = prompt("Enter character")
// for(var i = 0; i<str.length;i++)
// {
// var c = str.charAt(i);
// if (char === c) {
//   return i;
// }

// }
// }
//  document.write(indexOf()) 

// //Task 6
// document.write("<br><br><h2>TASK6</h2><br><br>");
// function vowel(){

// var text = prompt("word")    
// for(i = 0; i<text.length; i++){


// if(text.slice(i,i+1) === "a"||text.slice(i,i+1) === "e"||text.slice(i,i+1) === "i"||text.slice(i,i+1) === "o"||text.slice(i,i+1) === "u")
// {
// text = text.slice(0,i)+ "" +  text.slice(i + 2); 




// }

// }
// document.write(text)
// }


// vowel()



// //Task 7
// document.write("<br><br><h2>TASK7</h2><br><br>");
// function findOccurrences() {
//   var str = "Pleases read this application and give me gratuity";
//   var count = 0;
//   var haveSeenVowel = false;

//   for (var letter of str.toLowerCase()) {
//     switch (letter) {
//       case 'a':
//       case 'e':
//       case 'i':
//       case 'o':
//       case 'u':
//         {
//           if (haveSeenVowel) {
//             count++;
//             haveSeenVowel = false;
//           } else {
//             haveSeenVowel = true;
//           }
//           break;
//         }
//       default:
//         haveSeenVowel = false
//     }
//   }

//   return count
// }

// document.write(findOccurrences());

// //Task 8

// // document.write("<br><br><h2>TASK8</h2><br><br>");

// var distance = prompt("Enter the distance between Gwalior and Delhi (in KM)")
// var meter;
// var feet;
// var inches;
// var centimeter;
// function km(){


//   return distance
  
//   }

// alert("Kilometer"+" "+km())


// function meter(){

//   meter = distance * 1000;
// return meter
// }
// alert("meter"+" "+meter())

// function feet(){

//   feet = distance * 3280.84
//   return feet
//   }

//   alert("feet"+" "+feet())

//   function centimeter(){

//     centimeter = distance * 100000
//     return centimeter

//     }
//     alert("centimeter"+" "+centimeter())

//     function inches(){

//       inches = distance* 39370.1
//       return inches
//       }

//       alert("inches"+" "+inches())


//       //Task 9

//       document.write("<br><br><h2>TASK9</h2><br><br>");


//  var workingHours = prompt("Enter your working hours");
//  var overtime;
//  var overTmeSalry;


//  if(workingHours>40){


// overtime = workingHours-40
// overTmeSalry = overtime*12
// alert(overTmeSalry)

//  }


//  //Task 10
//  document.write("<br><br><h2>TASK10</h2><br><br>");

//  var widrawCash = prompt("Enter your amount");

//  alert(+widrawCash/100+" "+"Hundred Notes")
//  alert(widrawCash/50+" "+"Fifty Notes")
//  alert(widrawCash/10+" "+"Ten Notes")

//chapters 43-48
//Task 1


//link Html
//Task 2

// on html file


//Task 3

function delRow1(){

    var del = document.getElementById('del1');
    del.innerHTML = " "
    
    if(del.innerHTML = " "){
    
        alert ("Are you sure want to delete the row?")
    }
    
    }
    function delRow2(){
    
        var del = document.getElementById('del2');
        del.innerHTML = " "
        
        if(del.innerHTML = " "){
        
            alert ("Are you sure want to delete the row?")
        }
        
        }
        function delRow3(){
    
            var del = document.getElementById('del3');
            del.innerHTML = " "
            
            if(del.innerHTML = " "){
            
                alert ("Are you sure want to delete the row?")
            }
            
            }
    
            //Task 4
            function changeimage(id,src){
    
                var sample = document.getElementById(id)
                sample.src = src
                
                                    }
    
      //Task5
      
     
      var click = document.getElementById('clicks');
      var clicks = 12;
      function increase() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    
    function decrease() {
        clicks -= 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
    
    //chapters49-52
    //Task1
    
    // function display() {
    //     DispWin = window.open('','NewWin', 'toolbar=no,status=no,width=300,height=200')
    //     message = "<ul><li><b>NAME: </b>" + document.form1.yourname.value;
    //     message += "<li><b>ADDRESS: </b>" + document.form1.address.value;
    //     message += "<li><b>PHONE: </b>" + document.form1.phone.value + "</ul>";
    //     DispWin.document.write(message);}
        
    
    //     message
    
    
    function getData() {
        debugger
        var strText = document.getElementById("txtName").value;
        var strText1 = document.getElementById("lastname").value;
        var strText2 = document.getElementById("txtEmail").value;
        var strText3 = document.getElementById("password").value;
        document.getElementById("p1").innerHTML = strText;
        document.getElementById("p2").innerHTML = strText1;
        document.getElementById("p3").innerHTML = strText2;
        document.getElementById("p4").innerHTML = strText3;
    }
    
    //Task2
    
    function readMore(){
    
        var text = document.getElementById('txt').innerHTML
        var para  = document.getElementById('pera')
        
        para.innerHTML = text
        }
    
        //Task3
    
        var selectedRow = null
    
        function onFormSubmit() {
            if (validate()) {
                var formData = readFormData();
                if (selectedRow == null)
                    insertNewRecord(formData);
                else
                    updateRecord(formData);
                resetForm();
            }
        }
        
        function readFormData() {
            var formData = {};
            formData["index"] = document.getElementById("index").value;
            formData["fname"] = document.getElementById("fname").value;
          
            formData["Class"] = document.getElementById("Class").value;
            return formData;
        }
        
        function insertNewRecord(data) {
            var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.index;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.fname;
           
           
            cell4 = newRow.insertCell(2);
            cell4.innerHTML = data.Class;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                               <a onClick="onDelete(this)">Delete</a>`;
        }
        
        function resetForm() {
            document.getElementById("index").value = "";
            document.getElementById("fname").value = "";
            
            document.getElementById("Class").value = "";
            selectedRow = null;
        }
        
        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById("index").value = selectedRow.cells[0].innerHTML;
            document.getElementById("fname").value = selectedRow.cells[1].innerHTML;
            
            document.getElementById("Class").value = selectedRow.cells[3].innerHTML;
        }
        function updateRecord(formData) {
            selectedRow.cells[0].innerHTML = formData.index;
            selectedRow.cells[1].innerHTML = formData.fname;
    
            selectedRow.cells[3].innerHTML = formData.Class;
        }
        
        function onDelete(td) {
            if (confirm('Are you sure to delete this record ?')) {
                row = td.parentElement.parentElement;
                document.getElementById("employeeList").deleteRow(row.rowIndex);
                resetForm();
            }
        }
        function validate() {
            isValid = true;
            if (document.getElementById("index").value == "") {
                isValid = false;
                document.getElementById("indexValidationError").classList.remove("hide");
            } else {
                isValid = true;
                if (!document.getElementById("indexValidationError").classList.contains("hide"))
                    document.getElementById("indexValidationError").classList.add("hide");
            }
            return isValid;
        }
    
    
    
        //Chapter 53-58
    
        //Task1
       // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    }
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    
    //Tak2
    
    function zoomIn(){
    
    
        var font = document.getElementById('fontStyle');
    
        font.style.fontSize = '26px'
    
    }
    
    function zoomOut(){
    
    
        var font = document.getElementById('fontStyle');
    
        font.style.fontSize = '6px'
    
    }
    
    
    //chapter 58-67
    //Question number1
    var main = document.getElementById('main-content')
    
    //Task2
    console.log(main.childNodes)
    
    //Task3
    
    var x = document.getElementsByClassName("render").innerHTML;
    
    console.log(x)
    
    
    document.getElementById("firstname").value = "My Value";
    
    //Question number2
    