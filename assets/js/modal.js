
 displayModal("Cookie_container");
 

 function displayModal(id) {
     document.getElementById(id).style.display = "block";
     document.getElementById("myBody").classList.toggle("noScroll");

 }

 function displayGallery(id, src, desc) {
     document.getElementById(id).style.display = "block";
     document.getElementById("desc").innerHTML = desc;
     document.getElementById("myBody").classList.toggle("noScroll");

     
 }

 function closeModal(id) {
     document.getElementById(id).style.display = "none";
    document.getElementById("myBody").classList.toggle("noScroll");
 }


let myBody = document.getElementById("myBody");


function displayModal(elementiD) {

    console.log("kliked " + elementiD);

    let myModalElement = document.getElementById(elementiD);
    myModalElement.style.display = "block";

    myBody.style.overflow = "hidden";


}

function closeModal(elementiD) {
    console.log("kliked " + elementiD);

    let myModalElement = document.getElementById(elementiD);
    
    myModalElement.style.display = "none";

    myBody.style.overflow = "scroll";

}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("myBody").classList.toggle("noScroll");
}