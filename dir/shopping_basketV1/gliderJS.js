window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 5,
        slidesToScroll: 2,
        draggable: true,
        dots: '.dots',       
  })
});
