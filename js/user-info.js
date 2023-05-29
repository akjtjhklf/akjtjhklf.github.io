const username = localStorage.getItem('current-user');
const user = JSON.parse(localStorage.getItem(username));
if (username) {
  const fullNameElement = document.querySelector('#fullName');
  const usernameElement = document.querySelector('#username');
  const passwordElement = document.querySelector('#password');
  fullNameElement.textContent = user.fullname;
  usernameElement.textContent = user.username;
  passwordElement.textContent = user.password;
  console.log(fullNameElement,usernameElement,passwordElement);
}

let rspasswordInput= document.getElementsByClassName("resetpw")[0];
let rspassswordButton = document.getElementsByClassName("resetpw")[1];
rspassswordButton.addEventListener("click",function(){
  user.password=rspasswordInput.value;
  localStorage.setItem('username',user);
  location.reload;
});