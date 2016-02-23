var ExampleView3Controller = function(view, model) {

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>0){
			model.setNumberOfGuests(model.getNumberOfGuests()-1);
		}
	
	});

	view.backbutton.click(function(){
		$("#exampleView2").show();
		$("#exampleView3").hide();
	});
	
	view.getThatDish.click(function(){
		view.type = "starter";
	
	});
}
