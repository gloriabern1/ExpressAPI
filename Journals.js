var Journal = require('./journalsdata');
var AddEntry= function(NewEvents, DidHeTurnIntoASquirrel){
    Journal.push({
        Events: NewEvents,
        SquirrelStatus: DidHeTurnIntoASquirrel
    })
}

// AddEntry([" work " , " t o u c h e d tree " , " pizza " , " r u n n i n g " ,
// " t e l e v i s i o n "], false)
// AddEntry([" work " , " ice cream " , " c a u l i f l o w e r " , " l a s a g n a " ,
// " t o u c h e d tree " , " b r u s h e d teeth "], false)
// AddEntry([" w e e k e n d " , " c y c l i n g " , " break " , " p e a n u t s " ,
// " beer "], true)

//This function checks if a single event exists in a particular entryobject in the journal array
 function DoesEntryHaveEvent(event, entry)
 {
    
    return entry.events.indexOf(event) != -1
 }

 var GetSingleEventArray=function (event, journal){

    var EventsArray=[0,0,0,0]
    for(var i=0; i< Journal.length; i++){
       var entry=journal[i]
       var index=0
        if(DoesEntryHaveEvent(event, entry)) 
        index+=1
        
        if(entry.squirrel) index+=2
        EventsArray[index]+=1
    }

    return EventsArray
 }

  var  PhicoeffOfEvent=function(EventArray){
   return ( ((EventArray[3]*EventArray[0]) -(EventArray[2]* EventArray[1])) /
            (Math.sqrt((EventArray[2]+EventArray[3]) * (EventArray[0]+ EventArray[1]) * (EventArray[1]+ EventArray[3]) * (EventArray[0] + EventArray[2]) ))
    )
 }

//  console.log(GetSingleEventArray("pizza", Journal));
//  console.log(PhicoeffOfEvent(GetSingleEventArray("pizza", Journal)))

 
//  var MapPhi={}
//  function StorePhi(events, PhicoeffOfEvent){
//      MapPhi[events]=PhicoeffOfEvent;
//  }
//  StorePhi("pizza", PhicoeffOfEvent(GetSingleEventArray("pizza", Journal)))
//  StorePhi("ice cream", PhicoeffOfEvent(GetSingleEventArray("ice cream", Journal)))

//  console.log(MapPhi);

//  for(var events in MapPhi){
//      console.log("the is the events " + events + " and, this is the value " + MapPhi[events]);
//  }

function GatherCorrelation(journalarray){
   
    var MapPhi={};
    for( var entry=0; entry<journalarray.length; entry++){
        var entryevents=journalarray[entry].events;
      
        for(var i=0; i < entryevents.length; i++){
            var event=entryevents[i]
           
            if(!(event in MapPhi))
                MapPhi[event]= PhicoeffOfEvent(GetSingleEventArray(event, Journal));
        }
    }
    return MapPhi;
 }

 // another implemetation of "gathercorrelation" that uses the foreach method of arrays
 // the foreach method take in function as arguments and the function can take in each element 
 // of the array as an argument
  function GatherCorrelation2(Journal){
      var mapPhis=[]
    Journal.forEach(function (entry){
        entry.events.forEach(function(event){
                if(!(event in mapPhis))
                mapPhis[event]=PhicoeffOfEvent(GetSingleEventArray(event, Journal));
        });
    });
 return mapPhis;
  }
   
 
 var Correlation= GatherCorrelation(Journal);
// for(var event in Correlation){
//     console.log(event +" : " + Correlation[event] )
// }
//console.log(Correlation.pizza)

for (var event in Correlation)
{
    var Correlationvalue=Correlation[event]
    if(Correlationvalue > 0.1 || Correlationvalue < -0.1){
        console.log(event + " : " + Correlation[event]);
    }
}
 for(var i=0; i<Journal.length; i++){
     var entry= Journal[i]
     if(DoesEntryHaveEvent("peanuts" , entry) && !DoesEntryHaveEvent("brushed teeth", entry))
     {
         entry.events.push("peanut teeth");
     }
 }

 console.log(PhicoeffOfEvent(GetSingleEventArray("peanut teeth", Journal)))