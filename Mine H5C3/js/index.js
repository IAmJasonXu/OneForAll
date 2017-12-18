
$(function(){
  $('#fullpage').fullpage({
  	sectionsColor:['#f9dd67','#84A2D4','#EF674D','#FFEEDD','#D04759','#84D9ED','#4FDDED','#4FDDED'],
  	navigation:true,
  	anchors:['qbh-title','qbh-list','qbh-buy','qbh-info','qbh-payment','qbh-delivery','qbh-appraise','qhb-shopping'],
  	afterLoad:function(anchor, index){
  		if(index === 2){
  			$('.qbh-list-search-box').stop(true,false).animate({
  				left:200
  			},1500,function(){
  				$('.qbh-list-search-font').stop(true,false).fadeIn(500, function(){
  					$(this).parent().hide();
	  				$('.qbh-list-search-finish').show(0, function(){
	  					$(this).animate({
                width: 165,
                left: 350,
                bottom: 250
              },1500, function(){

              });
              $('.qbh-list-sofas').animate({
                width:441
              },1500);
	  				});
  				});
  			});
  		}
  	},
    onLeave:function(index, nextIndex, direction){
        if(index === 2 && nextIndex === 3 && direction === 'down'){
            $('.qbh-list-sofa').show().animate({
                bottom: -630,
                right: 310,
                width: 220
            },2000, function(){
                $('.qbh-buy-select img:last-child').show();
            });
        }else if(index === 3 && nextIndex === 4){
            $(".qbh-list-sofas").hide();
            $(".qbh-buy-sofa-rotate").show().animate({
                left: -160,
                bottom: -640,
                'z-index': 1
            });
        }
    }
  });
});