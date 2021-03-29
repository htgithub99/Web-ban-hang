$(document).ready(function(){
 	// Khởi tạo owlCarousel ==========>>
         $(".slide-home").owlCarousel({
          items:1,
          margin:20,
          loop:true,
          nav:true,
          navText:['<i class="glyphicon glyphicon-chevron-left"></i>', '<i class="glyphicon glyphicon-chevron-right"></i>'],
          autoplay: true,
         });

$(".slide-product").owlCarousel({
          // items:6,
          // margin:20,
          loop:true,
          nav:false,
          navText:['<i class="glyphicon glyphicon-chevron-left"></i>', '<i class="glyphicon glyphicon-chevron-right"></i>'],
          autoplay: true,
          responsive:{
          	0:{
          		items:1
          	},
          	480:{
          		items:2,
          		margin:8
          	},
          	768:{
          		items:4,
          		margin:8
          	},
          	922:{
          		items:5,
          		margin:8
          	}
          }
         });


    // Khởi tạo WOW js ==============>>
    new WOW().init();
 });       