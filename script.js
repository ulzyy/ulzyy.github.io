//show password SIGN IN and SIGN UP
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener("click", function () {
  const type =
    passwordInput.getAttribute("type") === "password" ? "text" : "password";
  passwordInput.setAttribute("type", type);
  togglePassword.innerHTML =
    type === "password"
      ? '<i class="far fa-eye"></i>'
      : '<i class="far fa-eye-slash"></i>';
});

//categories
document
  .getElementById("categories-button")
  .addEventListener("click", function () {
    document.getElementById("categories-content").classList.toggle("active");
  });
//Categories Women "belum berfungsi"
const womenLink = document.querySelector(
  '.dropdown-content a[href="cewe.html"]'
);
womenLink.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "cewe.html";
});

// fungsi dari tombol beli untuk memanggil halaman form beli
function goToAnotherPage() {
  // Ubah URL sesuai dengan halaman tujuan
  window.location.href = "belanja.html";
}
function details() {
  // Ubah URL sesuai dengan halaman tujuan
  window.location.href = "details.html";
}
