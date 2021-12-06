
# 1.前提条件

- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址
- 确保您的发行地区为全球，包括欧盟和南美

# 2.工程引入

### 2.1  在module的build.gradle中添加pssdk

```groovy
dependencies {
	implementation 'com.ps.sdk:pssdk:2.0.0.1'
}
```

### 2.2 追加PSSDK仓库地址
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
### 2.3 引入support库

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
# 6 常见编译问题
### 6.1 Could not HEAD...
Q:`<Build: failed at`</br>
`Could not HEAD 'http://bx-mvn.dataverse cn:18081/repository/maven-releases/com/...... >`

A:此错误表示您没有获取到本SDK的仓库地址，请将本文档中的maven仓库地址引入到您的项目中