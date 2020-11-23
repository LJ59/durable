// fonction pour le lien de partage de la page

function monLien() {
    var lien = str.link("https://durable.lenord.fr/");
    //lien.select();
    lien.execCommand("copy");
    alert("Le lien a été copié " + `${lien}`);
}