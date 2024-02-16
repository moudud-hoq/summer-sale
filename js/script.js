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
        const title = card.querySelector("h3").innerText;
        const pText = card.querySelector("p").innerText;
        // console.log({ pText, title });
        // console.log(title, pText);

        //Now we will hhhisab nikash korbo-
        const accountContainer = document.getElementById('account-container');
        // console.log(accountContainer);

        const h3 = document.createElement("h3");
        h3.innerText = title;
        accountContainer.appendChild(h3);


        const p = document.createElement("p");
        p.innerText = pText;
        //to injext the title 
        accountContainer.appendChild(h3);
    });
}

// const titles = document.querySelector('.bg-chnages');
// console.log({ titles, cardTitle })
