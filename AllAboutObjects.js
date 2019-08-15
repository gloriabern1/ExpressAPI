var rabbit={};
rabbit.speak=function(line){
    return "The rabbit said " + line ;
}
console.log(rabbit.speak("This is interesting"));

function speak(line){
    console.log("The "+ this.type + " said " + line);
}

var whiterabbit={type:"white", speak: speak};
var fatrabbit={type:"fat Rabbit", speak:speak}

whiterabbit.speak("i easily get dirty");
fatrabbit.speak("i am an overweight rabbit");

// using apply to call a method function
// bind, apply, call is use to tie the this property of a fuction to an object

speak.apply(fatrabbit, ["burp"]);
speak.call({type:"whiterabbit"}, "oh my");

var empty={};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({})== Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype))

//creating objects with custom prototype
var Protorabbit={
    speak: function(line){
        console.log("The "+ this.type + " rabbit said " + line);
    }
}

var killerabbit= Object.create(Protorabbit);
killerabbit.type="Killer";
killerabbit.speak("Skree !")

//Creating Objects from Constructor

//rabiit constructor
function Rabbit(type){
 this.type=type;
}

var SecondKillerRabbit= new Rabbit("SecondKiller");
var BlackRabbit= new Rabbit("Black");
console.log(BlackRabbit.type);
// to add a speak method to the rabbits created using the Rabbit Prototype
Rabbit.prototype.speak=function(line){
    console.log("The "+ this.type + " rabbit said " + line);
}
BlackRabbit.speak("doom...")
 Rabbit.prototype.teeth="small";
 console.log(BlackRabbit.teeth)
 BlackRabbit.teeth="Long, Sharp and black";
 console.log(BlackRabbit.teeth);
 console.log(SecondKillerRabbit.teeth);

//Polymorphism and interfaces