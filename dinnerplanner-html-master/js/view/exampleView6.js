//index6.html
var ExampleView6 = function (container,model){
	
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

	
	model.setNumberOfGuests(0);
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.addDishToMenu.html(model.addDishToMenu(100));
	this.addDishToMenu.html(model.addDishToMenu(1));

	this.getDescription.html(model.getSelectedDish("main dish")[0].description);
	var your_menu= model.getFullMenu();
	var info = "";

	for(a=0; a < your_menu.length; a++){
		info = info +"<div class='order'><div class='order-left'><div id='mat2'>"+ "<img src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + your_menu[a].image +"'>"+"</div>"+"<div class='food'>" +"<h1>" +your_menu[a].name +"</h1>" + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>" +"</div></div>";
		info = info + "<div class ='order-right'> <h2>Preparation</h2> " +your_menu[a].description +"</div></div>";

	this.getADish.html(info);
	}
	
	this.update = function(object){
		return;
	}
	model.addObserver(this);


}


