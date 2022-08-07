var elAlert = document.querySelector(".alert");
var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".form__input");
var elList = document.querySelector(".list")
var elItem_1 = elList.querySelector(".list__content-1");
var elItem_2 = elList.querySelector(".list__content-2");
var elItem_3 = elList.querySelector(".list__content-3");
var elItem_4 = elList.querySelector(".list__content-4");



elForm.addEventListener("submit", function(evt) {
  evt.preventDefault()
  
  var elInputVal = elInput.value;

  var manSpeed = 3.6;
  var bikeSpeed = 20.1;
  var carSpeed = 70;
  var planeSpeed = 800;

  var manSpeedResult = elInputVal / manSpeed;
  var bikeSpeedResult = elInputVal / bikeSpeed;
  var carSpeedResult = elInputVal / carSpeed;
  var planeSpeedResult = elInputVal / planeSpeed;
  
  var manSpeedHour = Math.floor(elInputVal / manSpeed);
  var bikeSpeedHour = Math.floor(elInputVal / bikeSpeed);
  var carSpeedHour = Math.floor(elInputVal / carSpeed);
  var planeSpeedHour = Math.floor(elInputVal / planeSpeed);

  var manSpeedMin = (manSpeedResult - manSpeedHour) * 60;
  var bikeSpeedMin = (bikeSpeedResult - bikeSpeedHour) * 60;
  var carSpeedMin = (carSpeedResult - carSpeedHour) * 60;
  var planeSpeedMin = (planeSpeedResult - planeSpeedHour) * 60;

  var manSpeedMinutes = Math.floor((manSpeedResult - manSpeedHour) * 60);
  var bikeSpeedMinutes = Math.floor((bikeSpeedResult - bikeSpeedHour) * 60);
  var carSpeedMinutes = Math.floor((carSpeedResult - carSpeedHour) * 60);
  var planeSpeedMinutes = Math.floor((planeSpeedResult - planeSpeedHour) * 60);

  var manSpeedSeconds = Math.floor((manSpeedMin - manSpeedMinutes) * 60);
  var bikeSpeedSeconds = Math.floor((bikeSpeedMin - bikeSpeedMinutes) * 60);
  var carSpeedSeconds = Math.floor((carSpeedMin - carSpeedMinutes) * 60);
  var planeSpeedSeconds = Math.floor((planeSpeedMin - planeSpeedMinutes) * 60);
     

  elItem_1.textContent = `${manSpeedHour} soat ${manSpeedMinutes} minut ${manSpeedSeconds} sekund`;
  elItem_2.textContent = `${bikeSpeedHour} soat ${bikeSpeedMinutes} minut ${bikeSpeedSeconds} sekund`; 
  elItem_3.textContent = `${carSpeedHour} soat ${carSpeedMinutes} minut ${carSpeedSeconds} sekund`;
  elItem_4.textContent = `${planeSpeedHour} soat ${planeSpeedMinutes} minut ${planeSpeedSeconds} sekund`;
  elAlert.textContent = "";
  

  if (elInputVal <= 0) {
    elAlert.textContent = "Musbat son kiriting!";
    elItem_1.textContent = "";
    elItem_2.textContent = "";
    elItem_3.textContent = "";
    elItem_4.textContent = "";
          

  } else if (isNaN(elInputVal)) {
    elAlert.textContent = "Raqam kiriting!";
    elItem_1.textContent = ""; 
    elItem_2.textContent = "";
    elItem_3.textContent = "";
    elItem_4.textContent = ""; 
          
  }
})