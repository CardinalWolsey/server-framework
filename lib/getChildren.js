var block = require(__dirname + '/block.js');
var purpose = require(__dirname + '/getPurpose.js');

exports.getChildren = function(openArray, closeArray, childType, file){
  var childSet = [];

  //for each open tag, uses block template to instantiate child block
  for(var i=0; i<openArray.length; i++){
    var tempChild = block.block(
      childType,
      openArray[i],
      closeArray[i],
      purpose.getPurpose(openArray[i], file),
      file);

    //pushes child block to return array of children
    childSet.push(tempChild);
  };
  return childSet;
}
