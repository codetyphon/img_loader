# jquery.imgloader.js
图片从 low（低像素） 到 high （高像素） 的动态载入




使用方法：

第一步：在引入jquery之后引入 jquery.imgloader.js 

```
<script src="/javascripts/jquery.imgloader.js"></script>
```

第二步：html 中img标签结构如下：

```
<img class="imgloader" low_src="50x50.png" middle_src="100x100.png" high_src="600x600.png" >
```

第三步：在javascript中执行：

```
$('.imgloader').imgloader();
```

大功告成！
