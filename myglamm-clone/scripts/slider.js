function slideShow(){
    const arr =["https://files.myglamm.com/site-images/original/MM-skincare-website-banner.jpg","https://files.myglamm.com/site-images/original/Homepage_7.jpg","https://files.myglamm.com/site-images/original/Free-Sale-Banner_1.jpg","https://files.myglamm.com/site-images/original/MM-skincare-website-banner.jpg","   https://files.myglamm.com/site-images/original/Homepage_7.jpg"];
    let div = document.getElementById('slider');
    let img = document.createElement('img');
    img.setAttribute('class','img');
    let lbtn = document.getElementById('left');
    let rbtn = document.getElementById('right');
    let i=0;
    img.src = arr[0]
    div.append(img);
    //slide change according to setinterval
    setInterval(function(){
        if(i==arr.length){
            i=0;
        }
        img.src=arr[i];
        i++;
    },3000)
    //Slide change according to right button
    rbtn.onclick = () => {
        i++;
        if(i>arr.length - 1) {
        i = 0;
        }
        img.src = arr[i];
    };
    //Slide change according to left button
    lbtn.onclick = () => {
        i--;
        if(i<0) {
            i = arr.length - 1;
        }
        img.src = arr[i];
    };
    //according to dots
    div.onclick=(n)=>{
        dots.style.backgroundColor="pink";
    };
}
slideShow();