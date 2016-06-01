var React = require('react/addons'),
	ProductListView = React.createFactory(require('../components/ProductListView'));
ReactApp = React.createFactory(require('../components/ReactApp'));

module.exports = function(app) {

	app.get('/', function(req, res) {
		// React.renderToString takes your component
		// and generates the markup
		var reactHtml = React.renderToString(ReactApp({}));
		// Output html rendered by react
		// console.log(myAppHtml);
		res.render('index.ejs', {
			reactOutput: reactHtml
		});
	});

	app.post('/domserver/fetchShoes', function(req, res) {
		// console.log("String body : " + JSON.stringify(req.body));

		var pJSON = {
			products: req.body
		};

		var reactHtml = React.renderToString(React.createElement(ProductListView, pJSON));
		res.render('shoes.ejs', {
			productList: reactHtml
		});


		//console.log("String pJSON : " + JSON.stringify(pJSON));

		// res.render('shoes.ejs', {
		//   markup: React.renderToString(React.createElement(ProductListView, pJSON)),
		//   props: JSON.stringify(pJSON)
		// });

	});

};