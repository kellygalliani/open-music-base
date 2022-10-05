function genreFilter(){
    
    const genreButtons = document.querySelectorAll(".button_genre")
    const ulListDisc = document.getElementById("ul_cards")

    genreButtons.forEach(button =>{ 
        button.addEventListener("click", ()=>{
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


function filterDisc(buttonText, product, arrayCategorias){

        let indexCategoria = arrayCategorias.indexOf(buttonText)
        
        const filteredProduct = product.filter((disc) =>{
            return disc.category === indexCategoria
        })
         
  return filteredProduct
}

genreFilter()