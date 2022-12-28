const email = document.querySelector(".email--input");
const passWord = document.querySelector(".password--input");
const confirmPw = document.querySelector(".confirmPass--input");
const emailError = document.querySelector(".err--email");
const passWordError = document.querySelector(".err--pass");
const confirmPassWordError = document.querySelector(".err--confipass");
const loginBtn=document.querySelector(".login--btn")
const resetBtn = document.querySelector(".reset--btn")





loginBtn.addEventListener("click", function (e)
{
  if (email.value==false)
  {
    emailError.textContent = "Email Non Valid!!";
    return false;
  }else if ((passWord.value).lenght < 8)
  {
    passWordError.textContent = "password invalid!!";
    return false;
  }else if (confirmPw.value !== passWord.value)
  {
    confirmPassWordError.textContent = "confirm password invalid!!";
    return false;
  }
 
})
