(function($){

	// background do slide
	(function($){
		$('.slider_item').each(function(){
			var sliderBg = $(this).data('slider-bg');
			$(this).css({'background-image': 'url('+sliderBg+')'});
		});
	}(jQuery));


	// próximo slide
	var nextSlider = function(){
		if($('.slider_item.active').next('.slider_item').size()){

			$('.slider_item.active').each(function(){
				$(this).next('.slider_item').addClass('active');
				$(this).removeClass('active');
			});

		}else{
			$('.slider_item.active').each(function(){
				$('.slider_item').removeClass('active');
				$('.slider_item:eq(0)').addClass('active');
			});
		}
	}

		// slide anterior
		var prevSlider = function(){
			if($('.slider_item.active').index() > 1){
				$('.slider_item.active').each(function(){
					$(this).prev('.slider_item').addClass('active');
					$(this).removeClass('active');
				});

			}else{
				$('.slider_item.active').each(function(){
					$('.slider_item').removeClass('active');
					$('.slider_item:last-of-type').addClass('active');
				});
			}
		}

		// inicialização automática
		var sliderAuto = setInterval(nextSlider, 3000);

		$('.slider_content, .slider-next, .slider-prev').hover(function(){
			clearInterval(sliderAuto);
		},function(){
			sliderAuto = setInterval(nextSlider, 3000);			
		});

		//avançar e voltar slide
		$('.slider-next').click(function(event){
			event.preventDefault();
			nextSlider();
		});

		$('.slider-prev').click(function(event){
			event.preventDefault();
			prevSlider();
		});


	}(jQuery))

