var Api = require('../utils/api');
var Reflux = require('reflux');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables: [Actions], //Listen to actions always
	getTopics: function(argument) {
		//API Call to fetch data and then trigger the publish event
		return Api.get('topics/defaults'). 
		then(function(json) {
			this.topics = json.data;
			this.triggerChange();
		}.bind(this));
	},
	triggerChange: function() {
		// Publish the change event and pass the topics
		this.trigger('change', this.topics);

	}
});