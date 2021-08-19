function generator(){
    let mobile = document.getElementById("number").value;
 
    let arr = localStorage.getItem('data');
 
    if(arr == null){
        arr = [];
        arr.push(mobile);
        localStorage.setItem('data', JSON.stringify(arr));
        window.location.href='enterDetails.html'
 
    }else{
     arr = JSON.parse(localStorage.getItem("data"))
     let flag = true;
     for(let i =0; i<arr.length;i++){
        if(arr[i] == mobile){
            flag = false;
            break;
     }
    }
 
    if(flag == true){
         arr.push(mobile);
         localStorage.setItem('data', JSON.stringify(arr));
         window.location.href='enterDetails.html'
 
    }else{
     window.location.href='index.html'
    }
 
 }  
 }