window.onload = function() {
    var registerForm = document.getElementById("registerForm");
    var loginForm = document.getElementById("loginForm");

    if(registerForm) {
        registerForm.addEventListener("submit", function(event){
            event.preventDefault();
            
            var nom = document.getElementById("nom").value;
            var mdp = document.getElementById("mdp").value;
            
            var users = JSON.parse(localStorage.getItem('users')) || [];
            
            users.push({nom: nom, mdp: mdp});
            
            localStorage.setItem('users', JSON.stringify(users));
            
            alert("Inscription réussie !");
            window.location.href="login.html";
        });
    }

    if(loginForm) {
        loginForm.addEventListener("submit", function(event){
            event.preventDefault();
            
            var nom = document.getElementById("nom").value;
            var mdp = document.getElementById("mdp").value;
            
            var users = JSON.parse(localStorage.getItem('users')) || [];
            
            for(var i = 0; i < users.length; i++) {
                if(users[i].nom == nom && users[i].mdp == mdp) {
                    window.location.href = "page_presentation.html";
                    return;
                }
            }
            
            alert("Nom d'utilisateur ou mot de passe incorrect");
        });
    }
}
