//imgur api facade
//fetch pollyfill for ES6 fetch method same as $.ajax
var Fetch = require('whatwg-fetch');	
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = '398622dd107f101';

module.exports =  {
	get: function(url){
		return fetch(rootUrl+url, {
			headers:{
				'Authorization':'Client-ID '+apiKey
			}
		}).
		then(function(responseFunction){ //May be JSONP response function ?

			return responseFunction.json(); //response is just the HTTP response not the json
		});

	}
};

//Calling like below : 
//Api.get('topics/defaults')
//.then(function(data){
//	//do something with data
//})
//