# 常见问题

##  1、Fatal Exception: java.lang.NoClassDefFoundError: com.mopub.mobileads.WebViewCacheService

1.1 创建文件`multidex-config.txt`，内容如下

```c
com/mopub/mobileads/WebViewCacheService.class
```

1.2 将`multidex-config.txt`添加到app model 中与`build.gradle`同级

![keep](https://github.com/wawo00/pictures/blob/master/multidex_keep.png?raw=true "keep")

1.3 修改`build.gradle`中内容

```groovy
buildTypes {
    release {
        multiDexKeepFile file('multidex-config.txt')
		//...
    }
}
```