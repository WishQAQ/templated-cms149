$(function(){

  $(".navLast a").hover(
    function(){
        $(this).siblings("span").fadeIn(300);
        $(this).css({"color":"#fff"})
      },function(){
         $(this).siblings("span").fadeOut(300);
         $(this).css({"color":"#3a4046"})
  });
  

  $(".smallBan li").hover(function(){
      $(this).find("span").stop(false, true).fadeOut()
  },function(){
      $(this).find("span").stop(false, true).fadeIn()
  })

  $(".listPng a").bind("click" , function(){
     if($(".hidenavBar").is(":hidden")){
      $(".hidenavBar").slideDown();
     }else if($(".hidenavBar").is(":visible")){
      $(".hidenavBar").slideUp();
     }
     return false;
  })
  
   function ress(){
     var wid = $(window).width();
     if(wid < 1024){
         return false;
     }else{
         return true;
     }
  }
  $(".caseBoxs a").hover(function(){
    if (ress()){
      $(this).find(".caseTitle").stop().animate({"top":'120px'}, {duration: 340});
      $(this).find(".over").stop().animate({"bottom":'90px'}, {duration: 340});
      $(this).find(".caseBg").stop().animate({"opacity":0.9}, {duration: 340});
    }
  },
  function(){
    if (ress()){
      $(this).find(".caseTitle").stop().animate({top:'-150'}, {duration: 340})
      $(this).find(".caseTitle").animate({top:'-100'}, {duration: 0})
      $(this).find(".over").stop().animate({bottom:'-150'}, {duration: 340})
      $(this).find(".over").animate({bottom:'-100'}, {duration: 0})
       $(this).find(".caseBg").stop().animate({"opacity":0.0}, {duration: 340});
    }

  });

  // var caseWidth = $(".mainCase").width() + 30;
  // $(".mainCase ul").width(caseWidth);
  // var wid = $(window).width();
  // if(wid<760){
  //   $(".mainCase ul").width("100%");
  // }
     

  $(".checkCase a").hover(
    function(){
        $(this).find("span").fadeOut(300);
      },function(){
         $(this).find("span").fadeIn(300);
  });
  

  $(".heBox a").hover(
    function(){
        $(this).find(".Cbg").fadeOut(300);
      },function(){
         $(this).find(".Cbg").fadeIn(300);
  });
})
