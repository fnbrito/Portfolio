function toggleCard(id) {
    console.log(id);
    id.getElementsByClassName("description")[0].classList.toggle("hidden");
    id.getElementsByClassName("bullets")[0].classList.toggle("hidden");
}