
function afficherResultat(score, nbreTotalMots) {
    console.log("Votre score est de " + score + " sur " + nbreTotalMots)

}

function choisirPhraseOuMots() {
    //tant que l'utilisateur n'a pas saisi 
    let reponseUtilisateur = prompt("Veuillez choisir la liste : mots ou phrases")
    while (reponseUtilisateur !== "mots" && reponseUtilisateur !== "phrases") {
        reponseUtilisateur = prompt("Veuillez choisir la liste : mots ou phrases")
    }
    return reponseUtilisateur
}

function lancerBoucleDejeu(listeProposition){
    let score = 0
    for (let k = 0; k < listeProposition.length; k++) {
        let motUtilisateur = prompt('Entrez le mot: ' + listeProposition[k])
        if (motUtilisateur === listeProposition[k]) {
            score++

        }
    }
    return score

}

function lancerJeu(){
    let reponseUtilisateur = choisirPhraseOuMots()
    let score = 0
    let nbreTotalMots = 0

    if (reponseUtilisateur === 'mots'){
        score = lancerBoucleDejeu(listeMots)
        nbreTotalMots = listeMots.length
    }
    else {
        score = lancerBoucleDejeu(listePhrases)
        nbreTotalMots = listePhrases.length
    }

    afficherResultat(score, nbreTotalMots)
}