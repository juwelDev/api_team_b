let imageJSON = "";
let imageList = "";

function loadPosts() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const photosList = JSON.parse(this.responseText)
        imageJSON = photosList;
        console.log("response", photosList)
        photosList.forEach((item, index) => {
            if (index <= 23) {
                imageList += `        
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white-800 dark:border-gray-700">
                <a href="#" data-modal-target="defaultModal" data-modal-toggle="defaultModal" onClick="imgShow(${item.id})">
                <img class="rounded-t-lg" src="${item.url}" alt="${item.title}" />
                </a>
                <div class="p-5">
                    <a href="#" data-modal-target="defaultModal" data-modal-toggle="defaultModal" >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">${item.title}</h5>
                    </a>
                    </a>
                </div>
            </div>
            `;
            }
        });

        document.getElementById("Images").innerHTML = imageList;
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos");
    xhttp.send();
}

loadPosts();

const imgShow = (id) => {
    const imgData = imageJSON.filter((item, index, arr) => item.id == id);

    // console.log('imgData', imgData);

    const imgModal = `<img class="w-full rounded-t-lg" src="${imgData[0].url}" alt="${imgData[0].title}" />`;
    document.getElementById("Modal").innerHTML = imgModal;
}

