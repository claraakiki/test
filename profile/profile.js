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
    //load info about user
    var users = JSON.parse(window.localStorage.getItem('users'));
    user=users[users.length -1]
    document.getElementById("firstname").value=user[0];
    document.getElementById("lastname").value=user[1];
    document.getElementById("email").value=user[2];
    document.getElementById("phone_num").value=user[5];
    document.getElementById("image").src=user[6];
    users=JSON.parse(localStorage.getItem('users')) ;        
    document.getElementById("name-dropdown").textContent=users[users.length-1][0]+ " "+ users[users.length-1][1];
    
}


function updateInfo(){

    var firstname=document.getElementById("firstname").value;
    var lastname= document.getElementById("lastname").value;
    var email= document.getElementById("email").value;
    var phone_num= document.getElementById("phone_num").value;
    var imgpath=document.getElementById("image").src;
    users= JSON.parse(window.localStorage.getItem('users'));

    user= users.pop();

    user[0]=firstname;
    user[1]=lastname;
    user[2]=email;
    if(phone_num){
        user[5]=phone_num;
    }
    user[6]=imgpath;
    users.push(user);
    window.localStorage.setItem('users', JSON.stringify(users));
    
}

function importImage(){
    const preview = document.getElementById("image");
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}

function displayLocation(){
    navigator.geolocation.getCurrentPosition(drawMap);
}


function drawMap(pos){

    var center = [pos.coords.latitude, pos.coords.longitude]
    // Create the map
    var map = L.map('map').setView(center, 12);
    // Set up the OSM layer
    L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18
    }).addTo(map);
    // add a marker in the given location
    L.marker(center).addTo(map);
}
