

/*Filtrar Input*/
const input = document.querySelector(".filter input");
const cardsRow = document.querySelector(".cards ");


const filterCard = (cardArray, inputvalues, returnBool) =>  cardArray
    
    .filter(card => {
       
        const boolcard =  card.id.toLowerCase().includes(inputvalues)
        console.log("Filter card", boolcard)
       
        return returnBool? boolcard : !boolcard
    });
    
    


const hiddenfilter = (cardsArray, inputvalues) => {
    
    filterCard(cardsArray, inputvalues, false)
    .forEach(cards => {
        
        cards.classList.add("hidden-card")
   });
}

const showFilter = (cardsArray, inputvalues) => {
    
    filterCard(cardsArray, inputvalues, true)
    .forEach(cards => {
        cards.classList.remove("hidden-card")
   })
}


input.addEventListener('input', function(e) {
    const values  = e.target.value.trim().toLowerCase();
    const cardsArray =  Array.from(cardsRow.children);


    hiddenfilter(cardsArray, values )
    showFilter(cardsArray, values )
   
})