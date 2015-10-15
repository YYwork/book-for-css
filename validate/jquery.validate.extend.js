// 验证拓展
jQuery.extend(jQuery.validator.messages, {
  required: "此项为必填.",
  remote: "此项有错误.",
  email: "请输入正确的邮箱地址.",
  url: "请输入正确的路径.",
  date: "请输入正确的日期时间.",
  dateISO: "请输入正确的日期时间(ISO).",
  number: "请输入数字.",
  digits: "请输入0-9的数字.",
  creditcard: "请输入正确的信用卡号码.",
  equalTo: "两个不相等.",
  maxlength: $.validator.format("请输入小于{0}长度的字符."),
  minlength: $.validator.format("请输入大于{0}长度的字符."),
  rangelength: $.validator.format("请输入{0}到{1}长度的字符."),
  range: $.validator.format("请输入{0}到{1}长度的值."),
  max: $.validator.format("请输入小于{0}的值."),
  min: $.validator.format("请输入大于{0}的值.")
});

// 手机验证
jQuery.validator.addMethod("phone", function (value, element) {
    var mobile = /^1[3|4|5|7|8]\d{9}$/;
  return this.optional(element) || (mobile.test(value));
}, "请输入11位正确手机号");

// 手机或邮箱验证
jQuery.validator.addMethod("emailOrPhone", function (value, element) {
  var emailOrPhone = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/;
  return this.optional(element) || (emailOrPhone.test(value));
}, "需为邮箱或者手机号");

// 添加 class 验证
// email
// phone
// emailOrPhone
// password
jQuery.validator.addClassRules({
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      phone: true
    },
    emailOrPhone: {
      required: true,
      emailOrPhone: true
    },
    password: {
      required: true,
      minlength: 6
    }
});