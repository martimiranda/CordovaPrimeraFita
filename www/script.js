var users=["marti","123"];
function checkLogin(){
    var user =document.querySelector("#user").value;
    var pwd =document.querySelector("#pwd").value;
    var indexofUser = users.indexOf(user);
    if(indexofUser==-1){
        alert("Usuari incorrecte");
    }else{
        if(users[indexofUser+1]==pwd){
            alert("Usuari correcte");
            document.getElementById("user").value="";
            document.getElementById("pwd").value="";
        }else{
            alert("Usuari incorrecte");
        }
    }
}

function checkRegister(){
    var user =document.querySelector("#userR").value;
    var pwd =document.querySelector("#pwdR").value;
    var pwd2 =document.querySelector("#pwdR2").value;
    if(pwd==pwd2){
        users.push(user);
        users.push(pwd);
        alert("Usuari guardat");
        document.getElementById("userR").value="";
        document.getElementById("pwdR").value="";
        document.getElementById("pwdR2").value="";
    }
    else{
        alert("Les contrasenyes no coincideixen");
        document.getElementById("pwdR").value="";
        document.getElementById("pwdR2").valueL="";
    }
}