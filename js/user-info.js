const username = localStorage.getItem('current-user');
if (username) {
  const user = JSON.parse(localStorage.getItem(username));
  const fullNameElement = document.querySelector('#fullName');
  const usernameElement = document.querySelector('#username');
  const passwordElement = document.querySelector('#password');
  fullNameElement.textContent = user.fullname;
  usernameElement.textContent = user.username;
  passwordElement.textContent = user.password;
  console.log(fullNameElement,usernameElement,passwordElement);
}

