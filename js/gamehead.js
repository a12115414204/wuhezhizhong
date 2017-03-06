$(function(){
	//延迟动画 logo
	setTimeout(function(){
		$(".gameiconlove").attr("id","gamelovedong");
		setTimeout(function(){
			$(".gamebtn").attr("id","gamebtns");
			setTimeout(function(){
				$(".gameleft").attr("id","gamelbtn");
				$(".gameright").attr("id","gamerbtn");
				//给左边按钮添加点击事件
				$(".gameleft").click(function(){
					switch ($(".gameleft b a").text()){
						case "更 多 信 息":
								$(".gamebtnleft").attr("id","gamebtnleftsr");
								$(".gameleft").css("opacity","0");
								$(".gameright b a").text("H O M E");
								$(".gameicon").attr("id","gameiconright");
								$(".gameiconlove").attr("id","gameiconloveright");
								$(".gamebtn").attr("id","gamebtnright");
							break;
						case "H O M E":
								$(".gamebtnright").attr("id","gamebtnrightcentents");
								$(".gameright").css("opacity","1");
								$(".gameleft b a").text("更 多 信 息");
								$(".gameicon").attr("id","gameiconcontents");
								$(".gameiconlove").attr("id","gameiconlovecentents");
								$(".gamebtn").attr("id","gamebtnleftcentents");
							break;
					}
				});
				//给右边按钮添加点击事件
				$(".gameright").click(function(){
					switch ($(".gameright b a").text()){
						case "联 系 我 们":
								$(".gamebtnright").attr("id","gameburights");
								$(".gameright").css("opacity","0");
								$(".gameleft b a").text("H O M E");
								$(".gameicon").attr("id","gameiconleft");
								$(".gameiconlove").attr("id","gameiconloveleft");
								$(".gamebtn").attr("id","gamebtnleft");
							break;
						case "H O M E":
								$(".gamebtnleft").attr("id","gamebtncentent");
								$(".gameleft").css("opacity","1");
								$(".gameright b a").text("联 系 我 们");
								$(".gameicon").attr("id","gameiconcontent");
								$(".gameiconlove").attr("id","gameiconlovecentent");
								$(".gamebtn").attr("id","gamebtnrightcentent");
							break;
					}
				});
			},1000);
		},1000);
	},1000);
	//留言板的点击事件出现
	$(".Leave-a-message").click(function(){
		$(".gamebtnright").attr("id","gamebtnright1");
		$(".gamebtndown").attr("id","gamebtndowns1");
		$(".gameleft").css("z-index","-2");
		$(".gameright").css("z-index","-2");
	});
	$(".gamebtnreturn").click(function(){
		$(".gamebtnright").attr("id","gamebtnright2");
		$(".gamebtndown").attr("id","gamebtndowns");
		$(".gameleft").css("z-index","5");
		$(".gameright").css("z-index","5");
	});
	//留言板的输入焦点事件
	//名字
	$("#name").focus(function(){
		$(".nameleft").attr("id","nameleft1");
		$("#name").attr("id","name1");
	});
	$("#name").blur(function(){
		$(".nameleft").attr("id","nameleft2");
		$("#name1").attr("id","name");
	});
	//邮箱
	$("#emaills").focus(function(){
		$(".emaillleft").attr("id","emaillleft1");
		$("#emaills").attr("id","emaill1");
	});
	$("#emaills").blur(function(){
		$(".emaillleft").attr("id","emaillleft2");
		$("#emaill1").attr("id","emaills");
	});
	//内容
	$("#contents").focus(function(){
		$(".contentleft").attr("id","contentleft1");
		$("#contents").attr("id","contents1");
	});
	$("#contents").blur(function(){
		$(".contentleft").attr("id","contentleft2");
		$("#contents1").attr("id","contents");
	});
	//留言板输入栏限制
	var zhengze = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/g;
	var zhengze2 = /^\s+$/g;
	var contentval;
	var	nameval;
	var	emaillval;
	//名字
	$("#name").blur(function(){
		nameval=$("#name").val();
		if (zhengze2.test(nameval)|| nameval.length == 0) {
			$(".nameleft").css("color","red");
		}else{
			$(".nameleft").css("color","black");
		}
	});
	//邮箱
	$("#emaills").blur(function(){
		emaillval = $("#emaills").val();
		if (zhengze.test(emaillval) == true) {
			$(".emaillleft").css("color","black");
		}else{
			$(".emaillleft").css("color","red");
		}
	});
	//内容
	$("#contents").blur(function(){
		 contentval = $("#contents").val();
		if (zhengze2.test(contentval)|| contentval.length == 0) {
			$(".contentleft").css("color","red");
		}else{
			$(".contentleft").css("color","black");
		}
	});
	//保存按钮
	$(".gamebtndown_btn").click(function(){
		if (zhengze2.test(nameval)|| nameval.length == 0 || zhengze.test(emaillval) == false || zhengze2.test(contentval)|| contentval.length == 0) {
			alert("输入错误");
		}else{
			$(".shuchu").attr("id","shuchus");
			$("#contents").val("");
			$("#emaills").val("");
			$("#name").val("");
		}
	});
	//点击事件跳转到主页面.
	$(".gamebtn").click(function(){
		window.location.href="content.html";
	});
});