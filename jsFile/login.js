const email = document.querySelector(".email--input");
const passWord = document.querySelector(".password--input");
const confirmPw = document.querySelector(".confirmPass--input");
const emailError = document.querySelector(".err--email");
const passWordError = document.querySelector(".err--pass");
const confirmPassWordError = document.querySelector(".err--confipass");
const loginLink=document.querySelector(".login--link")
const resetBtn = document.querySelector(".reset--btn")




loginLink.addEventListener("click", function (e)
{
  let valid = true;
  if (
    email.value.substring(email.value.indexOf("@")) !== "@gmail.com" ||
    email.value.substring(0, email.value.indexOf("@")).length < 4
  )
  {
    valid = false;

    emailError.textContent = "email invalid!!";
    email.classList.add("back--red");
  } else
  {
    emailError.textContent = "";
    email.classList.remove("back--red");
  }
  if (passWord.value.length < 8)
  {
    valid = false;

    passWordError.textContent = "password invalid!!";
    passWord.classList.add("back--red");
  } else
  {
    passWordError.textContent = "";
    passWord.classList.remove("back--red");
  }
  if (confirmPw.value.trim() === "" || confirmPw.value !== passWord.value)
  {
    valid = false;

    confirmPassWordError.textContent = "password invalid!!";
    confirmPw.classList.add("back--red");
  } else
  {
    confirmPassWordError.textContent = "";
    confirmPw.classList.remove("back--red");
  }
});

