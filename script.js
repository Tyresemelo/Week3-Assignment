const thumbContainer = document.getElementById("thumb-container");
const displayImage = document.getElementById("display");

let imageIndex = 0;

const images = [
{
    url: "https://www.bornfree.org.uk/wp-content/uploads/2023/09/King-hero.jpg",
    alt: "Lion",
},
{
    url: "https://i.natgeofe.com/n/f1a20f4a-5e31-4499-9780-4e5220021e57/snakes-trees_16x9.jpg",
    alt: "Snake",
},
{
    url: "https://animalfactguide.com/wp-content/uploads/2024/01/chameleon.jpg",
    alt: "Chameleon",
},
{
    url: "https://static.independent.co.uk/2023/01/17/15/iStock-949472768.jpg",
    alt: "Tiger",
},
{
    url: "https://files.worldwildlife.org/wwfcmsprod/images/Mountain_Gorilla_Silverback_WW22557/story_full_width/36fcoamev0_Mountain_Gorilla_Silverback_WW22557.jpg",
    alt: "Gorilla",
},
];

function createThumbnails() {
images.forEach(function (image) {
    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    thumbContainer.appendChild(img);
    img.addEventListener("click", function () {
    createBigImage(image);
    });
});
}

function createBigImage(image) {
displayImage.innerHTML = "";
const bigImg = document.createElement("img");
bigImg.src = image.url;
bigImg.alt = image.alt;
displayImage.appendChild(bigImg);
}

function showNextImage() {
imageIndex = (imageIndex + 1) % images.length;
createBigImage(images[imageIndex]);
}
function showPreviousImage() {
    imageIndex = (imageIndex - 1 + images.length) % images.length;
    createBigImage(images[imageIndex]);
}

document
    .getElementById("prev-btn")
    .addEventListener("click", showPreviousImage);
document.getElementById("next-btn").addEventListener("click", showNextImage);

createThumbnails();
createBigImage(images[0]);