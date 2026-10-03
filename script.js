const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");
  });
}

document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("menu-open");
  });
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    if (username.length < 3) {
      message.textContent = "Username must contain at least 3 characters.";
      message.style.color = "#ff7777";
      return;
    }

    if (password.length < 4) {
      message.textContent = "Password must contain at least 4 characters.";
      message.style.color = "#ff7777";
      return;
    }

    localStorage.setItem("fitnessUser", username);
    message.textContent = `Welcome, ${username}! Login successful.`;
    message.style.color = "#42e5ff";
  });
}
