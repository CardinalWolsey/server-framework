//requires and global variables
var fs = require('fs');
var source = fs.readFileSync('./server.js', 'utf8');
var dOpen = /<d:/g;
var dClose =  /<:d>/g;
var iOpen = /<i:/g;
var iClose = /<:i>/g;

//objects and constructors
var testFile = {
  describes: []
};

function block(type, origin, end, purpose) {
  this.type = type,
  this.globalOrigin = origin,
  this.globalEnd = end,
  this.purpose = purpose,
  this.children = [],
  this.fullText = source.substring(origin, end);
};


var getMatches = function(start, end, regex, range){
  var OneMatch, AllMatches = [];
  while ((OneMatch = regex.exec(range.substring(start, end))) != null) {
  AllMatches.push(OneMatch.index);
  };
  return AllMatches;
};

function getPurpose(origin, range){
  return range.substring(origin+3, source.indexOf('>',origin));
}

var openDescribes = getMatches(0, source.length-1, dOpen, source);
var closeDescribes = getMatches(0, source.length-1, dClose, source);

var myDescribe = new block(
  'describe',
  openDescribes[0],
  closeDescribes[0],
  getPurpose(openDescribes[0], source)
  );

function getChildren(openArray, closeArray, childType, range){
  var childSet = [];
  for(var i=0; i<openArray.length; i++){
    var tempChild = new block(
      childType,
      openArray[i],
      closeArray[i],
      getPurpose(openArray[i], range));
    childSet.push(tempChild);
  };
  return childSet;
}


myDescribe.openChildren = getMatches(myDescribe.origin, myDescribe.end, iOpen, source);

myDescribe.closeChildren = getMatches(myDescribe.origin, myDescribe.end, iClose, source);

myDescribe.its = getChildren(myDescribe.openChildren, myDescribe.closeChildren, 'it', source);

for (var it in myDescribe.its) {
    //need code to get expects
}

console.log(myDescribe);



//testFile.describes[0] = new describe();


//eventually need to accomodate nested describes
//search for it tags
//create array

