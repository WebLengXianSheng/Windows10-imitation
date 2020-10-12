
        // 开始菜单按钮
        $(function (){
            $("#taskbar_left").mouseenter(function(){
                $(this).css("background-image","url(/images/start.png)");
                
            });
            $("#taskbar_left").mouseleave(function(){
                $(this).css("background-image","url(/images/startUnlight.png)");
            });
        });
            // 开始菜单栏
            $(document).ready(function(){
                $(".start_left").css("display","none");
            })
            $(function(){
                $("#taskbar_left").mouseenter(function(){
                    $(".start_left").css("display","block");
                })
                $("#taskbar_left").mouseleave(function(){
                    $(".start_left").css("display","none");
                })
            })

            // end开始菜单栏

        // end开始菜单按钮

        // 状态栏
        $(document).ready(function(){
            $("#taskbar_right li").eq(3).css("background-image","url(/images/downicon.png)");
            $("#taskbar_right li").eq(2).css("background-image","url(/images/en.png)");
            // 显示时间字体为白色
            $("#taskbar_right li").eq(1).css({"width":"110px","color":"#fff"});
            $("#taskbar_right li").eq(0).css({"width":"48px","background-image":"url(/images/msgbar.png)"});
            $("#taskbar_right p").css({"font-size":"12px","height":"16px"});
        })
        $(function(){
            $("#taskbar_right li").eq(3).mouseenter(function(){
                $(this).css("background-image","url(/images/downlight.png)");
            });
            $("#taskbar_right li").eq(3).mouseleave(function(){
                $(this).css("background-image","url(/images/downicon.png)");
            });
        });
            // 设置时间
            
            function showTime1(){
                var nowTime = new Date();
                var returnTime = "";
                var hour = nowTime.getHours();
                var minute = nowTime.getMinutes();
                var second = nowTime.getSeconds();
                hour<10?hour=("0"+hour.toString()):hour;
                minute<10?minute=("0"+minute.toString()):minute;
                second<10?second=("0"+second.toString()):second;
                returnTime = hour +":"+minute+":"+second;
                return returnTime;
            };
            function showTime2(){
                var nowTime = new Date();
                var returnTime = "";
                var year = nowTime.getFullYear();
                var month = nowTime.getMonth()+1;
                var date = nowTime.getDate();
                var day = nowTime.getDay();
                var hour = nowTime.getHours();
                var minute = nowTime.getMinutes();
                var second = nowTime.getSeconds();
                switch(day){
                    case 0: day = "星期日";break;
                    case 1: day = "星期一";break;
                    case 2: day = "星期二";break;
                    case 3: day = "星期三";break;
                    case 4: day = "星期四";break;
                    case 5: day = "星期五";break;
                    case 6: day = "星期六";break;
                    default: break;
                }
                returnTime = year +"/"+month+"/"+date+"  "+day;
                return returnTime;
            };
            setInterval(()=>{
                $("#taskbar_right p").eq(0).text(showTime1());
                $("#taskbar_right p").eq(1).text(showTime2());
            },100);
            
        // end 状态栏