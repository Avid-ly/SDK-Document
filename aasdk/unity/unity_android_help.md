
# 1. 前提条件
- Android 平台
- 已经接入统计包
- 已添加 AASDK Unity Plugin [最新版](https://github.com/Avid-ly/AASDK-UnityPackage.git)
- Unity 2017.4.x
- 不支持androidx

# 2. 目录结构
成功导入 Unity 插件 Android 版本后，检查 `Assets` 目录项下是否存在 `SDKPACKAGE` 。


# 3. 下载依赖


&ensp;&ensp;1）检查导入的unityPackage
- Assets/目录下是否存在`ExternalDependencyManager` 文件夹
- Assets/目录下是否存在 `AASDKDependencies.xml`依赖配置文件

&ensp;&ensp;2）下载依赖文件
右键Assets目录，选择External Dependency Manager - Android Resolver - Force Resolve, 下载依赖的jar包

# 4. 配置社交平台参数
## 4.1 AndroidManifest.xml 必要设置

1)检查Assets/Plugins/Android/目录下是否存在AndroidManifest.xml文件；
- 如不存在，请从unity安装目录中搜索AndroidManifest.xml文件并拷贝到Assets/Plugins/Android/中。

## 4.2 在`AndroidManifest`中添加 Faceboock 登录参数:
请将 [**your_facebook_app_id** ]和 [**your_fb_login_protocol_scheme**] 替换为您Facebook后台的参数，如fb342166547143334
```
 <meta-data
    android:name="com.facebook.sdk.ApplicationId"
    android:value="fbyour_facebook_app_id" /> 
 <activity
    android:name="com.facebook.FacebookActivity"
    android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
    android:label="your_app_name" />
 <activity
    android:name="com.facebook.CustomTabActivity"
    android:exported="true">
      <intent-filter>
           <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="fbyour_fb_login_protocol_scheme" /> - 
       </intent-filter>
  </activity>
```


> 详情请参考 [Facebook 登录配置](https://developers.facebook.com/docs/facebook-login/android/ "facebook docs")。

## 4.3 在`AndroidManifest`中添加 Google 登录参数:

```
<meta-data
    android:name="com.google.login.googleplay_clientid"
    android:value="your_client_id" />         
```

> 登录 GooglePlay 时需参数 `client_id`。

# 5. 修改 Proguard

&ensp;&ensp;&ensp;如项目开启混淆功能，请将 `proguard-project.txt` 文件的内容追加至当前项目使用的混淆配置文件中，避免程序出现崩溃异常（因混淆导致包名引用错误）。

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

-keep class com.aas.sdk.account.** { *; }

```
---
# 6. Demo
&ensp;&ensp;&ensp;有关AASDK的接入及使用，可查看 [Demo工程](https://github.com/Avid-ly/AASdk-Unity-Android-Demo)。

---
# 7. 常见问题
## 7.1 方法数超过 64K 
如因接入 AASDK 导致方法数超过 65535，无法正常打包，请采用以下建议，直至问题解决。
### 7.1.1 追加multidex支持
在 `launcherTemplate.gradle` 中追加下述内容
```
dependencies {
   	...
   	//multidex
   	 implementation 'com.android.support:multidex:1.0.1'
    }
	
android {
    defaultConfig {
	    ...
        multiDexEnabled true
		...
    }
  }
```
### 7.1.2 使用multidex application
在 `AndroidManifest.xml` 中追加下述内容

```
<application android:name="android.support.multidex.MultiDexApplication"></application>
```

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，SDK初始化了
