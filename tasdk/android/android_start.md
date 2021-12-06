# 1.前提条件

- 确保您安装了最新的 Android studio 3.2 及更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址


# 2. 安装SDK
## 1.1 AndroidStudio 工程

1) 将 `analysissdk`添加至`build.gradle`的`dependencies`标签中。

```groovy

dependencies {
    // 引用统计包
    implementation 'com.aly.sdk:tasdk:4.1.0.7'
    //引用依赖库
    implementation 'com.google.android.gms:play-services-base:17.3.0’
}
```


（1）追加TASDK仓库地址

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


# 3. 游戏安装数配置
为正确统计游戏的安装数，统计包中依赖`installreferrer`组件。

```groovy
implementation 'com.android.installreferrer:installreferrer:1.1'
```

# 4. 混淆配置

如项目已开启混淆功能，请按照如下规则添加混淆配置。

```xml
-dontskipnonpubliclibraryclassmembers
-dontshrink
-useuniqueclassmembernames
-keeppackagenames 'com.up.analysis'
-keeppackagenames 'com.aly.analysis'
-keeppackagenames 'com.hola'
-keeppackagenames 'com.aly'
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,LocalVariable*Table,*Annotation*,Synthetic,EnclosingMethod
-keepparameternames
-ignorewarnings

-keep class com.android.installreferrer.** {*;}
-keep interface com.android.installreferrer.** {*;}
-keep class com.google.android.** {*;}
-keep interface com.google.android.** {*;}

-keep class com.aly.account.* {public *;}
-keep class com.aly.zflog.* {public *;}
-keep class com.aly.sdk.** {*;}
-keep class com.statistics.channel.ChannelProvider {public *;}
-keep class com.aly.unity.UPTraceProxy {public static <methods>;}

-keep class com.aly.analysis.sdk.api.ALYSDKConstant {public static boolean sDebugLog;}
-keep class com.aly.analysis.utils.ALYSDCardUtil {*** getExternalSDPath(***);}

-keep class com.aly.analysis.analysiscore.BuildConfig {*;}
-keep interface com.aly.analysis.sdk.api.GetUerIdListener {*;}
-keep interface com.aly.analysis.basicdata.conversion.AFConversionDataResultListener {*;}
-keep interface com.aly.analysis.basicdata.payuserlayer.PayUserLayerDataListener {*;}
-keep interface com.aly.analysis.basicdata.useradlayer.UserAdLayerDataListener {*;}
-keep interface com.aly.analysis.basicdata.userdllayer.UserDlLayerDataListener {*;}
-keep interface com.aly.ext.ALYLoginOuterListener {*;}
-keep interface com.aly.ext.ZFReporterOuterListener {*;}
-keep class com.aly.duration.** {*;}
-keep class com.aly.sdk.BuildConfig {public *;}

-keep class com.aly.sdk.ext.** {*;}
-keep interface com.aly.sdk.ext.** {*;}
```

# 5. Demo
为帮助您更好的了解SDK的接入以及使用，我们为您提供了简单的Demo工程，您可以根据您的IDE使用情况下载对应的工程。

[Android Studio](https://github.com/Avid-ly/Android-AnalysisDemo "Demo工程")

# 6 常见编译问题

### 6.1 Could not HEAD...
Q:`<Build: failed at`</br>
`Could not HEAD 'http://bx-mvn.dataverse cn:18081/repository/maven-releases/com/...... >`

A:此错误表示您没有获取到本SDK的仓库地址，请将本文档中的maven仓库地址引入到您的项目中


