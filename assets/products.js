let productUrl = "file:///C:/Users/Utilisateur/Desktop/medamine/Programing%20work/Web%20project/ecom/products/product-1/product.html"
// club jersey 2023/24
let prod1 = {
  "products" : [
      {
      "title" : "Real Madrid 1st Jersy 2023/2024" ,
      "category" : "football" , 
      "price" : "20$",
      "img" : "media/products/clubs/prod1.webp",
      "url" : productUrl,
      "promo" : -5
      },
      { 
      "title" : "Real Madrid Y3 specail edition 2023/2024" ,
      "category" : "football" , 
      "price" : "17$",
      "img" : "media/products/clubs/prod2.webp" ,
      "url" : productUrl,
      "promo" : false
      },
      { 
      "title" : "Liverpool 1st Jersy 2023/2024" ,
      "category" : "football" , 
      "price" : "10$",
      "img" : "media/products/clubs/prod3.webp" ,
      "url" : productUrl,
      "promo" : false
      },
      { 
      "title" : "Fc barca 1st Jersy 2023/2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : "media/products/clubs/prod4.webp" ,
      "url" : productUrl,
      "promo" : -12
      }
  ]
}

$(document).ready(function(){

for (let i=0;i<prod1.products.length;i++){
   let prodGrid = $("#prod1 .prod-grid")
   var product = prod1.products[i];
   var title = product.title,
       category = product.category ,
       price = product.price ,
       img = product.img , 
       url = product.url,
       promo = product.promo;
        

var result = (`<div class="product">
                                <div class="img">
                                        <span class="promo">${promo}%</span>
                                        <img src="${img}">
                                </div>
                                <div class="info">
                                        <span>${category}</span>
                                        <h3><a href="${url}">${title}</a></h3>
                                </div>
                                <div class="price">
                                    <span>${price}</span>
                                    <button class="addCart"><i class="ri-shopping-cart-line"></i>Add to cart</button>
                                </div>
                        </div> 
  
  `)

  prodGrid.append(result)
}

});



// Copa America teams 2024

let prod2 = {
  "products" : [
      {
      "title" : "Argentina Copa America 2024 1st jersey" ,
      "category" : "football" , 
      "price" : "15.00$",
      "img" : "media/products/CA24/prod1.webp",
      "url" : productUrl,
      "promo" : -54
      },
      { 
      "title" : "Uruguay Copa America 2024 1st jersey" ,
      "category" : "football" , 
      "price" : "17$",
      "img" : "media/products/CA24/prod2.webp" ,
      "url" : productUrl,
      "promo" : false
      },
      { 
      "title" : "Brazil Copa America 2024 1st jersey" ,
      "category" : "football" , 
      "price" : "10$",
      "img" : "media/products/CA24/prod3.webp" ,
      "url" : productUrl,
      "promo" : -30
      },
      { 
      "title" : "Chilie 1st Jersy 2023/2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : "media/products/CA24/prod4.webp" ,
      "url" : productUrl,
      "promo" : false
      },
  ]
}

$(document).ready(function(){

for (let i=0;i<prod2.products.length;i++){
   let prodGrid = $("#prod2 .prod-grid")
   var product = prod2.products[i];
   var title = product.title,
       category = product.category ,
       price = product.price ,
       img = product.img , 
       url = product.url,
       promo = product.promo;


var result = (`<div class="product">
                                <div class="img">
                                        <span class="promo">${promo}%</span>
                                        <img src="${img}">
                                </div>
                                <div class="info">
                                        <span>${category}</span>
                                        <h3><a href="${url}">${title}</a></h3>
                                </div>
                                <div class="price">
                                    <span>${price}</span>
                                    <button class="addCart"><i class="ri-shopping-cart-line"></i>Add to cart</button>
                                </div>
                        </div> 
  
  `)
  prodGrid.append(result);


}

});




// African Teams 2023/2024
let prod3 = {
  "products" : [
      {
      "title" : "Raja Casablanca 1st jersey 2023/2024" ,
      "category" : "football" , 
      "price" : "30.00$",
      "img" : "media/products/CAFTeams/prod1.webp",
      "url" : productUrl,
      "promo" : -54
      },
      { 
      "title" : "Alahly Eg 1st jersey 2023/2024" ,
      "category" : "football" , 
      "price" : "17$",
      "img" : "media/products/CAFTeams/prod2.webp" ,
      "url" : productUrl,
      "promo" : false
      },
      { 
      "title" : "Sundowns 1st Jersey 2023/2024" ,
      "category" : "football" , 
      "price" : "10$",
      "img" : "media/products/CAFTeams/prod3.webp" ,
      "url" : productUrl,
      "promo" : -30
      },
      { 
      "title" : "Wydad 1st Jersey 2023/2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : "media/products/CAFTeams/prod4.webp" ,
      "url" : productUrl,
      "promo" : -20
      },
  ]
}
$(document).ready(function(){

for (let i=0;i<prod3.products.length;i++){
   let prodGrid = $("#prod3 .prod-grid")
   var product = prod3.products[i];
   var title = product.title,
       category = product.category ,
       price = product.price ,
       img = product.img , 
       url = product.url,
       promo = product.promo;


var result = (`<div class="product">
                                <div class="img">
                                        <span class="promo">${promo}%</span>
                                        <img src="${img}">
                                </div>
                                <div class="info">
                                        <span>${category}</span>
                                        <h3><a href="${url}">${title}</a></h3>
                                </div>
                                <div class="price">
                                    <span>${price}</span>
                                    <button class="addCart"><i class="ri-shopping-cart-line"></i>Add to cart</button>
                                </div>
                        </div> 
  
  `)
  prodGrid.append(result)

}

});;



// Euro 2024 Jerseys
let prod4 = {
  "products" : [
      {
      "title" : "Germany Euro 2024 1st Jersey" ,
      "category" : "football" , 
      "price" : "30.00$",
      "img" : "media/products/EURO24/prod1.webp",
      "url" : productUrl,
      "promo" : -54
      },
      { 
      "title" : "Portugal Euro 2024 1st Jersey" ,
      "category" : "football" , 
      "price" : "17$",
      "img" : "media/products/EURO24/prod2.webp" ,
      "url" : productUrl,
      "promo" : false
      },
      { 
      "title" : "France Euro 2024 1st Jersey" ,
      "category" : "football" , 
      "price" : "10$",
      "img" : "media/products/EURO24/prod3.webp" ,
      "url" : productUrl,
      "promo" : false
      },
      { 
      "title" : "Spain Euro 2024 1st Jersey" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : "media/products/EURO24/prod4.webp" ,
      "url" : productUrl,
      "promo" : -20
      },
  ]
}



$(document).ready(function(){

for (let i=0;i<prod4.products.length;i++){
   let prodGrid = $("#prod4 .prod-grid")
   var product = prod4.products[i];
   var title = product.title,
       category = product.category ,
       price = product.price ,
       img = product.img , 
       url = product.url,
       promo = product.promo;


var result = (`<div class="product">
                                <div class="img">
                                        <span class="promo">${promo}%</span>
                                        <img src="${img}">
                                </div>
                                <div class="info">
                                        <span>${category}</span>
                                        <h3><a href="${url}">${title}</a></h3>
                                </div>
                                <div class="price">
                                    <span>${price}</span>
                                    <button class="addCart"><i class="ri-shopping-cart-line"></i>Add to cart</button>
                                </div>
                        </div> 
  
  `)
  prodGrid.append(result)
}

});;


