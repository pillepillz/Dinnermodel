//ExampleView Object constructor
var ExampleView1 = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.getDishes = container.find("#getDishes");
	this.getSelectedDish = container.find(".getSelectedDish");
	this.getFullMenu = container.find("#getFullMenu");
	this.getAllIngredients = container.find("#getAllIngredients");
	this.getTotalMenuPrice = container.find(".getTotalMenuPrice");
	this.addDishToMenu = container.find("#addDishToMenu");
	this.removeDishFromMenu=container.find("#removeDishFromMenu");
	this.getAllDishes = container.find(".getAllDishes");
	this.getDish = container.find("#getDish");
	this.lorem=container.find(".Lorem");
	this.getADish=container.find(".getADish");
	this.getDescription=container.find(".getDescription");
	this.getSel = container.find("#getSel");


	this.createDinner = container.find("#createDinner");

	
}






