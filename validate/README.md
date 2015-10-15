http://www.51xuediannao.com/demo.php

http://jqueryvalidation.org/validate


# 使用方式

## 方式 1 (class)

    $(function(){
      var validate = $("form").validate({
        submitHandler: function() {
          //验证通过后 的js代码写在这里


          // 显示 ajax 返回信息
          // error-class 显示消息标签的 class
          // message 显示返回的信息
          validate.showAjaxMessage('error-class', 'message');
        }
      }) 
    });

    <input type="text" name＝"emailOrPhone" required data-msg-required="请输入邮箱" class="emailOrPhone" placeholder="输入邮箱或者手机号"/>

    <input type="password" name="password" required data-msg-required="请输入密码" minlength="6" data-msg-minlength="至少输入6个字符" placeholder="输入密码"/>

## 方式 2 (js)

    $(function(){
      $("form").validate({
        rules: {
          emailOrPhone: {
            required: true,
            email: true,
          },
          password: {
            required: true,
            minlength: 5
          }
        },
        messages: {
          emailOrPhone: {
            required: "账号不能为空",
            email: "请输入正确的email地址"
          },
          password: {
            required: "请输入密码",
            minlength: "密码不能小于{0}个字 符"
          },
        },
        submitHandler: function() {
          //验证通过后 的js代码写在这里
        }
      }) 
    });

##  已有的验证

    required: "This field is required.",
    remote: "Please fix this field.",
    email: "Please enter a valid email address.",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    maxlength: $.validator.format("Please enter no more than {0} characters."),
    minlength: $.validator.format("Please enter at least {0} characters."),
    rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
    range: $.validator.format("Please enter a value between {0} and {1}."),
    max: $.validator.format("Please enter a value less than or equal to {0}."),
    min: $.validator.format("Please enter a value greater than or equal to {0}.")

## 拓展的验证方法

    emailOrPhone
    使用1: data-rule-mm="true" data-msg-mm="请输入正确格式"
    使用2: class="emailOrPhone"

## 验证顺序
1.
    var validate = $('.login-form').validate({
      rules: {
        emailOrPhone: {
          required: true,
          emailOrPhone: function() {
            return false;
          }
        }
      },
      messages: {
        emailOrPhone: {
          required: 'GAGAG',
          emailOrPhone: 'true'
        }
      }
    });

2. data-msg-required="SHURUSHOUJIHAO"

3. data-msg-emailOrPhone="输入邮箱或者手机号"

4. title="输入邮箱或者手机号" || this.settings.ignoreTitle

5. 
    jQuery.validator.addMethod("emailOrPhone", function (value, element) {
      var emailOrPhone = /^[a-z0-9._%-]+@([a-z0-9-]+\.)+[a-z]{2,4}$|^1[3|4|5|7|8]\d{9}$/;
      return this.optional(element) || (emailOrPhone.test(value));
    }, "需为邮箱或者手机号");