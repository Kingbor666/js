const search = document.getElementById("search");
const l = window.location.search.split("?")[1].split("=")[1]
search.addEventListener("click", () => {
    document.getElementById("container").innerHTML = document.getElementById("input").value
})