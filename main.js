function randomImg(){
    console.log(Math.floor(Math.random() * 8 + 1))
    return Math.floor(Math.random() * 8 + 1);   
}

document.getElementById("images").innerHTML = '<img src="img/'+randomImg()+'.jpg"/>';




