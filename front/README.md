字体定义
===

为什么写出的网页会在浏览器中显示的效果不一样呢？

主要是因为不同的浏览器、不同的语言版本甚至不同的系统版本都有不同的默认字体设置。

- 样式优先级

  用户!important > 网页!important > 用 户 > 网页 > 浏览器默认。

  * 浏览器的默认样式
  * 网页定义样式
  * 用户自定义样式

- 页面字体设置(amazeui)

  ```
  body {
      font-family: "Segoe UI", 
        "Lucida Grande", 
        Helvetica, 
        Arial, 
        "Microsoft YaHei", 
        FreeSans, 
        Arimo, 
        "Droid Sans",
        "wenquanyi micro hei",
        "Hiragino Sans GB", 
        "Hiragino Sans GB W3", 
        Arial, 
        sans-serif;
    }
  ```

  1. Segoe UI - Windows UI 字体（从 Windows Vista 开始使用）；
  2. Helvetica Neue 是 iOS7 及 OSX 10.10 UI 字体（在部分文字垂直居中的场景有一些小问题，暂时先使用 Lucida Grande）；
  3. 有些 Windows 用户安装了丽黑字体，丽黑字体在 Windows 上渲染出来很模糊，所以把微软雅黑放在苹果丽黑之前；
  4. FreeSans - 包括 Ubuntu 之类的 Linux 分发版包含的字体。
  5. Lucida Grande 苹果公司操作系统Mac OS X的默认西文 字体;
  6. Arial是一套随同多套微软应用软件所分发的无衬线体TrueType字型;

- 非衬线字体（sans-serif）

- 衬线字体（serif）