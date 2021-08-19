function get_selected_product_details() {
    let selected_product=JSON.parse(localStorage.getItem('selected_products'))
    let products = JSON.parse(localStorage.getItem("skinproducts"));
    products.forEach(function(el) {
        if (el.Name == selected_product) {
            display_selected_product(el);
        }
    });
}

get_selected_product_details();


function display_selected_product(el) {
    let dis_selc_prod = document.getElementById("selected_prod_display");
    let s_row1 = document.createElement('div');
    s_row1.innerHTML = el.Name.toUpperCase();
    s_row1.setAttribute('class', 'srow1 srow11');
    let s_row2 = document.createElement("hr");
    s_row2.setAttribute('class', 'srow1');
    let s_row3 = document.createElement('div');
    s_row3.setAttribute("class", 'srow3');
    let row3_box1 = document.createElement('div');
    row3_box1.setAttribute("class", 'srow3_box1')
    let sr3_b1_img = document.createElement('img');
    sr3_b1_img.src = el.Image;
    sr3_b1_img.setAttribute('class', 'sr3_b1_img')
    let sr3_b1_logo1 = document.createElement("img");
    sr3_b1_logo1.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTST-rjpx7rXeCcyrE0-IlUkGd0HKwRE7u-6g&usqp=CAU';
    sr3_b1_logo1.setAttribute("class", 'sr3_b1_logo1')
    let sr3_b1_logo2 = document.createElement("img");
    sr3_b1_logo2.src = 'data:image/png;base64,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';
    sr3_b1_logo2.setAttribute("class",'sr3_b1_logo1 sr3_b1_logo2')
    let sr3_b1_logo3 = document.createElement("img");
    sr3_b1_logo3.src = 'data:image/png;base64,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';
    sr3_b1_logo3.setAttribute("class", 'sr3_b1_logo1 sr3_b1_logo3')


    let row3_box2 = document.createElement('div');
    row3_box2.setAttribute("class", 'srow3_box2')
    let sr3_b2_text1 = document.createElement('div');
    sr3_b2_text1.innerHTML = el.Name.toUpperCase();
    sr3_b2_text1.setAttribute('class', 'sr3_b2_text1')
    let sr3_b2_text2 = document.createElement('div');
    sr3_b2_text2.innerHTML = el.Discription;
    sr3_b2_text2.setAttribute('class', 'sr3_b2_text2');
    let sr3_b2_text3 = document.createElement('div');
    sr3_b2_text3.innerHTML = el.Rating;
    sr3_b2_text3.setAttribute('class', 'sr3_b2_text3');
    let sr3_b2_text4 = document.createElement('div');
    sr3_b2_text4.innerHTML = el.Price;
    sr3_b2_text4.setAttribute('class', 'sr3_b2_text4');
    let sr3_b2_text5 = document.createElement('div');
    sr3_b2_text5.innerHTML = '(MRP incl. of all taxes)';
    sr3_b2_text5.setAttribute('class', 'sr3_b2_text5');
    let sr3_b2_text6 = document.createElement('button');
    sr3_b2_text6.textContent = 'ADD TO BAG';
    sr3_b2_text6.setAttribute('class', 'sr3_b2_text6');
    sr3_b2_text6.addEventListener('click', function () {
        addtocart(el);
    })
    let sr3_b2_text7 = document.createElement('div');
    sr3_b2_text7.innerHTML = 'FREE GIFT ON PURCHASE!';
    sr3_b2_text7.setAttribute('class', 'sr3_b2_text7');
    let sr3_b2_text8 = document.createElement('div');
    sr3_b2_text8.innerHTML = 'You will receive cashback worth ₹152 as myglammPOINTS on this purchase';
    sr3_b2_text8.setAttribute('class', 'sr3_b2_text8');
    let sr3_b2_text9 = document.createElement('hr');
    sr3_b2_text9.setAttribute('class', 'sr3_b2_text9');
    let sr3_b2_text10 = document.createElement('img');
    sr3_b2_text10.src = 'https://www.myglamm.com/images/exclusive_offers.svg';
    sr3_b2_text10.setAttribute('class', 'sr3_b2_text10');
    let sr3_b2_text11 = document.createElement('img');
    sr3_b2_text11.src = 'https://files.myglamm.com/site-images/original/offer-2.png';
    sr3_b2_text11.setAttribute('class', 'sr3_b2_text11');
    let sr3_b2_text12 = document.createElement('div');
    sr3_b2_text12.innerHTML = 'Stay Home Stay Safe: FREE Magic Potion Worth Rs 995 with this purchase.';
    sr3_b2_text12.setAttribute('class', 'sr3_b2_text12');
    let sr3_b2_text13 = document.createElement('img');
    sr3_b2_text13.src = 'https://files.myglamm.com/site-images/original/FREE.png';
    sr3_b2_text13.setAttribute('class', 'sr3_b2_text11 sr3_b2_text14');
    let sr3_b2_text14 = document.createElement('div');
    sr3_b2_text14.innerHTML = 'Free Shipping on orders over Rs. 399';
    sr3_b2_text14.setAttribute('class', 'sr3_b2_text12 sr3_b2_text14');
    let sr3_b2_text15 = document.createElement('img');
    sr3_b2_text15.src = 'https://files.myglamm.com/site-images/original/offer-2.png';
    sr3_b2_text15.setAttribute('class', 'sr3_b2_text11 sr3_b2_text16');
    let sr3_b2_text16 = document.createElement('div');
    sr3_b2_text16.innerHTML = 'Earn MyGlammXO Points on this purchase';
    sr3_b2_text16.setAttribute('class', 'sr3_b2_text12 sr3_b2_text16');

    
   
   
    row3_box1.append(sr3_b1_img, sr3_b1_logo1, sr3_b1_logo2, sr3_b1_logo3);

    row3_box2.append(sr3_b2_text1,sr3_b2_text2,sr3_b2_text3,sr3_b2_text4,sr3_b2_text5,sr3_b2_text6,sr3_b2_text7,sr3_b2_text8,sr3_b2_text9,sr3_b2_text10,sr3_b2_text11,sr3_b2_text12,sr3_b2_text13,sr3_b2_text14,sr3_b2_text15,sr3_b2_text16);

    s_row3.append(row3_box1,row3_box2)
    dis_selc_prod.append(s_row1, s_row2,s_row3);
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