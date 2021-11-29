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

添加完成之后，SDK会自动读取对应的语言包进行本地化。

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，SDK[初始化](/cssdk/ios/ios_init)了


