/**
*判断是否正浮点数 不包含0
*
**/
function isPositiveFloat(val){
    let reg = /^(([0-9]+[\.]?[0-9]+)|[1-9])$/;
    if (reg.test(val)) {
        return true;
    } else {
        return false;
    }
}

/**
*判断是否正浮点数 含0
*
**/
function isPositiveFloatAndZero(val){
    let reg = /^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/;
    if (reg.test(val)) {
        return true;
    } else {
        return false;
    }
}

/**
* 判断是否正整数
**/
function isPositiveInt(val){
    let reg = /^\d+$/;
    if (reg.test(val)) {
        return true;
    } else {
        return false;
    }
}

/*
1 用户名正则
//用户名正则，4到16位（字母，数字，下划线，减号）
var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
//输出 true
console.log(uPattern.test("iFat3"));
2 密码强度正则
//密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
//输出 true
console.log("=="+pPattern.test("iFat3#"));
3 整数正则
//正整数正则
var posPattern = /^\d+$/;
//负整数正则
var negPattern = /^-\d+$/;
//整数正则
var intPattern = /^-?\d+$/;
//输出 true
console.log(posPattern.test("42"));
//输出 true
console.log(negPattern.test("-42"));
//输出 true
console.log(intPattern.test("-42"));
4 数字正则
可以是整数也可以是浮点数

//正数正则
var posPattern = /^\d*\.?\d+$/;
//负数正则
var negPattern = /^-\d*\.?\d+$/;
//数字正则
var numPattern = /^-?\d*\.?\d+$/;
console.log(posPattern.test("42.2"));
console.log(negPattern.test("-42.2"));
console.log(numPattern.test("-42.2"));
5 Email正则
//Email正则
var ePattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//输出 true
console.log(ePattern.test("65974040@qq.com"));
6 手机号码正则
//手机号正则
var mPattern = /^[1][3][0-9]{9}$/;
//输出 true
console.log(mPattern.test("13900000000"));
7 身份证号正则
//身份证号（18位）正则
var cP = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
//输出 true
console.log(cP.test("11010519880605371X"));
8 URL正则
//URL正则
var urlP= /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
//输出 true
console.log(urlP.test("http://42du.cn"));
9 IPv4地址正则
//ipv4地址正则
var ipP = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
//输出 true
console.log(ipP.test("115.28.47.26"));
10 十六进制颜色正则
//RGB Hex颜色正则
var cPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
//输出 true
console.log(cPattern.test("#b8b8b8"));
11 日期正则
//日期正则，简单判定,未做月份及日期的判定
var dP1 = /^\d{4}(\-)\d{1,2}\1\d{1,2}$/;
//输出 true
console.log(dP1.test("2017-05-11"));
//输出 true
console.log(dP1.test("2017-15-11"));
//日期正则，复杂判定
var dP2 = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
//输出 true
console.log(dP2.test("2017-02-11"));
//输出 false
console.log(dP2.test("2017-15-11"));
//输出 false
console.log(dP2.test("2017-02-29"));
12 QQ号码正则
//QQ号正则，5至11位
var qqPattern = /^[1-9][0-9]{4,10}$/;
//输出 true
console.log(qqPattern.test("65974040"));
13 微信号正则
//微信号正则，6至20位，以字母开头，字母，数字，减号，下划线
var wxPattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
//输出 true
console.log(wxPattern.test("RuilongMao"));
14 车牌号正则
//车牌号正则
var cPattern = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
//输出 true
console.log(cPattern.test("京K39006"));
15 包含中文正则
//包含中文正则
var cnPattern = /[\u4E00-\u9FA5]/;
//输出 true
console.log(cnPattern.test("42度"));


16.正则集合：
验证数字：^[0-9]+$
验证n位的数字：^\d{n}$
验证至少n位数字：^\d{n,}$
验证m-n位的数字：^\d{m,n}$
验证零和非零开头的数字：^((0|[1-9])[0-9]*)$
验证有两位小数的正实数：^(0|[1-9][0-9]*)(\.[0-9]{2})$
验证有1-3位小数的正实数：^[0-9]+(\.[0-9]{1,3})$
验证非零的正整数：^\+?[1-9][0-9]*$
验证非零的负整数：^\-[1-9][0-9]*$
验证非负整数（正整数 + 0） ^\d+$
验证非正整数（负整数 + 0） ^((-\d+)|0)$
验证长度为3的字符：^.{3}$
验证由26个英文字母组成的字符串：^[A-Za-z]+$
验证由26个大写英文字母组成的字符串：^[A-Z]+$
验证由26个小写英文字母组成的字符串：^[a-z]+$
验证由数字和26个英文字母组成的字符串：^[A-Za-z0-9]+$
验证由数字、26个英文字母或者下划线组成的字符串：^\w+$
验证用户密码:^[a-zA-Z]\w{5,17}$ 正确格式为：以字母开头，长度在6-18之间，只能包含字符、数字和下划线。
验证汉字：^[\u4e00-\u9fa5]{0,}$
验证Email地址：^\w+[-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
验证InternetURL：^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$ ；^[a-zA-z]+://(w+(-w+)*)(.(w+(-w+)*))*(?S*)?$
验证电话号码：^((\d{3}|\d{3,4})-)?\d{7,8}$ ：--正确格式为：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX。
验证身份证号（15位或18位数字）：^\d{15}|\d{18}$


验证一年的12个月：^(0?[1-9]|1[0-2])$ 正确格式为：“01”-“09”和“1”“12”
验证一个月的31天：^((0?[1-9])|((1|2)[0-9])|30|31)$ 正确格式为：01、09和15、24/30、31。
整数：^-?\d+$
非负浮点数（正浮点数 + 0）：^\d+(\.\d+)?$
正浮点数 ^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$
非正浮点数（负浮点数 + 0） ^((-\d+(\.\d+)?)|(0+(\.0+)?))$
负浮点数 ^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$
浮点数 ^(-?\d+)(\.\d+)?$
*/