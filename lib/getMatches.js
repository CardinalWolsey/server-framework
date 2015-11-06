//SEARCHES A RANGE CHARACTERS TO RETURN MATCHES

exports.matches = function (start, end, regex, range){
  var OneMatch, AllMatches = [];
  while ((OneMatch = regex.exec(range.substring(start, end))) != null) {
  AllMatches.push(OneMatch.index);
  };
  return AllMatches;
};
