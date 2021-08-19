function apply_promo_code(){
    let total_amount = JSON.parse(localStorage.getItem('grand_total'));
    let promo_code = document.getElementById('promo-code').value;
    if(promo_code == 'YH20'){
        total_amount =Math.floor (total_amount - (total_amount*20)/100);
        
        // set amount to discount value
        let actual_amount_div = document.getElementById('actual-amount');
        let act_amt = document.getElementById('act-amt');
        act_amt.innerHTML = ' '; 
        act_amt.innerHTML =`₹ ${total_amount}`;
        actual_amount_div.append(act_amt)

        let amount_t_pay = document.getElementById('amount');
        amount_t_pay.innerHTML = `<b> ₹ ${total_amount}<b>`
    }
    else{
        alert('Promo code not valid');
    }
}

function get_total_amount(){
    let total_amount = JSON.parse(localStorage.getItem('grand_total'));
    let actual_amount_div = document.getElementById('actual-amount');
    let amount_p = document.createElement('p');
    amount_p.setAttribute('id', 'act-amt')
    amount_p.innerHTML = `₹ ${total_amount}`;
    actual_amount_div.append(amount_p)

    let amount_t_pay = document.getElementById('amount');
    amount_t_pay.innerHTML = `<b> ₹ ${total_amount}<b>`
}
get_total_amount();
function redirect_to_payment(){
    location.href = 'payment.html';
}