const nameProfile = document.querySelector(".name--person--profile");
const emailProfile = document.querySelector(".email--person--profile");
const sourahGrid = document.querySelector(".sourah--grid");
const sortByAyahs = document.querySelector(".sort--by--ayahs");
const sortByNumber = document.querySelector(".sort--by--number");
const sortByAlphabes = document.querySelector(".sort--by--alphabes");
const allSortMethod = document.querySelectorAll(".sort--way");
const arrowAyah = document.querySelector(".arrow--sort--ayahs");
const arrowNumber = document.querySelector(".arrow--sort--number");
const arrowAlphabes = document.querySelector(".arrow--sort--alphabes");
const allArrowSort = document.querySelectorAll(".arrow");
const middle = document.querySelector(".middle--container");
const sortedBar = document.querySelector(".sorted--bar");
console.log(arrowAlphabes);
console.log(arrowAyah);
nameProfile.textContent = window.localStorage.namePerson;
emailProfile.textContent =
  "@" + window.localStorage.email.substring(0, 4) + "...";
const emaill = window.localStorage.email;
const passwordd = window.localStorage.password;
function apendchild(a) {
  sourahGrid.insertAdjacentHTML(
    "afterbegin",
    ` <div class="sourah--container">
           <div class="english-meaning">
             <div class="best-number">${a.number}</div>
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

const alldata = fetch(`https://apitest.khouaja.live./v1/quran`, {
  method: "GET",

  headers: {
    "Content-type": "application/json",

    Authorization: `Bearer ${window.localStorage.getItem("token")}`,
  },
})
  .then((res) => res.json())
  .then((res) => {
    let origin = res.data;
    origin.reverse().map((el) => {
      apendchild(el);
    });

    sortByAlphabes.addEventListener("click", function (e) {
      allArrowSort.forEach((el) => el.classList.remove("rotation"));
      allSortMethod.forEach((el) => el.classList.remove("back-fff"));
      sortByAlphabes.classList.add("back-fff");

      origin.sort(compare);
      sourahGrid.textContent = "";
      origin.reverse().map((e) => {
        apendchild(e);
      });
      arrowAlphabes.classList.add("rotation");
    });
    sortByNumber.addEventListener("click", function (e) {
      allArrowSort.forEach((el) => el.classList.remove("rotation"));

      arrowNumber.classList.add("rotation");
      allSortMethod.forEach((el) => el.classList.remove("back-fff"));
      sortByNumber.classList.add("back-fff");
      sourahGrid.textContent = "";
      origin.sort(tri);
      origin.reverse().forEach((ele) => {
        apendchild(ele);
      });
    });
    sortByAyahs.addEventListener("click", function (e) {
      allArrowSort.forEach((el) => el.classList.remove("rotation"));

      arrowAyah.classList.add("rotation");
      allSortMethod.forEach((el) => el.classList.remove("back-fff"));
      sortByAyahs.classList.add("back-fff");
      sourahGrid.textContent = "";
      origin.sort(triAyas);
      origin.forEach((ele) => {
        apendchild(ele);
      });
    });
    
    let printaya = [];
    const allSourahContainer = document.querySelectorAll(".sourah--container");
    console.log(allSourahContainer);
    allSourahContainer.forEach((el) =>
      el.addEventListener("click", function (e) {
        const firstSage = el.querySelector(".best-number").textContent;
        console.log(firstSage);
        const ldata = fetch(
          `https://apitest.khouaja.live./v1/quran?surah=${Number(firstSage)}`,
          {
            method: "GET",

            headers: {
              "Content-type": "application/json",
              
              Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            },
          }
          )
          .then((res) => res.json())
          .then((res) =>
          {
            middle.textContent = "";
            console.log(res.data.ayahs);
            const [arrayOfAyah] = res.data.ayahs
            let Str ="" ;
            const allaya = res.data.ayahs.reverse().forEach((elem) => Str = elem.numberInSurah + " " + elem.text + Str);
            console.log(Str)
          }); 
       

        })
        );
        
  });
// .text
// numberInSurah;
function compare(a, b) {
  if (a.englishName < b.englishName) {
    return -1;
  }
  if (a.englishName > b.englishName) {
    return 1;
  }
  return 0;
}
function tri(a, b) {
  if (a.number < b.number) {
    return -1;
  }
  if (a.number > b.number) {
    return 1;
  }
  return 0;
}
function triAyas(a, b) {
  if (a.ayahsNumber < b.ayahsNumber) {
    return -1;
  }
  if (a.ayahsNumber > b.ayahsNumber) {
    return 1;
  }
  return 0;
}
