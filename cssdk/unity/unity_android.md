# 1. 前提条件
- Android设备
- 最新的CSSDK unity plugin
- 统计包
- 已添加Unity Plugin

# 2. 目录结构
成功导入 Unity 插件 Android 版本后，检查 `Assets` 目录项下是否存在 `CSSDK` 。

> 20011版本后,将不再在unityplugin中提供aar形式的cssdk主包，请根据下面的方法通过gradle进行引入。

---

# 3.下载依赖文件
1）检查导入的unityPackage
- Assets/目录下是否存在`ExternalDependencyManager` 文件夹
- Assets/目录下是否存在 `CSSDKDependencies.xml`依赖配置文件

2）下载依赖文件
右键Assets目录，选择External Dependency Manager - Android Resolver - Force Resolve, 下载依赖的jar包

# 4.修改manifest中theme的值
找到unity应用程序中的manifest文件，拷贝到项目的plugin中与mainTemplate.gradle同级，修改`application`域theme中值为

```groovy
android:theme="@style/CssAppTheme"
```

示例(适用于2017.4.x):

```html
< manifest
    xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.unity3d.player"
    xmlns:tools="http://schemas.android.com/tools"
    android:installLocation="preferExternal">
    < supports-screens
        android:smallScreens="true"
        android:normalScreens="true"
        android:largeScreens="true"
        android:xlargeScreens="true"
        android:anyDensity="true"/>
    < application
        android:theme="@style/CssAppTheme"
        android:icon="@drawable/app_icon"
        android:label="@string/app_name">
        < activity android:name="com.unity3d.player.UnityPlayerActivity"
                  android:label="@string/app_name">
            < intent-filter>
                < action android:name="android.intent.action.MAIN" />
                < category android:name="android.intent.category.LAUNCHER" />
            < /intent-filter>
            < meta-data android:name="unityplayer.UnityActivity" android:value="true" />
        < /activity>
    < /application>
< /manifest>
```

# 5. 混淆配置

&ensp;&ensp;&ensp;如项目开启混淆功能，请将下面的内容追加到当前项目使用的混淆配置文件中，避免程序出现崩溃异常（因混淆导致包名引用错误）。

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

# 6. Demo

有关CSSDK 的接入及使用，可查看 [Demo工程](https://github.com/Avid-ly/CSSDK-Unity-Demo)。
