let src = "https://ourouimed.github.io/ecomerce/"
let cat1 = {
  "products" : [
      {
      "title" : "Germany First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "20$",
      "img" : src + "media/products/EURO24/prod1.webp",
      "url" : src + "products/product-1",
      "promo" : -5
      },
      { 
      "title" : "France First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "17$",
      "img" : src + "media/products/EURO24/prod2.webp" ,
      "url" : "products/product-1",
      "promo" : ""
      },
      { 
      "title" : "Portugal First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "10$",
      "img" : src + "media/products/EURO24/prod3.webp" ,
      "url" : "products/product-1",
      "promo" : -30
      },
      { 
      "title" : "Spain First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : src + "media/products/EURO24/prod4.webp" ,
      "url" : "products/product-1",
      "promo" : -24
      },
      { 
      "title" : "England First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : src + "media/products/EURO24/prod5.webp" ,
      "url" : "products/product-1",
      "promo" : -19
      }, 
      { 
      "title" : "Netherland First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : src + "media/products/EURO24/prod6.webp" ,
      "url" : "products/product-1",
      "promo" : -15
      },
      { 
      "title" : "Italy First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : src + "media/products/EURO24/prod7.webp" ,
      "url" : "products/product-1",
      "promo" : -20
      },
      { 
      "title" : "Turkey First jersey Euro2024" ,
      "category" : "football" , 
      "price" : "15$",
      "img" : src + "media/products/EURO24/prod8.webp" ,
      "url" : "products/product-1",
      "promo" : false
      }
  ]
}

$(document).ready(function(){

for (let i=0;i<cat1.products.length;i++){
   let prodGrid = $("#cat1 .prod-grid")
   var product = cat1.products[i];
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
                                    <button class="addCart"><ion-icon name="cart-outline"></ion-icon>Add to cart</button>
                                </div>
                        </div> 
  
  `)
  prodGrid.append(result)


}

});
