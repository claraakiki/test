function removeLoggedUser(){

    window.localStorage.setItem('online', "false");
    document.location.href="../index.html";
    return false;
}