function addUser(){
        var player1_name = document.getElementById("player_1_login_input").value;
        var player2_name = document.getElementById("player_2_login_input").value;
        localStorage.setItem("player_1_login_input", player1_name);
        localStorage.setItem("player_2_login_input", player2_name);
        window.location = "game_page.html";
}