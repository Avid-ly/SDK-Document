# 1 前提条件

- 确保您安装了最新的 Xcode12 或更高版本
- 确保您的项目定位到 iOS 10.0 或更高版本
- 确保您安装了CocoaPods

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

target 'PSSDKDemo' do

# PSSDK
pod 'PSSDK', '2.0.0.1'

end

```

其中`PSSDKDemo`替换为您Xcode项目的名字

!> 文档中版本号可能更新不及时，请您接入是确保是最新版本

### 2.1.4 下载安装SDK

在项目`.xcodeproj`文件的同级目录中，在终端使用如下命令

```
pod install
```

> [!note]
> 1 请注意查看安装完成之后Cocoapods是否有提示警告，如有请按照提示进行工程修改
> 
> 2 安装完成之后，应使用`.xcworkspace`打开项目，而不是`.xcodeproj`

此刻您已经完成了SDK的安装。请尝试编译，如果编译通过请进行下一步[项目设置](/pssdk/ios/ios_setting.md)。如果您编译不通过，请参考文档最后的常见编译问题解决

## 2.2 手动导入SDK

同时SDK也为您提供了手动接入的方式，方便您自行选择

从 [Github](https://github.com/Avid-ly/iOS-PSSDK-Demo/releases) 获取PSSDK


请将`PSSDK.framework`和`PSSDK.bundle`文件同时添加至 Xcode 工程目录下。

此刻您已经完成了SDK的安装。请尝试编译，如果编译通过请进行下一步[项目设置](/aasdk/ios/ios_setting.md)。如果您编译不通过，请参考文档最后的常见编译问题解决

</br>


# 3 Demo 工程
为更好的了解 PSSDK 的导入和使用，我们为您提供了详细的Demo，有任何问题您可以请参考 [Demo工程](https://github.com/Avid-ly/iOS-PSSDK-Demo "Demo工程")。

# 4 常见问题

请根据编译报错的关键字来检索并处理问题

- 遇到`bitcode bundle could not be generated because`
- 遇到`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`
- 遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"`
- 遇到`"std::xxx"、"_cxa_throw"`

> <span id="start_faq1">1 遇到`bitcode bundle could not be generated because`</span>

当编译或打包遇到如下错误的时候

`
bitcode bundle could not be generated because 'xxx/xxx.framework/xxx' was built without full bitcode. All object files and libraries for bitcode must be generated from Xcode Archive or Install build file 'xxx/xxx.framework/xxx' for architecture armv7
`

说明您项目里存在不支持Bitcode的SDK，同时开启了Bitcode

解决方案，关闭Bitcode即可：

`TARGETS` --> `ProductName` --> `Build Settings` --> `Enable Bitcode` 置为`NO`


> <span id="start_faq2">2 遇到`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`</span>

当编译或打包遇到如下错误的时候

`Undefined symbol:__swift_FORCE_LOAD_$_swiftCompatibilityDynamicReplacements`
`Undefined symbol: __swift_FORCE_LOAD_$_swiftCompatibility50`

说明您项目里存在包含Swift代码的SDK，但没有添加Swift依赖

解决方案，添加Swift依赖：

创建桥接文件

- 选中工程,点击`New File` ->`iOS`-> `Swift File`;
- 点击Next,为桥接文件命名;
- 点击Create;
- 在`Build Setting` -> `SWIFT_OBJC_BRIDGING_HEADER`添加桥接文件路径，路径的格式为：`$(SRCROOT)/Bridging-Header.h`  如果你建立在工程里面的文件夹里了，需要在中间写上文件夹的名字，如：`$(SRCROOT)/文件夹名/Bridging-Header.h`
- 编译一下，路径填写不对编译会报错


> <span id="start_faq3">3 遇到遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"`</span>

当编译或打包遇到`"_vDSP_mmul"、"_vDSP_dotpr"、"_vDSP_vclip"` 说明缺少`Accelerate.framework`

解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`Accelerate.framework`即可

> <span id="start_faq4">4 遇到`"std::xxx"、"_cxa_throw"`</span>

当编译或打包遇到`"std::xxx"、"_cxa_throw"` 说明缺少`libc++.tbd`

解决方案：

在`TAGETS` --> `ProductName` --> `Build Phases` --> `Link Binary With Libraries`中添加`libc++.tbd`即可