var React = require('react/addons'),
	http = require('http'),
	shoeData = require('../data/shoeData.js').fakeShoeData,

	ProductListView = React.createFactory(require('../components/ProductListView'));
ReactApp = React.createFactory(require('../components/ReactApp'));



module.exports = function(app) {
	app.get('/', function(req, res) {
		// React.renderToString takes your component
		// and generates the markup
		console.log('Inside /');
		var reactHtml = React.renderToString(ReactApp({}));
		// Output html rendered by react
		// console.log(myAppHtml);
		res.end('Hello');
	});


	/**
	 * [description]
	 * @param  {[type]} request       [description]
	 * @return {[type]}               [description]
	 */
	app.get('/mk/products/shoes', function(request, response) {
		var postData = JSON.stringify(shoeData);
		var htmlResponse = "";
		var post_req = http.request({
			host: 'localhost',
			port: '4444',
			path: '/domserver/fetchShoes',
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
					//'Content-Length': Buffer.byteLength(postData)
			}
		}, function(res) {
			res.setEncoding('utf8');
			res.on('data', function(chunk) {
				htmlResponse += chunk;
				console.log('htmlResponse at data : ' + htmlResponse.length);
			}).on('error', function(e) {
				// Call callback function with the error object which comes from the request
				console.log('Error after response :' + e);
			}).on('end', function() {
				console.log('htmlResponse at end : ' + htmlResponse.length);
				response.setHeader('Content-Type', 'text/html');
				response.writeHead(200, {
					'Content-Type': 'text/html'
				});

				response.end(htmlResponse);
			});
		}).on('error', function(e) {
			// Call callback function with the error object which comes from the request
			console.log('Error on request :' + e);
		});
		// post the data
		post_req.write(postData);
		post_req.end();
	});
};