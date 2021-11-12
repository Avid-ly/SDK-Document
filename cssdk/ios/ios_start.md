# 1. 导入 SDK 包

> 仅以 Xcode 工程作示例讲解。<br>
>
> **前提条件：在接入客服 SDK 之前，导入 [统计 SDK](/tasdk/) 和[登录 SDK](/aasdk/)**，统计SDK和登录SDK**至少接入一个**，否则客服SDK无法运行。</br>

1）从 [Github](https://github.com/Avid-ly/Avidly-CService-iOS-Demo/releases) 获取 SDK 包

**CServiceSDK**目录包含如下文件：

- CService.framework
- CService.bundle


2）添加 CServiceSDK

请同时将`CService.framework`与`CService.bundle`两个文件添加至`Xcode`工程目录下<br>;（需勾选 Xcode 弹框中的 “**Copy items if needed**” 和 “**Create groups**”）。如下图所示：</br>

![](http://doc.gamehaus.com/uploads/202001/5e0dc28648883_5e0dc286.png)

3）添加第三方依赖库

在`TARGETS` > `General` > `Link Binary With Libraries`中添加依赖库:

- SystemConfiguration.framework
- Photos.framework

<br>

# 2. 工程配置
1）添加分类编译符

在`TARGETS` > `Build Setting` > `Linking` > `Other Linker Flags`中添加`-ObjC`。

2）在`info.plist`中添加以下节点，以兼容 http 模式。

```xml
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
	<true/>
</dict>
```

3）在`info.plist`中添加以下节点，以访问系统相册。

```xml
<key>NSCameraUsageDescription</key>
<string>是否允许此 App 使用您的相机</string>
<key>NSContactsUsageDescription</key>
<string>是否允许此 App 访问您的通讯录？</string>
<key>NSMicrophoneUsageDescription</key>
<string>是否允许此 App 使用您的麦克风</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>系统使用您的相机权限</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>系统使用您的相机权限</string>
```

4）在`Xcode`的`PROJECT` > `Info` > `Localizations`中，点击“+”添加语言。

> 目前支持三种语言：简体中文、繁体中文和英文

# 3. Demo 工程
为更好的了解 ASSDK 的接入和使用，请参考 [Demo](https://github.com/Avid-ly/Avidly-CService-iOS-Demo "Demo")工程。