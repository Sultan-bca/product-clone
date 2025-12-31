let productImg=document.getElementById("product-img");
let btn=document.getElementsByClassName("btn");

btn[0].onclick=function(){
    productImg.src="image/product1.png.jpg"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick=function(){
    productImg.src="../s_image/product2.png.jpg"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick=function(){
    productImg.src="../s_image/product3.png.jpg"
    for(bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
}