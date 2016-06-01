var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
module.exports = React.createClass({
	mixins : [Reflux.listenTo(TopicStore, 'onChange')],
	//Listen to any event in TopicStore and fire this.onChange method 
	getInitialState: function(){
		return { topics:[] }
	},
	componentWillMount: function(){
		Actions.getTopics(); 
		// Trigger the action on load
	},
	render: function () {
		return <div className="list-group">  {this.renderTopics()} </div>
	},
	renderTopics: function(){
		return this.state.topics.map(function(topic){
			return <Link to={'topics/'+topic.id} className="list-group-item" key={topic.id}>
						<h4>{topic.name}</h4>	<p>{topic.description}</p> </Link>
		});
	},
	onChange: function(event , topics){
		this.setState ({
			topics: topics.slice(0,4)
		})

	}
})