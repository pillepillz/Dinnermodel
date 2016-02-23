var ExampleView2Controller = function(view, model) {

	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests()+1);
	});

	view.minusButton.click(function(){
		if(model.getNumberOfGuests()>0){
			model.setNumberOfGuests(model.getNumberOfGuests()-1);
		}
	
	});

	view.getMain.click(function(){
		view.m("main dish");
		
		


	});

	view.getStarter.click(function(){
		view.m("starter");
		

	});
	
	view.getDessert.click(function(){
		view.m("dessert");


	});

	view.getThatDish.click(function(){
		$("#exampleView2").hide();
		$("#exampleView3").show();
		view.type = "starter";
	
	});
}
