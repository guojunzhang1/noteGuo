// 当页面加载完毕时触发
window.onload =()=>{
    BodyHeight();
};
//当浏览器窗口大小改变时，设置显示内容的高度
window.onresize =()=>{
    BodyHeight();
};
// 控制HTML根元素字体
BodyHeight =()=>{
    let h = document.documentElement.clientWidth;//获取页面可见高度
    if ( h>=1400 && h<=1920){
        document.getElementsByTagName('html')[0].style.fontSize = 100 * h / 1400 + "px";
    }
};

// 自定义方法用 id 获取节点
$ = (dom) =>{
  return document.getElementById(dom);
};

//轮播图
let time = setInterval(timeFun,3000);
let num = 2;
function timeFun(){
    if (num === 4) {
        num = 1;
    }
    for (var i = 1; i < 4; i++) {
        $('RC'+i).style.display = 'none';
        $('RCD'+i).className = 'RotationChart_qiu';
    }
    $('RC'+num).style.display = 'block';
    $('RCD'+num).className = 'RotationChart_qiu1';
    num++;
}
// 移入清除定时器
document.getElementsByClassName('RotationChart')[0].onmouseover = function(){
    clearInterval(time);
};
// 移出重启定时器
document.getElementsByClassName('RotationChart')[0].onmouseout = function(){
    clearInterval(time);
    time = setInterval(timeFun,3000);
};
// 循环遍历绑定事件
for (let i=1;i<4;i++){
    $('RCD'+i).onclick = function(){
        console.log(i);
        num = i;
        timeFun();
    }
}




// 行业就业职业通点 tab切换
// 移入事件控制
$('B1_T1').onmouseover = function () {
    $('B1_T1').style.color = '#fff';
    $('B1_T1').style.backgroundImage = 'url("images/框.png")';
    $('B1_T2').style.color = '#ccc';
    $('B1_T2').style.backgroundImage = 'url("images/框1.png")';
    $('B1_T1_dv').style.display = "block";
    $('B1_T2_dv').style.display = "none";
};
// 移入事件控制
$('B1_T2').onmouseover = function () {
    $('B1_T2').style.color = '#fff';
    $('B1_T2').style.backgroundImage = 'url("images/框.png")';
    $('B1_T1').style.color = '#ccc';
    $('B1_T1').style.backgroundImage = 'url("images/框1.png")';
    $('B1_T2_dv').style.display = "block";
    $('B1_T1_dv').style.display = "none";
};

// 兄弟会学习模式 tab切换
// 移入事件控制
$('learningModelCen_LDv1').onmouseover = function () {
    $("learningModelCen_LDv2").style.backgroundColor = '#e6e6e6';
    $("learningModelCen_LDv2").style.color = '#071d50';
    $('learningModelCen_LImg2').src = 'images/BleakArrow.png';
    $('learningModelCen_right2').style.display = 'none';
    $("learningModelCen_LDv1").style.backgroundColor = '#071d50';
    $("learningModelCen_LDv1").style.color = '#fff';
    $('learningModelCen_LImg1').src = 'images/WhiteArrow.png';
    $('learningModelCen_right1').style.display = 'block';
};
// 移入事件控制
$('learningModelCen_LDv2').onmouseover = function () {
    $("learningModelCen_LDv1").style.backgroundColor = '#e6e6e6';
    $("learningModelCen_LDv1").style.color = '#071d50';
    $('learningModelCen_LImg1').src = 'images/BleakArrow.png';
    $('learningModelCen_right1').style.display = 'none';
    $("learningModelCen_LDv2").style.backgroundColor = '#071d50';
    $("learningModelCen_LDv2").style.color = '#fff';
    $('learningModelCen_LImg2').src = 'images/WhiteArrow.png';
    $('learningModelCen_right2').style.display = 'block';
};


// 培养具备真实交付能力的程序员 tab切换
let ProgrammerArr = document.getElementsByClassName('Programmer_center')[0];
// 循环遍历绑定事件
for (let i=1;i<10;i+=2){
    ProgrammerArr.childNodes[i].onmouseover = function () {
        for (let j=1;j<10;j+=2){
            ProgrammerArr.childNodes[j].className = 'ProgrammerC_div'
        }
        ProgrammerArr.childNodes[i].className = 'ProgrammerC_div1'
    }
}

// 六大语言学科融会贯通 tab切换
let SubjectArr = document.getElementsByClassName('SubjectC2_left')[0];
// 循环遍历绑定事件
for (let i=1;i<8;i+=2){
    SubjectArr.childNodes[i].onmouseover = function () {
        for (let j=1;j<8;j+=2){
            SubjectArr.childNodes[j].className = 'SubjectC2_Ldv';
            $('SubjectC2_dv'+j).style.display = 'none';
        }
        SubjectArr.childNodes[i].className = 'SubjectC2_Ldv1';
        $('SubjectC2_dv'+i).style.display = 'block';
    }
}










