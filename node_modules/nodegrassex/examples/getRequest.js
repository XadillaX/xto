var nodegrass = require('../');
nodegrass.get("https://github.com",function(data,status,headers){
	console.log(status);
	console.log(headers);
	console.log(data);
},'utf8').on('error', function(e) {
    console.log("Got error: " + e.message);
});