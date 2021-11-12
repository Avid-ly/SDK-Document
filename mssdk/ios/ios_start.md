> [!note]
iOS Xcode建议使用CocoaPods进行接入


#  1、安装CocoaPods

本文档默认开发者已安装CocoaPods，如需了解安装CocoaPods，请访问[此处](https://cocoapods.org/)

<br>

# 2、创建Podfile文件

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令，创建Podfile文件

```
touch Podfile
```

<br>

# 3、编写Podfile文件内容

建议使用以下示例

```

platform :ios, '10.0'

target 'YourProjectName' do

source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/Avid-ly/Avidly-iOS-MSSDK-CocoaPods-Spec.git'

# MSSDK
# pod repo add Avidly https://github.com/Avid-ly/Avidly-iOS-MSSDK-CocoaPods-Spec.git
# pod repo update Avidly
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

<br>

# 4、添加MSSDK的CocoaPods私有库

如您是第一次使用MSSDK，请在终端使用如下代码添加

```
pod repo add MeteorShower https://github.com/Avid-ly/Avidly-iOS-MSSDK-CocoaPods-Spec.git
```

如您是更新MSSDK，请在终端使用如下代码更新

```
pod repo update MeteorShower
```

<br>

# 5、安装MSSDK

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令

```
pod install
```

安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

# 6、设置Admob、Applovin 联盟key

在Info.plist中配置对应的key <br>
GADApplicationIdentifier<br>
AppLovinSdkKey

![](http://doc.gamehaus.com/uploads/202102/603753a83bb45_603753a8.png)

