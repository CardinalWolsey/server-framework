var block = require(__dirname + '/block.js');
var matches = require(__dirname + '/getMatches.js');
var purpose = require(__dirname + '/getPurpose.js');
var children = require(__dirname + '/getChildren.js');
var dOpen = /<d:/g;
var dClose =  /<:d>/g;
var iOpen = /<i:/g;
var iClose = /<:i>/g;


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
  myDescribe.openChildren = matches.matches(myDescribe.origin, myDescribe.end, iOpen, file);
  //uses match module to sweep d block for close it tags
  myDescribe.closeChildren = matches.matches(myDescribe.origin, myDescribe.end, iClose, file);

  //uses getChildren module to populate describes set of it tags
  myDescribe.its = children.getChildren(myDescribe.openChildren, myDescribe.closeChildren, 'it', file);

  return myDescribe;
}
