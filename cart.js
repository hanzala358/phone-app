

let CartItem = JSON.parse(localStorage.getItem('CartItem'))
let div =document.querySelector('.div');

function renderCart(){
   if( CartItem !==0 && CartItem.length>0){

     for(let i = 0; i < CartItem.length; i++){
       console.log(CartItem[i]);
       div.innerHTML += `
       <div class="border border-light rounded m-5 p-3">
       <h1>Model : ${CartItem[i].model}</h1>
       <h1>Brand : ${CartItem[i].brand}</h1>
       <h1>Ram : ${CartItem[i].ram}</h1>
       <h1>Rom : ${CartItem[i].rom}</h1>
       <h1>Quantity : ${CartItem[i].quantity}</h1>
       </div>
       `          
      }
    }else{
div.innerHTML  = `<div class=" mt-3 text-center text-white">Item Not Found...</div>`
    }
}

renderCart()