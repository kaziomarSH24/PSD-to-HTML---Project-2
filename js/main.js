
$(document).ready(function(){
	$('#nav').slicknav();

	$(".slicknav_btn").on("click",function(){
		// $(".slicknav_icon-bar").toggleClass("hide");
		$(".slicknav_icon").toggleClass('active');
	});
});
