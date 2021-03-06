Responsive (适配)

  * [flexible](https://github.com/amfe/lib-flexible)
  * [Viewport Sizes](http://viewportsizes.com/)
  * [设计&切图](http://www.zhihu.com/question/25308946?utm_campaign=weibo_page&utm_medium=rss&utm_source=weibo)
  * [retina](http://www.w3cplus.com/css/towards-retina-web.html)
  * [retinajs](http://imulus.github.io/retinajs/)

  * [参考](http://mobile.51cto.com/web-481943.htm)
  * [移动端自适应方案](http://f2e.souche.com/blog/yi-dong-duan-zi-gua-ying-fang-an/#clue)

### 屏幕参数

- 单位英寸像素数（Pixel Per Inch，PPI）： 现实世界的一英寸内像素数，决定了屏幕的显示质量

- 设备像素比率（Device Pixel Ratio，DPR）： 物理像素与逻辑像素（px）的对应关系

- 分辨率（Resolution）： 屏幕区域的宽高所占像素数

## 适配解决方案

### Resolution 适配

  1. 百分比
      设置 width:100% ：高度无法固定
      使用 before伪元素的 margin 撑开高度 ：不好复用
  2. vw(视口宽度) vh ：兼容性不行
  3. js 计算 ：不好复用
  4. [固定 viewport=640px ：缩放，就会失真。](https://github.com/YYwork/book-for-html/blob/master/meta/meta.js)
  5. rem 用js给html设置一个跟屏幕宽度成正比的 font-size ，然后把元素宽高都用 rem 作为单位。

使用 rem + js 解决适配

已知的问题：

    1. 某些Android机型会丢掉rem小数部分

    2. 占用了rem单位

    3. 不是纯css方案


### PPI 适配

  一段文字，当你面对不同的屏幕时你希望它如何展示？

  + 希望看到的文字尺寸是相同的
  + 大屏手机上，希望看到更多文字
  + 绝大多数的字体文件，是自带一些点阵尺寸(16px 24px)

综上 rem 方案，不适合用到段落文字上，所以段落文字应该使用px作为单位。

考虑到 `Retina` ，我们利用 `media query` 来指定不同的字体；
考虑到 `dpr` 判定的兼容性，用宽度替换来代替。

```

  .icon {
    background-image: url(example.png);
    background-size: 200px 300px;
    height: 300px;
    width: 200px;
  }

  @media 
    only screen and (-Webkit-min-device-pixel-ratio: 1.5),
    only screen and (   -moz-min-device-pixel-ratio: 1.5),
    only screen and (     -o-min-device-pixel-ratio: 3/2),
    only screen and (        min-device-pixel-ratio: 1.5) {
    .icon {
      background-image: url(example@2x.png);
    }
  }

  p {
    font-size: 12px;
  }
  @media (min-width: 401px) {
    p {
      font-size: 24px;
    }
  }
```

### DPR 匹配

  * [flexible](https://github.com/amfe/lib-flexible)

### flex 适配

## 概念

- 物理像素(physical pixel)

- 设备独立像素(density-independent pixel)

- 完美视口

`<meta name="viewport" content="initial-scale=1.0,width=device-width,user-scalable=0,maximum-scale=1.0"/>`

- dpr

`dpr` 是 `devicePixelRatio` 的简写，也就是`屏幕分辩比(设备像素比)`

- scale

`scale` 是屏幕拉伸比。也就是视口上的 `initial-scale` , `maximum-sacle` 等属性。

- 基准

以前是 iPhone 4 的 `320*480`， 现在更多的是 iPhone 6 的 `375*667`。

- retina 


