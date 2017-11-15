export default function AppController ($scope, API, $sce) {
	'ngInject';
	var app = this;
	var bestRateSource = 1;
	$scope.movie;
	$scope.movieInfo = {};
	$scope.revealInput = false;
	$scope.revealResult = false;
	$scope.thumbsUp = false;
	$scope.thumbsDown = false;
	$scope.err = "";
	$scope.ratingSource = "";
	$scope.ratingValue = "";


	$scope.reset = function() {
		$scope.revealInput = true;
		$scope.revealResult = false;
		$scope.thumbsUp = false;
		$scope.thumbsDown = false;
		$scope.err = "";
		$scope.ratingSource = "";
		$scope.ratingValue = "";
		$scope.movieInfo = {};
	};

	$scope.send = function(data) {
		var title = data.title.split(' ').join('+');
		var movie = API.Movie().get({title: title, year: data.year}, function(movieData) {

			if (movieData.Response == "False") {
				$scope.err = "No movie data exists for this title";
				$scope.revealResult = true;
				$scope.revealInput = false;
			} else {
				if (movieData.Ratings.length < 2) {
					bestRateSource = 0;
				} else {
					bestRateSource = 1;
				};

				var ratingValue = parseInt(movieData.Ratings[bestRateSource].Value);
				$scope.movie = movieData;
				$scope.ratingSource = movieData.Ratings[bestRateSource].Source;
				$scope.ratingValue = movieData.Ratings[bestRateSource].Value;
				$scope.revealInput = false;
				$scope.revealResult = true;	

				if (bestRateSource == 0) {
					$scope.thumbsDown = false;
					$scope.thumbsUp = false;
					$scope.rating = "green";
				} else if (ratingValue > 80) {
					$scope.rating = "red";
					$scope.thumbsUp = true;
				} else if (ratingValue > 60) {
					$scope.rating = "green";
				} else {
					$scope.rating = "grey";
					$scope.thumbsDown = true;
				}
			}		
		});
	};
};
