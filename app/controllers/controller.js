export default function AppController ($scope, $timeout, $q) {
	'ngInject';
	var app = this;
	var i = 5;
	$scope.glow = false;

	
	$scope.flicker = function() {
		$q.when(number()).then(function(duration){
			$scope.glow = true;
			$timeout(function() {
				$scope.glow = false;
				$timeout(function() {
					$scope.glow = true;
					$timeout(function() {
						$scope.glow = false;
						$timeout(function() {
							$scope.glow = true;
							$timeout(function() {
								$scope.glow = false;
							},duration[4]);
						},duration[3]);
					},duration[2]);
				},duration[1]);
			},duration[0]);
		});
	}
	
	function number(){
		var array = [90,100,110,500,1000];
		var duration = [];
		while (i--) {
			var random = Math.floor(Math.random() * (i + 1));
			duration.push(array[random]);
			array.splice(random, 1);
			if (duration.length == 5) {
				i = 5;
				return duration;
			}
		}
	}





};
