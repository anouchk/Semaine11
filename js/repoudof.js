var $requin = document.getElementById("requin");
var $poulpe = document.getElementById("poulpe");
var $dauphin = document.getElementById("dauphin");
var $choixJoueur = document.getElementById("choixJoueur");
var $go = document.getElementById("go");
var $choixOrdinateur = document.getElementById("choixOrdinateur");
var $resultat = document.getElementById("resultat");
var $pourcentage = document.getElementById("pourcentage");

var pointsJoueur = 0;
var pointsOrdinateur = 0;
var userChoice = "";

$pourcentage.innerHTML = "Pourcentage victoires : 0%";
scoreJoueur.innerHTML = pointsJoueur;
scoreOrdinateur.innerHTML = pointsOrdinateur;

var choix = function(monChoix) {
   $choixJoueur.innerHTML = "Tu as choisi " + monChoix + "...";
   $resultat.innerHTML = "";
   $choixOrdinateur.innerHTML = "...";
   userChoice = monChoix;
};

$requin.onclick = function() {choix("requin")};
$poulpe.onclick = function() {choix("poulpe")};
$dauphin.onclick = function() {choix("dauphin")};

/*solution Vianney
var choixRequin = function() {
   userChoice = "requin";
   $choixJoueur.innerHTML = "Tu as choisi " + userChoice + "...";
   $resultat.innerHTML = "";
};

var choixPoulpe = function() {
    userChoice = "poulpe";
    $choixJoueur.innerHTML = "Tu as choisi " + userChoice + "...";
   $resultat.innerHTML = "";
};

var choixDauphin = function() {
    choixUtilisateur = "dauphin";
    $choixJoueur.innerHTML = "Tu as choisi " + userChoice + "...";
   $resultat.innerHTML = "";
};*/

var go = function() {
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "requin";
	} else if(computerChoice <= 0.67) {
		computerChoice = "poulpe";
	} else {
		computerChoice = "dauphin";
	}
	$choixOrdinateur.innerHTML = "L'ordinateur a choisi : " + computerChoice;

	var compare = function(choice_1, choice_2) { 
		if (choice_1 === choice_2) {
    		pointsOrdinateur += 1;
    		pointsJoueur += 1;
    		$resultat.innerHTML = "Egalité !";
		} else if (choice_1 === "requin") {
        		if (choice_2 === "dauphin") {
            		$resultat.innerHTML = "Perdu ! Le dauphin terrasse le requin avec son bec très dur.";
            		pointsOrdinateur += 1; 
        		} else {
        		$resultat.innerHTML = "Gagné ! C'est le requin qui mange le poulpe.";
        		pointsJoueur += 1;
    			}
		} else if (choice_1 === "poulpe") {
        		if (choice_2 === "requin") {
            		$resultat.innerHTML = "Perdu ! C'est le requin qui mange le poulpe.";
            		pointsOrdinateur += 1; 
        		} else {
            		$resultat.innerHTML = "Gagné ! Le poulpe bat le dauphin au rubixcube.";
            		pointsJoueur += 1;
   	 			}
		} else if (choice_1 === "dauphin") {
        		if (choice_2 === "requin") {
            		$resultat.innerHTML = "Gagné ! Le dauphin terrasse le requin avec son bec très dur.";
            		pointsJoueur += 1;
        		} else {
            		$resultat.innerHTML = "Perdu ! Le poulpe bat le dauphin au rubixcube.";
            		pointsOrdinateur += 1;
    			}
		} else {
			alert("Tu n'as pas choisi ton destrier !");
			$choixOrdinateur.innerHTML = "...";
			$choixJoueur.innerHTML = "...";		
				}
	};	
	var afficherPourcentage = function() {
        scoreJoueur.innerHTML = pointsJoueur;
		scoreOrdinateur.innerHTML = pointsOrdinateur;
        var p = Math.floor(pointsJoueur * 100 / (pointsJoueur + pointsOrdinateur));
        $pourcentage.innerHTML ="Pourcentage victoires : " + p + "%"; 
     };   
    /*alert(userChoice + " " + computerChoice);*/
    compare(userChoice, computerChoice);
    afficherPourcentage();
    userChoice = "";
};

/*$requin.onclick = choixRequin;
$poulpe.onclick = choixPoulpe;
$dauphin.onclick = choixDauphin;*/

$go.onclick = go;