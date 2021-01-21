let toggleBtn = document.getElementById('menu-toggle');
let sidebarWrapper = document.getElementById('wrapper');
function main() {
    // check whether we are logged in or not
}

function toggleDropdown(){
    var menu = document.getElementById("dropdown");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


function main(){
    // check whether we are logged in or not
    var online= window.localStorage['online'] || "false";
    if(online == "true"){
        document.getElementById("signin").style.display="none";
        users=JSON.parse(localStorage.getItem('users')) ;        
        document.getElementById("name-dropdown").textContent=users[users.length-1][0]+ " "+ users[users.length-1][1];
    }else{
        document.getElementById("name-dropdown").style.display="none";
        document.getElementById("profile").style.display="none";
        document.getElementById("logout").style.display="none";
    }
    return false;
}
