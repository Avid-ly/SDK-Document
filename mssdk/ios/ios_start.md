# 1 前提条件

- 确保您安装了最新的 Xcode12 或更高版本
- 确保您的项目定位到 iOS 10.0 或更高版本
- 确保您安装了CocoaPods

# 2 安装SDK

> [!note]
iOS Xcode建议使用CocoaPods进行接入

## 2.1 安装CocoaPods

本文档默认开发者已安装CocoaPods，如需了解安装CocoaPods，请访问[此处](https://cocoapods.org/)


## 2.2 创建Podfile文件

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令，创建Podfile文件

```
touch Podfile
```

## 2.3 编写Podfile文件内容

我们为您提供了最新的Podfile，建议使用以下示例

```
platform :ios, '10.0'

target 'YourProjectName' do

source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/Avid-ly/iOS-CocoaPods-Spec.git'
source 'https://github.com/Avid-ly/Avidly-iOS-MSSDK-CocoaPods-Spec.git'

# MSSDK
pod 'MSSDK', '1.1.0.2'

# MoPub
pod 'mopub-ios-sdk/Core', '5.18.0'

# AdColony
pod 'MoPub-AdColony-Adapters', '4.6.1.1'

# AppLovin
pod 'MoPub-Applovin-Adapters', '10.3.4.0'

# Chartboost
pod 'MoPub-Chartboost-Adapters', '8.4.2.2'

# ironSource
pod 'MoPub-IronSource-Adapters', '7.1.7.0.1'

# Unity Ads
pod 'MoPub-UnityAds-Adapters', '3.7.5.1'

# Vungle
pod 'MoPub-Vungle-Adapters', '6.10.3.0'

# Facebook Audience Network
pod 'MoPub-FacebookAudienceNetwork-Adapters', '6.5.1.1'

# Google (AdMob & Ad Manager)
pod 'MoPub-AdMob-Adapters', '8.8.0.0'

# Pangle
pod 'MoPub-Pangle-Adapters', '3.8.1.0.0'

# Fyber
pod 'MoPub-Fyber-Adapters', '7.8.7.0'

# InMobi
pod 'MoPub-InMobiMonetization-Adapters', '9.2.0.1'

# Mintegral
pod 'MoPub-Mintegral-Adapters', '6.9.5.1.1'

end
```

其中`YourProjectName`替换为您Xcode项目的名字


## 2.4 下载安装MSSDK

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令

```
pod install
```

> [!note]
> 1 请注意查看安装完成之后Cocoapods是否有提示警告，如有请按照提示进行工程修改
> 
> 2 安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

此刻您已经完成了SDK的安装。请尝试编译，如果编译通过请进行下一步[项目设置](/mssdk/ios/ios_setting.md)。如果您编译不通过，请参考以下常见编译问题解决

<br>

# 2 常见编译问题

请根据编译报错的关键字来检索并处理问题

- 遇到`bitcode bundle could not be generated because`
- 遇到`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`
- 遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"`
- 遇到`"std::xxx"、"_cxa_throw"`

> 遇到`bitcode bundle could not be generated because`

当编译或打包遇到如下错误的时候

`
bitcode bundle could not be generated because 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit(Permission.o)' was built without full bitcode. All object files and libraries for bitcode must be generated from Xcode Archive or Install build file 'xxx/FBSDKCoreKit.framework/FBSDKCoreKit' for architecture armv7
`

说明接入了Facebook高版本，同时开启了Bitcode

解决方案：

`TARGETS` --> `ProductName` --> `Build Settings` --> `Enable Bitcode` 置为`NO`


> 遇到`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`

当编译或打包遇到如下错误的时候

`Undefined symbol:__swift_FORCE_LOAD_$_swiftCompatibilityDynamicReplacements`
`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`

说明接入了Facebook高版本，但没有添加Swift依赖

解决方案：

创建桥接文件

- 选中工程,点击`New File` ->`iOS`-> `Swift File`;
- 点击Next,为桥接文件命名;
- 点击Create;
- 在`Build Setting` -> `SWIFT_OBJC_BRIDGING_HEADER`添加桥接文件路径，路径的格式为：`$(SRCROOT)/Bridging-Header.h`  如果你建立在工程里面的文件夹里了，需要在中间写上文件夹的名字，如：`$(SRCROOT)/文件夹名/Bridging-Header.h`
- 编译一下，路径填写不对编译会报错


> 遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"`

当编译或打包遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"` 说明缺少`Accelerate.framework`

解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`Accelerate.framework`即可

> 遇到`"std::xxx"、"_cxa_throw"`

当编译或打包遇到`"std::xxx"、"_cxa_throw"` 说明缺少`libc++.tbd`

解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`libc++.tbd`即可