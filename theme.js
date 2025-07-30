function toggleTheme() {
  document.body.classList.toggle("dark-theme");
  localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
  }
};

/**Login page **/

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const studentId = document.getElementById("student-id").value.trim();
  
  if (studentId !== "") {
    localStorage.setItem("studentID", studentId);
    localStorage.setItem("showWelcome", "true");
    window.location.href = "index.html";
  } else {
    alert("Please enter your Student ID.");
  }
});

