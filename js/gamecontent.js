$(function(){
	//主页面的背景图片切换
	var times = null;
	var n = 1;
	if (times) {
		clearInterval(times);
	}
	times = null;
	times = setInterval(function(){
		n++;
		if (n>3) {
			n=1;
		}
		switch (n){
			case 1:
				$(".img1").css("display","block");
				$(".img2").css("display","none");
				$(".img3").css("display","none");
				$(".imgs1").css("display","block");
				$(".imgs2").css("display","none");
				$(".imgs3").css("display","none");
				break;
			case 2:
				$(".img1").css("display","none");
				$(".img2").css("display","block");
				$(".img3").css("display","none");
				$(".imgs1").css("display","none");
				$(".imgs2").css("display","block");
				$(".imgs3").css("display","none");
				break;
			case 3:
				$(".img1").css("display","none");
				$(".img2").css("display","none");
				$(".img3").css("display","block");
				$(".imgs1").css("display","none");
				$(".imgs2").css("display","none");
				$(".imgs3").css("display","block");
				break;
		}
	},7000);	
	//选择器mouse事件更改背景图片
	var flag = true;
	var flag2 = true;
	var flag3 = true;
	$(".xuanimgipad").mousemove(function(){
		if (flag == true) {
			$(".xuanimgipad").css({
				"background-position-x":"-27px",
				"background-position-y":"-319px"
			});
			$(".xuanimgiphone").css({
				"background-position-x":"-125px",
				"background-position-y":"-18px"
			});
			$(".xuanimgandrid").css({
				"background-position-x":"-27px",
				"background-position-y":"-18px"
			});
			$(".xuanchu1").css("display","block");
			$(".xuanchu2").css("display","none");
			$(".xuanchu3").css("display","none");
			flag = false;
			flag2 = true;
			flag3 = true;
		}
	});
	$(".xuanimgiphone").mousemove(function(){
		if (flag2 == true) {
			$(".xuanimgipad").css({
				"background-position-x":"-27px",
				"background-position-y":"-217px"
			});
			$(".xuanimgiphone").css({
				"background-position-x":"-214px",
				"background-position-y":"-20px"
			});
			$(".xuanimgandrid").css({
				"background-position-x":"-27px",
				"background-position-y":"-18px"
			});
			$(".xuanchu1").css("display","none");
			$(".xuanchu2").css("display","block");
			$(".xuanchu3").css("display","none");
			flag = true;
			flag2 = false;
			flag3 = true;
		}
	});
	$(".xuanimgandrid").mousemove(function(){
		if (flag3 == true) {
			$(".xuanimgipad").css({
				"background-position-x":"-27px",
				"background-position-y":"-217px"
			});
			$(".xuanimgiphone").css({
				"background-position-x":"-125px",
				"background-position-y":"-18px"
			});
			$(".xuanimgandrid").css({
				"background-position-x":"-27px",
				"background-position-y":"-119px"
			});
			$(".xuanchu1").css("display","none");
			$(".xuanchu2").css("display","none");
			$(".xuanchu3").css("display","block");
			flag = true;
			flag2 = true;
			flag3 = false;
		}
	});
	//合作媒体点击事件 由于事件冒泡 所以做了阻止冒泡
	var meitizi = document.getElementsByClassName("meitizi")[0];
	var body = document.getElementsByTagName("body")[0];

	meitizi.addEventListener("click",function(ev){
		ev.stopPropagation();
		$(".meitineirong").css("display","block");
	},false);
	
	body.addEventListener("click",function(ev){
		ev.stopPropagation();
		$(".meitineirong").css("display","none");
	},false);
	//导航栏选择点击事件区域
	$(".navofficial").click(function(){
		window.location.href="content.html";
	});
	$(".navnew").click(function(){
		window.location.href="navnew.html";
	});
	$(".gamefeatures").click(function(){
		window.location.href="gamefeatures.html";
	});
});