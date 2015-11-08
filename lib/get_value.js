module.exports = function(str) {
  var output = str.replace(/[\u007B\u007D\u0028\u0029\u002C\u003B]/g, '');
  return output;
};


//this file name is get_value.js
