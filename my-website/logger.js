	var url = 'http://mylogger.io/log';

	function log(message){
		// Send an HTTP request
		console.log(message);
	}
	//module.exports.log = log;// object
	module.exports = log; // single function
	//module.exports.endPoint = url;
