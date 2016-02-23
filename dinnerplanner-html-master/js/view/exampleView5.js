//ExampleView Object constructor
var ExampleView5 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.getTotalMenuPrice = container.find(".getTotalMenuPrice");
	this.addDishToMenu = container.find("#addDishToMenu");
	this.getAllDishes = container.find(".getAllDishes");
	this.lorem = container.find("#Lorem");
	this.getSelectedDish = container.find(".getSelectedDish");
	this.getPrice = container.find("#getPrice");
	this.getAllIngredients = container.find("#getAllIngredients");
	this.getYourMenu = container.find(".YourMenu");
	this.getPrice2 = container.find(".getPrice2");
	this.getEmptyMenu = container.find(".empty");
	this.menuPrice = container.find("#menuPrice")	



	this.numberOfGuests.html(model.getNumberOfGuests());
	this.getTotalMenuPrice.html(model.getTotalMenuPrice());
	var menu = model.getAllDishes("main dish");
	this.getEmptyMenu.html("0");

	model.addDishToMenu(1);
	model.addDishToMenu(202);
	var veryprice = 0;
	var totPrice = "";
	for(d=0; d<3;d++){
		var dishPrice = 0;
		for(c=0; c<model.getAllIngredients()[d].length; c++){
			dishPrice +=model.getAllIngredients()[d][c].price;

	}
	totPrice += "<div class='element'>" + dishPrice + " SEK"+ "</div>";
	veryprice += dishPrice;
	
	this.getPrice2.html(totPrice);
	}
	this.menuPrice.html(veryprice);

	

	var your_menu = model.getFullMenu();
	var name2 = "";
	for(b=0; b<your_menu.length; b++){
		name2 += "<div class='mat'>"+ "<img id='bild' src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + your_menu[b].image +"'>" + "<div class='text'>"+ your_menu[b].name +"</div></div>";
		this.getYourMenu.html(name2);
	}
	this.update = function(object){
		return;
	}
	model.addObserver(this);

}
