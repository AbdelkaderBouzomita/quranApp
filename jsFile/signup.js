const namep = document.querySelector(".name--input");
const phone = document.querySelector(".phone--input");
const email = document.querySelector(".email--input");
const passWord = document.querySelector(".password--input");
const confirmPw = document.querySelector(".confirmPass--input");
const nameError = document.querySelector(".err--name");
const phoneError = document.querySelector(".err--phone");
const emailError = document.querySelector(".err--email");
const passWordError = document.querySelector(".err--pass");
const confirmPassWordError = document.querySelector(".err--confipass");
const signupBtn = document.querySelector(".signup--link");
const resetBtn = document.querySelector(".reset--btn");
let suc=false;
signupBtn.addEventListener("click", function (e) {
  let valid = true;
  if (namep.value.length < 3 || isAlpha(namep.value) == false) {
    valid = false;
    nameError.textContent = "Name invalid!!";
    namep.classList.add("back--red");
  } else {
    nameError.textContent = "";
    namep.classList.remove("back--red");
  }
  if (phone.value.length != 8) {
    valid = false;
    phoneError.textContent = "phone invalid!!";
    phone.classList.add("back--red");
  } else {
    phoneError.textContent = "";
    phone.classList.remove("back--red");
  }
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
  if (passWord.value.length < 8) {
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
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWNhMGI0NGIxODM5MDdhZjkyNGY3MCIsImlhdCI6MTY3MjI1NzcxNywiZXhwIjoxNjgwMDMzNzE3fQ.7fUs0qDhD8OgELFGYdk75Fe1b3lTA_AcAUG1RYPCVag"
  );
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append(
    "Cookie",
    "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ0ZTMzNGIxODM5MDdhZjkyNjA0ZSIsImlhdCI6MTY3MjMwMjEzMSwiZXhwIjoxNjgwMDc4MTMxfQ.4-W9AoTbVe3ew6d-idoh4dq5cMqKxxILK0Z_1PAtgKw"
  );

  let raw = JSON.stringify({
    email: email.value,
    name: namep.value,
    phone: phone.value,
    password: passWord.value,
  });

  let requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://apitest.khouaja.live/v1/user/signup", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      console.log(result.status);
      if (valid === true && result.status == "success") {
        suc=true
        
      }
    })
    .catch((error) => console.log("error", error));
  if (suc === true)
  {
    
    signupBtn.setAttribute("href", "index.html");
  }
});

function isAlpha(ch) {
  for (let i = 0; i < ch.length; i++) {
    if (ch[i].toLowerCase() < "a" || ch[i].toUpperCase() > "z") {
      return false;
    }
  }
  return true;
}

// 32424324
// dkfjkds@gmail.com

// result.message = "success";
