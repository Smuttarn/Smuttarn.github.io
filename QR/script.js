
var personArray = [0];


//document.getElementById("spawnProfile").onclick = spawnHamodi;

// $("#spawnProfile").click(function(){
//     spawnHamodi();
// })

window.onload = function(){
    document.getElementById("spawnProfile").onclick = spawnHamodi;
}

function spawnHamodi(){
    createProfile("Hamodi Jaafary", "moja1337", "0707123456", true, "hamodi.PNG");
    loadInfo("moja1337");
}

function createProfile(name, id, phone, active, imgSrc){
    var profileObj = {
        fullName: name,
        schoolID: id,
        phoneNumber: phone,
        activeStudent: active,
        imageSource: imgSrc
    };
    personArray.push(profileObj);
}

function loadInfo(id){
    var personToLoad = searchForID(id);
    document.getElementById("name").innerHTML += personToLoad.fullName;
    document.getElementById("schoolID").innerHTML += personToLoad.schoolID;
    document.getElementById("phoneNumber").innerHTML += personToLoad.phoneNumber;
    document.getElementById("activeStudent").innerHTML += personToLoad.activeStudent;
    document.getElementById("holderImage").src = personToLoad.imageSource;
}

function searchForID(id){
    for(var i = 0; i < personArray.length; i++){
        if(personArray[i].schoolID == id){
            return personArray[i];
        }
    }
    alert("No such user found.");
}


