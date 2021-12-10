
# Unity接入步骤

iOS Unity接入分为两步
- 1、Unity工程导入Unity Plugin[下载](https://github.com/Avid-ly/Avidly-iOS-MSSDK-UnityPackage.git)，然后导入到Unity工程中，并编写广告逻辑， 第一步请参考 `初始化` `激励视频` `插屏广告` `横幅广告` `GDPR调用` 等[文档](http://doc.gamehaus.com/docs/show/397)
- 2、Unity工程导出Xcode工程 


第二步请参考下面的步骤

<br>

# 1. 安装MSSDK

## 1.1安装CocoaPods

本文档默认开发者已安装CocoaPods，如需了解安装CocoaPods，请访问[此处](https://cocoapods.org/)

<br>

## 1.2 导出xcode工程
unityPackage中包含EDM4U插件及对应的cocoaPods依赖文件 MSSDKDependencies.xml,导出xcode工程后插件将自动下载第三方广告sdk
安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

<br>


# 2.设置Admob、Applovin 联盟key

导出xcode工程后，在Info.plist中配置对应的key <br>
Admob广告key：GADApplicationIdentifier<br>
Applovin广告key: AppLovinSdkKey

![](http://doc.gamehaus.com/uploads/202102/603753a83bb45_603753a8.png)



# <span id="mssdk_unity_fb"> 3. 启用Facebook广告追踪功能</span>

从 iOS 14 开始，您将需要设置 setAdvertiserTrackingEnabled 标记。通过此设置，您可根据自身需履行法定义务、平台条款和您对用户的承诺，通知 Audience Network 是否使用数据来投放个性化广告。如果标记设置为 false，我们将无法投放个性化广告。[Facebook参考文档](https://developers.facebook.com/docs/audience-network/setting-up/platform-setup/ios/advertising-tracking-enabled)

- 不论是否使用中介，您都需要实现 setAdvertiserTrackingEnabled 标记。
- 如果您正在集成 Facebook SDK 和 Audience Network SDK，则您还必须为 Facebook SDK 设置 setAdvertiserTrackingEnabled 标志。有关详细信息，请参阅启用广告主追踪功能。
- AdvertiserTrackingEnabled 仅适用于 iOS 14 及以上版本。对于 iOS 13 或更早版本，应使用“限制广告追踪”功能。
- 将 AdvertiserTrackingEnabled 标记设置为 true 或 false。在 Apple 强制执行提示的 iOS 版本中，如果您没有设置 ATE 标记，则此标记默认为 false。
- 此标记会自动合并到每个广告请求或竞价口令中。您无需额外调用 initilize() 方法。
- true 或 false 设置将保持为您选定的值，直到您手动对其进行更改为止。但是，如果用户卸载并重新安装您的应用，则您必须再次设置此标记。


## 3.1 设置“启用广告追踪”标记


调用 FBAdSettings 类的 setAdvertiserTrackingEnabled 方法，并将其设为 YES（针对 Objective-C）或 true（针对 Swift）。相反，若使用 Objective-C，则将 setAdvertiserTrackingEnabled 设为 NO；若使用 Swift，则设为 false。

如在使用中介，则需在初始化中介 SDK 之前实现 setAdvertiserTrackingEnabled 标记，以便我们在竞价请求中接收此标记。


以下是示例代码
>必须在Apple ATT 请求授权结果的回调中设置FB广告追踪标记
```
// 在需要使用的地方引入以下头文件
#import <FBAudienceNetwork/FBAudienceNetwork.h>
#import <AppTrackingTransparency/AppTrackingTransparency.h>

// 当您获知<设备是否开启追踪>时，请调用以下方法
if (@available(iOS 14, *)) {
	ATTrackingManagerAuthorizationStatus trackingAuthorizationStatus = [ATTrackingManager trackingAuthorizationStatus];
	BOOL enabled = (trackingAuthorizationStatus==ATTrackingManagerAuthorizationStatusAuthorized)?YES:NO;
	[FBAdSettings setAdvertiserTrackingEnabled:enabled];
}
```

<br>

恭喜您，到此已经完成了所有的项目设置，接下来您可以下一个步骤，SDK[初始化](/mssdk/unity/unity_init)了

## <span id="unity-ios-faq1"> 4.常见编译问题</span>

## 4.1  Facebook高版本不支持Bitcode

当编译或打包遇到如下错误的时候

`
bitcode bundle could not be generated because 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit(Permission.o)' was built without full bitcode. All object files and libraries for bitcode must be generated from Xcode Archive or Install build file 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit' for architecture armv7
`

说明接入了Facebook高版本，同时开启了Bitcode

### 解决方案：

`TARGETS` --> `ProductName` --> `Build Settings` --> `Enable Bitcode` 置为`NO`

<br>

## 4.2 Facebook高版本依赖Swift

当编译或打包遇到如下错误的时候

`Undefined symbol:__swift_FORCE_LOAD_$_swiftCompatibilityDynamicReplacements`
`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`

说明接入了Facebook高版本，但没有添加Swift依赖

### 解决方案：

创建桥接文件

- 选中工程,点击`New File` ->`iOS`-> `Swift File`;
- 点击Next,为桥接文件命名;
- 点击Create;
- 在`Build Setting` -> `SWIFT_OBJC_BRIDGING_HEADER`添加桥接文件路径，路径的格式为：`$(SRCROOT)/Bridging-Header.h`  如果你建立在工程里面的文件夹里了，需要在中间写上文件夹的名字，如：`$(SRCROOT)/文件夹名/Bridging-Header.h`
- 编译一下，路径填写不对编译会报错

<br>

## 4.3 缺少Accelerate.framework

当编译或打包遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"` 说明缺少`Accelerate.framework`

### 解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`Accelerate.framework`即可

<br>

## 4.4 缺少libc++.tbd

当编译或打包遇到`"std::xxx"、"_cxa_throw"` 说明缺少`libc++.tbd`

### 解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`libc++.tbd`即可

<br>



