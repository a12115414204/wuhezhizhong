$(function(){
	//游戏预加载
	var n =0;
	var m =0;
	var	bfb =0;
	var arrays = [
		"img/gamefeatures/Unknown-8.jpeg",
		"img/gamefeatures/Unknown-28.png",
		"img/gamefeatures/Unknown.png",
		"img/gamefeatures/Unknown-1.png",
		"img/gamefeatures/Unknown-3.png",
		"img/gamefeatures/Unknown-6.png",
		"img/gamefeatures/Unknown-8.png",
		"img/gamefeatures/Unknown-2.png",
		"img/gamefeatures/Unknown-5.png",
		"img/gamefeatures/Unknown.jpeg",
		"img/gamefeatures/Unknown-9.png",
		"img/gamefeatures/Unknown-10.png",
		"img/gamefeatures/Unknown-1.jpeg",
		"img/gamefeatures/Unknown-2.jpeg",
		"img/gamefeatures/Unknown-11.png",
		"img/gamefeatures/Unknown-13.png",
		"img/gamefeatures/Unknown-14.png",
		"img/gamefeatures/Unknown-7.png",
		"img/gamefeatures/Unknown-4.png",
		"img/gamefeatures/Unknown.gif",
		"img/gamefeatures/Unknown-1.gif",
		"img/gamefeatures/Unknown-3.gif",
		"img/gamefeatures/Unknown-12.png",
		"img/gamefeatures/Unknown-3.jpeg",
		"img/gamefeatures/Unknown-4.jpeg",
		"img/gamefeatures/Unknown-2.gif",
		"img/gamefeatures/Unknown-5.jpeg",
		"img/gamefeatures/Unknown-6.jpeg",
		"img/gamefeatures/Unknown-7.jpeg",
		"img/gamefeatures/Unknown-15.png",
		"img/gamefeatures/Unknown-16.png",
		"img/gamefeatures/Unknown-17.png",
		"img/gamefeatures/Unknown-17.jpeg",
		"img/gamefeatures/Unknown-19.png",
		"img/gamefeatures/Unknown-20.png",
		"img/gamefeatures/Unknown-21.png",
		"img/gamefeatures/Unknown-13.jpeg",
		"img/gamefeatures/Unknown-10.jpeg",
		"img/gamefeatures/Unknown-11.jpeg",
		"img/gamefeatures/Unknown-25.png",
		"img/gamefeatures/Unknown-26.png",
		"img/gamefeatures/Unknown-27.png",
		"img/gamefeatures/Unknown-4.gif",
		"img/gamefeatures/Unknown-8.jpeg",
		"img/gamefeatures/Unknown-29.png",
		"img/gamefeatures/Unknown-9.jpeg",
		"img/gamefeatures/Unknown-12.jpeg",
		"img/gamefeatures/Unknown-14.jpeg",
		"img/gamefeatures/Unknown-15.jpeg",
		"img/gamefeatures/Unknown-16.jpeg",
		"img/gamefeatures/Unknown-18.jpeg",
		"img/gamefeatures/Unknown-19.jpeg",
		"img/gamefeatures/Unknown-18.png",
		"img/gamefeatures/Unknown-22.png",
		"img/gamefeatures/Unknown-23.png",
		"img/gamefeatures/Unknown-24.png",
		"img/gamefeatures/Unknown-30.png",
		"img/gamefeatures/Unknown-31.png",
		"img/gamefeatures/Unknown-32.png",
		"img/gamefeatures/Unknown-33.png",
		"img/gamefeatures/Unknown-34.png",
		"img/gamefeatures/Unknown-35.png",
		"img/gamefeatures/Unknown-36.png",
		"img/gamefeatures/Unknown-37.png",
		"img/gamefeatures/Unknown-38.png",
		"img/gamefeatures/Unknown-39.png",
		"img/gamefeatures/Unknown-40.png",
		"img/gamefeatures/Unknown-41.png",
		"img/gamefeatures/Unknown-42.png",
		"img/gamefeatures/Unknown-43.png",
		"img/gamefeatures/Unknown-44.png",
		"img/gamefeatures/Unknown-45.png",
		"img/gamefeatures/Unknown-46.png",
		"img/gamefeatures/Unknown-47.png",
		"img/gamefeatures/Unknown-48.png"
	];
	for (var i = 0;i < arrays.length;i++){
		var img = new Image();
		img.onload = function(){
			n++;
			bfb = parseInt(n/75*100);
			$("#baifenbi").text(bfb+"%");
			if (bfb%2 ==0){
					$(".loading").css({
						"background-position-x":-277*m+"px",
						"background-position":-277*m+"px"
					});
					
				if (m >= 27) {
					m=27;
				}
				m++;
			}
			if (bfb == 100) {
				$(".loading").attr("id","loadings1");
				$(".loading").css({
					"background-position-x":-8033+"px",
					"background-position":-8033+"px"
				});
				setTimeout(function(){
					$(".gamefeatures").css("display","none");
					$(".gamevideo").css("z-index","2");
					$("#cg").get(0).play();
					$("#gameskip").css("display","block");
					$("#gameskip").click(function(){
						$(".gamevideo").attr("id","gamevideoNone");
						$(".gamecontent").css("display","block");
						$(".erweima").css("display","block");
						$(".country").css("display","block");
						$(".age").css("display","block");
						$(".nav").css("display","block");
						$("footer").css("display","block");
						$("#cg").get(0).pause();
						$("#gameskip").css("display","none");
						setTimeout(function(){
							$(".gamevideo").css("display","none");
						},500);
					});
					setTimeout(function(){
						$(".gamevideo").attr("id","gamevideoNone");
						$("#gameskip").css("display","none");
						$(".gamecontent").css("display","block");
						$(".gamecontent").fadeIn();
						$(".erweima").css("display","block");
						$(".country").css("display","block");
						$(".age").css("display","block");
						$(".nav").css("display","block");
						$("footer").css("display","block");
						setTimeout(function(){
							$(".gamevideo").css("display","none");
						},500);
					},16000);
				},4000);
			}
		}
		img.src = arrays[i];	
	}
	//二维码点击关闭事件
	$("#erweimanone").click(function(){
		$(".erweima").css("display","none");
	});
//=========================================================================
	//nav中鼠标略过事件 首页
	$(".nav1").hover(function(){
		$(".nav1 img").attr("src","img/gamefeatures/Unknown-44.png");
		$(".nav1 h2").addClass("bg");
	},function(){
		$(".nav1 img").attr("src","img/gamefeatures/Unknown-30.png");
		$(".nav1 h2").removeClass("bg");
	});
	//第二个
	$(".nav2").hover(function(){
		$(".nav2 img").attr("src","img/gamefeatures/Unknown-45.png");
		$(".nav2 h2").addClass("bg");
	},function(){
		$(".nav2 img").attr("src","img/gamefeatures/Unknown-31.png");
		$(".nav2 h2").removeClass("bg");
	});
	//第三个
	$(".nav3").hover(function(){
		$(".nav3 img").attr("src","img/gamefeatures/Unknown-46.png");
		$(".nav3 h2").addClass("bg");
	},function(){
		$(".nav3 img").attr("src","img/gamefeatures/Unknown-32.png");
		$(".nav3 h2").removeClass("bg");
	});
	//第四个
	$(".nav4").hover(function(){
		$(".nav4 img").attr("src","img/gamefeatures/Unknown-47.png");
		$(".nav4 h2").addClass("bg");
	},function(){
		$(".nav4 img").attr("src","img/gamefeatures/Unknown-33.png");
		$(".nav4 h2").removeClass("bg");
	});
//======================================================================================
	//首页进入四大模块点击事件,点击后将出现4大模块switer切换
	var nm =1;
	$(".nav1").click(function(){
		nm = 1;
		$(".gamecontent").attr("id","gameover");
		$(".erweima").css("display","block");
		$(".ganshoujizhi").attr("id","jizhi");
		$(".gsjzcenter").css("display","block");
		$(".gsjzcenter").attr("id","gsjzcenter_on");
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-44.png");
		$(".nav1s h2").css("color","rgb(233,211,150)");
		setTimeout(function(){
			$(".gamecontent").css("display","none");
			$("footer").css("display","block");
			$("#returnhomepage").css("display","block");
		},500);
	});
	//第二个模块
	$(".nav2").click(function(){
		nm = 2;
		$(".gamecontent").attr("id","gameover");
		$(".erweima").css("display","block");
		$(".ganshoujizhi").attr("id","jizhi");
		setTimeout(function(){
		$(".tszycenter").css("display","block");
		$(".tszycenter").attr("id","tszycenter_on");
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-45.png");
		$(".nav2s h2").css("color","rgb(233,211,150)");
			$(".gamecontent").css("display","none");
			$("footer").css("display","block");
			$("#returnhomepage").css("display","block");
		},500);
	});
	//第三个模块
	$(".nav3").click(function(){
		nm = 3 ;
		$(".gamecontent").attr("id","gameover");
		$(".erweima").css("display","block");
		$(".ganshoujizhi").attr("id","jizhi");
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-46.png");
		$(".nav3s h2").css("color","rgb(233,211,150)");
		setTimeout(function(){
			$(".gamecontent").css("display","none");
			$("footer").css("display","block");
			$(".jzrycenter").css("display","block");
			$(".jzrycenter").attr("id","jzrycenter_on");
			$("#returnhomepage").css("display","block");
		},500);
	});
	//第四个模块
	$(".nav4").click(function(){
		nm = 4;
		$(".gamecontent").attr("id","gameover");
		$(".erweima").css("display","block");
		$(".ganshoujizhi").attr("id","jizhi");
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-47.png");
		$(".nav4s h2").css("color","rgb(233,211,150)");
		setTimeout(function(){
			$(".gamecontent").css("display","none");
			$("footer").css("display","block");
			$(".xhwdcenter").css("display","block");
			$(".xhwdcenter").attr("id","xhwdcenter_on");
			$("#returnhomepage").css("display","block");
		},500);
	});
	//预约激活码
	$("#btn_order").click(function(){
		console.log('aaa');
		$(".gamecontent").attr("id","gameover");
		$(".ganshoujizhi").attr("id","jizhi");
		setTimeout(function(){
			$(".yyjhmcenter").css("display","block");
			$(".yyjhmcenter").attr("id","yyjhmcenter_on");
			$(".gamecontent").css("display","none");
			$("#returnhomepage").css("display","block");
		},500);
	});
	//===============================================================================
	//nav中鼠标略过事件 四大模块switer切换模块hover事件
	$(".nav1s").hover(function(){
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-44.png");
		$(".nav1s h2").css("color","rgb(233,211,150)");
	},function(){
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-30.png");
		$(".nav1s h2").css("color","white");
	});
	//第二个
	$(".nav2s").hover(function(){
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-45.png");
		$(".nav2s h2").css("color","rgb(233,211,150)");
	},function(){
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-31.png");
		$(".nav2s h2").css("color","white");
	});
	//第三个
	$(".nav3s").hover(function(){
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-46.png");
		$(".nav3s h2").css("color","rgb(233,211,150)");
	},function(){
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-32.png");
		$(".nav3s h2").css("color","white");
	});
	//第四个
	$(".nav4s").hover(function(){
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-47.png");
		$(".nav4s h2").css("color","rgb(233,211,150)");
	},function(){
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-33.png");
		$(".nav4s h2").css("color","white");
	});
	//====================================================================
	//点击头骨后事件
	$("#btn_logo").click(function(){
		$(".ganshoujizhi").attr("id","jizhi2");
		$(".gsjzcenter").attr("id","gsjzcenter_off");
		$(".tszycenter").attr("id","tszycenter_off");
		$(".jzrycenter").attr("id","jzrycenter_off");
		$(".xhwdcenter").attr("id","xhwdcenter_off");
		$(".yyjhmcenter").attr("id","yyjhmcenter_off");
		setTimeout(function(){
			$(".gsjzcenter").css("display","none");
			$(".tszycenter").css("display","none");
			$(".jzrycenter").css("display","none");
			$(".xhwdcenter").css("display","none");
			$(".yyjhmcenter").css("display","none");
			$(".gamecontent").css("display","block");
			$(".gamecontent").attr("id","gameover_on");
			$(".nav1s img").attr("src","img/gamefeatures/Unknown-30.png");
			$(".nav1s h2").css("color","white");
			$(".nav2s img").attr("src","img/gamefeatures/Unknown-31.png");
			$(".nav2s h2").css("color","white");
			$(".nav3s img").attr("src","img/gamefeatures/Unknown-32.png");
			$(".nav3s h2").css("color","white");
			$(".nav4s img").attr("src","img/gamefeatures/Unknown-33.png");
			$(".nav4s h2").css("color","white");
		},500);
	});
	//====================================================================
	//感受极致获取左右按钮div
	var ns =2;
	var lefts = $("#left");
	var rights = $("#right");
	var lis = $(".gsjzul li");
	//左边点击事件
	lefts.click(function(){
		ns--;
		if (ns < 0) {
			ns = 0;
			nm = 2;
			$(".gsjzcenter").attr("id","gsjzcenter_off");
			setTimeout(function(){
				$(".gsjzcenter").css("display","none");
				$(".tszycenter").css("display","block");
				$(".tszycenter").attr("id","tszycenter_on");
				liang2();
			},500);
			return;
		}
		for (var i=0;i < lis.length;i++) {
			var minleft=lis.eq(i).position().left;
			switch (minleft){
				case 0:
					lis.eq(i).css({
						"z-index":"1"
					});
					lis.eq(i).animate({
						"left": 340+"px",
						"opacity":"0.3"
					});
					break;
				case 85:
					lis.eq(i).css({
						"z-index":"1",	
					});
					lis.eq(i).animate({
						"opacity":"0.3",
						"left": minleft - 85 +"px"
					});
					break;
				case 170:
					lis.eq(i).css({
						"z-index":"2",	
					});
					lis.eq(i).animate({
						"opacity":"0.5",
						"left": minleft - 85 +"px"
					});
					break;
				case 255:
					lis.eq(i).css({
						"z-index":"3",
					});
					lis.eq(i).animate({
						"opacity":"1",
						"left": minleft - 85 +"px"
					});
					break;
				case 340:
					lis.eq(i).css({
						"opacity":"0.5",
					});
					lis.eq(i).animate({
						"z-index":"2",
						"left": minleft - 85 +"px"
					});
					break;
			}
		}		
	});
	//右边点击事件
	rights.click(function(){
		ns++;
		if (ns > 4) {
			ns =4;
			nm = 4;
			$(".gsjzcenter").attr("id","gsjzcenter_off");
			setTimeout(function(){
				$(".gsjzcenter").css("display","none");
				$(".xhwdcenter").css("display","block");
				$(".xhwdcenter").attr("id","xhwdcenter_on");
				liang4();
			},500);
			return;
		}
		for (var i=0;i < lis.length;i++) {
			var minright=lis.eq(i).position().left;
			switch (minright){
				case 0:
					lis.eq(i).css({
						"opacity":"0.5",
					});
					lis.eq(i).animate({
						"z-index":"2",
						"left": minright + 85 +"px"
					});
				break;
				case 85:
					lis.eq(i).css({
						"z-index":"3",	
					});
					lis.eq(i).animate({
						"opacity":"1",
						"left": minright + 85 +"px"
					});
					break;
				case 170:
					lis.eq(i).css({
						"z-index":"2",	
					});
					lis.eq(i).animate({
						"opacity":"0.5",
						"left": minright + 85 +"px"
					});
					break;
				case 255:
					lis.eq(i).css({
						"z-index":"1",
					});
					lis.eq(i).animate({
						"opacity":"0.3",
						"left": minright + 85 +"px"
					});
					break;
				case 340:
					lis.eq(i).css({
						"z-index":"1"
					});
					lis.eq(i).animate({
						"left": 0+"px",
						"opacity":"0.3"
					});
					break;
			}
		}		
	});
	//====================================================================
	//四大栏目logo点击切换并关联左右按钮
	$(".nav1s").click(function(){
		nm = 1;
		$(".tszycenter").attr("id","tszycenter_off");
		$(".jzrycenter").attr("id","jzrycenter_off");
		$(".xhwdcenter").attr("id",'xhwdcenter_off');
		setTimeout(function(){
			$(".gsjzcenter").css("display","block");
			$(".gsjzcenter").attr("id","gsjzcenter_on");
			$(".tszycenter").css("display","none");
			$(".jzrycenter").css("display","none");
			$(".xhwdcenter").css("display","none");
			liang1();
		},500);
	});
	$(".nav2s").click(function(){
		nm = 2;
		$(".gsjzcenter").attr("id","gsjzcenter_off");
		$(".jzrycenter").attr("id","jzrycenter_off");
		$(".xhwdcenter").attr("id",'xhwdcenter_off');
		setTimeout(function(){
			$(".tszycenter").css("display","block");
			$(".tszycenter").attr("id","tszycenter_on");
			$(".gsjzcenter").css("display","none");
			$(".jzrycenter").css("display","none");
			$(".xhwdcenter").css("display","none");
			liang2();
		},500);
	});
	$(".nav3s").click(function(){
		nm = 3;
		$(".gsjzcenter").attr("id","gsjzcenter_off");
		$(".tszycenter").attr("id","tszycenter_off");
		$(".xhwdcenter").attr("id",'xhwdcenter_off');
		setTimeout(function(){
			$(".gsjzcenter").css("display","none");
			$(".tszycenter").css("display","none");
			$(".xhwdcenter").css("display","none");
			$(".jzrycenter").css("display","block");
			$(".jzrycenter").attr("id","jzrycenter_on");
			liang3();
		},500);
	});
	$(".nav4s").click(function(){
		nm = 4;
		$(".tszycenter").attr("id","tszycenter_off");
		$(".jzrycenter").attr("id","jzrycenter_off");
		$(".gsjzcenter").attr("id","gsjzcenter_off");
		setTimeout(function(){
		$(".tszycenter").css("display","none");
		$(".jzrycenter").css("display","none");
		$(".gsjzcenter").css("display","none");
		$(".xhwdcenter").css("display","block");
		$(".xhwdcenter").attr("id","xhwdcenter_on");
		liang4();
		},500);
		
	});
	//=========================================================================
	//天生卓越四个a标签背景图片自动切换
	var tszynumber = 1;
	var times = null;
	if (times) {
		clearInterval(times);
		times =null;
	}
	times = setInterval(function(){
		switch (tszynumber){
			case 1:
				tszynumber++;
				$("#game1_img2").css("display","block");
				$("#game4_img2").css("display","none");
				break;
			case 2:
				tszynumber++;
				$("#game1_img2").css("display","none");
				$("#game2_img2").css("display","block");
				break;
			case 3:
				tszynumber++;
				$("#game2_img2").css("display","none");
				$("#game3_img2").css("display","block");
				break;
			case 4:
				tszynumber =1;
				$("#game3_img2").css("display","none");
				$("#game4_img2").css("display","block");
				break;
		}
	},3000);
	//=========================================================================
	//天生卓越四个a标签点击事件
	$("#game_game1").click(function(){
		$(".videoBox1").css("display","block");
		$("#videoBox1_off").click(function(){
			$(".videoBox1 video").get(0).pause();
			$(".videoBox1").css("display","none");
		});
	});
	$("#game_game2").click(function(){
		$(".videoBox2").css("display","block");
		$("#videoBox2_off").click(function(){
			$(".videoBox2s video").get(0).pause();
			$(".videoBox2").css("display","none");
		});
	});
	$("#game_game3").click(function(){
		$(".videoBox3").css("display","block");
		$(".videoBox3s a").click(function(){
			$(".videoBox3s video").get(0).pause();
			$(".videoBox3").css("display","none");
		});
	});
	$("#game_game4").click(function(){
		$(".videoBox4").css("display","block");
		$(".videoBox4s a").click(function(){
			$(".videoBox4s video").get(0).pause();
			$(".videoBox4").css("display","none");
		});
	});
	//=========================================================================
	//天生卓越左右按钮添加点击事件
	var tszyleft = $("#tszyleft");
	var tszyright = $("#tszyright");
	tszyleft.click(function(){
		nm = 3;
		$(".tszycenter").attr("id","tszycenter_off");
		setTimeout(function(){
			$(".tszycenter").css("display","none");
			$(".jzrycenter").css("display","block");
			$(".jzrycenter").attr("id","jzrycenter_on");
			liang3();
		},500);
	});
	tszyright.click(function(){
		nm = 1;	
		$(".tszycenter").attr("id","tszycenter_off");
		setTimeout(function(){
			$(".tszycenter").css("display","none");
			$(".gsjzcenter").css("display","block");
			$(".gsjzcenter").attr("id","gsjzcenter_on");
			liang1();
		},500);
	});
	//=========================================================================
	//见证荣耀左右按钮点击事件
	var jzryleft =$("#jzryleft");
	var jzryright = $("#jzryright");
	jzryleft.click(function(){
		nm = 4;
		$(".jzrycenter").attr("id","jzrycenter_off");
		setTimeout(function(){
			$(".jzrycenter").css("display","none");
			$(".xhwdcenter").css("display","block");
			$(".xhwdcenter").attr("id","xhwdcenter_on");
			liang4();
		},500);
	});
	jzryright.click(function(){
		nm = 2;
		$(".jzrycenter").attr("id","jzrycenter_off");
		setTimeout(function(){
			$(".jzrycenter").css("display","none");
			$(".tszycenter").css("display","block");
			$(".tszycenter").attr("id","tszycenter_on");
			liang2();
		},500);
	});
	//=========================================================================
	//见证荣耀里面的a标签事件 进行大屏幕切换
	var jzryswiteras = $(".jzry a");
	var jzryswiterlis =$(".jzryswiterul li");
	for (var i=0;i <jzryswiteras.length;i++) {
		jzryswiteras.eq(i).click(function(){
			switch ($(this).attr("id")){
				case "jzry_a1":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli1").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom1").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a2":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli2").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom2").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a3":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli3").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom3").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a4":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli4").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom4").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a5":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli5").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom5").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a6":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli6").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom6").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a7":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli7").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom7").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a8":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli8").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom8").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzry_a9":
				jzryswiter_on();
				lis_off();
				$("#jzryswiterli9").css("display","block");
				jzryswiterbtnbg();
				$("#jzryswiter_bottom9").css("background-color","rgba(255,255,255,1)");
					break;
			}
		});
	}
	//----------------------------------------------
	//关闭事件
	$("#jzryswiteroff").click(function(){
		lis_off();
		jzryswiter_off();
	});
	//----------------------------------------------
	//见证荣耀屏幕左右按钮切换事件  左按钮
	$("#jzryswiterleft").click(function(){
		for (var i = 1; i < jzryswiterlis.length+1;i++) {
			if ($("#jzryswiterli"+i).css("display") == "block") {
				if (i == 1) {
					$("#jzryswiterli1").css("display","none");
					$("#jzryswiterli9").css("display","block");
					jzryswiterbtnbg();
					$("#jzryswiter_bottom9").css("background-color","rgba(255,255,255,1)");
				}else{
					var jzryleftbtn = i-1;
					$("#jzryswiterli"+i).css("display","none");
					$("#jzryswiterli"+jzryleftbtn).css("display","block");
					jzryswiterbtnbg();
					$("#jzryswiter_bottom"+jzryleftbtn).css("background-color","rgba(255,255,255,1)");
				}
			}
		}
	});
	//右按钮
	$("#jzryswiterright").click(function(){
		for (var i = 1; i < jzryswiterlis.length+1;i++) {
			if ($("#jzryswiterli"+i).css("display") == "block") {
				if ($("#jzryswiterli9").css("display") == "block") {
					$("#jzryswiterli9").css("display","none");
					$("#jzryswiterli1").css("display","block");
					jzryswiterbtnbg();
					$("#jzryswiter_bottom1").css("background-color","rgba(255,255,255,1)");
				}else{
					var jzryleftbtn = i+1;
					$("#jzryswiterli"+i).css("display","none");
					$("#jzryswiterli"+jzryleftbtn).css("display","block");
					jzryswiterbtnbg();
					$("#jzryswiter_bottom"+jzryleftbtn).css("background-color","rgba(255,255,255,1)");
					return;
				}
			}
		}
	});
	//----------------------------------------------
	//屏幕切换分页器事件
	var jzryswiterbtns = $(".jzryswiter_bottom a");
	for (var i = 0; i < jzryswiterbtns.length;i++) {
		jzryswiterbtns.eq(i).click(function(){
			switch ($(this).attr("id")){
				case "jzryswiter_bottom1":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli1").css("display","block");
				$("#jzryswiter_bottom1").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom2":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli2").css("display","block");
				$("#jzryswiter_bottom2").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom3":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli3").css("display","block");
				$("#jzryswiter_bottom3").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom4":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli4").css("display","block");
				$("#jzryswiter_bottom4").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom5":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli5").css("display","block");
				$("#jzryswiter_bottom5").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom6":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli6").css("display","block");
				$("#jzryswiter_bottom6").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom7":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli7").css("display","block");
				$("#jzryswiter_bottom7").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom8":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli8").css("display","block");
				$("#jzryswiter_bottom8").css("background-color","rgba(255,255,255,1)");
					break;
				case "jzryswiter_bottom9":
				lis_off();
				jzryswiterbtnbg();
				$("#jzryswiterli9").css("display","block");
				$("#jzryswiter_bottom9").css("background-color","rgba(255,255,255,1)");
					break;
			}
		});
	}
	//----------------------------------------------
	//==================================================================================
	//邂逅伟大01-06的点击事件
	var xhwd_a = $(".xhwdbtn a");
	var xhwd_index = 1;
	var xhwd_flag1 = true;
	var xhwd_flag2 = true;
	var xhwd_flag3 = true;
	var xhwd_flag4 = true;
	var xhwd_flag5 = true;
	var xhwd_flag6 = true;
	//显示点击次数
	var xhwd_for = function(){
		xhwd_flag1 = true;
		xhwd_flag2 = true;
		xhwd_flag3 = true;
		xhwd_flag4 = true;
		xhwd_flag5 = true;
		xhwd_flag6 = true;
	};
	//隐藏框i元素函数
	var xhwd_i = function(){
		$(".xhwdbtn a i").css("display","none");	
	};
	for (var i =0;i < xhwd_a.length;i++) {
		xhwd_a.eq(i).click(function(){
			switch ($(this).attr("class")){
				case "xhwdbtn_a1":
					if (xhwd_index == 1 || xhwd_flag1 == false) {
						return;
					}else{
						xhwd_for();
						xhwd_flag1 = false;
						$(".xhwdli1").css("display","block");
						$(".res_1").attr("id","res_1_on");
						$(".res_2").attr("id","res_2_on");
						$(".xhwdbtn_a1").attr("id","xhwdbtn_on");
						xhwd_i();
						$("#xhwd_i1").css("display","block");
						if (xhwd_index == 4) {
							$(".res4_1").attr("id","res4_1_off");
							$(".res4_2").attr("id","res4_2_off");
							$(".res4_3").attr("id","res4_3_off");
							$(".res4_4").attr("id","res4_4_off");
						}else if (xhwd_index == 5) {
							$(".res5_1").attr("id","res5_1_off");
							$(".res5_2").attr("id","res5_2_off");
						}else{
							$(".res"+xhwd_index).attr("id","res"+xhwd_index+"_off");
						}
						$(".xhwdbtn_a"+xhwd_index).removeAttr("id");
						setTimeout(function(){
							$(".xhwdul .xhwdli"+xhwd_index).css("display","none");	
							xhwd_index = 1;
						},500);
					}
				break;
				case "xhwdbtn_a2":
					if (xhwd_index == 2 || xhwd_flag2 == false) {
						return;
					}else{
						xhwd_for();
						xhwd_flag2 = false;
						$(".xhwdli2").css("display","block");
						$(".res2").attr("id","res2_on");
						$(".xhwdbtn_a2").attr("id","xhwdbtn_on");
						xhwd_i();
						$("#xhwd_i2").css("display","block");
						if (xhwd_index == 4) {
							$(".res4_1").attr("id","res4_1_off");
							$(".res4_2").attr("id","res4_2_off");
							$(".res4_3").attr("id","res4_3_off");
							$(".res4_4").attr("id","res4_4_off");
						}else if (xhwd_index == 5) {
							$(".res5_1").attr("id","res5_1_off");
							$(".res5_2").attr("id","res5_2_off");
						}else if (xhwd_index == 1) {
							$(".res_1").attr("id","res_1_off");
							$(".res_2").attr("id","res_1_off");
						}else{
							$(".res"+xhwd_index).attr("id","res"+xhwd_index+"_off");
						}
						$(".xhwdbtn_a"+xhwd_index).removeAttr("id");
						setTimeout(function(){
							$(".xhwdul .xhwdli"+xhwd_index).css("display","none");
							xhwd_index = 2;
						},500);
					}
					break;
				case "xhwdbtn_a3":
				if (xhwd_index == 3 || xhwd_flag3 == false) {
						return;
					}else{
						xhwd_for();
						xhwd_flag3 = false;
						$(".xhwdli3").css("display","block");
						$(".res3").attr("id","res3_on");
						$(".xhwdbtn_a3").attr("id","xhwdbtn_on");
						xhwd_i();
						$("#xhwd_i3").css("display","block");
						if (xhwd_index == 4) {
							$(".res4_1").attr("id","res4_1_off");
							$(".res4_2").attr("id","res4_2_off");
							$(".res4_3").attr("id","res4_3_off");
							$(".res4_4").attr("id","res4_4_off");
						}else if (xhwd_index == 5) {
							$(".res5_1").attr("id","res5_1_off");
							$(".res5_2").attr("id","res5_2_off");
						}else if (xhwd_index == 1) {
							$(".res_1").attr("id","res_1_off");
							$(".res_2").attr("id","res_1_off");
						}else{
							$(".res"+xhwd_index).attr("id","res"+xhwd_index+"_off");
						}
						$(".xhwdbtn_a"+xhwd_index).removeAttr("id");
						setTimeout(function(){
							$(".xhwdul .xhwdli"+xhwd_index).css("display","none");
							xhwd_index = 3;
						},500);
					}
					break;
				case "xhwdbtn_a4":
				if (xhwd_index == 4 || xhwd_flag4 == false) {
						return;
					}else{
						xhwd_for();
						xhwd_flag4 = false;
						$(".xhwdli4").css("display","block");
						$(".res4_1").attr("id","res4_1_on");
						$(".res4_2").attr("id","res4_2_on");
						$(".res4_3").attr("id","res4_3_on");
						$(".res4_4").attr("id","res4_4_on");
						$(".xhwdbtn_a4").attr("id","xhwdbtn_on");
						xhwd_i();
						$("#xhwd_i4").css("display","block");
						if (xhwd_index == 5) {
							$(".res5_1").attr("id","res5_1_off");
							$(".res5_2").attr("id","res5_2_off");
						}else if (xhwd_index == 1) {
							$(".res_1").attr("id","res_1_off");
							$(".res_2").attr("id","res_1_off");
						}else{
							$(".res"+xhwd_index).attr("id","res"+xhwd_index+"_off");
						}
						$(".xhwdbtn_a"+xhwd_index).removeAttr("id");
						setTimeout(function(){
							$(".xhwdul .xhwdli"+xhwd_index).css("display","none");
							xhwd_index = 4;
						},500);
					}
					break;
				case "xhwdbtn_a5":
					if (xhwd_index == 5 || xhwd_flag5 == false) {
						return;
					}else{
						xhwd_for();
						xhwd_flag5 = false;
						$(".xhwdli5").css("display","block");
						$(".res5_1").attr("id","res5_1_on");
						$(".res5_2").attr("id","res5_2_on");
						$(".xhwdbtn_a5").attr("id","xhwdbtn_on");
						xhwd_i();
						$("#xhwd_i5").css("display","block");
						if (xhwd_index == 4) {
							$(".res4_1").attr("id","res4_1_off");
							$(".res4_2").attr("id","res4_2_off");
							$(".res4_3").attr("id","res4_3_off");
							$(".res4_4").attr("id","res4_4_off");
						}else if (xhwd_index == 1) {
							$(".res_1").attr("id","res_1_off");
							$(".res_2").attr("id","res_1_off");
						}else{
							$(".res"+xhwd_index).attr("id","res"+xhwd_index+"_off");
						}
						$(".xhwdbtn_a"+xhwd_index).removeAttr("id");
						setTimeout(function(){
							$(".xhwdul .xhwdli"+xhwd_index).css("display","none");
							xhwd_index = 5;
						},500);
					}
					break;
				case "xhwdbtn_a6":
					if (xhwd_flag6 == false){
						xhwd_flag6 = true;
						$(".xhwdbtn a").removeAttr("id");
						$(".xhwdbtn span").removeAttr("id");
						$(".res6").attr("id","res6_off");
						$(".xhwdli1").css("display","block");
						$(".res_1").attr("id","res_1_on");
						$(".res_2").attr("id","res_2_on");
						$(".xhwdbtn_a1").attr("id","xhwdbtn_on");
						$("#xhwd_i1").css("display","block");
						setTimeout(function(){
							$(".xhwdul .xhwdli6").css("display","none");
							xhwd_index = 1;
						},500);
						return;
					}else{
						xhwd_for();
						xhwd_flag6 = false;
						xhwd_i();
						$(".xhwdli6").css("display","block");
						$(".res6").attr("id","res6_on");
						$(".xhwdbtn a").attr("id","xhwdbtn_off");
						$(".xhwdbtn_a6").removeAttr("id");
						$(".xhwdbtn span").attr("id","xhwdbtn_offspan");
						if (xhwd_index == 4) {
							$(".res4_1").attr("id","res4_1_off");
							$(".res4_2").attr("id","res4_2_off");
							$(".res4_3").attr("id","res4_3_off");
							$(".res4_4").attr("id","res4_4_off");
						}else if (xhwd_index == 5) {
							$(".res5_1").attr("id","res5_1_off");
							$(".res5_2").attr("id","res5_2_off");
						}else if (xhwd_index == 1) {
							$(".res_1").attr("id","res_1_off");
							$(".res_2").attr("id","res_1_off");
						}else{
							$(".res"+xhwd_index).attr("id","res"+xhwd_index+"_off");
						}
						setTimeout(function(){
							$(".xhwdul .xhwdli"+xhwd_index).css("display","none");
							xhwd_index = 1;
						},500);
					}
					break;
			}
		});
	}
	//----------------------------------------------
	//邂逅伟大的左右按钮事件
		$("#xhwdleft").click(function(){
			nm = 1;
			$(".xhwdcenter").attr("id","xhwdcenter_off");
			setTimeout(function(){
				$(".xhwdcenter").css("display","none");
				$(".gsjzcenter").css("display","block");
				$(".gsjzcenter").attr("id","gsjzcenter_on");
				liang1();
			},500);
		});
		$("#xhwdright").click(function(){
			nm = 3;
			$(".xhwdcenter").attr("id","xhwdcenter_off");
			setTimeout(function(){
				$(".xhwdcenter").css("display","none");
				$(".jzrycenter").css("display","block");
				$(".jzrycenter").attr("id","jzrycenter_on");
				liang3();
			},500);
		});
	//----------------------------------------------------
	//预约激活码点击事件
	$("#res6_btn").click(function(){
		$(".xhwdcenter").attr("id","xhwdcenter_off");
		setTimeout(function(){
			$(".xhwdcenter").css("display","none");
			$(".yyjhmcenter").css("display","block");
			$(".yyjhmcenter").attr("id","yyjhmcenter_on");
		},500);
	});
	//返回主页事件
	$("#returnhomepage").click(function(){
		$(".ganshoujizhi").attr("id","jizhi2");
		$(".gsjzcenter").attr("id","gsjzcenter_off");
		$(".tszycenter").attr("id","tszycenter_off");
		$(".jzrycenter").attr("id","jzrycenter_off");
		$(".xhwdcenter").attr("id","xhwdcenter_off");
		$(".yyjhmcenter").attr("id","yyjhmcenter_off");
		$("#returnhomepage").css("display","none");
		setTimeout(function(){
			$(".gsjzcenter").css("display","none");
			$(".tszycenter").css("display","none");
			$(".jzrycenter").css("display","none");
			$(".xhwdcenter").css("display","none");
			$(".yyjhmcenter").css("display","none");
			$(".gamecontent").css("display","block");
			$(".gamecontent").attr("id","gameover_on");
			$(".nav1s img").attr("src","img/gamefeatures/Unknown-30.png");
			$(".nav1s h2").css("color","white");
			$(".nav2s img").attr("src","img/gamefeatures/Unknown-31.png");
			$(".nav2s h2").css("color","white");
			$(".nav3s img").attr("src","img/gamefeatures/Unknown-32.png");
			$(".nav3s h2").css("color","white");
			$(".nav4s img").attr("src","img/gamefeatures/Unknown-33.png");
			$(".nav4s h2").css("color","white");
		},500);
	});
	//----------------------------------------------
	//lis全部none函数
	var lis_off = function(){
		for (var i = 0; i < jzryswiterlis.length;i++) {
			jzryswiterlis.eq(i).css("display","none");
		}
	}
	//分页器的背景颜色函数
	var jzryswiterbtnbg = function(){
		for (var i =0; i < jzryswiterbtns.length; i++) {
			jzryswiterbtns.eq(i).css("background-color","rgba(255,255,255,0)");
		}
	};
	//判断点击后switer出现层次和判断
	var jzryswiter_on = function(){
		if ($(".jzryswiter").attr("id") == "jzryswiter_on") {
			return;
		}else{
			$(".jzryswiter").css("display","block");
			$(".jzryswiter").attr("id","jzryswiter_on");
		}
	};
	//关闭switer
	var jzryswiter_off = function(){
		$(".jzryswiter").attr("id","jzryswiter_off");
		setTimeout(function(){
			$(".jzryswiter").css("display","none");
		},500);
	};
	//=========================================================================
	//导航栏闪亮切换函数
	var liang1 = function(){
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-44.png");
		$(".nav1s h2").css("color","rgb(233,211,150)");
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-31.png");
		$(".nav2s h2").css("color","white");
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-32.png");
		$(".nav3s h2").css("color","white");
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-33.png");
		$(".nav4s h2").css("color","white");
	}
	var liang2 = function(){
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-30.png");
		$(".nav1s h2").css("color","white");
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-45.png");
		$(".nav2s h2").css("color","rgb(233,211,150)");
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-32.png");
		$(".nav3s h2").css("color","white");
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-33.png");
		$(".nav4s h2").css("color","white");
	}
	var liang3 = function(){
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-30.png");
		$(".nav1s h2").css("color","white");
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-31.png");
		$(".nav2s h2").css("color","white");
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-46.png");
		$(".nav3s h2").css("color","rgb(233,211,150)");
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-33.png");
		$(".nav4s h2").css("color","white");
	}
	var liang4 = function(){
		$(".nav1s img").attr("src","img/gamefeatures/Unknown-30.png");
		$(".nav1s h2").css("color","white");
		$(".nav2s img").attr("src","img/gamefeatures/Unknown-31.png");
		$(".nav2s h2").css("color","white");
		$(".nav3s img").attr("src","img/gamefeatures/Unknown-32.png");
		$(".nav3s h2").css("color","white");
		$(".nav4s img").attr("src","img/gamefeatures/Unknown-47.png");
		$(".nav4s h2").css("color","rgb(233,211,150)");
	}
	//=====================================================================
	//内容中四大模块导航栏背景颜色的判断.
	$(".nav1s").mouseout(function(){
		if (nm == 1) {
			$(".nav1s img").attr("src","img/gamefeatures/Unknown-44.png");
			$(".nav1s h2").css("color","rgb(233,211,150)");
		}
	});
	$(".nav2s").mouseout(function(){
		if (nm == 2) {
			$(".nav2s img").attr("src","img/gamefeatures/Unknown-45.png");
			$(".nav2s h2").css("color","rgb(233,211,150)");
		}
	});
	$(".nav3s").mouseout(function(){
		if (nm == 3) {
			$(".nav3s img").attr("src","img/gamefeatures/Unknown-46.png");
			$(".nav3s h2").css("color","rgb(233,211,150)");
		}
	});
	$(".nav4s").mouseout(function(){
		if (nm == 4) {
			$(".nav4s img").attr("src","img/gamefeatures/Unknown-47.png");
			$(".nav4s h2").css("color","rgb(233,211,150)");
		}
	});
	//====================================================================
	//预约激活码页面事件
	$("#yyjhm_a1").click(function(){
		$("#yyjhm_a1 span").css("background-color","#e7d397");
		$("#yyjhm_a2 span").css("background-color","#000000");
	});
	$("#yyjhm_a2").click(function(){
		$("#yyjhm_a2 span").css("background-color","#e7d397");
		$("#yyjhm_a1 span").css("background-color","#000000");
	});
	//点击提交信息
	$("#yyjhmbtn_submit").click(function(){
		var zhengze =  /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/;
		var phone = $("#yyjhm_phone").val();
		if (zhengze.test(phone)) {
			alert("恭喜,您的信息已记录成功");
		}else{
			$("#yyjhm_phone").val(null);
			alert("抱歉,您的手机号码格式不正确,请重新输入");
		}
	});
});