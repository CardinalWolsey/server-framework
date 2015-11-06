//CREATES A TEMPLATE BLOCK

function myBlock(type, origin, end, purpose, file) {
  this.type = type,
  this.globalOrigin = origin,
  this.globalEnd = end,
  this.purpose = purpose,
  this.children = [],
  this.fullText = file.substring(origin, end);
};

exports.block = function(type, origin, end, purpose, file){
  return new myBlock(type, origin, end, purpose, file);
}
