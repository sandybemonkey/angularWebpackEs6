export default ngModule => {
	/**
	 * Css file relative to this component
	 */
	//require('./appComponent.styl');
	
	if (ON_TEST) {
		require('./appComponent.test.js')(ngModule);
	}
	
	class AppCtrl {
		constructor($log){}
	}
	
	ngModule
		.component('app',{
			controller:  AppCtrl,
			template: require('./appComponent.html'),
			$routeConfig: [
			    {path: '/', name: 'Home', component: 'main', useAsDefault: true}
			],
		})
		.run(($log) => {
	    	$log.info('appComponent is running');
		});
};