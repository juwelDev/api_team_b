let newsJSON = "";
let newsList = "";
let tName = "";

function loadNews() {
  // Show the loading indicator
  document.getElementById("loading").style.display = "block";
  document.getElementById("loading-2").style.display = "block";

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    // Hide the loading indicator when data is loaded
    document.getElementById("loading").style.display = "none";
    document.getElementById("loading-2").style.display = "none";

    const newses = JSON.parse(this.responseText);
    newsJSON = newses;
    console.log(newses);
    newsJSON.forEach((article, idx) => {
      //   console.log(article.source.name);
      //   if (idx <= 11) {
      newsList += `
            <div class="max-w-sm bg-[#dedede] border border-gray-200 rounded-lg">
              <a href="#">
                <img
                  class="rounded-t-lg h-[200px] w-full"
                  src="${article.image}"
                  alt=""
                />
              </a>
              <div class="p-5">
                <a href="#">
                  <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    ${article.title.slice(0, 25) + "..."}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700">
                  ${article.description.slice(0, 60) + "..."}
                </p>
                <button onclick="getName('${article.id}')"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Read more
                  <svg
                    class="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
            `;
      //   }
    });

    document.getElementById("newses").innerHTML = newsList;
  };
  xhttp.open("GET", "https://the-delta-times-server.vercel.app/api/news");
  xhttp.send();
}
loadNews();

function getName(id) {
  const newsData = newsJSON.filter((item, index, arr) => item.id == id);
  tName = id;
  console.log(newsData);

  localStorage.setItem("img", newsData[0].image);
  localStorage.setItem("title", newsData[0].title);
  localStorage.setItem("description", newsData[0].description);
  localStorage.setItem("publishDate", newsData[0].date);
  window.location.href = "details.html";
}
