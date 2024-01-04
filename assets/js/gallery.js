// 
const myImages = ['Dinny-01.jpg', 'Dinny-02.jpg', 'Dinny-03.jpg', 'Dinny-04.jpg', 'Dinny-05.jpg', 'Dinny-06.jpg', 'Dinny-07.jpg', 'Dinny-08.jpg', 'Dinny-09.jpg'];

// tilgå arrays med nummer .. startende ved 0
console.log(myImages);
console.log(myImages[0]);



// myImageCount er den plads i arrayet der vises i dom.
let myImageCount = 0;



//myGalleryElement, dom element der skal bruges til at vise billeder i.
let myGalleryElement = document.getElementById("gallery_image");


// myForward dom element der kan klikkes på, når man vil frem i galleri.
let myForward = document.getElementById("nav_arrow_forward");



// event listner som lytter på om myForward bliver klikket på, og trigger en arrowfunction
myForward.addEventListener('click', (e) => {

    myImageCount++; // læg 1 til variablen .. increment by 1

    // error check.. er vi længere end array er langt? start forfra
    if (myImageCount >= myImages.length) {
        myImageCount = 0;
    }

    // ren myImageCount der er steppet 1 frem eller er 0

    showImage();

});


// tilbage pil...
let myBack = document.getElementById("nav_arrow_back");



myBack.addEventListener('click', (e) => {

    myImageCount--; 

    if (myImageCount < 0) {

        myImageCount = myImages.length - 1;
    }

    showImage();

});


showImage();

function disableScroll() {
    const scrollY = window.scrollY;
    
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.overflow = 'hidden';
  }