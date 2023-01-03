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
const item5 = document.querySelector(".item5");
const sourahText = document.querySelector(".sourah--text");
const scrollBar = document.querySelector(".scroll-bar");
const scrollBarContent = document.querySelector(".scroll-bar-content");
const logOut = document.querySelector(".logout--btn");
const homeBtn = document.querySelector(".home--btn");
const headsetBtn = document.querySelector(".headset--btn");
const audioSourah = document.querySelector(".audio");
const scrollBarSearch = document.querySelector(".scroll-bar-search");
const spinner = document.querySelector(".ldio-dmkndh94j8c");
const homeSearchInput = document.querySelector(".input--search");
const lastReadContent = document.querySelector(".sourat--opened--read");
const lastListenedContent = document.querySelector(".sourat--opened--listened");

let lastRead;
let lastListened;
lastReadContent.textContent = window.localStorage.lstRead;
lastListenedContent.textContent = window.localStorage.lstlistened;
let allSourahContainer;
let currentSoruah;
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
             <span class="best-sourah">${a.englishName}</span>
             <p>${a.englishNameTranslation}</p>
            </div>
             <div class="arabic-meaning">
              <i class="fa-regular fa-heart heart"></i>
            <span class"arab--name">${a.name}</span>
            <p>${a.ayahsNumber} Ayas</p>
          </div>
         </div>`
  );
}

homeSearchInput.addEventListener("input", (e) => {
  const value = e.target.value;
  const allSourahs = document.querySelectorAll(".sourah--container");
  allSourahs.forEach((el) => {
    const firstSage = el.querySelector(".best-number").textContent;
    const nameEng = el.querySelector(".best-sourah").textContent;
    const isVisible =
      firstSage.includes(value) || nameEng.toLowerCase().includes(value);
    el.classList.toggle("hidden", !isVisible);
  });
});
scrollBarSearch.addEventListener("input", (e) => {
  const value = e.target.value;
  const allSourahsFromScroll = document.querySelectorAll(".sourah--from--text");
  allSourahsFromScroll.forEach((el) => {
    const firstSage = el.querySelector(".idSourah").textContent;
    const nameEng = el.textContent
      .substring(el.textContent.indexOf(" "))
      .trim();

    const isVisible =
      firstSage.includes(value) || nameEng.toLowerCase().includes(value);
    el.classList.toggle("hidden", !isVisible);
  });
});
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
      spinner.classList.remove("hidden");
      setTimeout(() => {
        spinner.classList.add("hidden");
      }, "600");
      origin.sort(compare);
      sourahGrid.textContent = "";
      origin.reverse().map((e) => {
        apendchild(e);
      });
      arrowAlphabes.classList.add("rotation");
      sourahContentEvent();
    });
    sortByNumber.addEventListener("click", function (e) {
      allArrowSort.forEach((el) => el.classList.remove("rotation"));
      spinner.classList.remove("hidden");
      setTimeout(() => {
        spinner.classList.add("hidden");
      }, "600");
      arrowNumber.classList.add("rotation");
      allSortMethod.forEach((el) => el.classList.remove("back-fff"));
      sortByNumber.classList.add("back-fff");
      sourahGrid.textContent = "";
      origin.sort(tri);
      origin.reverse().forEach((ele) => {
        apendchild(ele);
      });
      sourahContentEvent();
    });
    sortByAyahs.addEventListener("click", function (e) {
      allArrowSort.forEach((el) => el.classList.remove("rotation"));
      spinner.classList.remove("hidden");
      setTimeout(() => {
        spinner.classList.add("hidden");
      }, "600");
      arrowAyah.classList.add("rotation");
      allSortMethod.forEach((el) => el.classList.remove("back-fff"));
      sortByAyahs.classList.add("back-fff");
      sourahGrid.textContent = "";
      origin.sort(triAyas);
      origin.forEach((ele) => {
        apendchild(ele);
      });
      sourahContentEvent();
    });
    
    allSourahContainer = document.querySelectorAll(".sourah--container");
    sourahContentEvent();
  });
headsetBtn.addEventListener("click", function (e) {
  lastListened = lastRead;
  window.localStorage.lstlistened = lastListened;
  lastListenedContent.textContent = window.localStorage.lstlistened;
  spinner.classList.remove("hidden");
  setTimeout(() => {
    spinner.classList.add("hidden");
  }, "600");
  audioSourah.src = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${currentSoruah}.mp3`;
  audioSourah.classList.toggle("hidden");
});
homeBtn.addEventListener("click", function (e) {
  headsetBtn.classList.toggle("hidden");
  spinner.classList.remove("hidden");
  setTimeout(() => {
    spinner.classList.add("hidden");
  }, "600");
  scrollBar.classList.add("hidden");
  item5.classList.add("hidden");
  middle.classList.remove("hidden");
});
logOut.addEventListener("click", function (e) {
  logOut.setAttribute("href", "login.html");
});

  

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


function sourahContentEvent()
{
  allSourahContainer = document.querySelectorAll(".sourah--container");
  allSourahContainer.forEach((el) =>
      el.addEventListener("click", function (e) {
        lastRead = el.querySelector(".best-sourah").textContent;
        window.localStorage.lstRead = lastRead;
        lastReadContent.textContent = window.localStorage.lstRead;
        spinner.classList.remove("hidden");
        setTimeout(() => {
          spinner.classList.add("hidden");
        }, "600");
        const firstSage = el.querySelector(".best-number").textContent;
        loading = true;
        currentSoruah = Number(firstSage);
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
          .then((res) => {
            loading = false;
            const [arrayOfAyah] = res.data.ayahs
            
            firstayah = res.data.ayahs[0].text.substring(38)
            let Str = "";
            const allaya = res.data.ayahs
              .slice(1)
              .reverse()
              .forEach(
                (elem) => (Str = `${elem.text} (${elem.numberInSurah}) ${Str}`)
              );
            middle.classList.add("hidden");
            item5.classList.remove("hidden");
            Str=firstayah+" "+Str
            sourahText.textContent = Str;
            scrollBar.classList.remove("hidden");
            item5.style.gridColumn = "span 2";
            headsetBtn.classList.remove("hidden");
            const sourahs = fetch(`https://apitest.khouaja.live./v1/quran`, {
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
                  scrollBarContent.insertAdjacentHTML(
                    "afterbegin",
                    `<p class="sourah--from--text"><span class="idSourah">${el.number}</span>  ${el.englishName}</p>`
                  );
                });
                if (scrollBarSearch.value != false) {
                  let scrollBarSearchValue = scrollBarSearch.value;
                  res.data.map((el) => {
                    if (el.englishName.include(scrollBarSearchValue)) {
                      scrollBarContent.textContent = "";
                      scrollBarContent.insertAdjacentHTML(
                        "afterbegin",
                        `<p class="sourah--from--text"><span class="idSourah">${el.number}</span>  ${el.englishName}</p>`
                      );
                    }
                  });
                }
                const sourahFromScroll = document.querySelectorAll(
                  ".sourah--from--text"
                );
                sourahFromScroll.forEach((el) =>
                  el.addEventListener("click", function (e) {
                    lastRead = el.textContent.substring(
                      el.textContent.indexOf(" ")
                    );
                    window.localStorage.lstRead = lastRead;
                    lastReadContent.textContent = window.localStorage.lstRead;
                    spinner.classList.remove("hidden");
                    setTimeout(() => {
                      spinner.classList.add("hidden");
                    }, "600");

                    let idSourahOfScrollBar = el.textContent.substring(
                      0,
                      el.textContent.indexOf(" ")
                    );
                    currentSoruah = Number(idSourahOfScrollBar);

                    const ldata = fetch(
                      `https://apitest.khouaja.live./v1/quran?surah=${Number(
                        idSourahOfScrollBar
                      )}`,
                      {
                        method: "GET",

                        headers: {
                          "Content-type": "application/json",

                          Authorization: `Bearer ${window.localStorage.getItem(
                            "token"
                          )}`,
                        },
                      }
                    )
                      .then((res) => res.json())
                      .then((res) => {
                        loading = false;
                        const [arrayOfAyah] = res.data.ayahs;
                        let Str = "";
                        firstayah=res.data.ayahs[0].text.substring(38)
                        
                        const allaya = res.data.ayahs
                          .slice(1)
                          .reverse()
                          .forEach(
                            (elem) =>
                              (Str = `${elem.text} (${elem.numberInSurah}) ${Str}`)
                          );
                        Str=firstayah+" "+Str
                        sourahText.textContent = Str;
                      });
                  })
                );
              });
          });
      })
  );
  
  allSourahContainer.forEach((el) =>
  {
    el.querySelector(".fa-heart").addEventListener("mouseover", function (e)
    {
      const [arrClass] = e.target.classList
     
      
      if (arrClass==="fa-regular") {
        e.target.removeAttribute("class");
        e.target.setAttribute("class","fa-solid fa-heart")
        e.target.style.color = "green"
        spinner.classList.remove("hidden");
        setTimeout(() => {
        spinner.classList.add("hidden");
      }, "200");
      }
      else
      {
          e.target.removeAttribute("class");
          e.target.setAttribute("class", "fa-regular fa-heart");
          e.target.style.color = "green";
      }
      
      
    })
  })
  
}

