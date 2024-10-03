// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var photos = document.querySelectorAll(".photo-item img");
var currentIndex = 0;

photos.forEach((photo, index) => {
    photo.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        currentIndex = index;
    };
});

// Close modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

// Navigate through images
document.querySelector(".prev").onclick = function() {
    currentIndex = (currentIndex === 0) ? photos.length - 1 : currentIndex - 1;
    modalImg.src = photos[currentIndex].src;
};

document.querySelector(".next").onclick = function() {
    currentIndex = (currentIndex === photos.length - 1) ? 0 : currentIndex + 1;
    modalImg.src = photos[currentIndex].src;
};
