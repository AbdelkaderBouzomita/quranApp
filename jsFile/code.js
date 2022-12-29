

const html = ` <div class="sourah--container">
          <div class="english-meaning">
            <div>1</div>
            <span>Al-fatiha</span>
            <p>the startar</p>
          </div>
          <div class="arabic-meaning">
             <i class="fa-regular fa-heart"></i>
            <span>سورة الفاتحة</span>
            <p>7 Ayats</p>
          </div>
        </div>`;
var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWNhMGI0NGIxODM5MDdhZjkyNGY3MCIsImlhdCI6MTY3MjI1NzcxNywiZXhwIjoxNjgwMDMzNzE3fQ.7fUs0qDhD8OgELFGYdk75Fe1b3lTA_AcAUG1RYPCVag"
);
myHeaders.append("Content-Type", "application/json");
myHeaders.append(
  "Cookie",
  "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjMwNjYxNiwiZXhwIjoxNjgwMDgyNjE2fQ.34XyNS83X7I7kqEw8e-bzs4Yz8fgZ46FKiCVVsCZx5U"
);

var raw = JSON.stringify({
  email: "test@gmail.com",
  password: "1234",
});

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch("https://apitest.khouaja.live/v1/quran", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));