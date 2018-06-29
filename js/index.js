/*
* @Author: msi-pc
* @Date:   2018-06-13 17:16:20
* @Last Modified by:   msi-pc
* @Last Modified time: 2018-06-28 17:54:15
*/
$(function(){
	$(".meiti .box .xia .top .txa").mouseenter(function(){
		$(".meiti ul").css({"display":"none"});
		// 下面这句不懂
		let index=$(this).index() 
		$(".meiti .uibox ul").eq(index).css({"display":"block"})
		$(".meiti .box .xia .top .txa").removeClass('hot1');
		$(this).addClass('hot1')
	
	})
	console.log($(".meiti .box .xia .top .txa"));
})

