var http = require('http');

var server = http.createServer();

var url = require('url');

server.on('request', function(request, response) {
	response.writeHead(200);
	
	//分岐処理
	if (request.url == '/') {
		response.write('abcd');
	} else if (request.url == '/foo/') {
		response.write('efgh');
	} else {
		response.write('ijkl');
	}
	
	if (request.method == 'POST') {
		response.write('POST')
	} else if(request.method == 'GET') {
		response.write('GET')
		
		var urlParse = url.parse(request.url)
		console.log(urlParse)
		Object.keys(urlParse).forEach(function (key) {
		//urlParseに含まれているキー数分、ループする
			response.write(key + ': ' +urlParse[key] + '\n');
		});
	}
	
	response.end();
});

server.listen(80,'127.0.0.1')