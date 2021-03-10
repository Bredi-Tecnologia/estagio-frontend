export default {
    get() {
         // indicators: document.getElementById("indicators"),
    // indicators: document.querySelector("carousel-indicators"),
    // img = document.getElementsByClassName("carousel-item"),
    this.indicatorsContiner = document.querySelector(".carousel-indicators");
    this.image = document.getElementById("img-banner");
    this.title = document.querySelector(".carousel-caption h3"); 
    this.description = document.querySelector(".carousel-caption p"); 
    this.prev = document.querySelector("#prev-btn");
    this.next = document.querySelector("#next-btn");
    },
    actions() {
        this.next.onclick = () => this.shiftForNext();
        this.prev.onclick = () => this.shiftForPrev();
       
    }
}