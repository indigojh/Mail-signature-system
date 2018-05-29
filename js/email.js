/**
 * @fileoverview
 * - this project relies on server.
 * 
 * @author indigojh
 * @see <a href="https://github.com/indigojh/" target="_blank">https://github.com/indigojh/Email</a>
 */
$(document).ready(function() {
	//禁止自动滚动
    $('#myCarousel').carousel({pause: true,interval: false}); 	
	//圆角
	$(".photo-size a").bind("click",function(){
		if($(this).hasClass("radius")){
			$(this).addClass("active").siblings().removeClass("active");		
			$(".photos img").css("border-radius","4px");
			return;
		}else if($(this).hasClass("square")){
			$(this).addClass("active").siblings().removeClass("active");			
			$(".photos img").css("border-radius","0px");
			return;
		}else if($(this).hasClass("buns")){
			$(this).addClass("active").siblings().removeClass("active");		
			$(".photos img").css("border-radius","50%");
			return;
		}
	});
	
	//icon大小
	$(".icon-size a").bind("click",function(){
		if($(this).hasClass("s")){
			$(this).addClass("active").siblings().removeClass("active");
			$(".otherico a").css({"width":"12px","height":"12px"});	
			$(".otherico a img").css({"width":"12px","height":"12px"});			
			return;
		}else if($(this).hasClass("m")){
			$(this).addClass("active").siblings().removeClass("active");	
			$(".otherico a").css({"width":"16px","height":"16px"});	
			$(".otherico a img").css({"width":"16px","height":"16px"});		
			return;
		}else if($(this).hasClass("l")){
			$(this).addClass("active").siblings().removeClass("active");		
			$(".otherico a").css({"width":"24px","height":"24px"});	
			$(".otherico a img").css({"width":"24px","height":"24px"});	
			return;
		}
	});
	
	//icon圆角
	$(".icon-bor a").bind("click",function(){
		if($(this).attr("data-value") == 1){
			$(this).addClass("active").siblings().removeClass("active");
			$(".otherico a").css("border-radius","4px");
			return;
		}else if($(this).attr("data-value") == 2){
			$(this).addClass("active").siblings().removeClass("active");	
			$(".otherico a").css("border-radius","0px");
			return;
		}else if($(this).attr("data-value") == 3){
			$(this).addClass("active").siblings().removeClass("active");		
			$(".otherico a").css("border-radius","50%");
			return;
		}
	});
	
	//颜色控制
	$(".color-ico a").bind("click",function(){	
		switch($(this).index()){
			case 0 : $(".st1").css("border-color","#5e5e5e");
			$(".st2").css("color","#5e5e5e");
			break;
			case 1 : $(".st1").css("border-color","#a7a7a7");
			$(".st2").css("color","#a7a7a7");
			break;
			case 2 : $(".st1").css("border-color","#1a75d0");
			$(".st2").css("color","#1a75d0");
			break;
			case 3 : $(".st1").css("border-color","#0296a4");
			$(".st2").css("color","#0296a4");
			break;
			case 4 : $(".st1").css("border-color","#6a9e39");
			$(".st2").css("color","#6a9e39");
			break;
			case 5 : $(".st1").css("border-color","#c01a5c");
			$(".st2").css("color","#c01a5c");
			break;
			case 6 : $(".st1").css("border-color","#f37b01");
			$(".st2").css("color","#f37b01");
			break;
			case 7 : $(".st1").css("border-color","#c68e50");
			$(".st2").css("color","#c68e50");
			break;			
		}
	});
	
	//更多颜色
	$(".c9").colorpicker({
		fillcolor:true,
		success:function(o,color){			
			$(".st1").css("border-color",color);
			$(".st2").css("color",color);
		}
	});
	
	
	//字体选择
	$(".select li").bind("click",function(){	
		switch($(this).index()){
			case 0 : 
			$(".info").css("font-family","Arial");			
			break;
			case 1 : 
			$(".info").css("font-family","黑体");
			break;
			case 2 : 
			$(".info").css("font-family","楷体");
			break;
			case 3 : 
			$(".info").css("font-family","微软雅黑");
			break;
			case 4 : 
			$(".info").css("font-family","Verdana");
			break;
			case 5 : 
			$(".info").css("font-family","Courier");
			break;
			case 6 : 
			$(".info").css("font-family","Georgia");
			break;
		}
	});
	
	//获取代码
	$('.subset button').click(function(){			
		$('.code').html($('.carousel-inner .active').find(".code").html());
	})
	
	//滚动条
	$(".item").mCustomScrollbar({advanced:{updateOnContentResize:true}});
	
	//点击复制
	$(".bor-btn2 button").click(function(){
		$("textarea.code").select();
		document.execCommand("Copy");
	})
	
	//下拉框
	$(".select").selected();	
	 
})

	//图片缩放
	$(document).ready(initializeGrid); 
	function initializeGrid() {			
		$("#grid_slider").slider({
			value: 16,
			max: 24,
			min: 10,
			slide: function(event, ui) {
				$('#myCarousel div.item .photos').css('font-size',ui.value+"px");
			}
		});		
		$("#myCarousel div.item .photos img").each(function() {
			var width = $(this).width() / 26 + "em";
			var height = $(this).height() / 26 + "em";
			$(this).css("width",width);
			$(this).css("height",height);
		});		
		
		$("#grid_slider1").slider({
			value: 10,
			max: 16,
			min: 10,
			slide: function(event, ui) {
				$('#myCarousel div.item .info').css('font-size',ui.value+"px");
			}
		});		
	}

//自动提交表单
function getvalue(n,s){
	if(!$(this).val()){
		$(s).hide();
	}else{
		$(s).show();
		$(n).html($(this).val());	
	}
	//t = $(this).attr('name');	
	//var obj = SubmitForm()[t];
	//$(n).html(obj);
}
//添加信息
function getkey(n,s){	
	//t = $(this).attr('name');	
	//var obj = SubmitForm()[t];
	if(!$(this).val()){
		$(s).parent().hide();
	}else{
		$(s).parent().show();	
		var key = $(this).parent().find('label').text();	
		$(n).html(key);		
		$(s).html($(this).val());
	}
}
//图标链接
function getico(n,s){
	if(!$(this).val()){
		$(s).parent().hide();
	}else{
		$(s).parent().show();
		$(s).attr('href',$(this).val());
	}
	//t = $(this).attr('name');	
	//var obj = SubmitForm()[t];	
	
}
//获取表单
/*function SubmitForm() {
	return $("#form").serializeJson();
}*/

//html转码
/*function html2Escape(sHtml) {
 	return sHtml.replace(/[<>&"]/g,function(c){return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];});
}*/
		
//上传图片
function upload(){
	$.ajaxFileUpload({
		url: 'upload.php', //用于文件上传的服务器端请求地址
		secureuri: false, //是否需要安全协议，一般设置为false
		fileElementId: 'fileToUpload', //文件上传域的ID
		dataType: 'json', //返回值类型 一般设置为json				
		success: function (data, status)  //服务器成功响应处理函数
		{
			//alert(data.msg);
			//console.log(data);	
			$('.photos').empty();
			//此处效果是：当成功上传后会返回一个json数据，里面有url，取出url赋给img标签，然后追加到.photos类里显示出图片.这里的图片地址为个人服务器域名地址
			$('.photos').append('<img src="https://github.com/indigojh/Mail-signature-system/tree/master/'+data.src+'"style="width: 7.69231em; height: 7.69231em; border-radius:'+$(".photo-size .active").css("border-radius")+'"/>');
		},
		error: function (data, status, e)//服务器响应失败处理函数
		{
			alert(e);
		}
	});
	return true;
}
var i = 0;

//添加一项
function addtext(){
	i ++;		
	var strl = '<div class="pure-control-group">'+
                    '<label class="keys'+i+'">'+$(".textkey").val()+'：</label>'+
                    '<input class="values'+i+'" type="text" value="'+$(".textvalue").val()+'" onkeyup="getkey.call(this,\'.keys-txt'+i+'\',\'.values-txt'+i+'\');"/>'+
                '</div>';
	$(".layour-info").append(strl);		
	var strt = '<span class="other" style="display:block;"><span class="keys-txt'+i+'">'+$(".textkey").val()+'：</span><span class="values-txt'+i+'">'+$(".textvalue").val()+'</span></span>';
	$(".otherpro").append(strt);	
	$('#addbox').modal('hide');
}


//添加图标
function addicon(){
	i ++;
	var w,h,b;
	if($(".icon-size .active").attr("data-value") == 1){
		w = "12px";h = "12px";
	}else if($(".icon-size .active").attr("data-value") == 2){
		w = "16px";h = "16px";
	}else if($(".icon-size .active").attr("data-value") == 3){
		w = "24px";h = "24px";
	}
	if($(".icon-bor .active").attr("data-value") == 1){
		b = "4px";
	}else if($(".icon-bor .active").attr("data-value") == 2){
		b = 0;
	}else if($(".icon-bor .active").attr("data-value") == 3){
		b = "50%";
	}	
	var strl = '<div class="pure-control-group">'+
                     '<label><i style="background-color:'+$(this).css("background-color")+'"><img src="'+$(this).children("img").attr("src")+'" alt=""/></i></label>'+
                     '<input type="text" class="kone'+i+'" onkeyup="getico.call(this,\'.qqkone-txt'+i+'\',\'.qqkone'+i+'\');">'+
                '</div>';
	$(".layour-icon").append(strl);	
	var strt = '<span style="margin-right:4px;">'+
                   '<a class="qqkone'+i+'" target="_blank" style="display:inline-block; width:'+w+'; height:'+h+'; padding:4px; line-height:0; background-color:'+$(this).css("background-color")+'; border-radius: '+b+';">'+
				   '<img src="'+$(this).children("img").attr("src")+'" style="width:'+w+'; height:'+h+';" alt=""/></a>'+
                   '<span class="qqkone-txt'+i+'" style="display:none"></span>'+
                '</span>';
	$(".otherico").append(strt);	
	$('#contact').modal('hide');
	console.log($(".icon-bor .active").css("border-radius"));
}

//清除样式
function clearstyle(){
	$(".icon-size a").each(function(index, element) {
        if($(this).attr("data-value") == 1){			
			$(this).addClass("active").siblings().removeClass("active");
		}
    });
	$(".icon-bor a").each(function(index, element) {
        if($(this).attr("data-value") == 2){			
			$(this).addClass("active").siblings().removeClass("active");
		}
    });
	$(".photo-size a").each(function(index, element) {
        if($(this).attr("data-value") == 2){			
			$(this).addClass("active").siblings().removeClass("active");
		}
    });
	$("#grid_slider").slider({value: 16,max: 24,min: 10});	
	$('#myCarousel div.item .photos').css("font-size","16px");	
		
	$("#grid_slider1").slider({value: 10,max: 16,min: 10});	
	$('#myCarousel div.item .info').css("font-size","12px");
	
	$(".info").css("font-family","微软雅黑");
	$(".photos img").css("border-radius","0px");
	$(".otherico a").css({"width":"12px","height":"12px"});	
	$(".otherico a img").css({"width":"12px","height":"12px"});
	$(".otherico a").css("border-radius","0px");
	$(".st1").css("border-color","rgb(0,120,231)");
	$(".st2").css("color","rgb(0,120,231)");
}

// JavaScript Document
;(function($){//模拟下拉框插件
    jQuery.fn.selected = function(options){  
        return this.each(function(){  
            var $this = $(this);  
            var $shows = $this.find(".shows");  
            var $selectOption = $this.find(".selectOption");  
            var $el = $this.find("ul > li");  
                                      
            $this.click(function(e){  
                $(this).toggleClass("zIndex");  
                $(this).children("ul").toggleClass("dis");  
                e.stopPropagation();  
            });  
              
            $el.bind("click",function(){  
                var $this_ = $(this);  
                   
                $this.find("span").removeClass("gray");  
                $this_.parent().parent().find(".selectOption").text($this_.text());  
            });  
              
            $("body").bind("click",function(){  
                $this.removeClass("zIndex");  
                $this.find("ul").removeClass("dis");      
            })  
              
        //eahc End    
        });  
          
    }  
})(jQuery);  