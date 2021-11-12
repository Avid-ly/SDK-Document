
# Unity接入步骤

iOS Unity接入分为两步
- 1、Unity工程导入Unity Plugin[下载](https://github.com/Avid-ly/Avidly-iOS-MSSDK-UnityPackage.git)，然后导入到Unity工程中，并编写广告逻辑， 第一步请参考 `初始化` `激励视频` `插屏广告` `横幅广告` `GDPR调用` 等[文档](http://doc.gamehaus.com/docs/show/397)
- 2、Unity工程导出Xcode工程 


第二步请参考下面的步骤

<br>

# 安装MSSDK

##  一、安装CocoaPods

本文档默认开发者已安装CocoaPods，如需了解安装CocoaPods，请访问[此处](https://cocoapods.org/)

<br>

## 二、导出xcode工程
unityPackage中包含EDM4U插件及对应的cocoaPods依赖文件 MSSDKDependencies.xml,导出xcode工程后插件将自动下载第三方广告sdk
安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

<br>


## 三、设置Admob、Applovin 联盟key

导出xcode工程后，在Info.plist中配置对应的key <br>
Admob广告key：GADApplicationIdentifier<br>
Applovin广告key: AppLovinSdkKey

![](http://doc.gamehaus.com/uploads/202102/603753a83bb45_603753a8.png)







