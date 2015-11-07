var block = require(__dirname + '/block.js');
var matches = require(__dirname + '/getMatches.js');
var purpose = require(__dirname + '/getPurpose.js');
var children = require(__dirname + '/getChildren.js');
var inRange = require(__dirname + '/inRange.js')
var dOpen = /<d:/g;
var dClose =  /<:d>/g;
var iOpen = /<i:/g;
var iClose = /<:i>/g;
var eOpen = /<e:/g;
var eClose = /<:e>/g;


exports.getDescribes = function (file, origin, end){

  //creates a single instance of a describe block, using basic block template
  var myDescribe =  block.block(
    'describe',
    origin,
    end,
    purpose.getPurpose(origin, file),
    file
  );

  //uses match module to sweep d block for open it tags
  myDescribe.openIts = matches.matches(myDescribe.origin, myDescribe.end, iOpen, file).filter(function(value){
      if(value >= myDescribe.globalOrigin && value <= myDescribe.globalEnd){
        return value;
      }
  });

  //uses match module to sweep d block for close it tags
  myDescribe.closeIts = matches.matches(myDescribe.origin, myDescribe.end, iClose, file).filter(function(value){
      if(value >= myDescribe.globalOrigin && value <= myDescribe.globalEnd){
        return value;
      }
  });

  //uses getChildren module to populate describes set of it
  myDescribe.its = children.getChildren(myDescribe.openIts, myDescribe.closeIts, 'it', file);


  //ADD EXPECT CONSTRUCTOR REFERENCE HERE
  for(var b=0; b<myDescribe.its.length; b++){
    myDescribe.its[b].openExpects = matches.matches(myDescribe.its[b].globalOrigin, myDescribe.its[b].globalEnd, eOpen, file);
  }

  return myDescribe;
}
