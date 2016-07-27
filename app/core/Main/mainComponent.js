export default ngModule => {
	/**
	 * Css file relative to this component
	 */
	require('./mainComponent.styl');
	
	if (ON_TEST) {
		require('./mainComponent.test.js')(ngModule);
	}
	
	class MainCtrl {
		constructor($log){
			this.greeting = 'Welcome to te next level!!';
		}
	}
	
	ngModule
		.component('main',{
			controller:  MainCtrl,
			template: require('./mainComponent.html')
		})
		.run(($log) => {
	    	$log.info('mainComponent is running');
		});
};