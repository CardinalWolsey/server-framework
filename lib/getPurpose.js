var fs = require('fs');

exports.getPurpose = function(origin, file){
  return file.substring(origin+3, file.indexOf('>',origin));
}
