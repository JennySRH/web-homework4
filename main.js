window.onload = function() {
    var str="";
    var input = document.getElementById("user-input");
    document.getElementById("one").onclick=function(){
        str=str+'1';
        input.value = str;
    }
    document.getElementById("two").onclick=function(){
        str=str+'2';
        input.value = str;
    }
    document.getElementById("three").onclick=function(){
        str=str+'3';
        input.value = str;
    }
    document.getElementById("four").onclick=function(){
        str=str+'4';
        input.value = str;
    }
    document.getElementById("five").onclick=function(){
        str=str+'5';
        input.value = str;
    }
    document.getElementById("six").onclick=function(){
        str=str+'6';
        input.value = str;
    }
    document.getElementById("seven").onclick=function(){
        str=str+'7';
        input.value = str;
    }
    document.getElementById("eight").onclick=function(){
        str=str+'8';
        input.value = str;
    }
    document.getElementById("nine").onclick=function(){
        str=str+'9';
        input.value = str;
    }
    document.getElementById("zero").onclick=function(){
        str=str+'0';
        input.value = str;
    }
    document.getElementById("division").onclick=function(){
        str=str+'/';
        input.value = str;
    }
    document.getElementById("multiply").onclick=function(){
        str=str+'*';
        input.value = str;
    }
    document.getElementById("plus").onclick=function(){
        str=str+'+';
        input.value = str;
    }
    document.getElementById("sub").onclick=function(){
        str=str+'-';
        input.value = str;
    }
    document.getElementById("dot").onclick=function(){
        str=str+'.';
        input.value = str;
    }
    document.getElementById("leftbracket").onclick=function(){
        str=str+'(';
        input.value = str;
    }
    document.getElementById("rightbracket").onclick=function(){
        str=str+')';
        input.value = str;
    }
    document.getElementById("clear").onclick=function(){
        str="";
        input.value = str;
    }
    document.getElementById("clean").onclick=function(){
        var temp=str;
        str="";
        for(var i = 0;i < temp.length-1;i++){
            str = str + temp.charAt(i);
        }
        input.value = str;
    }
    document.getElementById("equal").onclick=function(){
        try{
            var ans = eval(str);
            str=ans+"";
            input.value = ans;
        }
        catch(ans){
            alert("请输入合法的的算术表达式");
        }

    }
}