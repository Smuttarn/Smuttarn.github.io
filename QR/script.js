
var personArray = [0];
var personMap = new Map();
var locationArray = ["Spellabbet, 3rd floor", "ID-labb, 3rd floor", "D4, 3rd floor", "Entrance, ground floor", "SSIS, 4th floor", "DSV Helpdesk, 3rd floor"];


window.onload = function(){
    createHamodi();
    createPablo();
    passwordCheck();
}

function passwordCheck(){
    var correct = "safetyfirst";
    var spawnPablo = "safetypablo";
    var spawnHamodi = "safetyhamodi";
    var input = prompt("Enter password: ", "");
    if(input == correct){
        var profile = getRandomProfile();
        loadInfo(profile.schoolID);
        return;
    }
    else if(input == spawnPablo){
        loadInfo("paah4127");
        return;
    }
    else if(input == spawnHamodi){
        loadInfo("moja1337");
        return;
    }
    alert("Invalid input");
    passwordCheck();
}

function getRandomProfile(){
    var index = Math.floor(Math.random() * (personArray.length - 1) + 1);
    return personArray[index];
}

function createHamodi(){
    createProfile("Hamodi Jaafary", "moja1337", "0707123456", true, "hamodi.PNG");
}

 function createPablo(){
     createProfile("Pablo Ahava Pizarro", "paah4127", "0707654321", false, "pablo.jpg");
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
    personMap.set(id, profileObj);
}

function loadInfo(id){
    //var personToLoad = searchForID(id);
    var personToLoad = personMap.get(id);
    document.getElementById("name").innerHTML += personToLoad.fullName;
    document.getElementById("schoolID").innerHTML += personToLoad.schoolID;
    document.getElementById("phoneNumber").innerHTML += personToLoad.phoneNumber;
    setColorActiveStudent(id);
    document.getElementById("activeStudent").innerHTML += personToLoad.activeStudent;
    document.getElementById("holderImage").src = personToLoad.imageSource;
    document.getElementById("lastTimeStamp").innerHTML += generateTimeStamp(generateFakeDate());
    document.getElementById("lastKnownLocation").innerHTML += generateLocation();
}

function setColorActiveStudent(id){
    if(personMap.get(id).activeStudent){
        document.getElementById("activeStudent").style.color = "green";
        return;
    }
    document.getElementById("activeStudent").style.color = "red";
}

function searchForID(id){
    for(var i = 0; i < personArray.length; i++){
        if(personArray[i].schoolID == id){
            return personArray[i];
        }
    }
    alert("No such user found.");
}

function generateTimeStamp(fakeDate){
    var currentTime;
    if(fakeDate === undefined){
        currentTime = new Date();
    }
    else{
        currentTime = fakeDate;
    }

    var output = currentTime.toLocaleString();
    return output;
}

function generateFakeDate(){
    var date = new Date();
    var minusHours = Math.floor(Math.random() * 5);
    var minusMinutes = Math.floor(Math.random() * 60);
    var minusSeconds = Math.floor(Math.random() * 60);


    date.setHours(date.getHours() - minusHours);
    date.setMinutes(date.getMinutes() - minusMinutes);
    date.setSeconds(date.getSeconds() - minusSeconds);
    return date;
}

function generateLocation(){
    var max = locationArray.length;
    var random = Math.random() * max;
    return locationArray[Math.floor(random)];
}


