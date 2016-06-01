var React = require('react');
var Router = require('react-router');
var Link = Router.Link; // SPA instead of Full page reload
var Reflux = require('reflux');
var TopicStore = require('../stores/topic-store');
var Actions = require('../actions');

module.exports = React.createClass({
	mixins:[
		Reflux.listenTo(TopicStore, 'onChange')
	],
	getInitialState: function() {
		return { topics:[] }
	},
	componentWillMount: function(){
		Actions.getTopics();
	},
	render: function() {
		return <nav className="nav navbar-default header" >
		<div className="container-fluid">
			<Link to="/" className="navbar-brand">
			 Imgur browser
			 </Link>	
			 <ul className="nav navbar-nav navbar-right">
			 	{this.renderTopics()}
			 </ul>
		 </div>
		</nav>
	},
	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return <li key={topic.id}>
			<Link to={"/topics/" + topic.id}  activeClassName="active">
	
 					 {topic.name} 
 				
			</Link>
			</li>
		});
	},
	onChange: function(event , topics){
		this.setState({
			topics: topics.slice(0,4)
		})

	}
})