//ExampleView Object constructor
var ExampleView = function (container,model) {
	
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
	this.lorem = container.find("#Lorem");
	this.getSelectedDish = container.find(".getSelectedDish");
	this.getPrice = container.find("#getPrice");
	this.getAllIngredients = container.find("#getAllIngredients");
	this.getYourMenu = container.find(".YourMenu");
	this.getPrice2 = container.find(".getPrice2");
	this.getEmptyMenu = container.find(".empty");
	this.menuPrice = container.find("#menuPrice")
//WILLE
	

//initiella värden

	model.setNumberOfGuests(5);
	this.addDishToMenu.html(model.addDishToMenu(100));
	this.addDishToMenu.html(model.addDishToMenu(1));

//index6.html
	


	this.getDescription.html(model.getSelectedDish("main dish")[0].description);
	var your_menu= model.getFullMenu();
	var info = "";

	for(a=0; a < your_menu.length; a++){
		info = info +"<div class='order'><div class='order-left'><div id='mat2'>"+ "<img src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + your_menu[a].image +"'>"+"</div>"+"<div class='food'>" +"<h1>" +your_menu[a].name +"</h1>" + "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>" +"</div></div>";
		info = info + "<div class ='order-right'> <h2>Preparation</h2> " +your_menu[a].description +"</div></div>";

	this.getADish.html(info);
	}



//Index4.html
	
	this.getSelectedDish.html(model.getSelectedDish("main dish")[0].name);
	var dishPrice= 0;
	var text = "";
	var price=0;
	for (var i = 0; i < model.getAllIngredients()[0].length ; i++) { 
		text = text + "<li>" + (model.getAllIngredients()[0][i].quantity * model.getNumberOfGuests()).toFixed(1) + model.getAllIngredients()[0][i].unit + "</li>";
		text = text + "<li>" + model.getAllIngredients()[0][i].name + "</li>";
		text = text + "<li>"+"SEK"+"</li>";
		text = text + "<li>" + model.getAllIngredients()[0][i].price * model.getNumberOfGuests().toFixed(1) + "</li><br>";
		dishPrice = dishPrice + model.getAllIngredients()[0][i].price ;
		price = price +  model.getAllIngredients()[0][i].price * model.getNumberOfGuests().toFixed(1);
		
	}

	this.getSel.html(dishPrice);
	this.getAllIngredients.html(text);
	this.getTotalMenuPrice.html(price);
	this.numberOfGuests.html(model.getNumberOfGuests());
	
	var menu = model.getFullMenu();

	name = "<img src='/home/p/h/phigul/Desktop/Hemsidan/dinnerplanner-html-master/images/" + menu[0].image +"'>";
	this.getAllDishes.html(name);
	loreN = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>";
	this.lorem.html(loreN);


//index5.html

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





