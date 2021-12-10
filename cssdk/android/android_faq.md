

# 1.前提条件

- 确保您安装了最新的 Android studio 3.2 及更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址

# 2.工程引入

1）引入[CSSDK]

```groovy
dependencies {
	implementation 'com.css.sdk:cssdk:2.1.0.4'
	implementation 'com.github.bumptech.glide:glide:4.6.1'
	implementation 'com.luck.picture:pictureSelector:2.5.5'
	implementation 'com.qmuiteam:qmui:1.2.0'
	implementation 'com.qmuiteam:arch:0.3.1'
}
```

>**`请注意maven 的最新仓库地址是否与您使用的一致，若不一致会出现类似下面这种找不到库的报错`**</br>
`<Build: failed at`</br>
`Could not HEAD 'http://bx-mvn.dataverse cn:18081/repository/maven-releases/com/...... >`


1.1 追加CSSDK仓库地址

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

2) 引用support库

```groovy
implementation 'com.android.support:appcompat-v7:28.0.0'
implementation 'com.android.support:cardview-v7:28.0.0'
implementation 'com.android.support:recyclerview-v7:28.0.0'
implementation 'com.android.support:customtabs:28.0.0'
implementation 'com.android.support:design:28.0.0'
```

3） 引入androidx库(可选)
> 如果您使用androidx来构建项目，请按照下面引入androidx库

```groovy
implementation 'androidx.appcompat:appcompat:1.0.0'
implementation 'androidx.recyclerview:recyclerview:1.0.0'
implementation 'androidx.cardview:cardview:1.0.0'
implementation 'androidx.browser:browser:1.0.0'
implementation 'com.google.android.material:material:1.0.0'
```

# 3. 权限依赖
客服 SDK 依赖如下权限：
```groovy
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

# 4. 混淆配置
如项目已开启混淆功能，请按照如下规则添加混淆配置。
</br>
```groovy
 # 混淆时所采用的算法
-optimizations !code/simplification/arithmetic,!field/*,!class/merging/*

# 保护注解
-keepattributes *Annotation*


-dontskipnonpubliclibraryclassmembers
-dontshrink
-useuniqueclassmembernames
-keeppackagenames 'com.aly.analysis'
-keepattributes Exceptions,InnerClasses,Signature,Deprecated,SourceFile,LineNumberTable,LocalVariable*Table,*Annotation*,Synthetic,EnclosingMethod
-keepparameternames
-ignorewarnings

#-obfuscationdictionary fm_dic.txt
#-classobfuscationdictionary class_dic.txt
#-packageobfuscationdictionary package_dic.txt

-keep class com.css.sdk.cservice.* {*;}
-keep public class * extends android.support.v4.app.Fragment

#PictureSelector 2.0
-keep class com.luck.picture.lib.** { *; }

#Ucrop
-dontwarn com.yalantis.ucrop**
-keep class com.yalantis.ucrop** { *; }
-keep interface com.yalantis.ucrop** { *; }

#Okio
-dontwarn org.codehaus.mojo.animal_sniffer.*

#qmui
-keep class com.qmuiteam.qmui.arch.record.RecordIdClassMap { *; }
-keep class com.qmuiteam.qmui.arch.record.RecordIdClassMapImpl { *; }

-keep class com.qmuiteam.qmui.arch.scheme.SchemeMap {*;}
-keep class com.qmuiteam.qmui.arch.scheme.SchemeMapImpl {*;}

```
&ensp;
