 //poseidon



 $(document).ready(function() {

 	var zeusGod = {name: 'Zeus', hp: 500, attackDmg: 80, counterDmg: 40};
    var poseidonGod = {name: 'Poseidon', hp: 400, attackDmg: 70, counterDmg: 60}
    var anibusGod = {name: 'Anibus', hp: 400, attackDmg: 100, counterDmg: 20}
    var osirisGod = {name: 'Osiris', hp: 600, attackDmg: 90, counterDmg: 60}

    var userFighter;
    var cpuFighter;

    var fighterArray = [];



    fighterArray.push(zeusGod);
    fighterArray.push(poseidonGod);
    fighterArray.push(anibusGod);
    fighterArray.push(osirisGod);


    
    $(".startGame").on("click", function() {
        $(".panelShow").removeClass('hidden');
        $(".startGameContainer").addClass('hidden');
        $('.poseidonButton').addClass('selectPoseidon');
        $('.osirisButton').addClass('selectOsiris');
        $('.anubisButton').addClass('selectAnubis');
        $('.zeusButton').addClass('selectZeus');
        $(".ZeusHP").text(zeusGod.hp);
        $(".OsirisHP").text(osirisGod.hp);
        $(".AnubisHP").text(anibusGod.hp);
        $(".PoseidonHP").text(poseidonGod.hp);


    
      
    });



    $(document.body).on('click', '.selectZeus', function() {
        $(".fighterZeus").appendTo('.userFighter');
        $('.userFighter').addClass('userZeus');
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
        $('.selectZeus').hide();


    });

    $(document.body).on('click', '.selectAnubis', function() {
        $(".fighterAnubis").appendTo('.userFighter');
        $('.userFighter').addClass('userAnibus');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectOsiris").addClass('enemyButton1');
        $(".fighterOsiris").addClass('enemyFighter1');
        $(".selectZeus").addClass('enemyButton4');
        $(".fighterZeus").addClass('enemyFighter4');
        $(".selectPoseidon").addClass('enemyButton3');
        $(".fighterPoseidon").addClass('enemyFighter3');
        $(".selectPoseidon").removeClass('selectPoseidon');
        $(".selectOsiris").removeClass('selectOsiris');
        $(".selectZeus").removeClass('selectZeus');
        $('.selectAnubis').hide();


    });

    $(document.body).on('click', '.selectOsiris', function() {
        $(".fighterOsiris").appendTo('.userFighter');
        $('.userFighter').addClass('userOsiris');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectZeus").addClass('enemyButton4');
        $(".fighterZeus").addClass('enemyFighter4');
        $(".selectAnubis").addClass('enemyButton2');
        $(".fighterAnubis").addClass('enemyFighter2');
        $(".selectPoseidon").addClass('enemyButton3');
        $(".fighterPoseidon").addClass('enemyFighter3');
        $(".selectPoseidon").removeClass('selectPoseidon');
        $(".selectZeus").removeClass('selectZeus');
        $(".selectAnubis").removeClass('selectAnubis');
        $('.selectOsiris').hide();

    });

    $(document.body).on('click', '.selectPoseidon', function() {
        $(".fighterPoseidon").appendTo('.userFighter');
        $('.userFighter').addClass('userPoseidon');
        $(".selectHeader").text("Choose Your Opponent!");
        $(".selectOsiris").addClass('enemyButton1');
        $(".fighterOsiris").addClass('enemyFighter1');
        $(".selectAnubis").addClass('enemyButton2');
        $(".fighterAnubis").addClass('enemyFighter2');
        $(".selectZeus").addClass('enemyButton4');
        $(".fighterZeus").addClass('enemyFighter4');
        $(".selectZeus").removeClass('selectZeus');
        $(".selectOsiris").removeClass('selectOsiris');
        $(".selectAnubis").removeClass('selectAnubis');
        $('.selectPoseidon').hide();


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


var lockinUser = function (){
    if ($('section').hasClass('userZeus')) {
            var userFighter = zeusGod;
        } else if ($('section').hasClass('userAnibus')) {
                var userFighter = anibusGod;
        } else if ($('section').hasClass('userOsiris')) {
                var userFighter = osirisGod;
        } else if ($('section').hasClass('userPoseidon')) {
                var userFighter = poseidonGod;
        } 

};

var lockinCPU = function(){
     if ($('article').hasClass('enemyFighter4')) {
            var cpuFighter = zeusGod;
        } else if ($('article').hasClass('enemyFighter2')) {
                var cpuFighter = anibusGod;
        } else if ($('article').hasClass('enemyFighter1')) {
                var cpuFighter = osirisGod;
        } else if ($('article').hasClass('enemyFighter3')) {
                var cpuFighter = poseidonGod;
        } 



}


    $(document.body).on('click', '.startFight', function(){

        
    lockinUser(); 
    lockinCPU();   
        

        

        console.log(userFighter);
        console.log(cpuFighter);


    });









    




    





    // when attack is pressed
    //   enemy character




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
