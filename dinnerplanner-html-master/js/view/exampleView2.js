//ExampleView Object constructor
var ExampleView2 = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find(".numberOfGuests");
	this.plusButton = container.find("#plusButt");
	this.minusButton = container.find("#minusButt");
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
	this.menuPrice = container.find("#menuPrice");

	this.getMain = container.find("#getMain");
	this.getStarter = container.find("#getStarter");
	this.getDessert = container.find("#getDessert");

	
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.getTotalMenuPrice.html(model.getTotalMenuPrice());

	this.getEmptyMenu.html("0");

	this.m = function(type){
	var menu = model.getAllDishes(type);
	
	//for(i=0; i<menu.length; i++){
		model.addDishToMenu(menu[0].id);
	//}
	console.log(model.getFullMenu());
	
	var name = "";
	var loreN = "";
	for(i=0; i<menu.length; i++){
		name += "<div class='mat'>"+"<button class='goDish'><img id='bild' src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + menu[i].image +"'></button>" + "<div class='text'>"+ menu[i].name +"</div></div>";
		loreN += "<div class='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>";
		

	}
	this.lorem.html(loreN);
	this.getAllDishes.html(name);
	}

	var menu = this.m("starter");

	this.update = function(object){
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.getThatDish = container.find(".goDish");
		console.log("hej");
			
	}



	model.addObserver(this);
	
}


