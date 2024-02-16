//get everything in the card class
const cards = document.querySelectorAll('.card');
// console.log(card)

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    // console.log(element)
    //set a click function in the scar by add eventlistener
    card.addEventListener('click', function () {
        // console.log('clicked')

        //get the title
        // const title = document.getElementById('kitchen-ware')
        const cardTitle = card.querySelector("h3").innerText;
        const pText = card.querySelector("p").innerText;
        console.log({ pText, cardTitle });
    })
}

// const titles = document.querySelector('.bg-chnages');
// console.log({ titles, cardTitle })
