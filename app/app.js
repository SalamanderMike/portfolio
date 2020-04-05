import 'normalize.css';
import './styles/app.scss';
import angular from 'angular';
import ngAnimate from 'angular-animate';
import ngResource from 'angular-resource';
import ngRoute from 'angular-route';
import uiBootstrap from 'angular-ui-bootstrap';

import router from './routing';
import AppController from './controllers/controller.js';
import API from './services/service.js';


export default angular.module('app', [ngRoute, ngResource, ngAnimate, uiBootstrap])
	.service('API', API)
	.controller('AppController', AppController)
	.config(router)
	.run(function ($location, $rootScope) {
		'ngInject';
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			if (current.hasOwnProperty('$$route')) {
				$rootScope.title = current.$$route.title;
			}
		});
	});
