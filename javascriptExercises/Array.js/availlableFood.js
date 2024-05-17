const availableFoods = [
    {id: "qwe234dfh", name: "Burger", image:"🍔🍔", price: 234},
    {id: "qwe2356dxh", name: "pizza", image:"🍕🍕", price: 400},
    {id: "qwe2456yh", name: "meat", image:"🍖🍖", price: 500},
    {id: "qwe2785yh", name: "chicken", image:"🍗🍗", price: 1200},
]



const filteredPrices= availableFoods.filter(function(filteredfoodobj){

    return filteredfoodobj.price>450
})


console.log(filteredPrices)

let totalprice=filteredPrices.map(filteredfoodobj=>filteredfoodobj.price).reduce((prev,next)=>prev+next)
console.log( `My total bill for items above 450 is :${totalprice}`)
