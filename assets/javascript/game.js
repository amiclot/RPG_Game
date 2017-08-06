 $(document).ready(function() {

 	var zeusGod = new fighter('Zeus', 300, 80, 0);
    var posedionGod = new fighter('Posedion', 300, 80, 0);
    var anibusGod = new fighter('Anibus', 300, 80, 0);
    var osirisGod = new fighter('Oiris', 300, 80, 0);

    var userSelectFighter = true;

    var fighterArray = [];

    function fighter(name, hp, attackDmg, counterDmg, imgSrc, imgClass){
    	this.name = name;
    	this.hp = hp;
    	this.attackDmg = attackDmg;
    	this.counterDmg = counterDmg;
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


    
    $(".startGame").on("click", function() {
        $(".panelShow").removeClass('hidden');
        $(".startGameContainer").addClass('hidden');
        $('.poseidonButton').addClass('selectPoseidon');
        $('.osirisButton').addClass('selectOsiris');
        $('.anubisButton').addClass('selectAnubis');
        $('.zeusButton').addClass('selectZeus');


    
      
    });

    $(document.body).on('click', '.selectZeus', function() {
        $(".fighterZeus").appendTo('.userFighter');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectOsiris").addClass('enemyButton1');
        $(".fighterOsiris").addClass('enemyFighter1');
        $(".selectAnubis").addClass('enemyButton2');
        $(".fighterAnubis").addClass('enemyFighter2');
        $(".selectPoseidon").addClass('enemyButton3');
        $(".fighterPoseidon").addClass('enemyFighter3');
        $(".selectPoseidon").removeClass('selectPoseidon');
        $(".selectOsiris").removeClass('selectOsiris');
        $(".selectAnubis").removeClass('selectAnubis');


    });

    $(document.body).on('click', '.selectAnubis', function() {
        $(".fighterAnubis").appendTo('.userFighter');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectOsiris").addClass('enemyButton1');
        $(".fighterOsiris").addClass('enemyFighter1');
        $(".selectZeus").addClass('enemyButton2');
        $(".fighterZeus").addClass('enemyFighter2');
        $(".selectPoseidon").addClass('enemyButton3');
        $(".fighterPoseidon").addClass('enemyFighter3');
        $(".selectPoseidon").removeClass('selectPoseidon');
        $(".selectOsiris").removeClass('selectOsiris');
        $(".selectZeus").removeClass('selectZeus');

    });

    $(document.body).on('click', '.selectOsiris', function() {
        $(".fighterOsiris").appendTo('.userFighter');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectZeus").addClass('enemyButton1');
        $(".fighterZeus").addClass('enemyFighter1');
        $(".selectAnubis").addClass('enemyButton2');
        $(".fighterAnubis").addClass('enemyFighter2');
        $(".selectPoseidon").addClass('enemyButton3');
        $(".fighterPoseidon").addClass('enemyFighter3');
        $(".selectPoseidon").removeClass('selectPoseidon');
        $(".selectZeus").removeClass('selectZeus');
        $(".selectAnubis").removeClass('selectAnubis');

    });

    $(document.body).on('click', '.selectPoseidon', function() {
        $(".fighterPoseidon").appendTo('.userFighter');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectOsiris").addClass('enemyButton1');
        $(".fighterOsiris").addClass('enemyFighter1');
        $(".selectAnubis").addClass('enemyButton2');
        $(".fighterAnubis").addClass('enemyFighter2');
        $(".selectZeus").addClass('enemyButton3');
        $(".fighterZeus").addClass('enemyFighter3');
        $(".selectZeus").removeClass('selectZeus');
        $(".selectOsiris").removeClass('selectOsiris');
        $(".selectAnubis").removeClass('selectAnubis');

    });



    $(document.body).on('click', '.enemyButton1', function() {
        $('.enemyFighter1').appendTo('.cpuFighter');
        $(".panelShow2").removeClass('hidden2');
        $(".panelShow").addClass('hidden');

    });

    $(document.body).on('click', '.enemyButton2', function() {
        $('.enemyFighter2').appendTo('.cpuFighter');
        $(".panelShow2").removeClass('hidden2');
        $(".panelShow").addClass('hidden');

    });

    $(document.body).on('click', '.enemyButton3', function() {
        $('.enemyFighter3').appendTo('.cpuFighter');
        $(".panelShow2").removeClass('hidden2');
        $(".panelShow").addClass('hidden');

    });




//var hasUserSelectedFighter = false;

//if 




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
