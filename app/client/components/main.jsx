var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-list');
module.exports = React.createClass({
	render: function(argument) {
		return <div>
			<Header /> 
			{this.content()}
		</div>
	},
	content: function() {
		if (this.props.children) {
			return this.props.children;
		} else {
			return <TopicList />
		}
	}
})