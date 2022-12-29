
const nameProfile = document.querySelector(".name--person--profile");
const emailProfile = document.querySelector(".email--person--profile");
const sourahGrid = document.querySelector(".sourah--grid");
const sortByAyahs = document.querySelector(".sort--by--ayahs");
const sortByNumber = document.querySelector(".sort--by--number");
const sortByAlphabes = document.querySelector(".sort--by--alphabes");
const allSortMethod=document.querySelectorAll(".sort--way")


nameProfile.textContent = window.localStorage.namePerson;
emailProfile.textContent =
  "@" + window.localStorage.email.substring(0, 4) + "...";
const emaill = window.localStorage.email;
const passwordd = window.localStorage.password;
// var myHeaders = new Headers();
// myHeaders.append(
//   headers: {
//     "Content-type": "application/json",
//   Authorization: `Bearer ${data}`,
// },
// );
// myHeaders.append("Content-Type", "application/json");
// myHeaders.append(
//   "Cookie",
//   "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjMwNjYxNiwiZXhwIjoxNjgwMDgyNjE2fQ.34XyNS83X7I7kqEw8e-bzs4Yz8fgZ46FKiCVVsCZx5U"
// );

// var raw = JSON.stringify({
//   email: emaill,
//   password: passwordd,
// });

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow",
// };

// fetch("https://apitest.khouaja.live/v1/quran", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));
const alldata = fetch(`https://apitest.khouaja.live./v1/quran`, {
  method: "GET",

  headers: {
    "Content-type": "application/json",

    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((res) =>
  {
    let origin = res.data;
    origin.reverse().map((el) =>
    {
    apendchild(el)
    });
    sortByAlphabes.addEventListener("click", function (e)
    {
      allSortMethod.forEach(el => el.classList.remove("back-fff"));
      sortByAlphabes.classList.add("back-fff")
      
      origin.sort(compare);
      sourahGrid.textContent = "";
      origin.reverse().map(e =>
      {
        apendchild(e)
      })
    })
    sortByNumber.addEventListener("click", function (e)
    {
      allSortMethod.forEach(el => el.classList.remove("back-fff"));
      sortByNumber.classList.add("back-fff")
      sourahGrid.textContent = "";
      origin.sort(tri)
      origin.reverse().forEach(ele =>
      {
        apendchild(ele)
      })
    })
    sortByAyahs.addEventListener("click", function (e)
    {
      allSortMethod.forEach((el) => el.classList.remove("back-fff"));
      sortByAyahs.classList.add("back-fff");
      sourahGrid.textContent = "";
      origin.sort(triAyas);
      origin.reverse().forEach((ele) => {
        apendchild(ele);
      });
    })
  });


function compare(a, b)
{
  if (a.englishName < b.englishName)
  {
    return -1;
  }
  if (a.englishName > b.englishName)
  {
    return 1;
  }
  return 0;
}
function tri(a, b)
{
  if (a.number < b.number)
  {
    return -1;
  }
  if (a.number > b.number)
  {
    return 1;
  }
  return 0;
}
function triAyas(a, b)
{
  if (a.ayahsNumber < b.ayahsNumber) {
    return -1;
  }
  if (a.ayahsNumber > b.ayahsNumber) {
    return 1;
  }
  return 0;
}









function apendchild(a)
{
   sourahGrid.insertAdjacentHTML(
     "afterbegin",
     ` <div class="sourah--container">
           <div class="english-meaning">
             <div>${a.number}</div>
             <span>${a.englishName}</span>
             <p>${a.englishNameTranslation}</p>
            </div>
             <div class="arabic-meaning">
              <i class="fa-regular fa-heart"></i>
            <span>${a.name}</span>
            <p>${a.ayahsNumber} Ayas</p>
          </div>
         </div>`
   );
}