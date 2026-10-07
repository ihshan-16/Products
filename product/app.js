let fetchProducts=async()=>{
    try{
        let res = await fetch("https://fakestoreapi.com/products");
        // console.log(res);

      let data= await res.json();
    //   c0onsole.log(data)
 
     displayProducts(data);
    }
    catch(err){
     console.log(err)
    }
}
fetchProducts()

let main = document.querySelector("main")

let displayProducts=(products)=>{

    products.map((products)=>{
        //    console.log(products);
        let div = document.createElement("div")
        div.classList.add("card");
        div.innerHTML=`<img src=${products.image}>
                        <p>${products.title}</p>
                        <p>${products.price} Rs.</p>
                        <p>⭐${products.rating.rate}</p>
                        <button>add to cart</button>`



        main.append(div);

    })
}

