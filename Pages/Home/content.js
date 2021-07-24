class Homepage{
    constructor(title, subtitle, description, image)
    {
        this.title = title;
        this.subtitle=subtitle;
        this.description=description;
        this.image=image;     
    }
}

let about=new Homepage("ABOUT", "blah","blah blah blah", "image");

document.getElementById("title1").innerHTML =
about.title;
document.getElementById("subtitle1").innerHTML =
about.subtitle;
document.getElementById("description1").innerHTML =
about.description;
document.getElementById("image1").innerHTML =
about.image;



let project=new Homepage("PROJECT", "AND","and and and", "img");

document.getElementById("title2").innerHTML =
project.title;
document.getElementById("subtitle2").innerHTML =
project.subtitle;
document.getElementById("description2").innerHTML =
project.description;
document.getElementById("image2").innerHTML =
project.image;




let sponsors=new Homepage("SPONSORS", "EH","eh eh eh", "im");

document.getElementById("title3").innerHTML =
sponsors.title;
document.getElementById("subtitle3").innerHTML =
sponsors.subtitle;
document.getElementById("description3").innerHTML =
sponsors.description;
document.getElementById("image3").innerHTML =
sponsors.image;




let gallery=new Homepage("GALLERY", "pic","pic pic pic", "i");

document.getElementById("title4").innerHTML =
gallery.title;
document.getElementById("subtitle4").innerHTML =
gallery.subtitle;
document.getElementById("description4").innerHTML =
gallery.description;
document.getElementById("image4").innerHTML =
gallery.image;

//const hamburger=document.querySelector('.header .nav-bar .nav-list .hamburger');
//const mobile_menu=document.querySelector('.header .nav-bar .nav-list ul');
//const header=document.querySelector('.header .container');

//hamburger.addEventListener('click',function(){
  //  hamburger.classList.toggle('active');
   // mobile_menu.classList.toggle('active');

//});