
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
console.log(signupBtn);
signupBtn.addEventListener('click', function (e)
{
  if ((namep.value).length < 3 || isAlpha(namep.value) == false)
  {
    nameError.textContent = "Name invalid!!";
    namep.classList.add("back--red");
  } else
  {
    nameError.textContent = "";
    namep.classList.remove("back--red");
  }
  if (phone.value.length != 8)
  {
    phoneError.textContent = "phone invalid!!";
    phone.classList.add("back--red");
  } else
  {
     phoneError.textContent = "";
    phone.classList.remove("back--red");
  }
  if ((email.value.substring(email.value.indexOf("@")) !== "@gmail.com") || (email.value.substring(0, email.value.indexOf("@")).length < 4))
  {
    emailError.textContent = "email invalid!!";
    email.classList.add("back--red");
  } else
  {
     emailError.textContent = "";
     email.classList.remove("back--red");
  }
  if (passWord.value.length < 8)
  {
    passWordError.textContent = "password invalid!!";
    passWord.classList.add("back--red");
  } else
  {
     passWordError.textContent = "";
     passWord.classList.remove("back--red");
  }
  if (confirmPw.value.trim() === "" || confirmPw.value !== passWord.value)
  {
     confirmPassWordError.textContent = "password invalid!!";
     confirmPw.classList.add("back--red");
  } else
  {
    confirmPassWordError.textContent = "";
    confirmPw.classList.remove("back--red");
  }
});
  
function isAlpha(ch)
{
  for (let i = 0; i < ch.length; i++)
  {
    if (ch[i].toLowerCase() < "a" || ch[i].toUpperCase() > "z")
    {
    return false
    }
   
  }return true 
}

