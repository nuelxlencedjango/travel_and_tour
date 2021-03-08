//$(document).ready(function()
$(function(){
   
    $('.sidenav').sidenav();
    //$('.team').team();
    $('.slider').slider({
        full_width:true,
    });
    //$('.slider').slider()
    
   
    
    //$(".myreviews").carousel({
      //numVisible :7,
      //shift      :5,
      //padding    :55,
    //});
  });
  var carousel = new bootstrap.Carousel(myCarousel)




  const caroImage = document.querySelector('.caro_images');
  const caroButton = document.querySelectorAll('.caro_button');
  const numberOfImages =document.querySelectorAll('.caro_images img').length;
  let ImageIndex =1;
  let translatex =0
  carouselButton.frEach(button =>{
    button.addEventListener('click' ,event =>{
      if (event.target.id== 'previous'){
        if(ImageIndex !== 1){
          ImageIndex --;
          translatex +=300;
        }
      }else{
        if (ImageIndex != numberOfImages){
          ImageIndex++;
          translatex -=300
        }
      }
      carouselImages.stlye.transform ='translatex(${translatex}px)';
    });
  });




//slider 

var slides=document.querySelector('.slider-items').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function () {
     next("next");
}
prevSlide.onclick=function () {
     next("prev");
}

function next(direction){

   if(direction=="next"){
      index++;
       if(index==totalSlides){
        index=0;
       }
   } 
   else{
           if(index==0){
            index=totalSlides-1;
           }
           else{
            index--;
           }
    }

  for(i=0;i<slides.length;i++){
          slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");     

}





//$(document).ready(function()
$(function() {
  $('site-main .about-area .owl-carouse').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
  })
  
});


$('.owl-carl').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  dots:false,
  //dots:true
  nav:true, // for arrow instead of dots
  // navigation arrow
  navText:[$('.owl-navigation .owl-nav-prev') ,$('.owl-navigation .owl-nav-next')]
});



