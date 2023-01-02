const email = document.querySelector(".email--input");
const passWord = document.querySelector(".password--input");
const confirmPw = document.querySelector(".confirmPass--input");
const emailError = document.querySelector(".err--email");
const passWordError = document.querySelector(".err--pass");
const confirmPassWordError = document.querySelector(".err--confipass");
const loginLink = document.querySelector(".login--link");
const resetBtn = document.querySelector(".reset--btn");
let loading = false;
let suc = false;
loginLink.addEventListener("click", function (e) {
  let valid = true;
  if (
    email.value.substring(email.value.indexOf("@")) !== "@gmail.com" ||
    email.value.substring(0, email.value.indexOf("@")).length < 4
  ) {
    valid = false;

    emailError.textContent = "email invalid!!";
    email.classList.add("back--red");
  } else {
    emailError.textContent = "";
    email.classList.remove("back--red");
  }
  if (passWord.value.length < 4) {
    valid = false;

    passWordError.textContent = "password invalid!!";
    passWord.classList.add("back--red");
  } else {
    passWordError.textContent = "";
    passWord.classList.remove("back--red");
  }
  if (confirmPw.value.trim() === "" || confirmPw.value !== passWord.value) {
    valid = false;

    confirmPassWordError.textContent = "password invalid!!";
    confirmPw.classList.add("back--red");
  } else {
    confirmPassWordError.textContent = "";
    confirmPw.classList.remove("back--red");
  }
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWNhMGI0NGIxODM5MDdhZjkyNGY3MCIsImlhdCI6MTY3MjI1NzcxNywiZXhwIjoxNjgwMDMzNzE3fQ.7fUs0qDhD8OgELFGYdk75Fe1b3lTA_AcAUG1RYPCVag`
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWMwYTNhNGIxODM5MDdhZjkyMThmNiIsImlhdCI6MTY3MjMwNjYxNiwiZXhwIjoxNjgwMDgyNjE2fQ.34XyNS83X7I7kqEw8e-bzs4Yz8fgZ46FKiCVVsCZx5U"
  );

  let raw = JSON.stringify({
    email: email.value,
    password: passWord.value,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // if (loading == true) document.querySelector(".lds-roller").classList.remove("hidden");
  fetch("https://apitest.khouaja.live/v1/user/login", requestOptions)
     
   
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      console.log(result.status);
      if (valid === true && result.status == "success") {
        window.localStorage.token = result.token;
        window.localStorage.setItem("email", email.value);
        window.localStorage.setItem("password", passWord.value);
        //?or you can write
        //? window.localStorage.email=email.value;
        //?or
        //? window.localStorage["email"]=email.value;
        suc = true;
      } 
      
    })
    .catch((error) => console.log("error", error));
  
  if (suc === true)
  {
    loginLink.setAttribute("href", "index.html");
  }
    // } else
    // { alert("Invalid Data")
    //   // email.classList.add("back--red")
    //   // passWord.classList.add("back--red")
    //   // emailError.textContent = "Invalid Data !!"
    //   // passWordError.textContent="Invalid Data !!"
    // }
  });
  