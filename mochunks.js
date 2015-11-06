//requires and global variables
var matches = require(__dirname + '/lib/getMatches.js');
var describe = require(__dirname + '/lib/describe.js');
var fs = require('fs');
var source = fs.readFileSync('./server.js', 'utf8');
var dOpen = /<d:/g;
var dClose =  /<:d>/g;
var iOpen = /<i:/g;
var iClose = /<:i>/g;
var describeList = [];

//goes through the source file to find describe blocks
function sweepDescribes(file, cb){
  var openDescribes = matches.matches(0, source.length-1, dOpen, source);
  var closeDescribes = matches.matches(0, source.length-1, dClose, source);
  //callback --> populateDescribeList
  cb(openDescribes, closeDescribes)
}

//instantiates a describe block object for each block
function populateDescribeList(opens, closes){
  for(var c=0; c<opens.length; c++){
    var myDescribe = describe.getDescribes(source, opens[c], closes[c]);
     describeList.push(myDescribe);
  };
}

//calls sweepDescribes --> populateDescribeList
sweepDescribes(source, populateDescribeList);
console.log(describeList[0]);


