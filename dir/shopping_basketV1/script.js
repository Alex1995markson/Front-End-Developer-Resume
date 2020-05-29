window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider1'), {
    slidesToShow: 1,
    draggable: true,
    dots: '.dots1',       
    arrows: {
      prev: '.glider1-prev',
      next: '.glider1-next'
    }
  });
});
    
