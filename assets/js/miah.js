$(document).ready(function(){
		$(".carousel-inner").carouFredSel({
			items: {
				width: 600,
				height: 340
			},
			scroll:{
				fx: "crossfade",
				easing: "linear",
				duration: 300
			},
			auto:{
				timeoutDuration: 3000,
				fx: "cover-fade",
				easing: "swing",
				pauseOnHover: true,
			},			
			pagination: "div.carousel-indicators"
		});
	});
