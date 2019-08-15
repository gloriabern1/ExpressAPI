// ------- program to return a right angle triangle shape of the # symbol---
var mysymbol ="#";
console.log(mysymbol);
for(var i=0; i<=7; i++)
{
    mysymbol+= "#";
 console.log(mysymbol);
}

//---------program to display text at certain condition for a range of numbers----
var output1="fizz";
var output2="buzz";
var output3="fizzbuzz";

for(var i=1; i<=100; i++){
  console.log(checknumber(i));

}

function checknumber(sample){

    if( sample %5==0 && sample %3==0 ){
        return output3;
    }
    else if(sample %5==0 && sample %3 !=0){
        return output2;
    }
    else if(sample %3==0){
        return output1;
    }
    else{
        return sample;
    }
}

//---- program to display the matrix symbol when given a colum and row number--
console.log("this is the meaning \nthis is it");

var getboxsymbol="";
var hx=8;
var vx=8;
var totalx = hx * vx;
var inteval=8;

 for(var i=1; i<=totalx; i++){

     getboxsymbol += "# ";
     if(i==inteval){
         console.log(getboxsymbol+'\n');
         inteval= inteval + hx;
         getboxsymbol="";
     }
     
 }

 function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }

  //--- program to draw shapes using disfferent symbols
  function displaysymbol(symboltodisplay, size){
    var symbolreturned="";
    for(var i=1; i<=size; i++)
    {
        symbolreturned+= symboltodisplay
    }
    return symbolreturned;
  }

  console.log(displaysymbol("(", 1 ) + displaysymbol("_", 3) + displaysymbol("/", 1)
   + displaysymbol("'", 4) + displaysymbol("\\", 1) + displaysymbol("_", 3))

//--- program to display text if a number is even or odd using recursive function
   function checkifnumiseven(number){
    
       if(number < 2){
           return Displayevenorodd(number);
       }
       else{
        number=number-2;
        return checkifnumiseven(number);
       }
           
   }

   function DisplayEvenOrOdd(number){
       if(number==0){
           return "even";
       }
       else if(number==1){
           return "odd";
       }
       else{
           return "number is not valid";
       }

   }

   console.log(checkifnumiseven(68));
//---- program to check the number of ocuurences of a single letter in a string
  function CountBs(StringToCheck, LettertoCheck){
    var Totalbs=0;
    var SingleLetter="";
     for(var i=0; i<=StringToCheck.length; i++){
       SingleLetter=StringToCheck.charAt(i);
       Totalbs += CheckLetter(SingleLetter, LettertoCheck);
     }
return Totalbs;
}
function CheckLetter(CharString, CharToCheck){
   if(CharString==CharToCheck)
   {
       return 1
   }
   else{
       return 0
   }
}

console.log(CountBs("ksdkjkboeokBjjb", "j"));

var doh = " Doh ";
console.log( typeof doh.toUpperCase ) ;
// --- learning about arrays
var MyArray=[]
MyArray.push("gloria")
MyArray.push("okeke", "onyinye")
console.log(MyArray)
console.log(MyArray.pop())
console.log(MyArray.join(""))


var Gloria={

    name:"Okeke onyinye Gloria",
    hobbies:["reading ", "movies ", "coding ", "Listening to music ", "Dancing " ],
    "Date of Birth": "0ct 25th 1993",
    height: "5,8",
    profession: "software developer",
    BFF:"Tochi Agbo"

}
 console.log(Gloria.name)
 console.log(Gloria.hobbies.join(""))
 console.log(Gloria["Date of Birth"])
 console.log("height" in Gloria)

 var Object1={value:40}
 var Object2=Object1
 var Object3={value:40}

 console.log(Object1==Object2)
 console.log(Object1==Object3)
 console.log(Object3.value==Object1.value)

 var todolist=["play", "sing"]
function RememberTo(task){
    todolist.push(task);
}
function WhatisNext(){
    return todolist.shift();
}

function UrgentlyRemeberto(task){
    todolist.unshift(task);
}
RememberTo("read")
UrgentlyRemeberto("pray")
console.log(WhatisNext())

//--------------------- Exercise on arrays
function GetArrayOfNumbers(start, end, stepnumber){
    var NumbersArray=[];
    var arraystep=0;
    if(arguments.length>2)
    {
      arraystep=stepnumber;
    }
    else{
        arraystep=1;
    }
    for(var i= start; i<= end; i+=arraystep){
        NumbersArray.push(i);
    }
    return NumbersArray;
}
 console.log(GetArrayOfNumbers(-4, 0, -1))
//---- gets the sum of an array
 function SumOfArray(ArrayToSum){
     var GetSum=0;
     for(var i=0; i< ArrayToSum.length; i++)
     {
         GetSum += ArrayToSum[i];
     }
     return GetSum;
 }

 console.log( SumOfArray([2,3,4,5,5,5,]))

 //---- Higher order function-----
 //--- function that returns another function
 function GreaterThan(n){
     return function(m){
         return m>n
     }
 }
 var GreaterThan10= GreaterThan(10)
 console.log(GreaterThan10(11))

 //----functions that provide new types of control flow
  function unless(test, then){
      if(!test) then();
  }
  function repeat(times, body){
      for(var i=0; i< times; i++) body(i);  }

      repeat(3, function(n){
          unless(n % 2, function(){
              console.log(n + " is even");
          });
      });