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

});