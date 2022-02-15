$(document).ready(function() { 
	$(".lightbox-image").append("<span></span>");
	
	$('.lightbox-image')
		.live('mouseenter',function(){
			$(this).find("span").stop()
			.animate({top:'20px'},{duration:'300', easing:'easeOutQuart'});
			$(this).find("img").stop()
			.animate({opacity:0.5},{duration:'300', easing:'easeOutQuart'});
		})
		.live('mouseleave',function(){
			$(this).find("span").stop()
			.animate({top:'-90px'},{duration:'300', easing:'easeOutQuart'});
			$(this).find("img").stop()
			.animate({opacity:1},{duration:'300', easing:'easeOutQuart'});
	});
});