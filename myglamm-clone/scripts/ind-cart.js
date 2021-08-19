function add_to_cart(){
        let prod_name = document.getElementById('product-name').textContent;
        let prod_price = document.getElementById('product-price').textContent;
        let prod_image = document.getElementById('prod-image').src;
        
        let product = [
            {
                product_name : prod_name,
                product_price : prod_price,
                product_image : prod_image,
            }
        ];
        
        let boolean = true;
        let arr;
        arr = JSON.parse(localStorage.getItem('cart'));
        if(arr == null){
            arr = [];
        }
        else if(arr!==null){
            arr = JSON.parse(localStorage.getItem('cart'));
        }
        for(var i=0 ; i<arr.length ; i++){
            if(product.product_name == arr[i].product_name){
                boolean = false
            }
        }

        if(boolean == true){
            arr.push(product);
            localStorage.setItem('cart', JSON.stringify(arr));
        }
        else{
            alert('product already in cart');
        }
    }