let animationRosquilla = document.getElementById("homero-rosquilla");
let containerRosquilla = document.getElementById("rosquilla-container");
let containerProposal = document.getElementById("container-proposal");
let borderInfo = document.getElementById("border-info");
let ninaLinda = document.getElementById("nina-linda");
let ninaLindaImage = document.getElementById("nina-linda_image");
let manita = document.getElementById("manita");
let manitaImage = document.getElementById("manita_image");
let mani = document.getElementById("mani");
let maniImage = document.getElementById("mani_image");
let bolos = document.getElementById("bolos");
let bolosImage = document.getElementById("bolos_image");
let favorite = document.getElementById("favorite");
let favoriteImage = document.getElementById("favorite_image");


animationRosquilla.addEventListener("click", loadAnimation);
ninaLinda.addEventListener("click", loadFirstImage);
manita.addEventListener("click", loadManitaImage);
mani.addEventListener("click", loadManiImage);
bolos.addEventListener("click", loadBolosImage);
favorite.addEventListener("click", loadFavoriteImage);  

function loadAnimation(){
    containerRosquilla.classList.add("rosquilla-container-animation");
    containerProposal.classList.add("container-proposal--visible");
    borderInfo.classList.add("border-info--visible");

    setTimeout(kickClass, 4000)
}

function kickClass(){
    containerRosquilla.classList.remove("rosquilla-container-animation")
}
//Animación de la imagen de mi niña linda, con sueter rojito
function loadFirstImage(){
    ninaLindaImage.classList.add("nina-linda-animation");

    setTimeout(kickFirstImage, 7000)
}

function kickFirstImage(){
    ninaLindaImage.classList.remove("nina-linda-animation");
}
//Animacion de la imagen de los dos juntitos agarrados de la manita. Además, que esta TOTOOOOOOO
function loadManitaImage(){
    manitaImage.classList.add("manita_image-animation");

    setTimeout(kickManitaImage, 7000)
}

function kickManitaImage(){
    manitaImage.classList.remove("manita_image-animation");
}
//Animación del manisito :D
function loadManiImage(){
    maniImage.classList.add("manita_image-animation");
    
    setTimeout(kickManiImage, 7000)
}

function kickManiImage(){
    maniImage.classList.remove("manita_image-animation");
}

//Animación de nuestro día en Bolooos :D
function loadBolosImage(){
    bolosImage.classList.add("manita_image-animation");
    
    setTimeout(kickBolosImage, 7000)
}

function kickBolosImage(){
    bolosImage.classList.remove("manita_image-animation")
}

//Animación de una de sus fotos favoritas mine too :DD
function loadFavoriteImage(){
    favoriteImage.classList.add("manita_image-animation");
    
    setTimeout(kickFavoriteImage, 7000)
}

function kickFavoriteImage(){
    favoriteImage.classList.remove("manita_image-animation");
}

let cerrar = document.getElementById('exit-button');

cerrar.addEventListener("click", cerrarPropuesta);

function cerrarPropuesta(){
    containerProposal.classList.add("exit-button--animation");
    borderInfo.classList.add("exit-button--animation");

    setTimeout(eliminarClases, 4000)
}

function eliminarClases(){
    containerProposal.classList.remove("container-proposal--visible");
    borderInfo.classList.remove("border-info--visible");
    containerProposal.classList.remove("exit-button--animation");
    borderInfo.classList.remove("exit-button--animation")
}