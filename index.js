//to connect and get all
const cards = document.querySelectorAll(".card");
// console.log(cards);

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // console.log(element);

    //we want to see each products price and title
    card.addEventListener("click", function () {
        // console.log("Clicked")

        //get the title
        const title = card.querySelector("h3").innerText;
        const price = card.querySelector("span").innerText;
        // console.log(title,"Price is", price)

        //get value to the blank div
        const titleContainer=document.getElementById('title-container');
        console.log(titleContainer);
    })
}
