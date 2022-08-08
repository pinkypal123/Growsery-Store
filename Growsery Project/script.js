const box1 = document.querySelector(".box-container1")
const box2 = document.querySelector(".box-container2")
const buttonSubmit = document.querySelector("#buttonSbmit")
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const number = document.querySelector("#number")
const item = document.querySelector("#item")
const msgBox = document.querySelector(".msgBox")
const message = document.querySelector(".message")
const closeModel = document.querySelector(".close-model")
const timer = document.querySelector("#stopwatch")
let prevContentInnerHtml = ``

// category section
const category = async function () {
    let data = await fetch("Product1.json");

    let categoryData = await data.json()
    // console.log(categoryData)
    return categoryData;
}
category().then((data) => {
    let catProducts = "";
    // console.log("ud",data)
    let catData = data.items
    // console.log(catData)
    catData.forEach(element => {
        let id = element.id;
        // console.log(id)
        let title = element.fields.title
        // console.log(title)
        let offer = element.fields.offer
        // console.log(offer)
        let image = element.fields.images.url
        // console.log(image)
        catProducts += `
   <div class="box">
    <h3>${title}</h3>
    <p>${offer}</p>
    <img src=${image}>
    <a href="#" class="btn">Shop Now</a>
    </div>
    `
    })
    box1.innerHTML = catProducts;
})

// product section

const products = async function () {
    let data = await fetch("Product2.json");
    console.log(data)
    let productData = await data.json()
    console.log(productData)

    return productData;
}
products().then((data) => {
    let Products = "";
    console.log("ud", data)
    let productData = data.items
    console.log(productData)
    productData.forEach(element => {
        let star = ""
        for (let i = 0; i < Math.floor(element.fields.rating); i++) {
            star += `<i class="fa-solid fa-star"></i>`
        }
        if (element.fields.rating != 5) {
            star += `<i class="fa-solid fa-star-half-stroke"></i>`
        }
        for (let i = 0; i < 5 - element.fields.rating - 1; i++) {
            star += `<i class="fa-regular fa-star"></i>`//give empty star
        }
        let price = element.fields.price;
        console.log(price)
        let title = element.fields.title
        console.log(title)
        let discount = element.fields.discount
        let rating = element.fields.rating
        console.log(rating)
        let image = element.fields.images.url
        console.log(image)
        Products += `
   <div class="box2">
   <span class="discount">${discount}</span>
    <img src=${image}>
    <h3>${title}</h3>
    <p>$ ${price}</p>
    <p>${star}</p>
    <a href="#" class="btn">Add to cart</a>
    <div class="icons">
    <i class="fa-solid fa-thumbs-up"></i>
    <i class="fa-solid fa-share"></i>
    <i class="fa-solid fa-thumbs-down"></i>
    </div>
    </div>
    `
    })
    box2.innerHTML = Products;
})


// submit button
buttonSubmit.addEventListener('click', () => {
    if (number.value == "") {
        alert("Please fill details First")
        // let div=document.createElement('div')
        // div.classList.add('submitBox')
        // div.innerHTML="empty number box"


    }
    else if (email.value == "") {
        alert("Please fill details First")
        // message.style.display = "block"
        // msgBox.innerHTML = "Fill details first"
    }
    else if (name.value == "") {
        alert("Please fill details First")
        // message.style.display = "block"
        // msgBox.innerHTML = "Fill details first"
    }
    else if (item.value == "") {
        alert("Please fill details First")
        // message.style.display = "block"
        // msgBox.innerHTML = "Fill details first"
    }
    else if (message.value == "") {
        alert("Please fill details First")
        // message.style.display = "block"
        // msgBox.innerHTML = "Fill details first"
    }
    else {
        alert("Your details has been submited succesfully")

    }
})
// closeModel.onclick=function(){
//     message.style.display = "none";
// }
// Stop watch
var hr = 24;
var min = 0;
var sec = 0;
var stopTime = true;
function startTimer() {
    if (stopTime == true) {
        stopTime = false;
        timerCycle();
    }

}
function stopTimer() {
    if (stopTime == false) {
        stopTime = true;
    }
}
function resetTimer() {
    stopTime = true;
    timer.innerHTML = hr + ":00:00"
    sec = 0;
    min = 0
    hr = 24

}
function timerCycle() {
    if (stopTime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
        sec = sec + 1
        if (sec == 60) {
            min = min + 1
            sec = 0;
        }
        if (min == 60) {
            hr = hr - 1
            min = 0;
            sec = 0;
        }
        if (sec < 10) {
            sec = "0" + sec
        }
        if (min < 10) {
            min = "0" + min
        }
        if (hr < 10) {
            hr = "0" + hr
        }
        timer.innerHTML = hr + ":" + min + ":" + sec
        setTimeout("timerCycle()", 1000)
    }
}

function handlesearch() {

    let homeDiv = document.getElementById("home");
    let searchBoxText = document.getElementById('search-box');

    let searchText = searchBoxText.value;
    homeDiv.style.display = 'none'

    category().then((data) => {
        let catProducts = "";
        // console.log("ud",data)
        let catData = data.items
        // console.log(catData)
        catData.forEach(element => {
            let id = element.id;
            // console.log(id)
            let title = element.fields.title
            // console.log(title)
            let offer = element.fields.offer
            // console.log(offer)
            let image = element.fields.images.url
            // console.log(image)
            if (title.includes(searchText)) {
                catProducts += `
                <div class="box">
                 <h3>${title}</h3>
                 <p>${offer}</p>
                 <img src=${image}>
                 <a href="#" class="btn">Shop Now</a>
                 </div>
                 `
            }

        })
        box1.innerHTML = catProducts;
    })

}