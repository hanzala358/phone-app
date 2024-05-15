const phones = [
    {
        brand: 'Samsung',
        model: 'S20',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Xiomi',
        model: 'note10',
        ram: 4,
        rom: 64,
        camera: '10 megapixel',
        price: 15000
    },
    {
        brand: 'Infinix',
        model: 'z10',
        ram: 2,
        rom: 16,
        camera: '5 megapixel',
        price: 15000
    },
    {
        brand: 'Tecno',
        model: 'spark10',
        ram: 12,
        rom: 512,
        camera: '25 megapixel',
        price: 15000
    },
    {
        brand: 'Iphone',
        model: '14',
        ram: 4,
        rom: 1024,
        camera: '30 megapixel',
        price: 15000
    },
    {
        brand: 'Oppo',
        model: 'F11',
        ram: 8,
        rom: 256,
        camera: '20 megapixel',
        price: 15000
    },
    {
        brand: 'Vivo',
        model: 'y20',
        ram: 4,
        rom: 64,
        camera: '8 megapixel',
        price: 15000
    },
    {
        brand: 'Samsung',
        model: 's50',
        ram: 50,
        rom: 1024,
        camera: '60 megapixel',
        price: 300000,
    },

];



let selectValArr ;
 selectValArr =[];

let getItems =JSON.parse( localStorage.getItem('CartItem'));
console.log(getItems);
if(getItems === null){
    selectValArr = [];
}else{
    getItems = selectValArr
}


let div=document.querySelector('.container');


for (let i=0;i<phones.length;i++){

div.innerHTML += `
<div class="card bg-dark text-white border-light" style="width: 18rem;">
<div class="card-body">
  <h5 class="card-title">Brand : ${phones[i].brand}</h5>
  <p class="card-text">Model : ${phones[i].model}</p>
  <p class="card-text">RAM : ${phones[i].ram}</p>
  <p class="card-text">ROM : ${phones[i].rom}</p>
  <p class="card-text">Camera : ${phones[i].camera}</p>
 <p class="card-text">Price : ${phones[i].price}</p>
   <button class="bg-primary btn text-white" onclick="addtocart(${i})">Add to Cart</button>
   </div>
   
   `
}
function addtocart(index){

// console.log(index);
// console.log(phones[index]);


if(selectValArr.includes(phones[index])){
phones[index].quantity += 1

}else{
    phones[index].quantity =1
    selectValArr.push(phones[index])
}
console.log(selectValArr);

}

function cartDetails(){
window.location = 'cart.html'

let sendItem = localStorage.setItem('CartItem',JSON.stringify(selectValArr));
console.log(sendItem);

}

































// console.log(phones[i]);
// delete user.age;
// user.abc = 'abc'




















// // console.log('Hello');

// let phones = [
// {
//     name:'Samsung',
//     model:'s50',
//     price:'15000'
// },
// {
//     name:'Samsung',
//     model:'s50',
//     price:'15000'
// },
// {
//     name:'Samsung',
//     model:'s50',
//     price:'15000'
// },
// {
//     name:'Samsung',
//     model:'s50',
//     price:'15000'
// },


// ];
// // console.log(phones); 
// const div =document.querySelector('.container')
// for(let i=0;i<phones.length;i++){
//     div.innerHTML +=`
//     <div class="box">
//     <h1 class="h1">${phones[i].name}</h1>
//     <h4 class="h4">${phones[i].model}</h4>
//     <h4 class="h4">${phones[i].price}</h4>
//     <button class="addtocart">Add to cart</button>
// </div>
//     `
// }
// console.log(phones[i]);