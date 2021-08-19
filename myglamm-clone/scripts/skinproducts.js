function local_skin_prodcuts() {
    let skin_products = [
    {
        Name: 'GLOW Iridescent Brightening Essence',
        Discription: 'Rosehip Oil-infused Brightening Facial Essence',
        Image: "https://files.myglamm.com/site-images/400x400/1623084585968-GLOW-ESSENCE.jpeg",
        Price: 1195,
        Rating:"Rating: 5 | 40 Ratings"
    },
    {
        Name: 'GLOW Iridescent Brightening Eye Cream',
        Discription: 'Rosehip Oil-infused Eye Cream',
        Image: "https://files.myglamm.com/site-images/400x400/1623084603672-EYE-CREAM-PRODUCT-SWATCH.jpeg",
        Price: 1090,
        Rating:"Rating: 5 | 31 Ratings"
    },
    {
        Name: 'Manish Malhotra Amla Moisturising Gel',
        Discription: 'Gel-based Natural Moisturiser',
        Image: "https://files.myglamm.com/site-images/400x400/AMLA-MOISTUIRISING-GEL_1.jpg",
        Price: 945,
        Rating:"Rating: 4.9 | 21 Ratings"
    },
    {
        Name: 'WIPEOUT Germ Killing Face Wash',
        Discription: 'Tea Tree Oil &amp; Vitamin E-infused Germ-killing &amp; Purifying Face Wash',
        Image: "https://files.myglamm.com/site-images/400x400/1-1623082094122-Face-Wash-2-(1).jpg",
        Price: 119,
        Rating:"Rating: 4.9 | 90 Ratings"
    },
    {
        Name: 'K.Play Lychee Hydrating Sheet Mask',
        Discription: 'Lychee-infused Hydrating Sheet Mask',
        Image: "https://files.myglamm.com/site-images/400x400/lychee-hydrating-sheet-mask-copy.jpeg",
        Price: 145,
        Rating:"Rating: 4.8 | 13 Ratings"
    },
    {
        Name: 'YOUTHfull Hydrating Eye Cream With Water Bank Technology',
        Discription: 'Marine Triple-Action Nourishing, Hydrating &amp; Firming Eye Cream',
        Image: "https://files.myglamm.com/site-images/400x400/Eye-Cream-swatch.jpg",
        Price: 895,
        Rating:"Rating: 5 | 4 Ratings"
    }
    ]
    
    localStorage.setItem("skinproducts", JSON.stringify(skin_products));
}

local_skin_prodcuts();

function show_skin_products(d) {
    let skin_products = d;
    let div = document.getElementById("skin_display");
    div.innerHTML = null;
    skin_products.forEach(function(el) {
        append_skin_products(el);
    });
}

show_skin_products(JSON.parse(localStorage.getItem("skinproducts")))

function append_skin_products(el) {
    let dis_div = document.getElementById('skin_display');
    let div = document.createElement("div");
    let s_image = document.createElement("img");
    s_image.src = el.Image;
    s_image.addEventListener('click', function () {
        let selc_pro = el.Name;
        localStorage.setItem("selected_products", JSON.stringify(selc_pro));
        location.href='selected_product.html'
    })
    let s_name = document.createElement("div");
    s_name.innerHTML = el.Name;
    s_name.setAttribute("class","skin_text1")
    let s_discription = document.createElement("div");
    s_discription = el.Discription;
    //s_discription.setAttribute('class','skin_text3')
    let s_price = document.createElement("div");
    s_price.style = 'margin-left:120px'
    s_price.innerHTML = ` ₹ ${el.Price}`;
    s_price.setAttribute("class", "skin_text2");
    let s_btn = document.createElement("button");
    s_btn.style = 'background-color:black;color:white'
    s_btn.innerText = "Add to cart";
    s_btn.setAttribute("class", "add_to_cart_btn");
    s_btn.addEventListener('click', function () {
        addtocart(el);
    })
    div.append(s_image, s_name, s_discription, s_price, s_btn);
    dis_div.append(div);
}


function addtocart(el) {
    let arr;
    arr = localStorage.getItem('cart');
    if (arr == null) {
        arr = [];
    } else {
        arr = JSON.parse(localStorage.getItem("cart"));
    }
    arr.push(el);
    localStorage.setItem("cart", JSON.stringify(arr));
}