/**
 * Created by wangzehao on 2017/5/7.
 */
//Initialization
var head = document.getElementsByTagName("head")[0];
var setIntervalNum = 0;
var sectionNum = 0;

var headerNameArray = new Array(10);
headerNameArray[0] = "上海高级工程师的人生困境：更好的生活在墙外？";
headerNameArray[1] = "招聘旺季，我们为何要拒绝90%的公司？";
headerNameArray[2] = "资本寒冬？2016年互联网人年薪仍上涨17%";
headerNameArray[3] = "从技术 Leader 的招聘需求看，如何转岗为当前紧缺的大数据相关人才？";
headerNameArray[4] = "35岁以后的大龄程序员，正处于怎样一种状态?";
headerNameArray[5] = "互联网人离开美国时，都在想些什么？";
headerNameArray[6] = "​我们找了 4 家大数据公司技术 Leader，聊了聊算法和数据挖掘工程师的机会和选择";
headerNameArray[7] = "「阿里中间件需要怎样的架构师」知乎 Live 笔录";
headerNameArray[8] = "可能是「下一个滴滴」的共享单车，你愿意跳槽入行吗？";
headerNameArray[9] = "创业公司的技术 Leader，在 100offer 寻找怎样的工作机会？";
var sectionSubtitleArray = new Array(5);
sectionSubtitleArray[0] = "是否离开美国，这道「仁者见仁、智者见智」的选择题，你的答案是什么？";
sectionSubtitleArray[1] = "现在或许就是一个「成为一名算法和数据挖掘工程师」不错的时机。";
sectionSubtitleArray[2] = "成为一名顶尖架构师，是不少互联网技术人的追求。";
sectionSubtitleArray[3] = "共享单车阴差阳错的被选中成为了中国互联网新的风口。于是，跳槽去一家共享单车创业公司也有了意义。";
sectionSubtitleArray[4] = "技术 Leader 找工作，并没有你们想象中容易。";



//Style
function pageStyleInit(){
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.href = "PracticeCSS.css";
    head.appendChild(style);
}
function headerStyleInit(i){
    var style = document.createElement("style");
    style.type = "text/css";
    style.id = "headerStyle";
    if(i<5){
        style.appendChild(document.createTextNode("#header{" +
            "background-image: url(页眉图片" +
            i +
            ".jpg);}"));

    }
    else {
        style.appendChild(document.createTextNode("#header{" +
            "background-image: url(内容图片" +
            (i-5) +
            ".jpg);}"));
    }
    head.appendChild(style);
}
function sectionStyle(){
    var sectionStyle = document.createElement("style");
    sectionStyle.type = "text/css";
    head.appendChild(sectionStyle);
    for(sectionNum=0;sectionNum<5;sectionNum++){
        sectionStyle.appendChild(document.createTextNode("#sectionImg" +
            sectionNum +
            "{background-image: url(内容图片" +
            sectionNum +
            ".jpg);}"));
    }
}



//HeaderPart
function beforeHeaderConstruct(){
    var div = document.createElement("h1");
    div.id = "beforeHeader";
    div.appendChild(document.createTextNode("博客系统"));
    document.body.insertBefore(div,document.body.childNodes[0]);
}
function headerConstruct(j){
    var i = 0;

    var div = document.createElement("div");
    div.id = "header";
    document.body.insertBefore(div,document.body.childNodes[1]);

    for(i=0;i<5;i++){
        div.appendChild(document.createElement("br"))
    }

    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode(headerNameArray[j]));
    div.appendChild(h2);

    div.appendChild(document.createElement("br"));

    //var a = document.createElement("a");
    //a.id = "headerA";
    //a.href = "PracticeBlog0.html";
    //a.appendChild(document.createTextNode("阅读全文 >"));
    //div.appendChild(a);

    for(i=0;i<6;i++){
        div.appendChild(document.createElement("br"))
    }
}
function numChangeFunction(){
    var i = 0;

    var style = document.getElementById("headerStyle");
    style.replaceChild(document.createTextNode("#header{" +
        "background-image: url(页眉图片" +
        (setIntervalNum%5) +
        ".jpg);}"),style.lastChild);

    var headerH2 = document.getElementById("headerH2");
    headerH2.replaceChild(document.createTextNode(headerNameArray[(setIntervalNum%5)]),headerH2.firstChild);

    var headA = document.getElementById("headerA");
    headA.href = "PracticeBlog" +
        (setIntervalNum%5) +
        ".html";

    for(i=0;i<5;i++){
        document.getElementById("headerButton"+i).src = "按钮白.jpg";
    }
    document.getElementById("headerButton"+(setIntervalNum%5)).src = "按钮蓝.jpg";
}
function setIntervalFunction(){
    setIntervalNum++;

    numChangeFunction();
}



//SectionPart
function sectionConstruct(){
    var i = 0;

    var section = document.createElement("div");
    section.id = "section";
    document.body.appendChild(section);

    var sectionImg = document.createElement("a");
    sectionImg.id = "sectionImg" + sectionNum;
    sectionImg.href = "PracticeBlog" +
        (sectionNum+5) +
        ".html";
    section.appendChild(sectionImg);

    for(i=0;i<7;i++){
        sectionImg.appendChild(document.createElement("br"));
    }

    section.appendChild(document.createElement("br"));

    var a = document.createElement("a");
    a.href = "PracticeBlog" +
        (sectionNum+5) +
        ".html";
    a.appendChild(document.createTextNode(headerNameArray[(sectionNum+5)]));
    section.appendChild(a);

    var span = document.createElement("span");
    span.appendChild(document.createTextNode(sectionSubtitleArray[sectionNum]));
    section.appendChild(span);

    for(i=0;i<3;i++){
        section.appendChild(document.createElement("br"));
    }

    document.body.appendChild(document.createElement("br"));
}



//BlogPart
function blogConstruct(){
    var div = document.createElement("div");
    div.id = "blog";
    document.body.appendChild(div);
}
function blogNormalStyle(blogText){
    var div = document.getElementById("blog");

    var p = document.createElement("p");
    p.appendChild(document.createTextNode(blogText));
    div.appendChild(p);
}
function blogBoldStyle(blogText){
    var div = document.getElementById("blog");

    var p = document.createElement("p");
    p.id = "blogBold";
    p.appendChild(document.createTextNode(blogText));
    div.appendChild(p);
}
function blogMixedStyle(blogTextB,blogText){
    var div = document.getElementById("blog");

    var p = document.createElement("p");

    var span = document.createElement("span");
    span.appendChild(document.createTextNode(blogTextB));
    p.appendChild(span);

    p.appendChild(document.createTextNode(blogText));
    div.appendChild(p);
}
function blogBr(){
    var div = document.getElementById("blog");

    div.appendChild(document.createElement("br"));
}
function blogBigBr(){
    var i = 0;
    for(i=0;i<3;i++){
        blogBr();
    }
}



//FooterPart
function footerConstruct(){
    var tr;
    var p;
    var i = 0,j = 0;

    var thTextArray = new Array(4);
    thTextArray[0] = "看机会";
    thTextArray[1] = "招人才";
    thTextArray[2] = "职业发展";
    thTextArray[3] = "博客系统";
    var tdTextArray = new Array(32);
    for(i=0;i<32;i++){
        tdTextArray[i] = "";
    }
    tdTextArray[0] = "看机会";
    tdTextArray[1] = "常见问题";
    tdTextArray[2] = "招人才";
    tdTextArray[3] = "使用攻略";
    tdTextArray[4] = "博客";
    tdTextArray[6] = "关于我们";
    tdTextArray[8] = "注册";
    tdTextArray[9] = "邀请朋友";
    tdTextArray[10] = "注册";
    tdTextArray[12] = "活动";
    tdTextArray[14] = "加入我们";
    tdTextArray[16] = "登陆";
    tdTextArray[18] = "登陆";
    tdTextArray[22] = "法律条款";
    tdTextArray[24] = "使用攻略";
    tdTextArray[26] = "常见问题";

    var footerBackground = document.createElement("div");
    footerBackground.id = "footerBackground";
    document.body.appendChild(footerBackground);

    var footer = document.createElement("div");
    footer.id = "footer";
    footerBackground.appendChild(footer);

    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("博客系统"));
    footer.appendChild(h2);

    footer.appendChild(document.createElement("br"));

    var input = document.createElement("input");
    input.type = "image";
    input.src = "微信图标0.jpg";
    input.width = "35";
    input.height = "35";
    footer.appendChild(input);

    p = document.createElement("p");
    p.appendChild(document.createTextNode("____________________" +
        "______________________________" +
        "______________________________" +
        "____________________________________"));
    footer.appendChild(p);

    var table = document.createElement("table");
    footer.appendChild(table);

    tr = document.createElement("tr");
    table.appendChild(tr);

    for(i=0;i<4;i++){
        footerThConstruct(tr,thTextArray[i]);
    }

    for(j=0;j<4;j++){
        tr = document.createElement("tr");
        table.appendChild(tr);
        for(i=0;i<8;i++){
            footerTdConstruct(tr,tdTextArray[(i+(j*8))]);
        }
    }

    var a = document.createElement("a");
    a.href = "#beforeHeader";
    footer.appendChild(a);

    var img = document.createElement("img");
    img.src = "返回页顶1.jpg";
    a.appendChild(img);

    p = document.createElement("p");
    p.appendChild(document.createTextNode("____________________" +
        "______________________________" +
        "______________________________" +
        "____________________________________"));
    footer.appendChild(p);

    p = document.createElement("p");
    p.id = "footerPartThree";
    p.appendChild(document.createTextNode("博客系统-2017"));
    footer.appendChild(p);

    footer.appendChild(document.createElement("br"));
}
function footerThConstruct(tr,thText){
    var th = document.createElement("th");
    th.colSpan = "2";
    th.appendChild(document.createTextNode(thText));
    tr.appendChild(th);
}
function footerTdConstruct(tr,tdText){
    var td = document.createElement("td");
    td.appendChild(document.createTextNode(tdText));
    tr.appendChild(td);
}



//NewPageNormalFunction
function newPageNormalFunction(i){
    pageStyleInit();
    headerStyleInit(i);

    // beforeHeaderConstruct();
    headerConstruct(i);

    blogConstruct();
    blogBr();
    blogBr();
}




