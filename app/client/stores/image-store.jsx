var Reflux = require('reflux');
var Api = require('../utils/api');
var Actions = require('../actions');

module.exports = Reflux.createStore({
	listenables : [Actions],
	getImages : function(topicId) {
		Api.get('topics/'+topicId)
		.then(function(response){
			this.images = response.data;
			this.triggerChange();
			// return response.json();
		}.bind(this));
	},
	triggerChange: function(){
		this.trigger('change', this.images);
	}
})