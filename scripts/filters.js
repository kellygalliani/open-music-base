/* FILTROS COM O BOTÃO */

const ulListDisc = document.getElementById("ul_cards")
function genreFilter(){
    const genreButtons = document.querySelectorAll(".button_genre")

    genreButtons.forEach(button =>{ 
        button.addEventListener("click", (event)=>{
            event.preventDefault()
        ulListDisc.innerHTML = ""
        const buttonTextfilter = button.innerText

        if(buttonTextfilter === "Todos"){
            renderDiscs(products)
        }

        const filteredDiscs = filterDisc(buttonTextfilter, products, categories)

        renderDiscs(filteredDiscs)
        })
    })
        
}


function filterDisc(buttonText, products, arrayCategorias){

        let indexCategoria = arrayCategorias.indexOf(buttonText)
        
        const filteredProduct = products.filter((disc) =>{
            return disc.category === indexCategoria
        })
         
  return filteredProduct
}

genreFilter()

/* FILTROS COM O INPUT */

function inputPrice(inputValue){
    document.querySelector(".priceRange").innerHTML = `Até R$ ${inputValue}`
    discPrice()
}

function discPrice(discs = products){

    let input = document.querySelector(".input_range")  
     
    let DiscFilteredValue = discs.filter((disc) => disc.price <= input.value)
    ulListDisc.innerHTML = ""
    
    renderDiscs(DiscFilteredValue)
}

discPrice(products)