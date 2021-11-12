# <span id="jump1">1. 引入AASDK</span>
针对 Android Studio 或 Gradle 构建的工程，建议以从maven仓库获取的方式导入其它主工程中。

## 1.1 前提条件
引入AASDK

```
dependencies {
    implementation 'com.aas.sdk.account:aasdk:1.1.0.7'
}
```
>**`请注意maven 的最新仓库地址是否与您使用的一致，若不一致会出现类似下面这种找不到库的报错`**</br>
`<Build: failed at`</br>
`Could not HEAD 'http://bx-mvn.dataverse cn:18081/repository/maven-releases/com/...... >`


（1）追加AASDK仓库地址
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
（2） 追加AASDK仓库地址 仅适用于 Android Studio 2020.x.x 及以上 (可选)


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
# <span id="jump2">2. 添加依赖库</span>

导入账户 SDK 主包后，需添加依赖库。因部分社交平台的 SDK 运行依赖某些公共的第三方库，可通过以下方式将所依赖的第三方库导入至项目中（针对 Android Studio）。

##  2.1 添加依赖库

运行某些社交平台时，需其它额外 Android API 支持，因此须同时添加以下外部依赖库。

### 2.1.1 加入 Android Support 支持库

> 如果您的项目已经支持Androidx，请忽略此步骤，按照2.2.3的引导进行引入

广告的正常展示需 `support` 库支持，请参考以下方式将其导入至您的项目中。

 通过以下方式添加依赖：
```
dependencies {
    implementation 'com.android.support:recyclerview-v7:26.1.0'
    implementation 'com.android.support:support-v4:26.1.0'
    implementation 'com.android.support:appcompat-v7:26.1.0'
    implementation 'com.android.support:support-annotations:26.1.0'
    implementation  'com.android.support:customtabs:26.1.0'
    implementation 'com.android.support:cardview-v7:26.1.0'
}
```
### 2.1.2 加入 AndroidX支持库(可选)

> 仅适用用已经支持androidx的项目 

广告的正常展示需 `Androidx` 库支持，请参考以下方式将其导入至您的项目中。

 通过以下方式添加依赖：
```
dependencies {
    implementation 'androidx.appcompat:appcompat:1.0.0'
    implementation 'androidx.recyclerview:recyclerview:1.0.0'
    implementation 'androidx.cardview:cardview:1.0.0'
    implementation 'androidx.browser:browser:1.0.0'
    implementation 'com.google.android.material:material:1.0.0'
}
```

## 2.2 添加社交平台支持库

### 2.2.1 添加 Facebook 登录 SDK
在项目中添加 Facebook 登录支持，导入 Facebook 登录功能。

1）添加依赖：

```
compile('com.facebook.android:facebook-login:[4,5)') {
    // values.xml 中增加 facebook_app_id，fb_login_protocol_scheme
    exclude group: 'com.android.support'//排除组织依赖
    exclude module: 'appcompat-v7'//排除模块依赖
}
```

> 如只通过本地添加 Facebook 登录所依赖的`aar`文件，也可在`gradle`文件中忽略此配置。

2）在`manifest`中添加 Faceboock 登录参数:

```
<meta-data
    android:name="com.facebook.sdk.ApplicationId"
    android:value="@string/facebook_app_id" />

<activity
    android:name="com.facebook.FacebookActivity"
    android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
    android:label="@string/app_name" />

<activity
    android:name="com.facebook.CustomTabActivity"
    android:exported="true">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />

        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />

        <data android:scheme="@string/fb_login_protocol_scheme" />
    </intent-filter>
</activity>
```
        
> 授权登录 Faceboock 时需使用参数<code>facebook_app_id</code> 和 <code>fb_login_protocol_scheme</code>。
> 
> 详情请参考 [Facebook 登录配置](https://developers.facebook.com/docs/facebook-login/android/ "facebook docs")。

### 2.2.2 添加 GooglePlay 登录 SDK
> 在项目中添加 GooglePlay 登录支持，导入 GooglePlay 登录功能。非必需

1）添加依赖：

```java
implementation 'com.google.android.gms:play-services-auth:16.0.1'
```

2）添加 GooglePlay 登录参数：

**方法一：** 添加`client_id`至 string 资源文件中，参考如下：

```java
productFlavors {
    demo {
        resValue "string", "googleplay_clientid", "your_client_id"
    }
}
```
**方法二：** 在`values`文件夹 > `strings.xml`文件中新增`string`：

    <string name="googleplay_clientid">your client id</string>


> 登录 GooglePlay 时需参数 `client_id`。

# <span id="jump3">3. Demo 工程</span>
为更好的了解 ASSDK 的导入和使用，请参考 [Demo工程](https://github.com/Avid-ly/Avidly-Android-AccountSdk-Demo "Demo工程")。