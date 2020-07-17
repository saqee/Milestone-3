function feetToMile(feet){
    var mile=0.00018939393 * feet;
    return mile;
}
var result=feetToMile(100000000);
console.log('The result of Convert feet to mile is:'+ '' +result)


/* Totla Wood Function */ 

function woodCalculator(chair,table,bed){
   
      var chair=chair*1;
      var table=table*3;
      var bed=bed*5;
      return chair+table+bed;
}
var totalWood=woodCalculator(10,10,10);
console.log(totalWood);

/* BrickCalculator Function */ 

function brickCalculator(floorCount){
    if(floorCount<=10){
        var stone=(15 * 1000) * floorCount;
        return stone;
    }else if(floorCount<=20){
        var stone=(12 * 1000) * floorCount;
        return stone;
    }else{
        var stone=(10 * 1000) * floorCount;
        return stone;
    }
}
console.log(brickCalculator(30));

/* tinyFreind Function Process */ 



 function tinyFriend(name){
  var smallName=name[0];
  for(let i=0;i<name.length;i++){
      let list=name[i];
      if (list.length<smallName.length) {
          smallName=list;
      }
  }
 return smallName;
 }
 var name=['saqeeb','Áhmed','Mahbub','Su'];
var smallFriendName=tinyFriend(name);
console.log(smallFriendName);
