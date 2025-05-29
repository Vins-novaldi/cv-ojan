function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  // Simpan preferensi pengguna di localStorage
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Cek preferensi pengguna saat halaman dimuat
window.onload = function() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
}
