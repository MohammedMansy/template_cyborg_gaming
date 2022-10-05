
$(document).ready(function(){
$("#preloading").fadeOut(500,function(){
  $("body").css("overflow","auto");
});
});


/* Start Navbar */
$(".nav-item a").hover(
function() {
      $(this).css("color","#e75e8d")
    }
,
function(){
     $(this).css("color","#666")
    }
);



$(window).scroll(function(){
  let myscrolling = $(window).scrollTop();
       if(myscrolling > 100 ){
       $("#myNav").css({
        position: 'sticky',
        top: '10px'
       })
      }else{
        $("#myNav").css({ position : 'static'},500)
      }
})

/* End Navbar */

/* Start Main-banner*/

$("#all .main-button a ").hover(
  function(){
    $(this).css({
      backgroundColor:"#fff",
      color:"#e75e8d"
    })
  }
  ,
  function(){
    $(this).css({
      backgroundColor:"#e75e8d",
      color:"#fff"
    })
  })
  /* End Main-banner*/

  /* Start  gaming-library */
  $(".special-button a ").hover(
    function(){
      $(this).css({
        backgroundColor : "#fff",
        color: "#e75e8d",
        border:"none"
      })
    },
    function(){
      $(this).css({
        backgroundColor : "transparent",
        color: "#e75e8d",
        border: " 1px solid "
      })
    })



    $("#myFooter a ").hover(
      function(){
        $(this).css({
          color: "#e75e8d"
        })
      },
      function(){
        $(this).css({
          color: "#fff"
        })
      })
  



