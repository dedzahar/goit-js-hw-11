import makeFetch from "./js/pixabay-api"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import makeGallery from "./js/render-functions";

const form = document.querySelector(".search-form");
const galleryContainer = document.querySelector(".gallery");

form.addEventListener("submit", event => {
    event.preventDefault();
    const searchString = event.target.elements.search.value.trim();
    if (searchString === "") {
        return;
    }
    galleryContainer.innerHTML = "";
    makeFetch(searchString)
        .then(data => {
            if (data.total == 0) {
                iziToast.show(createEmptyMsg());
            }
            galleryContainer.insertAdjacentHTML('beforeend', makeGallery(data.hits));

            console.log(data);
    })
    console.log(searchString);
})

function createEmptyMsg() {
    return {
        message: "Sorry, there are no images matching your search query. Please try again!",
        messageColor: '#fff',
        backgroundColor: '#EF4040',
        position: 'topRight',
    }
}
