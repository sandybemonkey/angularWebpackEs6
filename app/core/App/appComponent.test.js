export default ngModule => {
	describe('mainComponent', () =>{
		let $componentController;
		
		beforeEach(window.module(ngModule.name));
		
		beforeEach(inject((_$componentController_) => {
		    $componentController = _$componentController_;
		}));
		describe('#$ctrl.hero', () =>{
			it('should exist', () => {
				var ctrl = $componentController('main');
				expect(ctrl.hero).to.exist;
				
			});
			it('should be an array', () => {
				var ctrl = $componentController('main');
				expect(ctrl.hero).to.be.an('array');
				
			});
		});
		

	});
}