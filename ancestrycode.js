var Myancestry = require('./ancestry.js');

var ByName={};
Myancestry.forEach(function(person){
    ByName[person.name]=person
});

function ReduceAncestors(person, f, defaultValue){
    function ValueFor(person){
        if(person==null) return defaultValue;
        else
        return f(person, ValueFor(ByName[person.mother]), ValueFor(ByName[person.father]));
    }
    return ValueFor(person);
}

function SharedDNA(person, fromMother, FromFather){
    if(person.name=="Pauwels van Haverbeke")
    return 1;
    else
    return (fromMother + FromFather)/2;
}
var Ph =ByName["Philibert Haverbeke"];
console.log(ReduceAncestors(Ph, SharedDNA, 0)/4);


console.log(Myancestry.length);

console.log(Myancestry.filter(function(person){
    return person.father=="Carel Haverbeke";
}))

 console.log(Myancestry.reduce(function(min, cur){
    if(cur.born< min.born)return cur;
    else return min;
}))
// returning an array on only names using filters and map 
// but it is better to use a for loop as filter and map loops through the aray twice
console.log(Myancestry.filter(function(person){
     return person.sex=="f"
   
}).map(function(person){
    return person.name;
}))
var OverNinty=Myancestry.filter(function(person){
    return person.died-person.born>90
})
 function GetName(person){
     return person.name;
 }

 function map(array, Transform){
     var mapped=[]
     for(var i=0; i<array.length; i++){
         mapped.push(Transform(array[i]))
     }
     return mapped;
 }

 console.log(map(OverNinty, GetName))
//---- to return an array of people thatwere young wihtin a range of years---
function CheckforYoung(person)
{
    return person.born > 1900 && person.born< 1925
}

 function filter(ancestryfile, CheckforYoung){
     var Passed=[];
     for(var i=0; i<ancestryfile.length; i++){
         if(CheckforYoung(ancestryfile[i])){
             Passed.push(ancestryfile[i])
         }
     }
     return Passed;
 }

 console.log(filter(Myancestry, CheckforYoung))

 function reduce(array, combine, start){
    var current=start;
    for(var i=0; i<array.length; i++){
        current=combine(current, array[i])
      
    }
    return current
 }
 function CombineNumbers(firstNumber, SecondNumber){
     return firstNumber+ SecondNumber;
 }

 console.log(reduce([1,2,3,4,5], CombineNumbers, 0))

 //--- composability in code i.e separation of array function

 function Average(array){
     function Plus(a, b){ return a+ b};
     return array.reduce(Plus)/array.length;
 }

 function Age(p){return p.died-p.born};
 function male(p){return p.sex=="m"};
 function female(p){return p.sex=="f"};
 function Centuryofperson(p){ return Math.ceil(p.died / 100)}

 console.log(Average(Myancestry.filter(male).map(Age))) ;
 console.log(Average(Myancestry.filter(female).map(Age))) ;
console.log(Myancestry.map(Centuryofperson));
 //--- exercises
 // to return array from an array of arrays
 //------Exercise 1- page 103----
 var arrayofarrays=[[1,2,3,4,5],[3,4,5,6,6],[3,5,3,6,3]];
function getnewarrayooarrays(arraytoadd){
    var newarray=[];
    function plus(a,b){return a + b};
    for(var i=0; i<arraytoadd.length; i++){
        
        newarray.push(arraytoadd[i].reduce(plus));
    }
   
    return newarray;
}

console.log(getnewarrayooarrays(arrayofarrays));

//---------Exercise 2 page 103---------
var CenturyArrays=Myancestry.map(Centuryofperson);
var GetDistinctCenturyArray=function(CenturyArrays){
    var newCenturyArray=[];
    var firstarray=CenturyArrays[0];
    newCenturyArray.push(firstarray);
    for(var i=0; i<CenturyArrays.length; i++){
        if(newCenturyArray.indexOf(CenturyArrays[i])==-1){
            newCenturyArray.push(CenturyArrays[i])
            
        }
    }
    return newCenturyArray;
}

console.log(GetDistinctCenturyArray(CenturyArrays));

 function getcenturyarray(DistincArrayofCentury, Ancestryarray){
        var Objectofarrays={}
     for(var i=0; i<DistincArrayofCentury.length; i++){
        Objectofarrays[DistincArrayofCentury[i]]=Ancestryarray.filter(function(p){
            return Centuryofperson(p)==DistincArrayofCentury[i]
        }).map(Age);
     }

     return Objectofarrays;
 }
 console.log(getcenturyarray(GetDistinctCenturyArray(CenturyArrays), Myancestry));

 function GetAverageAgeperCentury(objecttoadd){
    var newobject={};
    function plus(a,b){return a + b};
 
    for(var item in objecttoadd ){
        var objectarray=objecttoadd[item];
        newobject[item]=objectarray.reduce(plus)/objectarray.length

    }
   
    return newobject;
}
 
console.log(GetAverageAgeperCentury(getcenturyarray(GetDistinctCenturyArray(CenturyArrays), Myancestry)));