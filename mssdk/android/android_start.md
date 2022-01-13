
# 1 前提条件

- 确保您安装了Android Studio 3.2 或更高版本
- 确保您使用真实的Android设备，而不是模拟器进行开发和测试
- 确保您能访问诸如Facebook，Google等网址


#  2 安装SDK
## 2.1 导入MSSDK主包

将MSSDK添加到build.gradle文件中

```groovy
    dependencies {
     implementation 'com.ms.sdk:mssdk:2.0.0.2'
    }

```


## 2.2 添加广告联盟和支持库

部分广告商的 SDK 运行依赖一些公共的第三方库，使用 Android Studio 构建的项目可以通过下述方式来将所依赖的第三方库导入你的项目。

### 2.2.1 配置仓库地址

首先在您项目的project级的 `build.gradle` 文件中追加仓库地址
```groovy
allprojects {
    repositories {
        google()
        jcenter()
        mavenCentral()
    }
}

```


然后在您项目的module级的 `build.gradle` 文件中追加仓库地址
```groovy
android {
    defaultConfig {
        //...
    }
repositories {
    google()
    mavenCentral()
    maven {
        url 'https://android-sdk.is.com/'
    }
    maven { url "https://mvn-bx.dataverse.cn/repository/maven-releases/"}
}

```


### 2.2.2 引入广告联盟
请在您的项目module级中的`build.gradle` 文件中按以下的方式添加依赖
 ```groovy   
  dependencies {
    implementation 'com.google.android.gms:play-services-ads:20.5.0'
    implementation 'com.google.ads.mediation:adcolony:4.6.5.0'
    implementation 'com.google.ads.mediation:applovin:10.3.5.0'
    implementation 'com.google.ads.mediation:chartboost:8.2.1.0'
    implementation 'com.google.ads.mediation:facebook:6.8.0.0'
    implementation 'com.google.ads.mediation:fyber:8.1.0.0'
    implementation 'com.google.ads.mediation:inmobi:10.0.1.0'
    implementation 'com.google.ads.mediation:ironsource:7.1.12.1.0'
    implementation 'com.unity3d.ads:unity-ads:3.7.5'
    implementation 'com.google.ads.mediation:unity:3.7.5.0'
    implementation 'com.google.ads.mediation:vungle:6.10.2.0'
    implementation ('com.google.android.ads:mediation-test-suite:2.0.0')
}
```

# 3 配置必要的广告联盟参数
请在项目的manifest中追加对admob和applovin广告联盟的参数支持。
**【注意】value中的值仅用于测试，请联系相关人员获得正确的参数值**

    <application
       ...
               <!-- Google Play Services -->
      <meta-data
                android:name="com.google.android.gms.ads.APPLICATION_ID"
                android:value="ca-app-pub-1865559073577505~6259592683" />
                <!-- applovin -->
      <meta-data
                android:name="applovin.sdk.key"
                android:value="BLZ3nWD4mwe_7TFhC7kqaUqZMz32l9nxVL-GtCKc6-cEWsxizeXT8L7UJAX2KJ-qey4W9P7FNkUvaPcT295AUD" />
    </application>



# 4 修改 Proguard
如果你的项目使用了 `proguard`，你需要将 `proguard-project.txt` 文件中的内容复制粘贴到你项目使用的 `proguard` 配置文件中。
```groovy
# 不做预校验，preverify是proguard的四个步骤之一，Android不需要preverify，去掉这一步能够加快混淆速度。
-dontpreverify
-ignorewarnings
-keep class com.ms.sdk.* {*;}
-keep class com.openup.sdk.* {*;}
-keep interface com.ms.sdk.* {*;}
-keep interface com.openup.sdk.* {*;}
-keep interface com.ms.sdk.* {*;}
-keep class com.ms.sdk.BuildConfig.* {*;}
-keep class com.sm.avid.decode.** {*;}
-keep interface com.sm.avid.decode.** {*;}

-keep class com.statistics.channel.** {*;}
-keep class com.aly.analysis.sdk.api.* {*;}
-keep class com.aly.sdk.* {*;}
-keep class com.aly.analysis.analysiscore.* {*;}

-keep class com.openup.sdk.utils.** {*;}
-keep interface com.openup.sdk.utils.** {*;}

-keepclasseswithmembernames class * {
    native <methods>;
}

-keep class com.ms.sdk.unity.MsPolyProxy {*;}
-keep class com.ms.sdk.unity.MsBaseProxy {*;}
-keep class com.ms.sdk.cocoslua.* {*;}
-keep class com.ms.sdk.cocosjs.* {*;}
-keep class com.ms.sdk.cocoscpp.* {*;}
-keep class com.ms.sdk.layajs.** {*;}

-dontwarn com.openup.**
-dontwarn com.ms.**
-keep class com.statistics.channel.* {*;}


#androidx start
-dontwarn androidx.**
-keep class androidx.** { *; }
-keep interface androidx.** { *; }
#androidx end

#mopub start
# MoPub Proguard Config
# NOTE: You should also include the Android Proguard config found with the build tools:
# $ANDROID_HOME/tools/proguard/proguard-android.txt

# Keep public classes and methods.
-keepclassmembers class com.mopub.** { public *; }
-keep public class com.mopub.**
-keep public class android.webkit.JavascriptInterface {}

# Explicitly keep any custom event classes in any package.
-keep class * extends com.mopub.mobileads.CustomEventBanner {}
-keep class * extends com.mopub.mobileads.CustomEventInterstitial {}
-keep class * extends com.mopub.mobileads.CustomEventRewardedAd {}
-keep class * extends com.mopub.nativeads.CustomEventNative {}


# Explicitly keep any BaseAd and CustomEventNative classes in any package.
-keep class * extends com.mopub.mobileads.BaseAd {}


# Keep methods that are accessed via reflection
-keepclassmembers class ** { @com.mopub.common.util.ReflectionTarget *; }

# Viewability support
-keepclassmembers class com.integralads.avid.library.mopub.** { public *; }
-keep public class com.integralads.avid.library.mopub.**
-keepclassmembers class com.moat.analytics.mobile.mpub.** { public *; }
-keep public class com.moat.analytics.mobile.mpub.**

# Support for Android Advertiser ID.
-keep class com.google.android.gms.common.GooglePlayServicesUtil {*;}
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient {*;}
-keep class com.google.android.gms.ads.identifier.AdvertisingIdClient$Info {*;}

# Support for Google Play Services
# http://developer.android.com/google/play-services/setup.html
-keep class * extends java.util.ListResourceBundle {
    protected Object[][] getContents();
}

-keep public class com.google.android.gms.common.internal.safeparcel.SafeParcelable {
    public static final *** NULL;
}

-keepnames @com.google.android.gms.common.annotation.KeepName class *
-keepclassmembernames class * {
    @com.google.android.gms.common.annotation.KeepName *;
}

-keepnames class * implements android.os.Parcelable {
    public static final ** CREATOR;
}
#mopub end


# adcolony start
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keep class com.adcolony.** { *; }
-dontwarn com.adcolony.**
-dontnote com.adcolony.**
# adclony end

#applovin start
-keepattributes Signature,InnerClasses,Exceptions,Annotation
-keep public class com.applovin.sdk.AppLovinSdk{ *; }
-keep public class com.applovin.sdk.AppLovin* { public protected *; }
-keep public class com.applovin.nativeAds.AppLovin* { public protected *; }
-keep public class com.applovin.adview.* { public protected *; }
-keep public class com.applovin.mediation.* { public protected *; }
-keep public class com.applovin.mediation.ads.* { public protected *; }
-keep public class com.applovin.impl.*.AppLovin { public protected *; }
-keep public class com.applovin.impl.**.*Impl { public protected *; }
-keepclassmembers class com.applovin.sdk.AppLovinSdkSettings { private java.util.Map localSettings; }
-keep class com.applovin.mediation.adapters.** { *; }
-keep class com.applovin.mediation.adapter.**{ *; }
#applovin end

# chartboost start
-keep class com.chartboost.** { *; }
# chartboost end

# facebook start
-dontwarn com.facebook.ads.internal.**
-keeppackagenames com.facebook.*
-keep public class com.facebook.ads.**{ public protected *; }
# facebook end

#mintegral start
-keepattributes Signature
-keepattributes *Annotation*
-keep class com.mintegral.** {*; }
-keep interface com.mintegral.** {*; }
-keep interface androidx.** { *; }
-keep class androidx.** { *; }
-keep public class * extends androidx.** { *; }
-dontwarn com.mintegral.**
-keep class **.R$* { public static final int mintegral*; }
-keep class com.alphab.** {*; }
-keep interface com.alphab.** {*; }
#mintegral end

# unity ads start
# Keep filenames and line numbers for stack traces
-keepattributes SourceFile,LineNumberTable
# Keep JavascriptInterface for WebView bridge
-keepattributes JavascriptInterface
# Sometimes keepattributes is not enough to keep annotations
-keep class android.webkit.JavascriptInterface {
   *;
}
# Keep all classes in Unity Ads package
-keep class com.unity3d.ads.** {
   *;
}
# Keep all classes in Unity Services package
-keep class com.unity3d.services.** {
   *;
}
-dontwarn com.google.ar.core.**
-dontwarn com.unity3d.services.**
-dontwarn com.ironsource.adapters.unityads.**
# unity ads end

# ironsourcr start
-keepclassmembers class com.ironsource.sdk.controller.IronSourceWebView$JSInterface {
    public *;
}
-keepclassmembers class * implements android.os.Parcelable {
    public static final android.os.Parcelable$Creator *;
}
-keep public class com.google.android.gms.ads.** {
   public *;
}
-keep class com.ironsource.adapters.** { *;
}
-dontwarn com.ironsource.mediationsdk.**
-dontwarn com.ironsource.adapters.**
-dontwarn com.moat.**
-keep class com.moat.** { public protected private *; }
#ironsource end

# vungle start
# Vungle
-keep class com.vungle.warren.** { *; }
-dontwarn com.vungle.warren.error.VungleError$ErrorCode
# Moat SDK
-keep class com.moat.** { *; }
-dontwarn com.moat.**
# Okio
-dontwarn org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement
# Retrofit
-dontwarn okio.**
-dontwarn retrofit2.Platform$Java8
# Gson
-keepattributes Signature
-keepattributes *Annotation*
-dontwarn sun.misc.**
-keep class com.google.gson.examples.android.model.** { *; }
-keep class * implements com.google.gson.TypeAdapterFactory
-keep class * implements com.google.gson.JsonSerializer
-keep class * implements com.google.gson.JsonDeserializer
# Google Android Advertising ID
-keep class com.google.android.gms.internal.** { *; }
-dontwarn com.google.android.gms.ads.identifier.**
# vungle end

# pangle start
-keep class com.bytedance.sdk.** { *; }
-keep class com.pgl.sys.ces.* {*;}
#pangle end
```

# 5 Demo工程
为帮助您更好的了解MSSDK的接入以及使用，我们在这里提供了一个简单的[Demo工程](https://github.com/Avid-ly/Avidly-Android-MSSDK-AndroidStudio)。

# 6  常见编译问题
### 6.1 Could not HEAD...
Q:`<Build: failed at`</br>
`Could not HEAD 'http://bx-mvn.dataverse cn:18081/repository/maven-releases/com/...... >`

A:此错误表示您没有获取到本SDK的仓库地址，请将本文档中的maven仓库地址引入到您的项目中
