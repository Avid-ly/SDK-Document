
# 1.前提条件
前提条件：应用全球发布，包括欧盟北美。
&ensp;
# 2.工程引入

1）在module的build.gradle中添加pssdk

```groovy
dependencies {
	implementation 'com.ps.sdk:pssdk:2.0.0.1'
}
```

!>`请注意maven 的最新仓库地址是否与您使用的一致，若不一致会出现类似下面这种找不到库的报错`</br>
`<Build: failed at`</br>
`Could not HEAD 'http://bx-mvn.dataverse cn:18081/repository/maven-releases/com/...... >`

1.1 追加PSSDK仓库地址
```groovy
android {
    defaultConfig {
        //...
    }
repositories {
    flatDir {
        dirs 'libs'
    }
    maven { url "http://bx-mvn.dataverse.cn:58081/repository/maven-releases/"}
}
```
1.2 追加PSSDK仓库地址 仅适用于 Android Studio 2020.x.x 及以上 (可选)


```groovy
android {
    defaultConfig {
        //...
    }
repositories {
    flatDir {
        dirs 'libs'
    }
    maven { url "https://mvn-bx.dataverse.cn/repository/maven-releases/"}
}
```



2）引入support库

```
dependencies {
	implementation 'com.android.support:appcompat-v7:28.0.0'
}
```

# 3. 权限依赖

PSSDK 依赖如下权限：

```
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
```

# 4. 混淆配置
如项目已开启混淆功能，请按照如下规则添加混淆配置。
</br>
```groovy
# 保护注解
-keepattributes *Annotation*

-keep class com.ps.sdk.** {*;}
-keep enum com.ps.sdk.** {*;}
-keep interface com.ps.sdk.** {*;}


```
&ensp;
# 5. Demo 工程
为更好的了解 PSSDK 的导入和使用，请参考 [Demo工程](https://github.com/Avid-ly/Android-PSSDK-Demo "Demo工程")。