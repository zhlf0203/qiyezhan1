/*
* @Author: msi-pc
* @Date:   2018-06-28 17:58:50
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-28 18:11:40
*/
$(function(){
	$(".meiti .box .xia .top .txa").mouseenter(function(){
		$(".uibox").css({"display":"none"});
		// 下面这句不懂
		let index=$(this).index() 
		$(".meiti .uibox").eq(index).css({"display":"block"})
		$(".meiti .box .xia .top .txa").removeClass('hot1');
		$(this).addClass('hot1')
	
	})
	console.log($(".meiti .uibox"));
})