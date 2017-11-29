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

import greyLinen from './styles/img/grey-linen.jpg';
import greyTile from './styles/img/grey-tile.jpg';

import bug from './styles/img/bug.jpg';
import culture from './styles/img/culture.jpg';
import dry from './styles/img/dry.jpg';
import help from './styles/img/help.jpg';
import me from './styles/img/me.jpg';
import ux from './styles/img/ux.jpg';
import neonArrowBig from './styles/img/neon-arrow-big.png';
import glowArrowBig from './styles/img/glow-arrow-big.png';
import neonArrowSmall from './styles/img/neon-arrow-small.png';
import glowArrowSmall from './styles/img/glow-arrow-small.png';
import mIconSmall from './styles/img/m-icon-small.png';


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
