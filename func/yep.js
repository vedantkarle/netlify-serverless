exports.handler = function (event, context, callback) {
	// event contains headers,http method,path etc

	//callback(_error,_response)
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ msg: "Yep! Yep! Yep!" }),
	});
};
