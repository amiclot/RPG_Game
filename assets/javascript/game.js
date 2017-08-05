 $(document).ready(function() {

 	var zeusGod = new fighter('Zeus', 300, 80, 0, 'assets/images/zeus.jpg', "img-responsive img-thumbnail allImages center-block");
    var posedionGod = new fighter('Posedion', 300, 80, 0, 'assets/images/posedion.jpg', "img-responsive img-thumbnail allImages center-block");
    var anibusGod = new fighter('Anibus', 300, 80, 0, 'assets/images/anibus.jpg', "img-responsive img-thumbnail allImages center-block");
    var osirisGod = new fighter('Oiris', 300, 80, 0, 'assets/images/osiris.jpg', "img-responsive img-thumbnail allImages center-block");

    var userSelectFighter = true;

    var fighterArray = [];

    function fighter(name, hp, attackDmg, defense, imgSrc, imgClass){
    	this.name = name;
    	this.hp = hp;
    	this.attackDmg = attackDmg;
    	this.defense = defense;
    	this.imgSrc = imgSrc;
    	this.imgClass = imgClass;

    }

    fighterArray.push(zeusGod);
    fighterArray.push(posedionGod);
    fighterArray.push(anibusGod);
    fighterArray.push(osirisGod);

    console.log(zeusGod);
    console.log(posedionGod);
    console.log(anibusGod);
   	console.log(osirisGod);
   	console.log(fighterArray);

   	for (i=0; i < fighterArray.length; i++){
   		var	newDiv = document.createElement('div');
   		var newImg = document.createElement('img');



   	}

    
    $(".startGame").on("click", function() {
        $(".panelShow").removeClass('hidden');
        $(".startGameContainer").addClass('hidden');

    
      
    });


	});

 // if fighter button is pressed
 //pull up div
 //Select Enemy Screen
 //send/append other three god images and buttons (other column)
 //pull up div
 //three columns
 //one column (your fighter + healthbar or hp number + attack button)
 //middle column (vs)
 //other column (enemy fighter + healthbar or hp number + attack button)
 //attack buttons adds damage minus defenders denfense rating
