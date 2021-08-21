
//Function for updating extra-cost amount
function ExrtaCostValue(id, value) {
    const costElement = document.getElementById(id)
    costElement.innerText = value;
    updateTotal() //calling the totalAmount function
}

// 8GB unified memory
document.getElementById('memory8GB').addEventListener('click',function(){
    ExrtaCostValue('extra-memory',0);
})
// 16GB unified memory
document.getElementById('memory16GB').addEventListener('click',function(){
    ExrtaCostValue('extra-memory',180);
})



// 256GB SSD storage
document.getElementById('storage256GB').addEventListener('click',function(){
    ExrtaCostValue('extra-storage',0);
})
// 512GB SSD storage
document.getElementById('storage512GB').addEventListener('click',function(){
    ExrtaCostValue('extra-storage',100);
})
//1TB SSD storage
document.getElementById('storage1TB').addEventListener('click',function(){
    ExrtaCostValue('extra-storage',180);
})
//1TB SSD storage
document.getElementById('free-delivery').addEventListener('click',function(){
    ExrtaCostValue('extra-delivery',0);
})
//1TB SSD storage
document.getElementById('Paid-delivery').addEventListener('click',function(){
    ExrtaCostValue('extra-delivery',20);
});


//the totalAmount function
function updateTotal() {
    const bestPrice = document.getElementById('Best-Price')
    const best = parseFloat(bestPrice.innerText)

    const extramemoty= document.getElementById('extra-memory')
    const memory =parseFloat(extramemoty.innerText);
    

    const extrastorage = document.getElementById('extra-storage')
    const storage = parseFloat(extrastorage.innerText);


    const extradelivery = document.getElementById('extra-delivery');
    const delivery = parseFloat(extradelivery.innerText);

    const Total= best+memory+storage+delivery;

    const intotal = document.getElementById('total-cost')
    const totalcost = intotal.innerText;
    intotal.innerText =Total;


    const extraTotalElement = document.getElementById('total-cost')
    const inTotalElement = document.getElementById('total-value')

    extraTotalElement.innerText = Total;
    inTotalElement.innerText = Total;
   };

// Promo Apply 

document.getElementById('apply-btn').addEventListener('click', function(){
    const TotalElement = document.getElementById('total-cost')
    const inTotalElement = document.getElementById('total-value')

    const promoInput =document.getElementById('promo-input')
    const promoValue = promoInput.value
    const totalAmount = parseFloat(TotalElement.innerText);

    if (promoValue == 'stevekaku') {
        const discount = (totalAmount / 100) * 20;
        inTotalElement.innerText = totalAmount - discount;
        document.getElementById('wrong-promo').classList.add("d-none")
        
    } else {
        document.getElementById('wrong-promo').classList.remove("d-none")
    }
})




   














