CSS 总结
========
我个人比较推崇用 Compass 来书写 CSS，所以该项目也会以 Compass 为基础搭建起来。

依旧在原生的 CSS HTML JavaScript 和 推崇缩进的理念上徘徊。

## CSS Reset

>
  由于早期的浏览器支持和理解的 CSS 规范不同，导致浏览器在渲染页面时效果不一致，出现很多兼容性问题。

  ```
    <link href="//cdn.bootcss.com/normalize/3.0.3/normalize.css" rel="stylesheet">
  ```

 * [Normalize](https://github.com/necolas/normalize.css/)


## HTML5 CSS3 兼容 IE


  ```
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
      <script src="//cdn.bootcss.com/selectivizr/1.0.2/selectivizr-min.js"></script>
    <![endif]-->
  ```

  * [html5shiv -- 让 IE6-8 识别 HTML5 新的元素](https://github.com/aFarkas/html5shiv/tree/master/dist)
  * [Respond -- 让 IE6-8 支持 CSS3 Media Query](https://github.com/scottjehl/Respond/tree/master/dest)
  * [Selectivizr -- 让 IE6-8 支持 CSS3 伪类和属性选择器](https://github.com/keithclark/selectivizr)

## responsive  flexible design


## 前端工具

  * [Viewport Sizes](http://viewportsizes.com/)
  * [HTML CSS JavaScript 美化](http://tool.lu/)

### compass 

```
sudo gem install sass 
sudo gem install compass
sudo gem install susy
sudo gem install breakpoint
```

```
gulp-compass 
gulp-sass
```


[grayscale](http://james.padolsey.com/demos/grayscale/grayscale.js)