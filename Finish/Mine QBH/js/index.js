
$(function(){
  $('#fullpage').fullpage({
  	sectionsColor:['#f9dd67','#84A2D4','#EF674D','#FFEEDD','#D04759','#84D9ED','#CCCCCC','#4FDDED'],
  	navigation:true,
  	// anchors:['qbh-title','qbh-list','qbh-buy','qbh-info','qbh-payment','qbh-delivery','qbh-appraise','qhb-shopping'],
  	afterLoad:function(anchor, index){
      if(index === 1){
        $('.down').fadeIn(4000);
      }else if(index === 2){
  			$('.qbh-list-search-box').stop(true,false).animate({
  				left:200
  			},1000,function(){
  				$('.qbh-list-search-font').stop(true,false).fadeIn(500, function(){
  					$(this).parent().hide();
	  				$('.qbh-list-search-finish').show(0, function(){
	  					$(this).animate({
                width: 165,
                left: 350,
                bottom: 250
              },1500);
              $('.qbh-list-wordb').fadeIn(1500);
              $('.qbh-list-sofas').animate({
                width:441
              },1500,function(){
                $('.down').fadeIn(1000);
              });
	  				});
  				});
  			});
  		}else if(index === 5){
            $(".qbh-payment-hands").animate({
                bottom: 0
            },1500,function(){
                $(".qbh-payment-mouse-end").show();
                $(".qbh-payment-sofa-rotate").animate({
                    bottom: 250
                },1000,function(){
                    $(".qbh-payment-sofa-rotate").animate({
                        bottom: 170
                    },500);
                    $(".qbh-payment-bill").animate({
                        bottom: 420
                    },500,function(){
                        $('.down').fadeIn(1000);
                    });
                });
            });
      }else if(index === 7){
            // $(".qbh-appraise-stars").animate({
            //     width: 100
            // },2500);
            $(".qbh-appraise-stars").css("animation-play-state", "running");
            $(".qbh-appraise-haoping").css("animation-play-state", "running");
            window.setTimeout(function(){
                $('.down').fadeIn(1000);
            },6000);
      }else if(index === 8){
            $('.qbh-shopping').on('mousemove',function(event){
                event = event || window.event;
                
                var mouseX = event.pageX - $(this).offset().left - 70;
                var mouseY = event.pageY - $(this).offset().top;
                if(mouseY < $(this).height() - $('.qbh-shopping-hands').height()){
                  mouseY = $(this).height() - $('.qbh-shopping-hands').height();
                }
                $('.qbh-shopping-hands').css({
                    left: mouseX,
                    top: mouseY
                });
            });
            $(".qbh-shopping-btn").on('mouseenter',function(){
                $(this).attr('src','./image/qbh-shopping-dong.gif');
            }).on('mouseleave',function(){
                $(this).attr('src','./image/qbh-shopping-start-shopping.png');
            });
            $('.qbh-shopping-again').on('click',function(){
                $("#fullpage").fullpage.moveTo(1);
            });
      }
  	},
    onLeave:function(index, nextIndex, direction){
        $('.down').fadeOut(500);
        if(index === 2 && nextIndex === 3){
            $('.qbh-list-sofa').show().animate({
                bottom: -630,
                right: 310,
                width: 220
            },1000, function(){
                $('.qbh-buy-select img:last-child').fadeIn(1000,function(){
                    $('.down').fadeIn(1000);
                });
            });
        }else if(index === 3 && nextIndex === 4){
            $(".qbh-list-sofa").hide();
            $(".qbh-info-rotate-sofa").show().animate({
                left: 140,
                bottom: 170
            },1000,function(){
                $(".qbh-info-cart").animate({
                    left: 2000
                },1500,function(){
                    $(".qbh-info-address-box").fadeIn(500,function(){
                        $(".qbh-info-word").fadeIn(500,function(){
                          $(".qbh-info-worda").fadeOut(1000);
                          $(".qbh-info-wordb").fadeIn(1000);
                          $(".qbh-info-address").fadeIn(1000,function(){
                              $('.down').fadeIn(1000);
                          });
                        });
                    });
                });
            });
        }else if(index === 5 && nextIndex === 6){
            $(".qbh-payment-sofa-rotate").hide();
            $(".qbh-delivery-box").animate({
                left: 0,
                bottom: 450
            },1500);
            $(".qbh-delivery-rotate-sofa").show().animate({
                bottom: 0,
                left: 40,
                width: 50
            },1500,function(){
                $(this).parent().animate({
                    left: 23,
                    bottom: 23
                },1000,function(){
                    $(".qbh-delivery-rotate-sofa").hide();
                    $(this).hide(1000,function(){
                        $(".qbh-delivery-font-start").fadeOut(5000);
                        $(".qbh-delivery-truck-font").show();
                        $(".qbh-delivery-bg-box").animate({
                            left: -950
                        },5000, function(){
                            $(".qbh-delivery-font-end").fadeIn(500);
                            $(".qbh-delivery-deliveryman").show().animate({
                                  left: -20,
                                  bottom: 124,
                                  width: 300
                            },1500,function(){
                                $(".qbh-delivery-deliveryman").animate({
                                    left: 220
                                },1000,function(){
                                    $(".qbh-delivery-shouhuo").show();
                                    $(".qbh-delivery-door").show();
                                    $(".qbh-delivery-buyer").show().animate({
                                        right: 500,
                                        width: 100
                                    },1500,function(){
                                        $('.down').fadeIn(1000);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        }else{
        }
    }
  });
  $(".down").on('click',function(){
      $('#fullpage').fullpage.moveSectionDown();
  })
});

