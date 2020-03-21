let offer = $('.offer');
let offerTop = offer.offset().top;
$(window).bind('scroll', function(){
	let windowTop = $(this).scrollTop;
	if(windowTop > offerTop){
		$('.map-block').html('<script async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A8b2ababc30c4c427f0b36e7042bace02dde37cf54f00d5660db7c5cb621bdcac&amp;width=100%25&amp;height=550&amp;lang=uk_UA&amp;scroll=false"></script>')
		alert("dsfsdfsdfsdf")
		$(window).unbind('scroll')
	}
});