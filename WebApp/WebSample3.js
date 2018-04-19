var http = require('http');

var server = http.createServer();

var url = require('url');

var querystr = require('querystring');

server.on('request', function(request, response) {
	response.writeHead(200);
	
	//分岐処理
	if (request.url == '/') {
		//response.write('abcd');
	} else if (request.url == '/foo/') {
		//response.write('efgh');
	} else {
		//response.write('ijkl');
	}
		console.log(request.url)
	if (request.method == 'POST') {
		//response.write('POST')
		var data = '';
		request.on('data', function (chunk) {
			data += chunk;
		});
		request.on('end', function() {
			var query = querystr.parse(data);
			if ('val1' in query && 'val2' in query) {
				var result = query.val1 + query.val2
				//console.log(typeof result)
				//console.log(result)
				response.write(result)
				response.end();
			}
		});
		
		
		
	} else if(request.method == 'GET') {
		//response.write('GET')
		var urlParse = url.parse(request.url)
		var query = querystr.parse(urlParse.query)
		console.log(query)
		if ('val1' in query && 'val2' in query) {
			var result = query.val1 + query.val2
			//console.log(typeof result)
			//console.log(result)
			response.write(result)
		}
		
		//console.log(query)
		//Object.keys(urlParse).forEach(function (key) {
		//urlParseに含まれているキー数分、ループする
		//response.write(key + ': ' +urlParse[key] + '\n');
		//});
		response.end();
	}
	
	
});

server.listen(80,'127.0.0.1')