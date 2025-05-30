/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
    let baliseScore = document.querySelector(".zoneScore span")
    let affichageScore = `${score}/${nbMotsProposes}`
    baliseScore.innerText = affichageScore
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}



/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let btnValidation = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    btnValidation.addEventListener("click", ()=> console.log(inputEcriture.value))
    let score = 0
    let nbMotsProposes = 0

    

  

    afficherResultat(score, nbMotsProposes)
}