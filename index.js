//create a variable to get serial number of cart
let titleCount = 1;
let totalPrice = 0;//এক্সেসরিস এর দাম প্রথমে ০, তারপর কার্টে যোক করার পর বাড়বে

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
        //এটা -১ পুর্বের ফাংশন নতুনটা -২ নং এ
        //-১ const price = card.querySelector("span").innerText;
        //-2 বুঝিনাই ভালোভাবে কিন্তু, এগিয়ে যতে হবে তাই করে নিলাম
        const price = parseFloat(
            card.querySelector("span").innerText.split(" ")[1]
        );


        //store value to the blank div
        const titleContainer = document.getElementById("title-container");
        // console.log(titleContainer);

        //Now we will create element for the blank container that we can store anything there
        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;//with title counter

        //the final store-
        titleContainer.appendChild(p);
        //update the serial
        titleCount++;

        //Calculate the accessories price
        totalPrice = totalPrice + price;
        // console.log(totalPrice)
        //টোটাল প্রাইসে যোগ করতে
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);

    });
}


//apply discount
const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
    //get the value from input
    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();

    //200 tkr nice khoroc kora jabnea
    if (totalPrice >= 200) {
        if (couponCode === "SELL200") {

            const discountElement = document.getElementById('discountPrice');
            const discountAmmount = totalPrice * 0.2;
            discountElement.innerText=discountAmmount.toFixed(2);

        } else {
            alert("Invalid Coupon");
        }
    } else {
        alert('make a purchage above 200tk')
    }

    //chatGPT formula
    // if (totalPrice >= 200) {
    //     // Apply discount logic here
    //     // For example: Apply a 10% discount
    //     const discount = totalPrice * 0.10;
    //     totalPrice -= discount;
    //     document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
    //     alert('Discount applied successfully!');
    // } else {
    //     alert('Make a purchase above 200tk');
    // }


})

