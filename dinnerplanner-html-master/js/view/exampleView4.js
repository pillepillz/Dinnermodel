//ExampleView Object constructor
var ExampleView4 = function (container, model) {
	
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

	model.setNumberOfGuests(10);
	model.addDishToMenu(100);
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.getTotalMenuPrice.html(model.getTotalMenuPrice());
	var menu = model.getAllDishes("main dish");
	this.getEmptyMenu.html("0");

	var name = "";
	var loreN = "";
	for(i=0; i<menu.length; i++){
		name += "<div class='mat'>"+ "<img id='bild' src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + menu[i].image +"'>" + "<div class='text'>"+ menu[i].name +"</div></div>";
		this.getAllDishes.html(name);
		loreN += "<div class='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>";
		this.lorem.html(loreN);

	}

	this.getSelectedDish.html(model.getSelectedDish("main dish")[0].name);
	var totalprice= 0

	for(a=0; a< model.getAllIngredients()[0].length; a++){
		totalprice += model.getAllIngredients()[0][a].price;
	}
	this.getPrice.html(totalprice)

	this.getTotalMenuPrice.html(model.getTotalMenuPrice()*model.getNumberOfGuests())



	model.addDishToMenu(1);
	model.addDishToMenu(202);
	console.log(model.getFullMenu());



}
