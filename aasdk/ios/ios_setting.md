为了使 SDK 集成到您的应用程序之后能够正常使用，必须执行几个快速步骤：

# 1 配置应用传输安全 (ATS)

随着 iOS 9 的发布，Apple 引入了 ATS，它要求应用程序通过 SSL 建立安全的网络连接，并通过其对 SSL 版本、加密密码和密钥长度的要求强制执行 HTTPS 连接。目前，强烈建议在您的应用程序中禁用 ATS。请注意，虽然 AASDK 完全支持 HTTPS，但我们的一些第三方SDK可能不支持。因此启用 ATS 可能会导致一些问题。

为了防止您的广告（和您的收入）受到 ATS 的影响，请通过将以下内容添加到您的 info.plist 来禁用它：

```
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
</dict>
```

<br>

# 2 配置隐私控制（可选）

在 iOS 10 中，Apple 通过限制对相机、照片库等功能的访问来扩展其隐私控制的范围。为了在利用这些服务的 SDK 中解锁丰富的沉浸式体验，请添加以下条目到您的应用程序列表：

```
<key>NSPhotoLibraryUsageDescription</key>
<string>Some ad content may require access to the photo library.</string>
<key>NSCameraUsageDescription</key>
<string>Some ad content may access camera to take picture.</string>
<key>NSMotionUsageDescription</key>
<string>Some ad content may require access to accelerometer for interactive ad experience.</string>
```

<br>


# 3 启用Facebook广告追踪功能

从 iOS 14 开始，您将需要设置 setAdvertiserTrackingEnabled 标记。通过此设置，您可根据自身需履行法定义务、平台条款和您对用户的承诺。[Facebook参考文档](https://developers.facebook.com/docs/app-events/guides/advertising-tracking-enabled/)

- AdvertiserTrackingEnabled 仅适用于 iOS 14 及以上版本。对于 iOS 13 或更早版本，应使用“限制广告追踪”功能。
- 将 AdvertiserTrackingEnabled 标记设置为 true 或 false。在 Apple 强制执行提示的 iOS 版本中，如果您没有设置 ATE 标记，则此标记默认为 false。
- true 或 false 设置将保持为您选定的值，直到您手动对其进行更改为止。但是，如果用户卸载并重新安装您的应用，则您必须再次设置此标记。


## 3.1 设置“启用广告追踪”标记


调用 FBSDKSettings 类的 setAdvertiserTrackingEnabled 方法，并将其设为 YES（针对 Objective-C）或 true（针对 Swift）。相反，若使用 Objective-C，则将 setAdvertiserTrackingEnabled 设为 NO；若使用 Swift，则设为 false。


以下是示例代码

```
// 在需要使用的地方引入以下头文件
#import <FBSDKCoreKit/FBSDKCoreKit.h>
#import <AppTrackingTransparency/AppTrackingTransparency.h>

// 当您获知<设备是否开启追踪>时，请调用以下方法
if (@available(iOS 14, *)) {
	ATTrackingManagerAuthorizationStatus trackingAuthorizationStatus = [ATTrackingManager trackingAuthorizationStatus];
	BOOL enabled = (trackingAuthorizationStatus==ATTrackingManagerAuthorizationStatusAuthorized)?YES:NO;
	[FBSDKSettings setAdvertiserTrackingEnabled:enabled];
}
```


<br>


# 4 Facebook配置

在info.plist中添加以下节点，以使用 Facebook 的登录和对话框

> 需在 Facebook 后台注册应用信息后复制粘贴，以下参数仅供参考。

```json
<key>CFBundleURLTypes</key>
<array>
  <dict>
  <key>CFBundleURLSchemes</key>
  <array>
    <string>fbAPP-ID</string>
  </array>
  </dict>
</array>
<key>FacebookAppID</key>
<string>APP-ID</string>
<key>FacebookClientToken</key>
<string>CLIENT-TOKEN</string>
<key>FacebookDisplayName</key>
<string>APP-NAME</string>
```

其中：
- 在 [CFBundleURLSchemes] 键内的 <array><string> 中，将 APP-ID 替换为应用编号
- 在 FacebookAppID 键内的 <string> 中，将 APP-ID 替换为应用编号。
- 在 FacebookClientToken 键内的 <string> 中，前往Facebook 设置 > 高级 > 客户端口令，将 CLIENT-TOKEN 替换为相应的客户端口令。
- 在 FacebookDisplayName 键内的 <string> 中，将 APP-NAME 替换为应用名称。

使用 FB 登录对话框，需要在info.plist中添加以下节点：

```
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>fbapi</string>
  <string>fbapi20130214</string>
  <string>fbapi20130410</string>
  <string>fbapi20130702</string>
  <string>fbapi20131010</string>
  <string>fbapi20131219</string>
  <string>fbapi20140410</string>
  <string>fbapi20140116</string>
  <string>fbapi20150313</string>
  <string>fbapi20150629</string>
  <string>fbapi20160328</string>
  <string>fbauth</string>
  <string>fb-messenger-share-api</string>
  <string>fbauth2</string>
  <string>fbshareextension</string>
</array>
```

!> 请检查是否正确添加以上节点，如未正确添加，可能照成facebook登录无法正常使用

<br>

# 5 多语言设置

SDK支持多种语言本地化，如需使用，请添加对应的支持

在 Xcode 的`PROJECT > Info > Localizations`中，点击"+"添加语言。

> 目前支持：
>
> `简体中文（zh）`
>
> `英文（en）`
>
> `繁体中文（zh_Hant）`
>
> `繁体中文-中国台湾（zh_Hant_TW）`
>
> `繁体中文-中国香港(zh_Hant_HK)`
>
> `德语(de)`
>
> `泰语(th)`

添加完成之后，SDK会自动读取对应的语言包进行本地化。

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，SDK[初始化](/aasdk/ios/ios_init)了