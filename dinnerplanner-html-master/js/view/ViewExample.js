//ExampleView Object constructor
var OtherView = function (container, model) {
	
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

	model.setNumberOfGuests(2);
	model.addDishToMenu(100);
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.getTotalMenuPrice.html(model.getTotalMenuPrice());
	var menu = model.getAllDishes("main dish");
	this.getEmptyMenu.html("0");
	this.getSelectedDish.html(model.getSelectedDish("main dish")[0].name);
	var totalprice= 0

	for(a=0; a< model.getAllIngredients()[0].length; a++){
		totalprice += model.getAllIngredients()[0][a].price;
	}
	this.getPrice.html(totalprice)

	this.getTotalMenuPrice.html(model.getTotalMenuPrice()*model.getNumberOfGuests())


	var name = "";
	var loreN = "";
	for(i=0; i<menu.length; i++){
		name += "<div class='mat'>"+ "<img id='bild' src='/Users/williamfriefeldt/Downloads/dinnerplanner-html-master/images/" + menu[i].image +"'>" + "<div class='text'>"+ menu[i].name +"</div></div>";
		this.getAllDishes.html(name);
		loreN += "<div class='text2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</div>";
		this.lorem.html(loreN);

	}
	model.addDishToMenu(1);
	model.addDishToMenu(202);
	console.log(model.getFullMenu());

	var your_menu = model.getFullMenu();
	var name2 = "";
	for(b=0; b<your_menu.length; b++){
		name2 += "<div class='mat'>"+ "<img id='bild' src='/Users/williamfriefeldt/Downloads/dinnerplanner-html-master/images/" + your_menu[b].image +"'>" + "<div class='text'>"+ your_menu[b].name +"</div></div>";
		this.getYourMenu.html(name2);
	}

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
}

