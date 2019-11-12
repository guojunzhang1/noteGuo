// 获取当前季节
window.onload = function(){
    let time = new Date().getMonth() + 1;
    if (time >= 2 && time < 5){
        tagNameFun('body')[0].setAttribute("data-Season",'spring');
    }else if(time >= 5 && time < 8){
        tagNameFun('body')[0].setAttribute("data-Season",'summer');
    }else if(time >= 8 && time < 11){
        tagNameFun('body')[0].setAttribute("data-Season",'autumn');
    }else if(time >= 11 && time < 2){
        tagNameFun('body')[0].setAttribute("data-Season",'winter');
    }
};
// 传递参数id获取dom节点
function $(id) {
    return document.getElementById(id);
}
// 传递参数节点标签名获取节点数组
function tagNameFun(tagName){
    return document.getElementsByTagName(tagName);
}
// 切换主题 点击事件
// 事件标记，true为显示，false为隐藏。
let seasonDisplay = true;
$('theme').onclick = function () {
    if (seasonDisplay){
        // 季节列表显示
        $('season').style.display='block';
    }else{
        // 季节列表隐藏
        $('season').style.display='none';
    }
    // 事件标记seasonDisplay取反
    seasonDisplay = !seasonDisplay;
};
// 遍历绑定事件
for (let i=0;i<4;i++){
    // 点击事件
    tagNameFun('li')[i].onclick = function () {
        // 把body的自定义标签赋值为获取到的主题
        tagNameFun('body')[0].setAttribute("data-Season",tagNameFun('li')[i].innerHTML);
        // 季节列表隐藏
        $('season').style.display='none';
        // 事件标记seasonDisplay取反
        seasonDisplay = !seasonDisplay;
    }
}
