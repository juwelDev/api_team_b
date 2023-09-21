const newsDetails = "";

const title = localStorage.getItem("title");
const img = localStorage.getItem("img");
const publishDate = localStorage.getItem("publishDate");
const description = localStorage.getItem("description");

document.getElementById("container").innerHTML = `
<div class="bg-[#fff] grid grid-cols-3">
              <div class="flex items-center">
                <img
                  class="w-full h-[300px]"
                  src="${img}"
                  alt=""
                />
              </div>
              <div class="p-5 col-span-2">
                <a href="#">
                  <h1 class="mb-2 text-6xl font-bold tracking-tight text-gray-900 mb-5">
                    ${title}
                  </h1>
                </a>
                <p class="mb-3 font-normal text-gray-700">
                  ${description}
                </p>
              </div>
            </div>

`;
