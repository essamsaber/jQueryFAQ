$(function(){
	var q = $('.q');
	q.on('click', function(){
		$(this).next().slideToggle().siblings('.a').slideUp();
	});
});