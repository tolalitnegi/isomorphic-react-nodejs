var React = require('react');
var ReactRouter = require('react-router'); // Routing on the page SPA


var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');

var Topic = require('./components/topic');

module.exports  = (
	<Router>
		<Route path="/" component={Main}>
			<Route path="topics/:id" component={Topic}/>
		</Route>
	</Router>
	)


// :id any thing string or number 
// inside Topic props will have the id attribute this.props.params.id
// 