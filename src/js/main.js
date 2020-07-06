import { getSVGs, Loading } from './util/utilities';
import Cookie from './lib/Cookie';
document.addEventListener('DOMContentLoaded', () => {
	Cookie();
	getSVGs();
	Loading();
});

document.addEventListener('DOMContentLoaded', () => {
	var swiper = new Swiper('.swiper-container_brand', {
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper = new Swiper('.swiper-container_home', {
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var swiper = new Swiper('.swiper-container_banner', {
		spaceBetween: 30,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper = new Swiper('.swiper-container_brand', {
		slidesPerView: 5,
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var swiper = new Swiper('.slider_customer', {
		slidesPerView: 5,
		spaceBetween: 15,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	var swiper = new Swiper('.slider_product_detail', {
		slidesPerView: 5,
		spaceBetween: 5,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var swiper = new Swiper('.slider_sptt', {
		slidesPerView: 5,
		spaceBetween: 5,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	$('.visible_parameter').click((event) => {
		event.preventDefault();
		$('.visible_info').removeClass('active_bg');
		$('.visible_parameter').addClass('active_bg');
		$('div.inner_product_info').css('display', 'none');
		$('div.product_detail_num').css('display', 'block');
	});
	$('.visible_info').click((event) => {
		event.preventDefault();
		$('.visible_parameter').removeClass('active_bg');
		$('.visible_info').addClass('active_bg');
		$('div.product_detail_num').css('display', 'none');
		$('div.inner_product_info').css('display', 'block');
	});

	$('#slider-range').slider({
		range: true,
		min: 1000000,
		max: 120000000,
		values: [1000000, 120000000],
		slide: function (event, ui) {
			$('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
			var min = ui.values[0];
			var max = ui.values[1];
			$.ajax( '../api/test.json' ,{
				type: 'get',
				data: { min: min, max: max },
				success: function (data, status, xhr) {
					$(".grid_item").remove();

					for(var i = 0; i < data.Result.Products.length; i++) {
						if(data.Result.Products[i].price >= min && data.Result.Products[i].price <= max ) {
							$(".grid_product").append(data.Result.Products[i].response);
						}
					}
					
				},
				error: (jqXhr, textStatus, errorMessage) => {},
			});
		},
	});
	$('#amount').val(
		'$' +
			$('#slider-range').slider('values', 0) +
			' - $' +
			$('#slider-range').slider('values', 1)
	);

	// Ajax
});

// CHECK FORM VALID

// if ($("form").valid() === true) {}
// console.log('Kết quả kiểm tra điều kiện là:' + ' ' + $(".block-send-mail form").valid());
