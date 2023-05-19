window.addEventListener("load", () => {
    const button_genre = document.querySelectorAll(".button_genre");
    console.log(button_genre)
    button_genre.forEach(button => {
        if (button.innerText === "Todos") {
            button.click();
            button.focus();
            button.active();
        } 
    })
  });
    
function renderDiscs(array){
    const html = document.querySelector("html")
    const ulListDisc = document.querySelector(".ul_cards")
    const themeIcon = document.querySelector("#themeIcon")
    const darkPreference = localStorage.getItem("darkmode")
   
    
    if(darkPreference) {
        html.classList.add('dark-mode')
        themeIcon.src = "./assets/img/sun.svg"
    }

    array.forEach((disc) => {
        const card = createCard(disc);
        ulListDisc.appendChild(card);
    });
}

function createCard(disc){

    const {title, category, price, img, band, year, id} = disc

    
    let tagLi = document.createElement("li")
    let tagDivImg = document.createElement("div")
    let tagImg = document.createElement("img")
    let tagDivCardDescription = document.createElement("div")
    let tagDivBandYear = document.createElement("div")
    let tagBandName = document.createElement("p")
    let tagDiscYear = document.createElement("p")
    let tagDiscName = document.createElement("h2")
    let tagDivPriceButtonBuy = document.createElement("div")
    let tagPrice = document.createElement("h3")
    let tagButtonBuy = document.createElement("button")

    tagLi.classList.add("li_cards")
    tagDivImg.classList.add("div_img")
    tagDivCardDescription.classList.add("div_cardDescription")
    tagDivBandYear.classList.add("div_band_year")
    tagBandName.classList.add("text2")
    tagDiscYear.classList.add("text2")
    tagDiscName.classList.add("title2")
    tagDivPriceButtonBuy.classList.add("div_price_buttonBuy")
    tagPrice.classList.add("text1")
    tagButtonBuy.classList.add("button_buy")

    tagImg.src = img
    tagBandName.innerText = band
    tagDiscYear.innerText = year
    tagDiscName.innerText = title
    tagPrice.innerText = `R$ ${price}`
    tagButtonBuy.innerText = "Comprar"

    tagLi.append(tagDivImg, tagDivCardDescription)
    tagDivImg.appendChild(tagImg)
    tagDivCardDescription.append(tagDivBandYear, tagDiscName, tagDivPriceButtonBuy)
    tagDivBandYear.append(tagBandName, tagDiscYear)
    tagDivPriceButtonBuy.append(tagPrice, tagButtonBuy)

    return tagLi
}

renderDiscs(products)
