({
	afterRender: function(component, helper) {
    	this.superAfterRender();
    	helper.getsObjectRecords(component);
  	}
})