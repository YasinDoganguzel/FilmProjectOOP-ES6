const form= document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


 
addEventListener();

function addEventListener(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films= Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);

    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);

}
function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    if(title=== "" || director==="" || url===""){
        UI.displayMessages("Eksik alanlari doldurun!", "danger");

    }
else {
 const newFilm= new Film(title,director,url);
 Storage.addFilmToStorage(newFilm);

 UI.addFilmToUI(newFilm); 
 
}
 UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();

}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        

        UI.displayMessage("Silme islemi basarili...", "success");

    }

}

function clearAllFilms(){

    if(confirm("Emin misiniz?")) {
        UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}

    }
    