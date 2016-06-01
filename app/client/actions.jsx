var Reflux = require('reflux');

module.exports = Reflux.createActions([
	'getTopics'
	// Any store listening to this action will have a getTopics method TopicStore.getTopics
]);