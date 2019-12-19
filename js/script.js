function convertisseurEnEuros() {
    if (document.convertisseur.valeurFranc.value == "") {
        window.alert("Pas de valeurs en francs");
    } else {
        document.convertisseur.valeurEuro.value = document.convertisseur.valeurFranc.value / 6.55957;
    }
}

function convertisseurEnFrancs() {
    if (document.convertisseur.valeurEuro.value == "") {
        window.alert("Pas de valeurs en euro");
    } else {
        document.convertisseur.valeurFranc.value = document.convertisseur.valeurEuro.value * 6.55957;
    }
}
