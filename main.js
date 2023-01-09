function randomImg(){
    return Math.floor(Math.random() * 8);   
}

document.getElementById("images").innerHTML = '<img src="img/'+randomImg()+'.jpg"/>';
