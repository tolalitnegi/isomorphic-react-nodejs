var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router'); // Routing on the page SPA

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Hello = React.createClass({
  render: function() {
    return <div className="red">
      {this.props.children}
    </div>
  }
});

var Child1 = React.createClass({
	render: function(){
		return <h1> I am child1 
		{this.props.children}
		</h1>
	}
});

var Child2 = React.createClass({
	render: function(){
		return <h1> I am child2</h1>
	}
});

var GrandChild1 = React.createClass({
	render: function(){
		return <h1> I am grand Child 1</h1>
	}
});
var routes = (
	<Router>
		<Route path="/" component={Hello}>
			<Route path="1" component={Child1} >
				<Route path="g" component={GrandChild1} >

			</Route>
			<Route path="2" component={Child2} /> 
		</Route>
	</Router>
	)
//var element = React.createElement(Hello, {});
ReactDOM.render(routes, document.querySelector('.container'));
