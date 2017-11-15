// import ngResource from 'angular-resource';
var _apiKey = "92117d1f";
var _superman = "http://www.omdbapi.com/?t=:title&y=:year&apikey="+_apiKey;

export default function API ($resource) {
	'ngInject';
	var call = this;

	call.Movie = function() { 
		return $resource(_superman, {}, {
			get: { 
				method: 'GET', 
				params: { title: '@title', year: '@year' }
			}
		});
	};


};
