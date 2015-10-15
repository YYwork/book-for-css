## css3 动画

- [transform](http://www.w3cplus.com/content/css3-transform)

旋转rotate
transform:rotate(30deg);

扭曲skew translate(x,y)  translateX(x) translateY(y)
transform:translate(100px,20px);

缩放scale scale(x,y) scaleX(x) scaleY(y)
transform:scale(2, 1.5);

移动translate
矩阵变形matrix

```
   transform ： none | <transform-function> [ <transform-function> ]* ;
   transform: rotate | scale | skew | translate |matrix;
```


- [transition](http://www.w3cplus.com/content/css3-transition)
css的属性值在一定的时间区间内平滑地过渡。

 transition ： [<'transition-property'> || <'transition-duration'> || <'transition-timing-function'> || <'transition-delay'> [, [<'transition-property'> || <'transition-duration'> || <'transition-timing-function'> || <'transition-delay'>]]*

 transition主要包含四个属性值：
 
 执行变换的属性：transition-property,
 变换延续的时间：transition-duration,
 在延续时间段，变换的速率变化transition-timing-function,
 变换延迟时间transition-delay

- [animation](http://www.w3cplus.com/content/css3-animation)

