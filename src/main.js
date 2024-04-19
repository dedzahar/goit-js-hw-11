import makeFetch from "./js/pixabay-api"
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".search-form");
form.addEventListener("submit", event => {
    event.preventDefault();
    const searchString = event.target.elements.search.value.trim();
    if (searchString === "") {
        return;
    }
    makeFetch(searchString)
        .then(data => {
            if (data.total == 0) {
                iziToast.show(createEmptyMsg());
            }
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
