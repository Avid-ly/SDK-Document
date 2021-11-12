# 1. 导入 SDK 包

 - 导入TASDK Unity Package
 - 右键Assets目录，选择External Dependency Manager - Android Resolver - Force Resolve, 下载依赖的jar包
 
# 2. 混淆配置

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
&ensp;



