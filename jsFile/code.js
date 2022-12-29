// const html = ` <div class="sourah--container">
//           <div class="english-meaning">
//             <div>1</div>
//             <span>Al-fatiha</span>
//             <p>the startar</p>
//           </div>
//           <div class="arabic-meaning">
//              <i class="fa-regular fa-heart"></i>
//             <span>سورة الفاتحة</span>
//             <p>7 Ayats</p>
//           </div>
//         </div>`;
const nameProfile = document.querySelector(".name--person--profile");
const emailProfile = document.querySelector(".email--person--profile");
const sourahGrid = document.querySelector(".sourah--grid");
nameProfile.textContent = window.localStorage.namePerson;
emailProfile.textContent =
  "@" + window.localStorage.email.substring(0, 4) + "...";
const emaill = window.localStorage.email;
const passwordd = window.localStorage.password;
console.log(emaill);
console.log(passwordd);
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
  .then((res) => {
    console.log(res);
    console.log(res.data);
    console.log(res.data[0]);
    res.data.forEach((el) => {
      sourahGrid.insertAdjacentHTML(
        "afterbegin",
        ` <div class="sourah--container">
           <div class="english-meaning">
             <div>${el.number}</div>
             <span>${el.englishName}</span>
             <p>${el.englishNameTranslation}</p>
            </div>
             <div class="arabic-meaning">
              <i class="fa-regular fa-heart"></i>
            <span>${el.name}</span>
            <p>${el.ayahsNumber} Ayas</p>
          </div>
         </div>`
      );
    });
    
  });
