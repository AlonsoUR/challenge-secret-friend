// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/* 
    Variable declaration
*/
let friendsList = [];


/* 
    function definition
*/

function addFriend() {
    let inputText = document.getElementById("amigo").value;
    

    if (inputText == ""){
        alert("Por favor ingresar un nómbre.");
    }
    else{
        friendsList.push(inputText);
        
        //console.log(friendsList);
        showFriendsList();
    }
}

function showFriendsList (){
    let shownList = document.getElementById("listaAmigos");
    cleanShowedList();
    document.getElementById("amigo").value = "" //Clean input text box
    for (let i = 0; i < friendsList.length; i++){
        shownList.innerHTML += `<li>${friendsList[i]}</li>`;
    }
}

function pickFriend(){
    let listLength = friendsList.length;
    

    if (listLength > 0) {
        let randomIndex = Math.floor(Math.random()*listLength);
        pickedFriend = friendsList[randomIndex];
        cleanShowedList();
        document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es ${pickedFriend}`;

    }
}

function cleanShowedList() {
    document.getElementById("listaAmigos").innerHTML = "";
}
