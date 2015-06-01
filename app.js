

var plantGrow={
  seed:"seed",
  plant:"plant",
  water: "water",
  plantFood: "plant food",
  antiFreeze:"antifreeze",
  height:0,
  maxHeight: 12,
  isAlive: false,
  isDead: false,

  water: function(){
    plantGrow.height+=2;

  },
  feed: function(food){
    if(food==="anti-freeze"){
      plantGrow.isDead=true;
      plantGrow.isAlive=false;
    }
    else (food==="plant food"){
      plantGrow.isDead=false;
      plantGrow.isAlive=true;
      plantGrow.height+=1;

    }
  };
