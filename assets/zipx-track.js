$(function (){
     $("button").button();
     $("select").selectmenu({width: 395});
     $(".datepicker").datepicker({ dateFormat: "y-mm-dd" });

     //Buttons
     $(".track").click(function(){
          var url = "http://www.zipx.com/track?"+$("#"+$(this).attr("for")).serialize(); 
          //console.log( url );
          $("#liveTrack").html( '<iframe src="'+url +'" width="100%" height="800px" style="border:none;"></iframe>' ).fadeIn("slow");
     });
     $(".reset").click(function(){
          $("#liveTrack").fadeOut("slow", function(){
           $(this).html("");
          });
          $( "#"+$(this).attr("for") ).trigger('reset');
     });
     //Hovering
     $( "#tk1-label" ).hover(function() {
          $( "#tk2" ).hide();
          $( "#tk1" ).show();
     });
     $( "#tk2-label" ).hover(function() {
          $( "#tk1" ).hide();
          $( "#tk2" ).show();
     });
});
