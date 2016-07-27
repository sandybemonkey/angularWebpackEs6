import angular from 'angular';
import ngComponentRouter from '@angular/router/angular1/angular_1_router';
if (ON_TEST) {
	require('angular-mocks/angular-mocks');
}
import* as appCss from './app.css';
import appModule from './App';
import mainModule from './Main';

/**
 * [ngModule Main Module]
 * @type {[angular.module]}
 */
const ngModule = angular.module('myApp', [
	'ngComponentRouter'
]);

/**
 * myApp Congifuration
 */
ngModule
	.config(($locationProvider) =>{
		$locationProvider.html5Mode(true);
	})
	.run(($log) =>{
		$log.info('app is running on Port: 8080')
	})
	.value('$routerRootComponent', 'app');

/**
 * Passing the main module
 * to appModule
 * appModule is going to register itself to
 * the main module
 */
appModule(ngModule);
mainModule(ngModule);

/**
 * Bootstraping the app.No need to add "ng-app directive in index.html"
 */
angular.bootstrap(window.document, ['myApp']);