function validateForm() {
    var nom = document.forms["myForm"]["nom"].value;
    var mdp = document.forms["myForm"]["mdp"].value;
    var atPosition = nom.indexOf("@");
    if (atPosition < 5 || !nom.endsWith("@nuit-info.tlse") || mdp != "12345") {
        alert("Nom d'utilisateur ou mot de passe incorrect");
        return false;
    } else {
        window.location.href = "page_presentation.html"; // Redirige vers une nouvelle page
        return false;// Pour empêcher le rechargement de la page
    }
}
