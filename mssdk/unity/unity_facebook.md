# 启用 Audience Network 广告追踪功能

<br>

## 1、Audience Network 广告追踪功能 介绍


<br>

[Facebook参考文档](https://developers.facebook.com/docs/audience-network/setting-up/platform-setup/ios/advertising-tracking-enabled)

从 iOS 14 开始，您将需要设置 setAdvertiserTrackingEnabled 标记。通过此设置，您可根据自身需履行法定义务、平台条款和您对用户的承诺，通知 Audience Network 是否使用数据来投放个性化广告。如果标记设置为 false，我们将无法投放个性化广告。

- 不论是否使用中介，您都需要实现 setAdvertiserTrackingEnabled 标记。
- 如果您正在集成 Facebook SDK 和 Audience Network SDK，则您还必须为 Facebook SDK 设置 setAdvertiserTrackingEnabled 标志。有关详细信息，请参阅启用广告主追踪功能。

<br>

## 2、如何使用此标记

<br>

- AdvertiserTrackingEnabled 仅适用于 iOS 14 及以上版本。对于 iOS 13 或更早版本，应使用“限制广告追踪”功能。
- 将 AdvertiserTrackingEnabled 标记设置为 true 或 false。在 Apple 强制执行提示的 iOS 版本中，如果您没有设置 ATE 标记，则此标记默认为 false。
- 此标记会自动合并到每个广告请求或竞价口令中。您无需额外调用 initilize() 方法。
- true 或 false 设置将保持为您选定的值，直到您手动对其进行更改为止。但是，如果用户卸载并重新安装您的应用，则您必须再次设置此标记。

<br>

## 3、设置“启用广告追踪”标记

<br>

调用 FBAdSettings 类的 setAdvertiserTrackingEnabled 方法，并将其设为 YES（针对 Objective-C）或 true（针对 Swift）。相反，若使用 Objective-C，则将 setAdvertiserTrackingEnabled 设为 NO；若使用 Swift，则设为 false。

如在使用中介，则需在初始化中介 SDK 之前实现 setAdvertiserTrackingEnabled 标记，以便我们在竞价请求中接收此标记。

启用测试模式时，此标记同样适用

## 4、最佳实现

```
// 在需要使用的地方引入以下头文件
#import &lt;FBAudienceNetwork/FBAudienceNetwork.h>
#import &lt;AppTrackingTransparency/AppTrackingTransparency.h>

// 当您获知<设备是否开启追踪>时，请调用以下方法
if (@available(iOS 14, *)) {
	ATTrackingManagerAuthorizationStatus trackingAuthorizationStatus = [ATTrackingManager trackingAuthorizationStatus];
	BOOL enabled = (trackingAuthorizationStatus==ATTrackingManagerAuthorizationStatusAuthorized)?YES:NO;
	[FBAdSettings setAdvertiserTrackingEnabled:enabled];
}
```