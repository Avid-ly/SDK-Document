
# 1 前提条件

- 确保您安装了最新的 Xcode12 或更高版本
- 确保您的项目定位到 iOS 10.0 或更高版本
- 确保您安装了CocoaPods
- 确保您满足以下条件

	|兼容项|兼容说明|
	|:----  |-----   |
	|语言兼容性 | &bull;&ensp;objective-c 正常使用。<br>&bull;&ensp;swift 需创建桥接。</br>   |
	|bitcode 兼容 | 支持 bitcode.  |
	|设备兼容性 | &bull;&ensp;模拟器。<br>&bull;&ensp;iPhone6 及以上机型。</br>  |
	|CPU 兼容性 |  &bull;&ensp;i386<br>&bull;&ensp;armv7</br>&bull;&ensp;x86_64<br>&bull;&ensp;arm64</br>  |
	|iOS 版本兼容性 | iOS 10.0 以上  |

# 2 安装SDK

> [!note]
iOS Xcode建议使用CocoaPods进行接入

提供Cocoapods导入和手动导入，推荐使用Cocoapods方法导入SDK

## 2.1 使用Cocoapods引入(推荐)

### 2.1.1 安装CocoaPods

本文档默认开发者已安装CocoaPods，如需了解安装CocoaPods，请访问[此处](https://cocoapods.org/)


### 2.1.2 创建Podfile文件

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令，创建Podfile文件

```
touch Podfile
```

### 2.1.3 编写Podfile文件内容

我们为您提供了最新的Podfile，建议使用以下示例

```
source 'https://github.com/CocoaPods/Specs.git'
source 'https://github.com/Avid-ly/iOS-CocoaPods-Spec.git'

platform :ios, '10.0'

target 'TASDKDemo' do

# TASDK
pod 'TASDK', '4.1.0.6'

end
```

其中`TASDKDemo`替换为您Xcode项目的名字

### 2.1.4 下载安装SDK

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令

```
pod install
```

> [!note]
> 1 请注意查看安装完成之后Cocoapods是否有提示警告，如有请按照提示进行工程修改
> 
> 2 安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

此刻您已经完成了SDK的安装。请尝试编译，如果编译通过请进行下一步[项目设置](/tasdk/ios/ios_setting.md)。如果您编译不通过，请参考文档最后的常见编译问题解决

## 2.2 手动导入SDK

### 2.2.1 下载SDK

同时SDK也为您提供了手动接入的方式，方便您自行选择

从 [Github](https://github.com/Avid-ly/Avidly-iOS-TraceAnalysisSDK/releases) 上可以获取到最新的TASDK

将 `TraceAnalysisSDK.framework` 导入至工程中，并勾选如下配置

![](http://doc.gamehaus.com/uploads/201807/5b3c81f77d038_5b3c81f7.png)



### 2.2.2 添加系统framework

在工程中添加以下系统库

- libsqlite3.dylib

   如下图所示:
   
   ![](http://doc.gamehaus.com/uploads/201905/5ceb982ea61e9_5ceb982e.png)
   
此刻您已经完成了SDK的安装。请尝试编译，如果编译通过请进行下一步[项目设置](/tasdk/ios/ios_setting.md)。如果您编译不通过，请参考文档最后的常见编译问题解决



