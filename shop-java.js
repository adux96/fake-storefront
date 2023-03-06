function menuToggle() {
    let icon = document.getElementById("hamburgerIcon");
    if(icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
}